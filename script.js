(function () {
  "use strict";

  // Número de WhatsApp usado em todo botão "Falar no WhatsApp" do site.
  var WHATSAPP_NUMBER = "554488281680";

  function buildWhatsAppLinks() {
    var links = document.querySelectorAll("[data-wa]");
    for (var i = 0; i < links.length; i++) {
      var el = links[i];
      var msg = el.getAttribute("data-wa-msg") || "Olá! Quero mais informações sobre um imóvel!";
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

  function setupMenu() {
    var toggle = document.getElementById("menu-toggle");
    var menu = document.getElementById("site-menu");
    var scrim = document.getElementById("menu-scrim");
    if (!toggle || !menu) return;

    function close() {
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      menu.hidden = true;
      if (scrim) scrim.hidden = true;
    }
    function open() {
      toggle.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      menu.hidden = false;
      if (scrim) scrim.hidden = false;
    }
    toggle.addEventListener("click", function () {
      if (menu.hidden) open(); else close();
    });
    if (scrim) scrim.addEventListener("click", close);
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", close);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });
  }

  function setupFilters() {
    var tabGroups = document.querySelectorAll("[data-filter-tabs]");
    tabGroups.forEach(function (tabs) {
      var items = document.querySelectorAll(tabs.getAttribute("data-filter-target"));
      var emptyEl = document.querySelector(tabs.getAttribute("data-filter-empty"));
      var buttons = tabs.querySelectorAll(".filter-tab");
      var bgClasses = ["property-feature--papel", "property-feature--areia"];

      function applyFilter(category) {
        var visible = 0;
        items.forEach(function (item) {
          var cats = (item.getAttribute("data-category") || "").split(" ");
          var show = category === "todos" || cats.indexOf(category) !== -1;
          item.hidden = !show;
          if (show) {
            item.classList.add("is-visible");
            item.classList.remove(bgClasses[visible % 2 === 0 ? 1 : 0]);
            item.classList.add(bgClasses[visible % 2]);
            visible++;
          }
        });
        if (emptyEl) emptyEl.hidden = visible !== 0;
        buttons.forEach(function (b) {
          var active = b.getAttribute("data-category") === category;
          b.classList.toggle("is-active", active);
          b.setAttribute("aria-selected", String(active));
        });
      }

      buttons.forEach(function (b) {
        b.addEventListener("click", function () {
          applyFilter(b.getAttribute("data-category"));
        });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    buildWhatsAppLinks();
    setupHeaderScroll();
    setupReveal();
    setupYear();
    setupMenu();
    setupFilters();
  });
})();
