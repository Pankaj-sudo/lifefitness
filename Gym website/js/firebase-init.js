/* ================================================================
   FIREBASE INITIALIZATION — loaded after CDN compat scripts
   ================================================================ */
(function () {
  var cfg = {
    apiKey:            "AIzaSyAukmDfw9JN0YAUYNysFcuw6vLN4zhUZHM",
    authDomain:        "lifefitness-bfa5f.firebaseapp.com",
    projectId:         "lifefitness-bfa5f",
    storageBucket:     "lifefitness-bfa5f.firebasestorage.app",
    messagingSenderId: "60258315012",
    appId:             "1:60258315012:web:3c2aeee59f44d0ad1fbe51",
    measurementId:     "G-KQCYJRZJ0D"
  };

  if (!firebase.apps.length) firebase.initializeApp(cfg);

  window.fbAuth    = firebase.auth();
  window.fbDb      = firebase.firestore();
  window.fbStorage = firebase.storage();
  window.fbGoogle  = new firebase.auth.GoogleAuthProvider();

  /* ---- App constants (edit these) ---- */
  window.ADMIN_EMAIL   = 'pankaj.ydv707@gmail.com';
  window.GCASH_NAME    = 'PANKAJ YADAV';   // ← replace
  window.GCASH_NUMBER  = '09761831910';          // ← replace
  window.FREE_SHIP_MIN = 75;
  window.SHIP_FEE      = 9.99;
  window.ADMIN_VIBER   = '+639761831910';
  window.ADMIN_WHATSAPP = '639761831910';

  /* ---- Helpers ---- */
  window.genOrderId = function () {
    var c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', id = 'PT-';
    for (var i = 0; i < 6; i++) id += c[Math.floor(Math.random() * c.length)];
    return id;
  };

  window.fmtPHP = function (n) { return '₱' + Number(n).toFixed(2); };

  window.fmtTs = function (ts) {
    if (!ts) return '—';
    var d = ts.toDate ? ts.toDate() : new Date(ts);
    return d.toLocaleDateString('en-PH', {
      year: 'numeric', month: 'short', day: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });
  };

  window.STATUS_ORDER = ['Pending', 'Confirmed', 'Shipped', 'Delivered'];
})();
