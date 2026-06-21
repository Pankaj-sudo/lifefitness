/* ================================================================
   ORDER CRUD — Firestore + Storage helpers
   ================================================================ */

/* Create order, upload proof, write status history. Returns { orderId, docId } */
window.createOrder = async function (orderData, proofFile) {
  /* 1 — unique order ID (collision-safe) */
  var orderId, exists = true;
  while (exists) {
    orderId = genOrderId();
    var snap = await fbDb.collection('orders')
      .where('order_id', '==', orderId).limit(1).get();
    exists = !snap.empty;
  }

  /* 2 — upload payment proof */
  var proofUrl = '';
  if (proofFile) {
    var ref      = fbStorage.ref('payment_proofs/' + orderId + '_' + proofFile.name);
    var uploaded = await ref.put(proofFile);
    proofUrl     = await uploaded.ref.getDownloadURL();
  }

  /* 3 — write order document */
  var now    = firebase.firestore.FieldValue.serverTimestamp();
  var docRef = fbDb.collection('orders').doc();
  var doc    = Object.assign({}, orderData, {
    order_id:          orderId,
    payment_proof_url: proofUrl,
    status:            'Pending',
    created_at:        now,
    updated_at:        now
  });
  await docRef.set(doc);

  /* 4 — initial status history */
  await docRef.collection('status_history').add({
    order_id:   orderId,
    status:     'Pending',
    updated_by: 'system',
    created_at: now
  });

  /* 5 — order items sub-collection */
  var batch = fbDb.batch();
  (orderData.items || []).forEach(function (item) {
    var itemRef = docRef.collection('order_items').doc();
    batch.set(itemRef, Object.assign({}, item, { order_id: orderId }));
  });
  await batch.commit();

  return { orderId: orderId, docId: docRef.id };
};

/* Update status + append history. Enforces forward-only transitions. */
window.updateOrderStatus = async function (docId, newStatus, adminEmail) {
  var docRef = fbDb.collection('orders').doc(docId);
  var snap   = await docRef.get();
  var data   = snap.data();
  var ci = STATUS_ORDER.indexOf(data.status);
  var ni = STATUS_ORDER.indexOf(newStatus);
  if (ni <= ci) throw new Error('Invalid transition: ' + data.status + ' → ' + newStatus);

  var now = firebase.firestore.FieldValue.serverTimestamp();
  await docRef.update({ status: newStatus, updated_at: now });
  await docRef.collection('status_history').add({
    order_id:   data.order_id,
    status:     newStatus,
    updated_by: adminEmail || 'system',
    created_at: now
  });
};

/* Fetch single order by order_id string (includes status history) */
window.getOrderByOrderId = async function (orderId) {
  var snap = await fbDb.collection('orders')
    .where('order_id', '==', orderId.trim().toUpperCase()).limit(1).get();
  if (snap.empty) return null;
  var doc  = snap.docs[0];
  var data = Object.assign({ _docId: doc.id }, doc.data());
  var hist = await doc.ref.collection('status_history')
    .orderBy('created_at', 'asc').get();
  data._history = hist.docs.map(function (d) { return d.data(); });
  return data;
};
