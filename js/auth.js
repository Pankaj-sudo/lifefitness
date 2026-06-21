/* ================================================================
   AUTHENTICATION — Google Sign-In, persistent state, nav UI
   ================================================================ */
(function () {

  window.signInWithGoogle = function () {
    fbAuth.signInWithPopup(fbGoogle).catch(function (e) {
      console.error(e);
      if (window.showToast) showToast('Sign-in failed. Please try again.', 'error');
    });
  };

  window.signOutUser = function () {
    fbAuth.signOut().then(function () {
      if (window.showToast) showToast('Signed out.', 'info');
    });
  };

  function avatarSrc(user) {
    return user.photoURL ||
      'https://ui-avatars.com/api/?name=' +
      encodeURIComponent((user.displayName || 'U').charAt(0)) +
      '&background=c8ff00&color=16150f&bold=true&size=40';
  }

  window.refreshNavAuth = function (user) {
    var authBtn      = document.getElementById('authBtn');
    var userWrap     = document.getElementById('userMenu');
    var myOrdersEls  = document.querySelectorAll('.my-orders-link');
    var adminEls     = document.querySelectorAll('.admin-nav-link');

    if (user) {
      if (authBtn)  authBtn.style.display  = 'none';
      if (userWrap) {
        userWrap.style.display = 'flex';
        var img  = userWrap.querySelector('.user-avatar-img');
        var name = userWrap.querySelector('.user-display-name');
        if (img)  img.src = avatarSrc(user);
        if (name) name.textContent = (user.displayName || 'Account').split(' ')[0];
      }
      myOrdersEls.forEach(function (el) { el.style.removeProperty('display'); });
      adminEls.forEach(function (el) {
        el.style.display = user.email === ADMIN_EMAIL ? '' : 'none';
      });
    } else {
      if (authBtn)  authBtn.style.display  = 'flex';
      if (userWrap) userWrap.style.display = 'none';
      myOrdersEls.forEach(function (el) { el.style.display = 'none'; });
      adminEls.forEach(function (el)     { el.style.display = 'none'; });
    }
  };

  document.addEventListener('DOMContentLoaded', function () {
    /* ---- Start auth listener ---- */
    fbAuth.onAuthStateChanged(function (user) {
      refreshNavAuth(user);
      if (window.__onAuthChange) window.__onAuthChange(user);
    });

    /* ---- User dropdown toggle ---- */
    var wrap    = document.getElementById('userMenu');
    var trigger = wrap && wrap.querySelector('.user-menu-trigger');
    if (trigger) {
      trigger.addEventListener('click', function (e) {
        e.stopPropagation();
        wrap.classList.toggle('open');
      });
    }
    document.addEventListener('click', function () {
      if (wrap) wrap.classList.remove('open');
    });
  });
})();
