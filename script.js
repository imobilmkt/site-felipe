(function () {
  "use strict";

  // Número de WhatsApp usado em todo botão "Falar no WhatsApp" do site.
  var WHATSAPP_NUMBER = "554488281680";

  // Conversão do Google Ads: dispara ao clicar em qualquer botão do WhatsApp.
  // Os links abrem em nova aba (target="_blank"), então só reportamos o evento
  // e deixamos o navegador seguir a navegação normal do <a> — sem redirecionar
  // manualmente, como faz o snippet padrão do Google pensado pra links na
  // mesma aba.
  var WA_CONVERSION_SEND_TO = "AW-18411910944/GF5pCMLx2e0cEKDuvctE";
  function reportWhatsAppConversion() {
    if (typeof gtag === "function") {
      gtag("event", "conversion", {
        send_to: WA_CONVERSION_SEND_TO,
        value: 1.0,
        currency: "BRL"
      });
    }
  }

  function buildWhatsAppLinks() {
    var links = document.querySelectorAll("[data-wa]");
    for (var i = 0; i < links.length; i++) {
      var el = links[i];
      var msg = el.getAttribute("data-wa-msg") || "Olá! Quero mais informações sobre um imóvel!";
      el.href = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(msg);
      el.target = "_blank";
      el.rel = "noopener";
      el.addEventListener("click", reportWhatsAppConversion);
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
    if (!tabGroups.length) return;

    // Vários grupos de abas podem mirar no mesmo target (ex.: tipo + metragem).
    // Cada grupo guarda sua própria categoria ativa; um item só aparece se
    // atender a categoria ativa de TODOS os grupos daquele target (lógica E).
    var targets = [];
    var targetsBySelector = {};

    tabGroups.forEach(function (tabs) {
      var targetSel = tabs.getAttribute("data-filter-target");
      var target = targetsBySelector[targetSel];
      if (!target) {
        target = {
          items: document.querySelectorAll(targetSel),
          emptyEl: document.querySelector(tabs.getAttribute("data-filter-empty")),
          groups: []
        };
        targetsBySelector[targetSel] = target;
        targets.push(target);
      }
      target.groups.push({ buttons: tabs.querySelectorAll(".filter-tab"), active: "todos" });
    });

    targets.forEach(function (target) {
      var bgClasses = ["property-feature--papel", "property-feature--areia"];

      function apply() {
        var visible = 0;
        target.items.forEach(function (item) {
          var cats = (item.getAttribute("data-category") || "").split(" ");
          var show = target.groups.every(function (g) {
            return g.active === "todos" || cats.indexOf(g.active) !== -1;
          });
          item.hidden = !show;
          if (show) {
            item.classList.add("is-visible");
            item.classList.remove(bgClasses[visible % 2 === 0 ? 1 : 0]);
            item.classList.add(bgClasses[visible % 2]);
            visible++;
          }
        });
        if (target.emptyEl) target.emptyEl.hidden = visible !== 0;
      }

      target.groups.forEach(function (g) {
        g.buttons.forEach(function (b) {
          b.addEventListener("click", function () {
            g.active = b.getAttribute("data-category");
            g.buttons.forEach(function (bb) {
              var active = bb === b;
              bb.classList.toggle("is-active", active);
              bb.setAttribute("aria-selected", String(active));
            });
            apply();
          });
        });
      });

      apply();
    });
  }

  function setupPropertyGalleries() {
    var galleries = document.querySelectorAll("[data-gallery]");
    galleries.forEach(function (gallery) {
      var slides = gallery.querySelectorAll(".property-gallery__slide");
      if (slides.length < 2) return;
      var dots = gallery.querySelectorAll(".property-gallery__dots button");
      var prevBtn = gallery.querySelector(".property-gallery__arrow--prev");
      var nextBtn = gallery.querySelector(".property-gallery__arrow--next");
      var viewport = gallery.querySelector(".property-gallery__viewport");
      var index = 0;

      function goTo(i) {
        index = (i + slides.length) % slides.length;
        slides.forEach(function (s, si) { s.classList.toggle("is-active", si === index); });
        dots.forEach(function (d, di) { d.classList.toggle("is-active", di === index); });
      }
      if (prevBtn) prevBtn.addEventListener("click", function () { goTo(index - 1); });
      if (nextBtn) nextBtn.addEventListener("click", function () { goTo(index + 1); });
      dots.forEach(function (d, di) {
        d.addEventListener("click", function () { goTo(di); });
      });

      var startX = null;
      if (viewport) {
        viewport.addEventListener("touchstart", function (e) {
          startX = e.touches[0].clientX;
        }, { passive: true });
        viewport.addEventListener("touchend", function (e) {
          if (startX === null) return;
          var dx = e.changedTouches[0].clientX - startX;
          if (Math.abs(dx) > 40) goTo(index + (dx < 0 ? 1 : -1));
          startX = null;
        });
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    buildWhatsAppLinks();
    setupHeaderScroll();
    setupReveal();
    setupYear();
    setupMenu();
    setupFilters();
    setupPropertyGalleries();
  });
})();
