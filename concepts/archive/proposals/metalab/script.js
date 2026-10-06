/* Loaded in the head so the page is marked scripted before first paint.
   Everything else waits for the document. */
document.documentElement.classList.add('js');

(function () {
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  var desktop = window.matchMedia('(min-width: 967px)');

  /* The headline changes on reload. No motion on the word. The first load of a session
     shows "monthly reports"; each reload picks a different item from the last one.
     Screen readers and reduced-motion visitors always get "monthly reports". */
  var ITEMS = ['monthly reports', 'online marketing', 'morning brief', 'product catalog',
    'competitor research', 'ten-year-old website', 'wholesale orders', 'staff scheduling',
    'contract review', 'knowledge base', 'compliance paperwork', 'meeting notes',
    'supplier prices', 'product translations', 'search rankings', 'industry news'];
  var KEY = 'hurulab-metalab-headline';

  function pickHeadline() {
    var slot = document.querySelector('.slot');
    if (!slot || reduced.matches) return;
    var last = null;
    try { last = sessionStorage.getItem(KEY); } catch (e) { last = null; }
    var i = 0;
    if (last !== null) {
      var prev = parseInt(last, 10);
      i = Math.floor(Math.random() * (ITEMS.length - 1));
      if (i >= prev) i += 1;
    }
    slot.textContent = ITEMS[i];
    try { sessionStorage.setItem(KEY, String(i)); } catch (e) { /* storage blocked: fine */ }
  }

  /* The opening window is only a mask; drop it once it has opened. */
  function initReveal() {
    var r = document.querySelector('.reveal');
    if (!r) return;
    r.addEventListener('animationend', function () { r.remove(); });
    setTimeout(function () { if (r.parentNode) r.remove(); }, 2500);
  }

  /* ---- case studies: the pills in the hero and the entries in the menu ---- */
  var cases = null;

  function initCases() {
    var hero = document.querySelector('.hero');
    var pills = Array.prototype.slice.call(hero.querySelectorAll('.pill'));
    var panels = Array.prototype.slice.call(hero.querySelectorAll('.cp'));
    var preview = -1, open = -1, intent = 0, opener = null;

    pills.forEach(function (p, i) {
      p.setAttribute('role', 'button');
      p.setAttribute('aria-controls', 'cp-' + i);
      p.setAttribute('aria-expanded', 'false');
    });

    function setPreview(i) {
      if (open !== -1) return;
      if (i === preview) return;
      panels.forEach(function (c, j) { c.classList.toggle('is-on', j === i); });
      pills.forEach(function (p, j) { p.classList.toggle('is-on', j === i); });
      hero.classList.toggle('is-previewing', i !== -1);
      preview = i;
    }

    function openCase(i, from) {
      clearTimeout(intent);
      opener = from || pills[i];
      if (desktop.matches && preview !== i) {
        /* start from the thumbnail, as MetaLab does */
        panels.forEach(function (c, j) { c.classList.toggle('is-on', j === i); });
      }
      var c = panels[i];
      open = i;
      preview = -1;
      hero.classList.remove('is-previewing');
      hero.classList.add('is-open');
      c.classList.add('is-on');
      /* next frame, so the box has a start rectangle to grow from */
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          c.classList.add('is-open');
          c.removeAttribute('aria-hidden');
          pills.forEach(function (p, j) { p.setAttribute('aria-expanded', String(j === i)); });
          var btn = c.querySelector('.cp-close');
          setTimeout(function () { btn.focus({ preventScroll: true }); }, reduced.matches ? 0 : 1100);
        });
      });
    }

    function closeCase() {
      if (open === -1) return;
      var c = panels[open];
      c.classList.remove('is-open', 'is-on');
      c.setAttribute('aria-hidden', 'true');
      pills.forEach(function (p) { p.setAttribute('aria-expanded', 'false'); p.classList.remove('is-on'); });
      hero.classList.remove('is-open');
      open = -1;
      if (opener && opener.classList.contains('pill')) opener.focus({ preventScroll: true });
      opener = null;
    }

    pills.forEach(function (p, i) {
      p.addEventListener('mouseenter', function () {
        if (!desktop.matches) return;
        clearTimeout(intent);
        intent = setTimeout(function () { setPreview(i); }, 100);
      });
      p.addEventListener('focus', function () { if (desktop.matches) setPreview(i); });
      p.addEventListener('click', function (e) { e.preventDefault(); openCase(i, p); });
      p.addEventListener('keydown', function (e) {
        if (e.key === ' ') { e.preventDefault(); openCase(i, p); }
      });
    });
    var list = hero.querySelector('.pills');
    list.addEventListener('mouseleave', function () { clearTimeout(intent); setPreview(-1); });
    list.addEventListener('focusout', function (e) {
      if (!list.contains(e.relatedTarget)) setPreview(-1);
    });
    panels.forEach(function (c) {
      c.querySelector('.cp-close').addEventListener('click', closeCase);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && open !== -1 && !document.documentElement.classList.contains('menu-open')) closeCase();
    });

    cases = { open: openCase, close: closeCase, isOpen: function () { return open !== -1; } };
  }

  /* ---- the framed menu window. The page scales into it; the window previews
     whatever link is pointed at. ---- */
  function initMenu() {
    var root = document.documentElement;
    var btn = document.querySelector('.menu-btn');
    var menu = document.getElementById('menu');
    var hole = menu.querySelector('.menu-hole');
    var mp = menu.querySelector('.mp');
    var mpT = mp.querySelector('.mp-t');
    var page = document.querySelector('.page');
    var links = Array.prototype.slice.call(menu.querySelectorAll('.menu-nav a'));

    links.forEach(function (a, i) { a.parentNode.style.setProperty('--i', i); });

    function show(a) {
      if (!a) { mp.classList.remove('has-t', 'is-case'); return; }
      var text;
      if (a.hasAttribute('data-case')) {
        text = a.textContent;
      } else {
        var t = document.querySelector(a.getAttribute('href'));
        var h = t && t.querySelector('h2');
        text = h ? h.textContent : (t && t.getAttribute('aria-label')) || a.textContent;
        if (t && t.id === 'work') text = a.textContent;
      }
      mpT.textContent = text;
      mp.classList.add('has-t');
      mp.classList.toggle('is-case', a.hasAttribute('data-case'));
    }

    function setOpen(open, returnFocus) {
      if (open) page.style.transformOrigin = '50% ' + (window.scrollY + window.innerHeight / 2) + 'px';
      root.classList.toggle('menu-open', open);
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', open ? 'Close' : 'Menu');
      page.inert = open;
      if (open) { show(null); links[0].focus({ preventScroll: true }); }
      else if (returnFocus) btn.focus({ preventScroll: true });
    }
    function isOpen() { return root.classList.contains('menu-open'); }

    btn.addEventListener('click', function () { setOpen(!isOpen(), true); });
    hole.addEventListener('click', function () { setOpen(false, true); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen()) setOpen(false, true);
    });
    links.forEach(function (a) {
      a.addEventListener('mouseenter', function () { show(a); });
      a.addEventListener('focus', function () { show(a); });
      a.addEventListener('mouseleave', function () { show(null); });
      a.addEventListener('click', function (e) {
        var href = a.getAttribute('href');
        e.preventDefault();
        setOpen(false, false);
        /* MetaLab's menu-to-page: the page is already at the target when it scales back */
        if (a.hasAttribute('data-case')) {
          if (cases.isOpen()) cases.close();
          page.style.transformOrigin = '50% ' + (window.innerHeight / 2) + 'px';
          window.scrollTo(0, 0);
          cases.open(parseInt(a.getAttribute('data-case'), 10), btn);
        } else {
          var target = document.querySelector(href);
          if (!target) return;
          /* measure without the menu's scale: offsetTop ignores transforms */
          var y = 0, el = target;
          while (el) { y += el.offsetTop; el = el.offsetParent; }
          y = Math.max(0, y - parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop || 0));
          page.style.transformOrigin = '50% ' + (y + window.innerHeight / 2) + 'px';
          window.scrollTo(0, y);
          history.replaceState(null, '', href);
        }
      });
    });
  }

  /* ---- what we bring: the row under the pointer, or at the middle of the screen
     while scrolling, is active and opens its gray box ---- */
  function initRows() {
    var rows = Array.prototype.slice.call(document.querySelectorAll('.bring'));
    var active = null;
    function setActive(r) {
      if (r === active) return;
      if (active) active.classList.remove('is-active');
      if (r) r.classList.add('is-active');
      active = r;
    }
    rows.forEach(function (r) {
      r.addEventListener('mouseenter', function () { setActive(r); });
    });
    document.querySelector('.brings').addEventListener('mouseleave', function () { setActive(null); });
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) setActive(en.target); });
      }, { rootMargin: '-45% 0px -45% 0px' });
      rows.forEach(function (r) { io.observe(r); });
    }
  }

  /* ---- entrances: once, as each block's top enters the bottom of the screen.
     Siblings follow 0.1s apart. ---- */
  function initReveals() {
    var els = Array.prototype.slice.call(document.querySelectorAll('.rv, .rvr, .rvf, .rvc'));
    els.forEach(function (el) {
      var sibs = Array.prototype.filter.call(el.parentNode.children, function (s) {
        return s.matches('.rv, .rvr, .rvf, .rvc');
      });
      var idx = sibs.indexOf(el);
      if (idx > 0 && el.matches('.rvc, .rvr')) el.style.setProperty('--dl', Math.min(idx, 4) * (el.matches('.rvc') ? 0.25 : 0.1) + 's');
    });
    if (!('IntersectionObserver' in window) || reduced.matches) {
      els.forEach(function (el) { el.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { io.observe(el); });
  }

  /* No server: the form opens an email to hello@hurulab.com. Without script the
     form's own mailto action carries the subject and both fields. */
  function initForm() {
    var form = document.getElementById('contact-form');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var body = 'What problem do you want solved? ' + form.elements.problem.value +
        '\n\nAnything else:\n' + form.elements.details.value;
      window.location.href = 'mailto:hello@hurulab.com?subject=' +
        encodeURIComponent('30-minute discovery call') + '&body=' + encodeURIComponent(body);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    pickHeadline();
    initReveal();
    initCases();
    initMenu();
    initRows();
    initReveals();
    initForm();
  });
})();
