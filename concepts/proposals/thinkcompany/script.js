(function () {
  'use strict';

  var root = document.documentElement;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var wide = window.matchMedia('(min-width: 980px)');

  /* The contact form opens the visitor's mail client. No server, no success state. */
  var form = document.getElementById('contact-form');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var problem = form.elements.problem.value;
    var details = form.elements.details.value.trim();
    var body = 'What problem do you want solved? ' + problem + '\n\nAnything else:\n' + details;
    window.location.href = 'mailto:hello@hurulab.com' +
      '?subject=' + encodeURIComponent('30-minute discovery call') +
      '&body=' + encodeURIComponent(body);
  });

  /* Menu: the panel slides up in 600ms, the links rise 70ms apart, focus stays inside,
     Escape closes. Closing fades the panel out in 200ms. */
  var menu = document.getElementById('menu');
  var openButton = document.querySelector('.menu-button');
  var closeButton = menu.querySelector('.menu-close');
  var outside = [document.querySelector('.site-header'), document.getElementById('main'),
    document.querySelector('.site-footer')];
  var closeTimer = null;

  function setOutside(state) {
    outside.forEach(function (el) { el.inert = state; });
  }

  function openMenu() {
    clearTimeout(closeTimer);
    menu.classList.remove('is-closing');
    menu.hidden = false;
    void menu.offsetHeight;
    menu.classList.add('is-open');
    openButton.setAttribute('aria-expanded', 'true');
    root.classList.add('menu-lock');
    setOutside(true);
    closeButton.focus();
  }

  function closeMenu(restoreFocus) {
    menu.classList.remove('is-open');
    menu.classList.add('is-closing');
    openButton.setAttribute('aria-expanded', 'false');
    root.classList.remove('menu-lock');
    setOutside(false);
    closeTimer = setTimeout(function () {
      menu.hidden = true;
      menu.classList.remove('is-closing');
    }, reduced ? 0 : 200);
    if (restoreFocus) openButton.focus();
  }

  openButton.addEventListener('click', openMenu);
  closeButton.addEventListener('click', function () { closeMenu(true); });

  menu.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') { event.preventDefault(); closeMenu(true); return; }
    if (event.key !== 'Tab') return;
    var items = menu.querySelectorAll('a[href], button');
    var first = items[0];
    var last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });

  /* A link in the menu closes it, then moves to its section and hands focus there. */
  menu.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      var target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      closeMenu(false);
      target.scrollIntoView();
      history.replaceState(null, '', link.getAttribute('href'));
      if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    });
  });

  if (reduced || !('IntersectionObserver' in window)) return;
  root.classList.add('motion');

  /* Line mask reveal: words are grouped into their rendered lines; each line rises 115% out
     of a clipped mask and sharpens from a 14px blur, 1.1s on expo out, 120ms apart. The
     original markup comes back once the reveal ends, so a resize rewraps normally. */
  function splitLines(el, start) {
    var original = el.innerHTML;
    var words = [];
    var breakNext = false;
    Array.prototype.slice.call(el.childNodes).forEach(function (node) {
      if (node.nodeName === 'BR') { breakNext = true; return; }
      var cls = node.nodeType === 1 ? node.className : '';
      node.textContent.split(/\s+/).forEach(function (text) {
        if (!text) return;
        var word = document.createElement('span');
        word.className = cls;
        word.textContent = text;
        word.breakBefore = breakNext;
        breakNext = false;
        words.push(word);
      });
    });
    el.textContent = '';
    words.forEach(function (word, i) {
      if (word.breakBefore) el.appendChild(document.createElement('br'));
      el.appendChild(word);
      if (i < words.length - 1) el.appendChild(document.createTextNode(' '));
    });
    var lines = [];
    var top = null;
    words.forEach(function (word) {
      if (word.offsetTop !== top) { lines.push([]); top = word.offsetTop; }
      lines[lines.length - 1].push(word);
    });
    el.textContent = '';
    lines.forEach(function (line, i) {
      var mask = document.createElement('span');
      var inner = document.createElement('span');
      mask.className = 'line-mask';
      inner.className = 'line-inner';
      inner.style.setProperty('--delay', (start || 0) + i * 120 + 'ms');
      line.forEach(function (word, j) {
        inner.appendChild(word);
        if (j < line.length - 1) inner.appendChild(document.createTextNode(' '));
      });
      mask.appendChild(inner);
      el.appendChild(mask);
    });
    el.lastChild.firstChild.addEventListener('transitionend', function restore(event) {
      if (event.propertyName !== 'transform') return;
      event.target.removeEventListener('transitionend', restore);
      el.innerHTML = original;
    });
    return lines.length;
  }

  /* Hero: the boxes fly in over 1.7s, 160ms apart; the headline starts at 350ms; the intro
     follows 1.6 steps after the last line and the button one step later. On a phone the
     headline and intro are already there and only the button rises. */
  var hero = document.querySelector('.hero');
  var heroTitle = hero.querySelector('[data-lines]');
  var heroRise = hero.querySelectorAll('[data-rise]');
  if (wide.matches) {
    var count = splitLines(heroTitle, 350);
    var next = 350 + (count - 1) * 120 + 192;
    heroTitle.classList.add('is-in');
    Array.prototype.forEach.call(heroRise, function (el, i) {
      el.style.setProperty('--delay', next + i * 120 + 'ms');
    });
  } else {
    heroTitle.removeAttribute('data-lines');
    heroRise[0].removeAttribute('data-rise');
  }
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      hero.classList.add('is-in');
      hero.querySelectorAll('[data-rise]').forEach(function (el) { el.classList.add('is-in'); });
    });
  });

  /* Everything else reveals once, when its top passes 85% of the viewport. */
  document.querySelectorAll('main [data-lines]').forEach(function (el) {
    if (!hero.contains(el)) splitLines(el, 0);
  });
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-in');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -15% 0px' });
  document.querySelectorAll('main [data-lines], main [data-rise]').forEach(function (el) {
    if (hero.contains(el)) return;
    var siblings = el.parentElement.querySelectorAll(':scope > [data-rise]');
    var index = Array.prototype.indexOf.call(siblings, el);
    if (index > 0) el.style.setProperty('--delay', Math.min(index, 5) * 120 + 'ms');
    observer.observe(el);
  });

  /* Scrubbed parallax on the nine cards, linear, one progress value for the whole section
     (top of the section at the bottom of the viewport to its bottom at the top). Offsets by
     slot: 240, -420, 240, -520, 420, -340px, centered on the middle of the scroll. */
  var board = document.querySelector('.section-board');
  var cards = board.querySelectorAll('.card');
  var offsets = [240, -420, 240, -520, 420, -340];
  var ticking = false;

  function update() {
    ticking = false;
    if (!wide.matches) {
      cards.forEach(function (card) { card.style.transform = ''; });
      return;
    }
    var rect = board.getBoundingClientRect();
    var vh = window.innerHeight;
    var progress = Math.max(0, Math.min(1, (vh - rect.top) / (rect.height + vh)));
    cards.forEach(function (card, i) {
      var y = offsets[i % 6] * (progress - 0.5);
      card.style.transform = 'translate3d(0,' + y.toFixed(1) + 'px,0)';
    });
  }

  function request() {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }

  window.addEventListener('scroll', request, { passive: true });
  window.addEventListener('resize', request);
  update();
})();
