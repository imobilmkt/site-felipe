(function () {
  "use strict";

  // [PENDENTE] Número real do WhatsApp do Felipe, só dígitos, com DDI+DDD (ex.: 5544999998888).
  // Ver PENDENCIAS.md — todo botão "Falar no WhatsApp" do site usa esta constante.
  var WHATSAPP_NUMBER = "55440000000";

  function buildWhatsAppLinks() {
    var links = document.querySelectorAll("[data-wa]");
    for (var i = 0; i < links.length; i++) {
      var el = links[i];
      var msg = el.getAttribute("data-wa-msg") || "Olá, Felipe. Vim pelo site.";
      el.href = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(msg);
      el.target = "_blank";
      el.rel = "noopener";
    }
  }

  function setupHeaderScroll() {
    var header = document.getElementById("site-header");
    if (!header) return;
    var THRESHOLD = 40;
    var ticking = false;

    function update() {
      header.classList.toggle("is-scrolled", window.scrollY > THRESHOLD);
      ticking = false;
    }
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function setupReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || !items.length) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    items.forEach(function (el) { observer.observe(el); });
  }

  function setupYear() {
    var el = document.getElementById("ano-atual");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  document.addEventListener("DOMContentLoaded", function () {
    buildWhatsAppLinks();
    setupHeaderScroll();
    setupReveal();
    setupYear();
  });
})();
