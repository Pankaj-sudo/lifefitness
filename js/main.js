/* ====================================================
   APEXFIT — Main JavaScript
   ==================================================== */

/* ---------- PRODUCT DATABASE ---------- */
const PRODUCTS = [
  {
    id: 1, name: "Pro Performance Tee", category: "clothing",
    price: 34.99, originalPrice: 44.99, rating: 4.8, reviews: 234,
    badge: "SALE", badgeType: "badge-sale",
    color1: "#f0e8e2", color2: "#e0d0c4",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop&auto=format&q=80",
    sizes: ["XS","S","M","L","XL","XXL"],
    description: "Ultra-lightweight moisture-wicking performance tee engineered for high-intensity training. Anti-odor fabric with 4-way stretch for unrestricted movement.",
    features: ["Moisture-wicking", "Anti-odor", "4-way stretch", "Quick-dry"]
  },
  {
    id: 2, name: "Flex Training Shorts", category: "clothing",
    price: 44.99, originalPrice: null, rating: 4.7, reviews: 189,
    badge: "NEW", badgeType: "badge-new",
    color1: "#e8e6f2", color2: "#d4cfe8",
    image: "https://images.unsplash.com/photo-1562183241-840b8af0721e?w=600&h=600&fit=crop&auto=format&q=80",
    sizes: ["XS","S","M","L","XL","XXL"],
    description: "Premium 5-inch training shorts with built-in compression liner. Side pockets and lightweight mesh panels for maximum breathability.",
    features: ["Built-in liner", "Side pockets", "Mesh panels", "7\" inseam"]
  },
  {
    id: 3, name: "Apex Pro Hoodie", category: "clothing",
    price: 84.99, originalPrice: 99.99, rating: 4.9, reviews: 312,
    badge: "SALE", badgeType: "badge-sale",
    color1: "#e2f0e8", color2: "#c8e0d0",
    image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&h=600&fit=crop&auto=format&q=80",
    sizes: ["XS","S","M","L","XL","XXL"],
    description: "Premium heavyweight fleece hoodie with embroidered APEXFIT logo. Double-lined hood and kangaroo pocket. Perfect for pre and post-workout.",
    features: ["Heavyweight fleece", "Double-lined hood", "Kangaroo pocket", "Embroidered logo"]
  },
  {
    id: 4, name: "Compression Leggings Pro", category: "clothing",
    price: 64.99, originalPrice: null, rating: 4.8, reviews: 267,
    badge: null, badgeType: null,
    color1: "#f0e8f4", color2: "#e0d0ec",
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&h=600&fit=crop&auto=format&q=80",
    sizes: ["XS","S","M","L","XL","XXL"],
    description: "High-waist compression leggings with squat-proof fabric technology. Hidden waistband pocket for your essentials.",
    features: ["High-waist design", "Squat-proof", "Hip pocket", "Compression support"]
  },
  {
    id: 5, name: "Beast Mode Trainers", category: "footwear",
    price: 119.99, originalPrice: 149.99, rating: 4.9, reviews: 445,
    badge: "SALE", badgeType: "badge-sale",
    color1: "#e2ecf4", color2: "#c8d8e8",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop&auto=format&q=80",
    sizes: ["7","7.5","8","8.5","9","9.5","10","10.5","11","12"],
    description: "Zero-drop training shoes with responsive foam cushioning. Wide toe box for natural foot splay. Superior grip outsole for lifting and HIIT.",
    features: ["Zero-drop", "Responsive foam", "Wide toe box", "Multi-surface grip"]
  },
  {
    id: 6, name: "Swift Runner Pro", category: "footwear",
    price: 139.99, originalPrice: null, rating: 4.7, reviews: 228,
    badge: "NEW", badgeType: "badge-new",
    color1: "#ece8f4", color2: "#d8d0ec",
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&h=600&fit=crop&auto=format&q=80",
    sizes: ["7","7.5","8","8.5","9","9.5","10","10.5","11","12"],
    description: "Lightweight carbon-plate running shoe with energy-return foam technology. Designed for personal-best performance.",
    features: ["Carbon plate", "Energy-return foam", "Ultra-light upper", "Race-day ready"]
  },
  {
    id: 7, name: "Whey Protein Elite", category: "nutrition",
    price: 54.99, originalPrice: 64.99, rating: 4.9, reviews: 567,
    badge: "BEST SELLER", badgeType: "badge-bestseller",
    color1: "#e8f4e2", color2: "#cce8c4",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=600&h=600&fit=crop&auto=format&q=80",
    sizes: ["2lbs","5lbs","10lbs"],
    description: "25g of premium whey protein per serving. Cold-processed isolate with minimal fat and lactose. Available in 6 delicious flavors.",
    features: ["25g protein/serving", "Only 130 calories", "Low sugar", "Digestive enzymes"]
  },
  {
    id: 8, name: "Pre-Workout Surge", category: "nutrition",
    price: 44.99, originalPrice: null, rating: 4.8, reviews: 389,
    badge: "HOT", badgeType: "badge-hot",
    color1: "#f4ece2", color2: "#e8d8c4",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop&auto=format&q=80",
    sizes: ["30 servings","60 servings"],
    description: "High-stimulant pre-workout with 300mg caffeine, beta-alanine, and citrulline malate for explosive energy and insane pumps.",
    features: ["300mg caffeine", "Beta-alanine", "Citrulline malate", "No crash formula"]
  },
  {
    id: 9, name: "BCAA Recovery Mix", category: "nutrition",
    price: 39.99, originalPrice: 49.99, rating: 4.7, reviews: 234,
    badge: "SALE", badgeType: "badge-sale",
    color1: "#e2f4ee", color2: "#c4e8d8",
    image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=600&h=600&fit=crop&auto=format&q=80",
    sizes: ["30 servings","60 servings"],
    description: "2:1:1 ratio BCAA with electrolytes for optimal intra-workout hydration and muscle recovery. Zero calories, zero sugar.",
    features: ["2:1:1 BCAA ratio", "Electrolyte blend", "Zero calories", "Zero sugar"]
  },
  {
    id: 10, name: "Pro Gym Duffel Bag", category: "accessories",
    price: 74.99, originalPrice: null, rating: 4.8, reviews: 178,
    badge: "NEW", badgeType: "badge-new",
    color1: "#eceae5", color2: "#d8d5ce",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop&auto=format&q=80",
    sizes: ["One Size"],
    description: "40L premium gym duffel with dedicated shoe compartment, wet/dry separation pocket, and laptop sleeve. Built from water-resistant 1680D ballistic nylon.",
    features: ["40L capacity", "Shoe compartment", "Wet/dry pocket", "Water-resistant"]
  },
  {
    id: 11, name: "Power Grip Gloves", category: "accessories",
    price: 29.99, originalPrice: 39.99, rating: 4.6, reviews: 156,
    badge: "SALE", badgeType: "badge-sale",
    color1: "#f4ece2", color2: "#e8d4c4",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=600&fit=crop&auto=format&q=80",
    sizes: ["S","M","L","XL"],
    description: "Full-palm silicone grip gloves with wrist wrap support. Perforated back for breathability. Extra padding on high-friction zones.",
    features: ["Silicone grip", "Wrist wraps", "Perforated back", "Extra padding"]
  },
  {
    id: 12, name: "Apex Shaker Pro", category: "accessories",
    price: 24.99, originalPrice: null, rating: 4.7, reviews: 289,
    badge: null, badgeType: null,
    color1: "#e2eef4", color2: "#c4d8e8",
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&h=600&fit=crop&auto=format&q=80",
    sizes: ["700ml","1L"],
    description: "BPA-free 700ml shaker with stainless steel BlenderBall wire whisk. Leak-proof flip-top lid with multiple measurement markings.",
    features: ["BPA-free", "Leak-proof", "BlenderBall whisk", "Measurement markings"]
  }
];

/* ---------- SVG ICONS (inline) ---------- */
const ICONS = {
  shirt: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z"/></svg>`,
  shoe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 15c0-1.5.5-3 1.5-4.5L8 7l.5-.5A2 2 0 0 1 11 6h1l5 3 1 1h2a1 1 0 0 1 1 1v1.5c0 1.9-1.6 3.5-3.5 3.5H7a4 4 0 0 1-4-4z"/></svg>`,
  flask: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 3h6m-6 0v6l-5.5 9A2 2 0 0 0 5 21h14a2 2 0 0 0 1.5-3.27L15 9V3m-6 0v6"/></svg>`,
  bag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="20" height="15" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>`,
  cart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
  heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  heartFill: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`,
  chevron: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  truck: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="3" width="15" height="13"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  award: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`,
  zap: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/></svg>`,
  headphones: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>`,
  refresh: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.25"/></svg>`,
  muscle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 4a1 1 0 0 0-1 1v4.5a4 4 0 0 0 4 4H12v3.5a2 2 0 0 0 2 2h.5a2 2 0 0 0 2-2V14h.5a4 4 0 0 0 4-4V5a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v4.5a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5a1 1 0 0 0-1-1H6z"/></svg>`,
  leaf: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 8C8 10 5.9 16.17 3.82 19.34A1 1 0 0 0 4.75 21C9.84 19.75 18 17 20 11c0 0-3.5-4-3-3z"/><path d="M3 21l8-8"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  minus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
  twitter: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>`,
  youtube: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
  upArrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`
};

/* ---------- CART & WISHLIST STATE ---------- */
let cart     = JSON.parse(localStorage.getItem('apexfit_cart'))     || [];
let wishlist = JSON.parse(localStorage.getItem('apexfit_wishlist')) || [];

function saveCart()     { localStorage.setItem('apexfit_cart',     JSON.stringify(cart)); }
function saveWishlist() { localStorage.setItem('apexfit_wishlist', JSON.stringify(wishlist)); }

function addToCart(productId, size, qty = 1) {
  const p = PRODUCTS.find(p => p.id === productId);
  if (!p) return;
  const sz = size || (p.sizes && p.sizes[0]) || 'One Size';
  const key = `${productId}_${sz}`;
  const existing = cart.find(i => i.key === key);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ key, productId, size: sz, qty, price: p.price });
  }
  saveCart();
  updateCartUI();
  showToast(`${p.name} added to cart`, 'success');
}

function removeFromCart(key) {
  cart = cart.filter(i => i.key !== key);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function updateQty(key, delta) {
  const item = cart.find(i => i.key === key);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function toggleWishlist(productId) {
  const idx = wishlist.indexOf(productId);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    showToast('Removed from wishlist', 'info');
  } else {
    wishlist.push(productId);
    showToast('Added to wishlist', 'success');
  }
  saveWishlist();
  updateWishlistUI();
  document.querySelectorAll(`.wishlist-btn[data-id="${productId}"]`).forEach(btn => {
    btn.classList.toggle('wishlisted', wishlist.includes(productId));
    btn.innerHTML = wishlist.includes(productId) ? ICONS.heartFill : ICONS.heart;
  });
}

function getCartTotal() { return cart.reduce((s, i) => s + i.price * i.qty, 0); }
function getCartCount() { return cart.reduce((s, i) => s + i.qty, 0); }

function updateCartUI() {
  const count = getCartCount();
  document.querySelectorAll('#cartCount, .cart-count-badge').forEach(el => {
    el.textContent = count;
    el.classList.toggle('visible', count > 0);
  });
  const lbl = document.getElementById('cartCountLabel');
  if (lbl) lbl.textContent = count + (count === 1 ? ' item' : ' items');
  document.querySelectorAll('.cart-pill-badge').forEach(el => {
    el.textContent = count;
  });
}

function updateWishlistUI() {
  const count = wishlist.length;
  document.querySelectorAll('#wishlistCount').forEach(el => {
    el.textContent = count;
    el.classList.toggle('visible', count > 0);
  });
}

function renderCartItems() {
  const container = document.getElementById('cartItemsList');
  const emptyEl   = document.getElementById('cartEmpty');
  const footerEl  = document.getElementById('cartFooter');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = '';
    if (emptyEl) emptyEl.style.display = 'flex';
    if (footerEl) footerEl.style.display = 'none';
    return;
  }
  if (emptyEl)  emptyEl.style.display  = 'none';
  if (footerEl) footerEl.style.display = 'block';

  container.innerHTML = cart.map(item => {
    const p = PRODUCTS.find(pr => pr.id === item.productId);
    if (!p) return '';
    return `
      <div class="cart-item">
        <div class="cart-item-img" style="background:linear-gradient(135deg,${p.color1},${p.color2});overflow:hidden;">
          ${p.image ? `<img src="${p.image}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;">` : `<svg width="28" height="28" style="opacity:.4;color:#fff;">${getProductIcon(p.category)}</svg>`}
        </div>
        <div class="cart-item-info">
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-meta">${item.size}</div>
          <div class="cart-item-controls">
            <button class="qty-btn" onclick="updateQty('${item.key}', -1)">${ICONS.minus}</button>
            <span class="qty-display">${item.qty}</span>
            <button class="qty-btn" onclick="updateQty('${item.key}', 1)">${ICONS.plus}</button>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:.5rem;">
          <div class="cart-item-price">₱${(p.price * item.qty).toFixed(2)}</div>
          <button class="cart-remove" onclick="removeFromCart('${item.key}')">Remove</button>
        </div>
      </div>
    `;
  }).join('');

  const subtotal = getCartTotal();
  const shipping = subtotal > 75 ? 0 : 9.99;
  const total    = subtotal + shipping;

  const subEl = document.getElementById('cartSubtotal');
  const shipEl= document.getElementById('cartShipping');
  const totEl = document.getElementById('cartTotal');
  if (subEl)  subEl.textContent  = `₱${subtotal.toFixed(2)}`;
  if (shipEl) shipEl.textContent = shipping === 0 ? 'FREE' : `₱${shipping.toFixed(2)}`;
  if (totEl)  totEl.textContent  = `₱${total.toFixed(2)}`;
}

function getProductIcon(category) {
  const map = { clothing: ICONS.shirt, footwear: ICONS.shoe, nutrition: ICONS.flask, accessories: ICONS.bag };
  return map[category] || ICONS.bag;
}

/* ---------- TOAST NOTIFICATION ---------- */
let toastTimer;
function showToast(message, type = 'info') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  const icons = {
    success: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`,
    error:   `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
    info:    `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`
  };
  toast.className = `toast ${type}`;
  toast.innerHTML = `<div class="toast-icon">${icons[type]}</div><span>${message}</span>`;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

/* ---------- STAR RATING HTML ---------- */
function starsHTML(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5;
  let html = '';
  for (let i = 0; i < full; i++) html += '★';
  if (half) html += '½';
  return html;
}

/* ---------- RENDER PRODUCT CARD ---------- */
function renderProductCard(p, delay = 0) {
  const wishlisted = wishlist.includes(p.id);
  const discount   = p.originalPrice ? Math.round((1 - p.price / p.originalPrice) * 100) : 0;
  return `
    <div class="product-card reveal reveal-delay-${delay}" data-category="${p.category}">
      <div class="product-image-wrap">
        <div class="product-image-bg" style="background:linear-gradient(145deg,${p.color1},${p.color2});position:absolute;inset:0;"></div>
        ${p.image
          ? `<img src="${p.image}" alt="${p.name}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .6s ease;" loading="lazy">`
          : `<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;opacity:.35;color:var(--ink-3);"><svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">${getProductIcon(p.category)}</svg></div>`
        }
        ${p.badge ? `<div class="product-badge ${p.badgeType}">${p.badge}</div>` : ''}
        <div class="product-actions">
          <button class="product-action-btn wishlist-btn ${wishlisted ? 'wishlisted' : ''}"
            data-id="${p.id}" onclick="toggleWishlist(${p.id})" aria-label="Wishlist">
            ${wishlisted ? ICONS.heartFill : ICONS.heart}
          </button>
          <button class="product-action-btn" onclick="openQuickView(${p.id})" aria-label="Quick view">
            ${ICONS.eye}
          </button>
        </div>
      </div>
      <div class="product-body">
        <div class="product-meta-row">
          <span class="product-category">${p.category}</span>
          <span class="product-rating-small">★ ${p.rating}</span>
        </div>
        <div class="product-name">${p.name}</div>
        <div class="product-price">
          <span class="price-current">₱${p.price.toFixed(2)}</span>
          ${p.originalPrice ? `<span class="price-original">₱${p.originalPrice.toFixed(2)}</span>` : ''}
        </div>
        <button class="add-to-cart-btn" onclick="handleAddToCart(this, ${p.id})">
          ${ICONS.bag} Add to Bag
        </button>
      </div>
    </div>
  `;
}

function handleAddToCart(btn, productId) {
  addToCart(productId);
  btn.classList.add('added');
  btn.innerHTML = `${ICONS.check} Added!`;
  setTimeout(() => {
    btn.classList.remove('added');
    btn.innerHTML = `${ICONS.bag} Add to Bag`;
  }, 1800);
}

/* ---------- QUICK VIEW MODAL ---------- */
let currentModalProduct = null;
let selectedSize = null;
let selectedQty  = 1;

function openQuickView(productId) {
  const p = PRODUCTS.find(pr => pr.id === productId);
  if (!p) return;
  currentModalProduct = p;
  selectedSize = p.sizes ? p.sizes[0] : 'One Size';
  selectedQty  = 1;

  const modal   = document.getElementById('productModal');
  const overlay = document.getElementById('modalOverlay');
  if (!modal || !overlay) return;

  const wishlisted = wishlist.includes(p.id);
  const discount   = p.originalPrice ? Math.round((1 - p.price / p.originalPrice) * 100) : 0;

  modal.innerHTML = `
    <button class="modal-close" onclick="closeModal()" aria-label="Close">${ICONS.close}</button>
    <div class="modal-image-section">
      <div class="modal-main-image" style="background:linear-gradient(145deg,${p.color1},${p.color2});overflow:hidden;padding:0;">
        ${p.image
          ? `<img src="${p.image}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;">`
          : `<svg width="120" height="120" style="opacity:.3;color:var(--ink-3);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.7">${getProductIcon(p.category)}</svg>`
        }
      </div>
      <div class="modal-thumbs">
        ${p.image ? `<div class="modal-thumb active" style="overflow:hidden;padding:0;" onclick="selectThumb(this)"><img src="${p.image}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;"></div>` : ''}
        ${[p.color1, p.color2, '#eceae5'].map((c,i) => `
          <div class="modal-thumb" style="background:linear-gradient(135deg,${c},${i===0?p.color2:p.color1});" onclick="selectThumb(this)"></div>
        `).join('')}
      </div>
    </div>
    <div class="modal-info">
      <div class="product-category">${p.category}</div>
      <div class="product-name">${p.name}</div>
      <div class="product-rating">
        <span class="stars">${starsHTML(p.rating)}</span>
        <span class="rating-count">(${p.reviews} reviews)</span>
      </div>
      <div class="product-price">
        <span class="price-current">₱${p.price.toFixed(2)}</span>
        ${p.originalPrice ? `<span class="price-original">₱${p.originalPrice.toFixed(2)}</span>` : ''}
        ${discount ? `<span class="price-save">Save ${discount}%</span>` : ''}
      </div>
      <p class="modal-desc">${p.description}</p>
      ${p.sizes && p.sizes.length > 1 ? `
        <div class="size-label">Select Size</div>
        <div class="sizes-grid" id="modalSizes">
          ${p.sizes.map((s,i) => `
            <button class="size-btn ${i===0?'active':''}" onclick="selectSize(this,'${s}')">${s}</button>
          `).join('')}
        </div>
      ` : ''}
      <div class="qty-row">
        <span class="size-label" style="margin:0;">Quantity</span>
        <div class="qty-control">
          <button class="qty-btn" onclick="changeModalQty(-1)">${ICONS.minus}</button>
          <span class="qty-display" id="modalQtyDisplay">1</span>
          <button class="qty-btn" onclick="changeModalQty(1)">${ICONS.plus}</button>
        </div>
      </div>
      <button class="modal-add-btn" onclick="modalAddToCart()">
        ${ICONS.bag} Add to Bag — ₱${p.price.toFixed(2)}
      </button>
      <button class="modal-wishlist-btn wishlist-btn ${wishlisted?'wishlisted':''}" data-id="${p.id}" onclick="toggleWishlist(${p.id});this.classList.toggle('wishlisted');this.innerHTML=wishlist.includes(${p.id})?'${ICONS.heartFill} Wishlisted':'${ICONS.heart} Add to Wishlist'">
        ${wishlisted ? ICONS.heartFill + ' Wishlisted' : ICONS.heart + ' Add to Wishlist'}
      </button>
    </div>
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function selectThumb(el) {
  document.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}

function selectSize(btn, size) {
  selectedSize = size;
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function changeModalQty(delta) {
  selectedQty = Math.max(1, selectedQty + delta);
  const el = document.getElementById('modalQtyDisplay');
  if (el) el.textContent = selectedQty;
}

function modalAddToCart() {
  if (!currentModalProduct) return;
  addToCart(currentModalProduct.id, selectedSize, selectedQty);
  closeModal();
}

/* ---------- NAVBAR ---------- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('overlay');
  const mobileClose = document.getElementById('mobileClose');
  const searchToggle = document.getElementById('searchToggle');
  const searchBar = document.getElementById('searchBar');
  const cartToggle = document.getElementById('cartToggle');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartClose = document.getElementById('cartClose');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 40);
    const btt = document.getElementById('backToTop');
    if (btt) btt.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  // Hamburger / Mobile Menu
  function openMobileMenu() {
    hamburger?.classList.add('active');
    mobileMenu?.classList.add('open');
    overlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeMobileMenu() {
    hamburger?.classList.remove('active');
    mobileMenu?.classList.remove('open');
    overlay?.classList.remove('active');
    document.body.style.overflow = '';
  }
  hamburger?.addEventListener('click', () =>
    mobileMenu?.classList.contains('open') ? closeMobileMenu() : openMobileMenu()
  );
  mobileClose?.addEventListener('click', closeMobileMenu);

  // Search toggle
  searchToggle?.addEventListener('click', () => searchBar?.classList.toggle('open'));

  // Cart Drawer
  function openCart() {
    cartDrawer?.classList.add('open');
    overlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
    renderCartItems();
  }
  function closeCart() {
    cartDrawer?.classList.remove('open');
    overlay?.classList.remove('active');
    document.body.style.overflow = '';
  }
  cartToggle?.addEventListener('click', openCart);
  cartClose?.addEventListener('click', closeCart);

  // Overlay closes everything
  overlay?.addEventListener('click', () => {
    closeMobileMenu();
    closeCart();
    cartDrawer?.classList.remove('open');
  });

  // Modal overlay click-outside
  document.getElementById('modalOverlay')?.addEventListener('click', e => {
    if (e.target === document.getElementById('modalOverlay')) closeModal();
  });

  // Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeModal(); closeCart(); closeMobileMenu(); }
  });
}

/* ---------- PRODUCT FILTER (Homepage) ---------- */
function initProductFilter() {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;

  // Initial render
  renderFilteredProducts('all');

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderFilteredProducts(btn.dataset.filter);
    });
  });
}

function renderFilteredProducts(filter) {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;
  const filtered = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);
  grid.innerHTML = filtered.map((p, i) => renderProductCard(p, (i % 4) + 1)).join('');
  observeReveal();
}

/* ---------- INTERSECTION OBSERVER ---------- */
function observeReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('revealed'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.reveal:not(.revealed)').forEach(el => io.observe(el));
}

/* ---------- PAGE LOADER ---------- */
function initLoader() {
  const loader = document.getElementById('pageLoader');
  if (!loader) return;
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hidden'), 600);
  });
  setTimeout(() => loader.classList.add('hidden'), 2500);
}

/* ---------- NEWSLETTER ---------- */
function initNewsletter() {
  const form = document.getElementById('newsletterForm');
  form?.addEventListener('submit', e => {
    e.preventDefault();
    const input = form.querySelector('input');
    if (input?.value) {
      showToast('Welcome to APEXFIT! 10% off your first order.', 'success');
      input.value = '';
    }
  });
}

/* ---------- BACK TO TOP ---------- */
function initBackToTop() {
  const btt = document.getElementById('backToTop');
  btt?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ---------- SHOP PAGE ---------- */
function initShopPage() {
  const shopGrid = document.getElementById('shopGrid');
  if (!shopGrid) return;

  let activeFilters = [];
  const params = new URLSearchParams(window.location.search);
  const catParam = params.get('cat');
  if (catParam) activeFilters = [catParam];

  function renderShop() {
    const filtered = activeFilters.length
      ? PRODUCTS.filter(p => activeFilters.includes(p.category))
      : PRODUCTS;

    const sort = document.getElementById('shopSort')?.value || 'featured';
    const sorted = [...filtered].sort((a, b) => {
      if (sort === 'price-asc')  return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'rating')     return b.rating - a.rating;
      return 0;
    });

    const countEl = document.getElementById('shopResultCount');
    if (countEl) countEl.textContent = `${sorted.length} products`;

    shopGrid.innerHTML = sorted.map((p, i) => renderProductCard(p, (i % 4) + 1)).join('');
    observeReveal();
  }

  // Category sidebar checkboxes
  document.querySelectorAll('.cat-checkbox').forEach(cb => {
    if (catParam && cb.value === catParam) {
      cb.checked = true;
      cb.closest('.sidebar-filter-item')?.classList.add('active');
    }
    cb.addEventListener('change', () => {
      if (cb.checked) activeFilters.push(cb.value);
      else activeFilters = activeFilters.filter(f => f !== cb.value);
      renderShop();
    });
  });

  document.getElementById('shopSort')?.addEventListener('change', renderShop);

  renderShop();
}

/* ---------- PRODUCT DETAIL PAGE ---------- */
function initProductDetail() {
  const detailSection = document.getElementById('productDetailSection');
  if (!detailSection) return;

  const params = new URLSearchParams(window.location.search);
  const productId = parseInt(params.get('id')) || 1;
  const p = PRODUCTS.find(pr => pr.id === productId) || PRODUCTS[0];

  let detailSize = p.sizes?.[0] || 'One Size';
  let detailQty  = 1;

  const wishlisted = wishlist.includes(p.id);
  const discount   = p.originalPrice ? Math.round((1 - p.price / p.originalPrice) * 100) : 0;

  detailSection.innerHTML = `
    <div class="product-detail-grid">
      <div class="detail-gallery">
        <div class="detail-main-image" style="background:linear-gradient(145deg,${p.color1},${p.color2});overflow:hidden;padding:0;">
          ${p.image
            ? `<img src="${p.image}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;">`
            : `<svg width="150" height="150" style="opacity:.3;color:var(--ink-3);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.6">${getProductIcon(p.category)}</svg>`
          }
        </div>
        <div class="detail-thumbs">
          ${p.image ? `<div class="detail-thumb active" style="overflow:hidden;padding:0;" onclick="selectDetailThumb(this)"><img src="${p.image}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;"></div>` : ''}
          ${[p.color1, p.color2, '#eceae5', '#d6d3cc'].map((c, i) => `
            <div class="detail-thumb" style="background:linear-gradient(135deg,${c},${p.color1});" onclick="selectDetailThumb(this)"></div>
          `).join('')}
        </div>
      </div>
      <div class="detail-info">
        <div class="breadcrumb">
          <a href="index.html">Home</a><span class="breadcrumb-sep">›</span>
          <a href="shop.html">Shop</a><span class="breadcrumb-sep">›</span>
          <a href="shop.html?cat=${p.category}">${p.category}</a><span class="breadcrumb-sep">›</span>
          <span>${p.name}</span>
        </div>
        ${p.badge ? `<div class="product-badge ${p.badgeType}" style="position:static;display:inline-block;margin-bottom:.75rem;">${p.badge}</div>` : ''}
        <div class="product-name">${p.name}</div>
        <div class="product-rating" style="margin-bottom:1rem;">
          <span class="stars">${starsHTML(p.rating)}</span>
          <span class="rating-count">(${p.reviews} verified reviews)</span>
        </div>
        <div class="product-price" style="margin-bottom:1.5rem;">
          <span class="price-current" style="font-size:1.75rem;">₱${p.price.toFixed(2)}</span>
          ${p.originalPrice ? `<span class="price-original" style="font-size:1.1rem;">₱${p.originalPrice.toFixed(2)}</span>` : ''}
          ${discount ? `<span class="price-save">Save ${discount}%</span>` : ''}
        </div>
        <p class="detail-desc">${p.description}</p>
        ${p.sizes && p.sizes.length > 1 ? `
          <div class="detail-options">
            <div class="option-label">Size: <span id="selectedSize">${p.sizes[0]}</span></div>
            <div class="sizes-grid" id="detailSizes">
              ${p.sizes.map((s,i) => `
                <button class="size-btn ${i===0?'active':''}" onclick="selectDetailSize(this,'${s}')">${s}</button>
              `).join('')}
            </div>
          </div>
        ` : ''}
        <div class="detail-qty-row">
          <span class="option-label" style="margin:0;line-height:42px;">Quantity</span>
          <div class="detail-qty">
            <button class="detail-qty-btn" id="detailQtyMinus">${ICONS.minus}</button>
            <span class="detail-qty-display" id="detailQtyDisplay">1</span>
            <button class="detail-qty-btn" id="detailQtyPlus">${ICONS.plus}</button>
          </div>
          <button class="detail-add-btn" id="detailAddBtn">
            ${ICONS.bag} Add to Bag
          </button>
        </div>
        <div class="detail-features">
          ${(p.features || []).map(f => `
            <div class="detail-feature">${ICONS.check}<span>${f}</span></div>
          `).join('')}
        </div>
        <button class="modal-wishlist-btn wishlist-btn ${wishlisted?'wishlisted':''}" data-id="${p.id}"
          onclick="toggleWishlist(${p.id});this.classList.toggle('wishlisted');this.innerHTML=wishlist.includes(${p.id})?'${ICONS.heartFill} Wishlisted':'${ICONS.heart} Add to Wishlist'"
          style="margin-top:1rem;">
          ${wishlisted ? ICONS.heartFill + ' Wishlisted' : ICONS.heart + ' Add to Wishlist'}
        </button>
      </div>
    </div>
  `;

  // Qty controls
  document.getElementById('detailQtyMinus')?.addEventListener('click', () => {
    detailQty = Math.max(1, detailQty - 1);
    document.getElementById('detailQtyDisplay').textContent = detailQty;
  });
  document.getElementById('detailQtyPlus')?.addEventListener('click', () => {
    detailQty++;
    document.getElementById('detailQtyDisplay').textContent = detailQty;
  });
  document.getElementById('detailAddBtn')?.addEventListener('click', function() {
    addToCart(p.id, detailSize, detailQty);
    this.classList.add('added');
    this.innerHTML = `${ICONS.check} Added to Cart!`;
    setTimeout(() => {
      this.classList.remove('added');
      this.innerHTML = `${ICONS.bag} Add to Bag`;
    }, 2000);
  });

  // Related products
  const relatedGrid = document.getElementById('relatedGrid');
  if (relatedGrid) {
    const related = PRODUCTS.filter(pr => pr.category === p.category && pr.id !== p.id).slice(0, 4);
    relatedGrid.innerHTML = related.map((pr, i) => renderProductCard(pr, i + 1)).join('');
  }

  observeReveal();
}

window.selectDetailThumb = function(el) {
  document.querySelectorAll('.detail-thumb').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
};
window.selectDetailSize = function(btn, size) {
  const selectedSizeEl = document.getElementById('selectedSize');
  if (selectedSizeEl) selectedSizeEl.textContent = size;
  document.querySelectorAll('#detailSizes .size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
};

/* ---------- CART PAGE ---------- */
function initCartPage() {
  const cartPageItems = document.getElementById('cartPageItems');
  if (!cartPageItems) return;

  function renderCartPage() {
    const subtotal = getCartTotal();
    const shipping = subtotal > 75 ? 0 : 9.99;
    const total    = subtotal + shipping;

    if (cart.length === 0) {
      cartPageItems.innerHTML = `
        <div style="text-align:center;padding:4rem 2rem;">
          <div style="margin-bottom:1.5rem;color:var(--ink-4);">${ICONS.cart.replace('viewBox', 'width="64" height="64" viewBox')}</div>
          <h3 style="font-size:1.2rem;margin-bottom:.75rem;">Your cart is empty</h3>
          <p style="color:var(--ink-3);margin-bottom:2rem;">Add some products to get started</p>
          <a href="shop.html" class="btn btn-primary">Continue Shopping</a>
        </div>
      `;
    } else {
      cartPageItems.innerHTML = `
        <table class="cart-table">
          <thead>
            <tr>
              <th colspan="2">Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            ${cart.map(item => {
              const p = PRODUCTS.find(pr => pr.id === item.productId);
              if (!p) return '';
              return `
                <tr>
                  <td style="width:80px">
                    <div class="cart-table-img" style="background:linear-gradient(135deg,${p.color1},${p.color2});overflow:hidden;">
                      ${p.image ? `<img src="${p.image}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;">` : `<svg width="28" height="28" style="opacity:.4;color:#fff;">${getProductIcon(p.category)}</svg>`}
                    </div>
                  </td>
                  <td>
                    <div style="font-weight:700;margin-bottom:.25rem;">${p.name}</div>
                    <div style="font-size:.78rem;color:var(--ink-3);">Size: ${item.size}</div>
                  </td>
                  <td style="font-weight:600;">₱${p.price.toFixed(2)}</td>
                  <td>
                    <div style="display:flex;align-items:center;gap:.5rem;">
                      <button class="qty-btn" onclick="updateQty('${item.key}',-1);renderCartPageLocal()">−</button>
                      <span style="font-weight:700;min-width:1.5rem;text-align:center;">${item.qty}</span>
                      <button class="qty-btn" onclick="updateQty('${item.key}',1);renderCartPageLocal()">+</button>
                    </div>
                  </td>
                  <td style="font-weight:800;">₱${(p.price * item.qty).toFixed(2)}</td>
                  <td>
                    <button onclick="removeFromCart('${item.key}');renderCartPageLocal()" style="color:var(--ink-4);font-size:.8rem;transition:color .2s;" onmouseover="this.style.color='var(--error)'" onmouseout="this.style.color='var(--ink-4)'">Remove</button>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      `;
    }

    const subEl  = document.getElementById('pageSummarySubtotal');
    const shipEl = document.getElementById('pageSummaryShipping');
    const totEl  = document.getElementById('pageSummaryTotal');
    if (subEl)  subEl.textContent  = `₱${subtotal.toFixed(2)}`;
    if (shipEl) shipEl.textContent = shipping === 0 ? 'FREE' : `₱${shipping.toFixed(2)}`;
    if (totEl)  totEl.textContent  = `₱${total.toFixed(2)}`;
  }

  window.renderCartPageLocal = renderCartPage;
  renderCartPage();
}

/* ---------- CHECKOUT PAGE ---------- */
function initCheckout() {
  const checkoutForm = document.getElementById('checkoutForm');
  if (!checkoutForm) return;

  // Order summary
  const summaryItems = document.getElementById('checkoutSummaryItems');
  if (summaryItems) {
    summaryItems.innerHTML = cart.map(item => {
      const p = PRODUCTS.find(pr => pr.id === item.productId);
      if (!p) return '';
      return `
        <div style="display:flex;gap:.75rem;align-items:center;padding:.75rem 0;border-bottom:1px solid var(--border);">
          <div style="width:48px;height:48px;border-radius:8px;background:linear-gradient(135deg,${p.color1},${p.color2});flex-shrink:0;overflow:hidden;">${p.image ? `<img src="${p.image}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;">` : ''}</div>
          <div style="flex:1;min-width:0;">
            <div style="font-size:.85rem;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${p.name}</div>
            <div style="font-size:.75rem;color:var(--ink-3);">x${item.qty} · ${item.size}</div>
          </div>
          <div style="font-weight:700;font-size:.9rem;">₱${(p.price*item.qty).toFixed(2)}</div>
        </div>
      `;
    }).join('');

    const subtotal = getCartTotal();
    const shipping = subtotal > 75 ? 0 : 9.99;
    document.getElementById('checkoutSubtotal').textContent = `₱${subtotal.toFixed(2)}`;
    document.getElementById('checkoutShipping').textContent = shipping === 0 ? 'FREE' : `₱${shipping.toFixed(2)}`;
    document.getElementById('checkoutTotal').textContent    = `₱${(subtotal + shipping).toFixed(2)}`;
  }

  // Payment methods
  document.querySelectorAll('.payment-method').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.payment-method').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Place order
  checkoutForm.addEventListener('submit', e => {
    e.preventDefault();
    const placeBtn = document.getElementById('placeOrderBtn');
    if (placeBtn) { placeBtn.disabled = true; placeBtn.textContent = 'Processing...'; }
    setTimeout(() => {
      cart = []; saveCart(); updateCartUI();
      window.location.href = 'index.html?order=success';
    }, 2000);
  });
}

/* ---------- SUCCESS MESSAGE ---------- */
function checkOrderSuccess() {
  const params = new URLSearchParams(window.location.search);
  if (params.get('order') === 'success') {
    setTimeout(() => showToast('Order placed successfully! Thank you.', 'success'), 800);
    window.history.replaceState({}, '', 'index.html');
  }
}

/* ---------- INIT ---------- */
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initNavbar();
  initProductFilter();
  initNewsletter();
  initBackToTop();
  initShopPage();
  initProductDetail();
  initCartPage();
  initCheckout();
  checkOrderSuccess();
  updateCartUI();
  updateWishlistUI();
  observeReveal();
});

/* Expose functions needed by inline handlers */
window.addToCart        = addToCart;
window.removeFromCart   = removeFromCart;
window.updateQty        = updateQty;
window.updateCartUI     = updateCartUI;
window.updateWishlistUI = updateWishlistUI;
window.toggleWishlist   = toggleWishlist;
window.openQuickView    = openQuickView;
window.closeModal       = closeModal;
window.selectThumb      = selectThumb;
window.selectSize       = selectSize;
window.changeModalQty   = changeModalQty;
window.modalAddToCart   = modalAddToCart;
window.handleAddToCart  = handleAddToCart;
window.starsHTML        = starsHTML;
window.showToast        = showToast;
window.getCartTotal     = getCartTotal;
window.getCartCount     = getCartCount;
window.saveCart         = saveCart;
window.initCartPage     = initCartPage;
window.observeReveal    = observeReveal;
window.renderProductCard = renderProductCard;
window.PRODUCTS         = PRODUCTS;

/* Export mutable cart reference via getter so inline scripts always see current state */
Object.defineProperty(window, 'cart', { get: () => cart, set: v => { cart = v; } });
Object.defineProperty(window, 'wishlist', { get: () => wishlist, set: v => { wishlist = v; } });
