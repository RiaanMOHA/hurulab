/* hurulab proposal, mindmarket.com. Motion only enhances: every section reads with this
   file absent. Scroll-mapped effects run from one requestAnimationFrame loop. */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  var clamp = function (v, lo, hi) { return Math.min(hi, Math.max(lo, v)); };

  /* ---- mobile menu ---- */
  function initMenu() {
    var menu = document.querySelector('.menu');
    var burger = menu.querySelector('.burger');
    var panel = menu.querySelector('.mobile-nav');

    function setOpen(open) {
      menu.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Menu');
    }
    burger.addEventListener('click', function () {
      setOpen(!menu.classList.contains('is-open'));
    });
    panel.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) {
        setOpen(false);
        burger.focus();
      }
    });
    document.addEventListener('click', function (e) {
      if (menu.classList.contains('is-open') && !menu.contains(e.target)) setOpen(false);
    });
  }

  /* ---- the active section in the desktop bar ---- */
  function initActiveLink() {
    var links = Array.prototype.slice.call(document.querySelectorAll('.menu-link'));
    var byId = {};
    links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) { a.classList.remove('is-active'); });
        var link = byId[entry.target.id];
        if (link) link.classList.add('is-active');
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    document.querySelectorAll('main section[id], footer[id]').forEach(function (s) { io.observe(s); });
  }

  /* ---- reveals, once each ---- */
  function initReveals() {
    var targets = document.querySelectorAll('[data-reveal], .contact-title');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -12% 0px' });
    targets.forEach(function (el) { io.observe(el); });
  }

  /* ---- the decision case: the last step whose top has passed the middle of the viewport is
     active, and the sticky visual crossfades to its frame. Runs in the scroll frame. ---- */
  var caseSteps = Array.prototype.slice.call(document.querySelectorAll('.case-step'));
  var caseFrames = Array.prototype.slice.call(document.querySelectorAll('.case-frame, .case-dot'));
  var caseActive = '1';
  function updateCase() {
    if (!caseSteps.length) return;
    var line = window.innerHeight * 0.5, active = '1';
    caseSteps.forEach(function (s) { if (s.getBoundingClientRect().top <= line) active = s.getAttribute('data-step'); });
    if (active === caseActive) return;
    caseActive = active;
    caseSteps.forEach(function (s) { s.classList.toggle('is-active', s.getAttribute('data-step') === active); });
    caseFrames.forEach(function (f) { f.classList.toggle('is-active', (f.getAttribute('data-frame') || f.getAttribute('data-dot')) === active); });
  }

  /* ---- the nine dialogs: native command buttons where supported, a script where not ---- */
  function initDialogs() {
    var supportsCommand = 'command' in HTMLButtonElement.prototype;
    var lastOpener = null;

    document.querySelectorAll('[commandfor]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var dialog = document.getElementById(btn.getAttribute('commandfor'));
        var command = btn.getAttribute('command');
        if (command === 'show-modal') lastOpener = btn;
        if (supportsCommand) return;
        if (command === 'show-modal') dialog.showModal();
        if (command === 'close') dialog.close();
      });
    });

    document.querySelectorAll('.dialog').forEach(function (dialog) {
      /* A click on the scrim, outside the panel, closes it, for browsers without closedby. */
      dialog.addEventListener('click', function (e) {
        if (!e.target.closest('.dialog-panel')) dialog.close();
      });
      dialog.addEventListener('close', function () {
        if (lastOpener && document.contains(lastOpener)) lastOpener.focus();
      });
      dialog.querySelectorAll('[data-dialog-close]').forEach(function (link) {
        link.addEventListener('click', function () {
          lastOpener = null;
          dialog.close();
        });
      });
    });
  }

  /* ---- hero recede and the stack cards, mapped to scroll position ---- */
  var hero = document.querySelector('.hero-inner');
  var cards = Array.prototype.slice.call(document.querySelectorAll('.stack-card'));
  cards.forEach(function (c) { c.style.setProperty('--tilt', c.getAttribute('data-tilt')); });

  function updateHero() {
    var p = reduced.matches ? 0 : clamp(window.scrollY / window.innerHeight, 0, 1);
    hero.style.setProperty('--recede', p.toFixed(3));
  }

  /* Each card goes from tilted and 20% low to flat as it travels from the bottom of the
     viewport to its sticky position. */
  function updateCards() {
    var vh = window.innerHeight;
    cards.forEach(function (card) {
      var item = card.parentElement;
      var stickTop = parseFloat(getComputedStyle(item).top) || 0;
      var top = item.getBoundingClientRect().top;
      var p = reduced.matches ? 1 : clamp((vh - top) / (vh - stickTop), 0, 1);
      card.style.setProperty('--p', p.toFixed(3));
    });
  }

  var ticking = false;
  function frame() {
    ticking = false;
    updateHero();
    updateCards();
    updateCase();
  }
  function requestFrame() {
    if (!ticking) { ticking = true; requestAnimationFrame(frame); }
  }

  /* ---- contact form: opens the visitor's mail app, nothing is sent from the page ---- */
  function initForm() {
    var form = document.getElementById('contact-form');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var choice = form.elements.problem.value;
      var text = form.elements.details.value.trim();
      var body = 'What problem do you want solved?\n' + choice + '\n\nAnything else\n' + text;
      window.location.href = 'mailto:hello@hurulab.com?subject=' + encodeURIComponent('30-minute discovery call') +
        '&body=' + encodeURIComponent(body);
    });
  }

  initMenu();
  initActiveLink();
  initReveals();
  initDialogs();
  initForm();
  frame();

  window.addEventListener('scroll', requestFrame, { passive: true });
  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(requestFrame, 120);
  });
  reduced.addEventListener('change', requestFrame);
})();
