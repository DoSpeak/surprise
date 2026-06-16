// auth.js — Akshu Birthday App · Session Guard
// ─────────────────────────────────────────────
// Paste this as the FIRST <script> tag in every
// page (page1.html → page8.html) to block direct
// access without going through the password gate.
// ─────────────────────────────────────────────
(function () {
  if (sessionStorage.getItem('akshu_auth') !== 'granted') {
    window.location.replace('index.html');
  }
})();
