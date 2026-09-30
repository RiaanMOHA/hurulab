// hurulab proposal, the mix. Enhancement only: with no script the page reads top to bottom,
// every card and case study in full, the headline fixed on "monthly reports".

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const desktop = window.matchMedia('(min-width: 1000px)');
const ARROW = '<svg viewBox="0 0 256 256" aria-hidden="true"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"/></svg>';
const CARET = '<svg viewBox="0 0 256 256" aria-hidden="true"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"/></svg>';

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, reducedMotion.matches ? 0 : ms));
const reflow = (el) => void el.offsetWidth;

// Scroll entrances: Think Company's once-only reveal at 85% of the viewport.
function initReveal() {
  const targets = document.querySelectorAll('.mask, .reveal');
  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -15% 0px' });
  targets.forEach((el) => io.observe(el));

  // Mindmarket's wavy underline runs only while it is in view.
  const title = document.querySelector('.contact-title');
  if (title) {
    new IntersectionObserver(([entry]) => title.classList.toggle('wave-on', entry.isIntersecting)).observe(title);
  }
}

// The headline. Think Company's line mask rise, one item every 2.5s. The line box follows the
// current item's height, so a short item never leaves an empty line on phones.
function initRotor() {
  const track = document.querySelector('[data-rotor]');
  const toggle = document.querySelector('[data-rotor-toggle]');
  if (!track || !toggle) return;
  const items = [...track.children];
  const INTERVAL = 2500;
  let index = 0;
  let timer = null;
  let userPaused = false;

  const fit = () => { track.style.height = `${items[index].offsetHeight}px`; };

  function show(next) {
    const current = items[index];
    const incoming = items[next];
    items.forEach((item) => item.classList.remove('is-leaving'));
    incoming.classList.add('is-waiting');
    incoming.classList.remove('is-current');
    reflow(incoming);
    incoming.classList.remove('is-waiting');
    if (current !== incoming) {
      current.classList.remove('is-current');
      current.classList.add('is-leaving');
    }
    incoming.classList.add('is-current');
    index = next;
    fit();
  }

  const stop = () => { clearInterval(timer); timer = null; };
  function start() {
    if (timer || userPaused || reducedMotion.matches || document.hidden) return;
    timer = setInterval(() => show((index + 1) % items.length), INTERVAL);
  }

  function applyMotionPreference() {
    toggle.hidden = reducedMotion.matches;
    if (reducedMotion.matches) {
      stop();
      items.forEach((item) => item.classList.remove('is-current', 'is-leaving'));
      items[0].classList.add('is-current');
      index = 0;
      fit();
    } else {
      start();
    }
  }

  toggle.addEventListener('click', () => {
    userPaused = !userPaused;
    toggle.setAttribute('aria-pressed', String(userPaused));
    if (userPaused) stop(); else start();
  });
  document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));
  reducedMotion.addEventListener('change', applyMotionPreference);
  window.addEventListener('resize', fit);
  document.fonts?.ready.then(fit);
  fit();
  applyMotionPreference();
}

// The menu. One round button; the sheet (desktop) or the floating panels (phone) open from it.
function initMenu() {
  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-menu]');
  if (!toggle || !menu) return;
  toggle.hidden = false;
  menu.inert = true;
  menu.querySelectorAll('.menu-links li').forEach((li, i) => li.style.setProperty('--n', i));
  let open = false;

  function setOpen(next, { restoreFocus = true } = {}) {
    if (next === open) return Promise.resolve();
    open = next;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Menu');
    document.documentElement.classList.toggle('menu-lock', open);
    menu.inert = !open;
    if (open) {
      menu.classList.add('is-open');
      menu.querySelector('.menu-link')?.focus({ preventScroll: true });
      return Promise.resolve();
    }
    if (restoreFocus) toggle.focus({ preventScroll: true });
    if (!desktop.matches) {
      menu.classList.remove('is-open');
      return Promise.resolve();
    }
    // Think Company closes by fading the sheet in 200ms, then resets it below the screen.
    menu.classList.add('is-closing');
    return wait(200).then(() => {
      menu.style.setProperty('transition', 'none');
      menu.querySelector('.menu-sheet').style.transition = 'none';
      menu.classList.remove('is-open', 'is-closing');
      reflow(menu);
      menu.style.removeProperty('transition');
      menu.querySelector('.menu-sheet').style.transition = '';
    });
  }

  toggle.addEventListener('click', () => setOpen(!open));
  menu.addEventListener('click', (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    event.preventDefault();
    const hash = link.getAttribute('href');
    setOpen(false, { restoreFocus: false }).then(() => {
      if (location.hash === hash) window.dispatchEvent(new HashChangeEvent('hashchange'));
      location.hash = hash;
    });
  });
  document.addEventListener('keydown', (event) => {
    if (!open) return;
    if (event.key === 'Escape') { setOpen(false); return; }
    if (event.key !== 'Tab') return;
    const stops = [toggle, ...menu.querySelectorAll('a[href]')];
    const first = stops[0];
    const last = stops[stops.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });
  desktop.addEventListener('change', () => { if (open) setOpen(false, { restoreFocus: false }); });
}

// What we bring. Mindmarket's cards open Avalanche's tile: the tile grows out of the card with a
// clip-path, and inside it the nine items switch by clip-path wipes with the heading lines
// dropping into place.
function initBring() {
  const root = document.querySelector('[data-bring]');
  if (!root) return;
  const tile = root.querySelector('[data-tile]');
  const slidesBox = tile.querySelector('[data-tile-slides]');
  const tabsBox = tile.querySelector('[data-tile-tabs]');
  const cards = [...root.querySelectorAll('.card')];
  let index = -1;
  let isOpen = false;

  cards.forEach((card) => {
    card.querySelector('.chip-btn').innerHTML =
      `<span class="chip chip-start">${ARROW}</span><span class="chip-label">Read</span><span class="chip chip-end">${ARROW}</span>`;
  });

  const tabs = [];
  const slides = cards.map((card, i) => {
    const hit = card.querySelector('.card-hit');
    const soft = hit.querySelector('.soft');
    const whole = hit.textContent.trim();
    const lines = soft
      ? [[soft.textContent.trim(), true], [whole.slice(soft.textContent.length).trim(), false]]
      : [[whole, false]];
    const slide = document.createElement('article');
    slide.className = 'slide';
    slide.setAttribute('aria-labelledby', `bring-h-${i + 1}`);
    const inner = document.createElement('div');
    inner.className = 'slide-in';
    const h = document.createElement('h3');
    h.className = 'slide-h';
    h.id = `bring-h-${i + 1}`;
    lines.forEach(([text, isSoft], l) => {
      const line = document.createElement('span');
      line.className = 't-line';
      line.style.setProperty('--l', l);
      const span = document.createElement('span');
      if (isSoft) span.className = 'soft';
      span.textContent = text;
      line.append(span);
      h.append(line, l < lines.length - 1 ? ' ' : '');
    });
    const p = document.createElement('p');
    p.className = 'slide-p';
    p.textContent = card.querySelector('.card-text').textContent;
    inner.append(h, p);
    const num = document.createElement('p');
    num.className = 'slide-num';
    num.setAttribute('aria-hidden', 'true');
    num.textContent = String(i + 1);
    slide.append(inner, num);
    slidesBox.append(slide);

    const tab = document.createElement('button');
    tab.type = 'button';
    tab.className = 'tab';
    tab.textContent = String(i + 1);
    tab.setAttribute('aria-label', whole);
    tab.addEventListener('click', () => go(i));
    tabsBox.append(tab);
    tabs.push(tab);

    hit.addEventListener('click', () => openAt(i));
    return slide;
  });

  function go(next) {
    next = (next + slides.length) % slides.length;
    slides.forEach((slide, k) => {
      slide.classList.toggle('is-active', k === next);
      slide.classList.toggle('is-before', k < next);
      slide.inert = k !== next;
      slide.setAttribute('aria-hidden', String(k !== next));
    });
    tabs.forEach((tab, k) => tab.setAttribute('aria-current', String(k === next)));
    index = next;
  }

  function clipTo(card) {
    const b = tile.getBoundingClientRect();
    const c = card.getBoundingClientRect();
    tile.style.setProperty('--ct', `${c.top - b.top}px`);
    tile.style.setProperty('--cr', `${b.right - c.right}px`);
    tile.style.setProperty('--cb', `${b.bottom - c.bottom}px`);
    tile.style.setProperty('--cl', `${c.left - b.left}px`);
  }

  // The grid folds to the tile's height while the tile is open, so a phone never shows a tile
  // stretched over nine rows; it unfolds again as the tile closes back into the card.
  const grid = root.querySelector('.bring-grid');
  function sizeGrid(px) {
    grid.classList.add('is-sized');
    grid.style.height = `${grid.offsetHeight}px`;
    reflow(grid);
    grid.style.height = `${px}px`;
  }

  function openAt(i) {
    isOpen = true;
    slides.forEach((slide) => slide.classList.add('no-anim'));
    tile.hidden = false;
    go(i);
    sizeGrid(tile.offsetHeight);
    clipTo(cards[i]);
    reflow(tile);
    slides.forEach((slide) => slide.classList.remove('no-anim'));
    tile.classList.add('is-open');
    root.classList.add('is-open');
    cards.forEach((card) => card.querySelector('.card-hit').setAttribute('aria-expanded', 'true'));
    const top = root.getBoundingClientRect().top;
    const room = 96;
    if (top < room) window.scrollTo({ top: window.scrollY + top - room, behavior: reducedMotion.matches ? 'auto' : 'smooth' });
    tile.focus({ preventScroll: true });
  }

  function close() {
    if (!isOpen) return;
    isOpen = false;
    const card = cards[index];
    clipTo(card);
    sizeGrid(grid.scrollHeight);
    tile.classList.remove('is-open');
    root.classList.remove('is-open');
    cards.forEach((c) => c.querySelector('.card-hit').setAttribute('aria-expanded', 'false'));
    card.querySelector('.card-hit').focus({ preventScroll: true });
    wait(1000).then(() => {
      if (isOpen) return;
      tile.hidden = true;
      grid.classList.remove('is-sized');
      grid.style.height = '';
      slides.forEach((slide) => slide.classList.remove('is-active', 'is-before'));
    });
  }

  tile.querySelector('[data-tile-close]').addEventListener('click', close);
  tile.querySelector('[data-tile-prev]').addEventListener('click', () => go(index - 1));
  tile.querySelector('[data-tile-next]').addEventListener('click', () => go(index + 1));
  tile.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') { event.stopPropagation(); close(); }
    if (event.key === 'ArrowRight') go(index + 1);
    if (event.key === 'ArrowLeft') go(index - 1);
  });
  window.addEventListener('resize', () => { if (isOpen) grid.style.height = `${tile.offsetHeight}px`; });
}

// Case studies. MetaLab's pills: hover (after 100ms of intent), focus or click opens that
// project's preview on the page. The menu lists the same four and lands here.
function initWork() {
  const stage = document.querySelector('[data-work]');
  if (!stage) return;
  const previews = [...stage.querySelectorAll('[data-case]')];
  const pills = [...document.querySelectorAll('[data-case-link]')];
  const keys = previews.map((p) => p.dataset.case);
  let current = null;
  let intent = null;

  function activate(key) {
    if (!keys.includes(key) || key === current) return;
    current = key;
    previews.forEach((p) => p.classList.toggle('is-active', p.dataset.case === key));
    pills.forEach((pill) => pill.setAttribute('aria-current', String(pill.dataset.caseLink === key)));
  }

  stage.querySelectorAll('[data-case-link]').forEach((pill) => {
    const key = pill.dataset.caseLink;
    pill.addEventListener('pointerenter', (event) => {
      if (event.pointerType !== 'mouse') return;
      clearTimeout(intent);
      intent = setTimeout(() => activate(key), 100);
    });
    pill.addEventListener('pointerleave', () => clearTimeout(intent));
    pill.addEventListener('focus', () => activate(key));
    pill.addEventListener('click', (event) => {
      event.preventDefault();
      activate(key);
      history.replaceState(null, '', `#case-${key}`);
    });
  });

  function fromHash() {
    const key = location.hash.replace('#case-', '');
    if (!keys.includes(key)) return false;
    activate(key);
    stage.scrollIntoView({ block: 'start' });
    return true;
  }
  window.addEventListener('hashchange', fromHash);
  if (fromHash()) return;

  // The first preview opens when the section comes into view, so its entrance is seen.
  if (!('IntersectionObserver' in window)) { activate(keys[0]); return; }
  const io = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    if (!current) activate(keys[0]);
    io.disconnect();
  }, { threshold: 0.35 });
  io.observe(stage);
}

// Trionn's custom dropdown over the native select, which stays in the form and keeps the value.
function initDropdown(select) {
  const field = select.closest('.field');
  const label = field.querySelector('label');
  const dd = document.createElement('div');
  dd.className = 'dd';
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'dd-button';
  button.id = `${select.id}-button`;
  button.setAttribute('aria-haspopup', 'listbox');
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-controls', `${select.id}-list`);
  button.setAttribute('aria-labelledby', `${label.id} ${button.id}`);
  button.setAttribute('aria-describedby', select.getAttribute('aria-describedby'));
  button.innerHTML = `<span class="dd-value is-empty"></span>${CARET}`;
  const value = button.querySelector('.dd-value');
  value.textContent = select.options[0].textContent;
  const list = document.createElement('ul');
  list.className = 'dd-list';
  list.id = `${select.id}-list`;
  list.setAttribute('role', 'listbox');
  list.setAttribute('aria-labelledby', label.id);
  const options = [...select.options].filter((o) => o.value).map((o, i) => {
    const li = document.createElement('li');
    li.className = 'dd-option';
    li.id = `${select.id}-opt-${i}`;
    li.setAttribute('role', 'option');
    li.setAttribute('aria-selected', 'false');
    li.tabIndex = -1;
    li.dataset.value = o.value;
    li.textContent = o.textContent;
    list.append(li);
    return li;
  });
  dd.append(button, list);
  select.after(dd);
  select.hidden = true;
  label.htmlFor = button.id;

  const isOpen = () => dd.classList.contains('is-open');
  function setOpen(open, focusButton = true) {
    dd.classList.toggle('is-open', open);
    button.setAttribute('aria-expanded', String(open));
    if (open) (options.find((o) => o.getAttribute('aria-selected') === 'true') || options[0]).focus();
    else if (focusButton) button.focus();
  }
  function choose(option) {
    select.value = option.dataset.value;
    options.forEach((o) => o.setAttribute('aria-selected', String(o === option)));
    value.textContent = option.textContent;
    value.classList.remove('is-empty');
    dd.classList.add('is-filled');
    setOpen(false);
    select.dispatchEvent(new Event('change', { bubbles: true }));
  }

  button.addEventListener('click', () => setOpen(!isOpen()));
  button.addEventListener('keydown', (event) => {
    if (['ArrowDown', 'ArrowUp'].includes(event.key)) { event.preventDefault(); setOpen(true); }
  });
  list.addEventListener('click', (event) => {
    const option = event.target.closest('.dd-option');
    if (option) choose(option);
  });
  list.addEventListener('keydown', (event) => {
    const at = options.indexOf(document.activeElement);
    const move = { ArrowDown: at + 1, ArrowUp: at - 1, Home: 0, End: options.length - 1 }[event.key];
    if (move !== undefined) {
      event.preventDefault();
      options[Math.max(0, Math.min(options.length - 1, move))].focus();
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (at > -1) choose(options[at]);
    } else if (event.key === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
      setOpen(false);
    } else if (event.key === 'Tab') {
      setOpen(false, false);
    }
  });
  document.addEventListener('click', (event) => { if (isOpen() && !dd.contains(event.target)) setOpen(false, false); });
  return button;
}

// Trionn's text button: the letters shift across as a group, last letter first, and the arrow
// and underline swap sides.
function initTextButton() {
  const btn = document.querySelector('[data-text-btn]');
  if (!btn) return;
  const label = btn.querySelector('[data-chars]');
  const text = label.textContent;
  btn.setAttribute('aria-label', text);
  label.setAttribute('aria-hidden', 'true');
  label.textContent = '';
  [...text].forEach((ch, i) => {
    const span = document.createElement('span');
    span.className = 'ch';
    span.textContent = ch;
    span.style.setProperty('--n', text.length);
    span.style.setProperty('--r', text.length - 1 - i);
    label.append(span);
  });
  const measure = () => {
    btn.style.setProperty('--shift', `${btn.clientWidth - label.offsetLeft - label.offsetWidth}px`);
    btn.style.setProperty('--char-delay', `${(text.length - 1) * 30}ms`);
  };
  measure();
  document.fonts?.ready.then(measure);
  window.addEventListener('resize', measure);
  const on = () => btn.classList.add('is-hot');
  const off = () => btn.classList.remove('is-hot');
  btn.addEventListener('pointerenter', on);
  btn.addEventListener('pointerleave', off);
  btn.addEventListener('focus', on);
  btn.addEventListener('blur', off);
}

// The form. Trionn's data capture, validated on submit with its error style and shake. A valid
// form opens an email to hello@hurulab.com with every field in the body. No server.
function initContact() {
  const form = document.querySelector('[data-contact]');
  if (!form) return;
  const el = form.elements;
  const serviceButton = initDropdown(el.service);
  const checks = [
    { input: el.name, ok: (v) => v.trim() !== '', message: 'Enter your name.' },
    { input: el.email, ok: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()), message: 'Enter an email address we can reply to.' },
    { input: el.service, focus: serviceButton, ok: (v) => v !== '', message: 'Choose a service.' },
    { input: el.problem, ok: (v) => v.trim() !== '', message: 'Tell us the problem you want solved.' },
  ];

  function mark(check, valid) {
    const field = check.input.closest('.field');
    const error = field.querySelector('.field-error');
    field.classList.toggle('is-invalid', !valid);
    (check.focus || check.input).setAttribute('aria-invalid', String(!valid));
    error.textContent = valid ? '' : check.message;
    if (!valid) {
      field.classList.remove('is-shaking');
      reflow(field);
      field.classList.add('is-shaking');
    }
  }

  checks.forEach((check) => {
    const recheck = () => {
      if (check.input.closest('.field').classList.contains('is-invalid') && check.ok(check.input.value)) mark(check, true);
    };
    check.input.addEventListener('input', recheck);
    check.input.addEventListener('change', recheck);
  });
  form.addEventListener('animationend', (event) => event.target.classList.remove('is-shaking'));

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const failed = checks.filter((check) => !check.ok(check.input.value));
    checks.forEach((check) => mark(check, !failed.includes(check)));
    if (failed.length) {
      (failed[0].focus || failed[0].input).focus();
      return;
    }
    const body = [
      `Name: ${el.name.value.trim()}`,
      `Email: ${el.email.value.trim()}`,
      `Service: ${el.service.value}`,
      `Budget: ${el.budget.value.trim()}`,
      '',
      'What problem do you want solved?',
      el.problem.value.trim(),
    ].join('\n');
    window.location.href = `mailto:hello@hurulab.com?subject=${encodeURIComponent('30-minute discovery call')}&body=${encodeURIComponent(body)}`;
  });
}

initReveal();
initRotor();
initMenu();
initBring();
initWork();
initTextButton();
initContact();
