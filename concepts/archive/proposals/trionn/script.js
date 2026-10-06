(function () {
  "use strict";

  const root = document.documentElement;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const wide = window.matchMedia("(min-width: 768px)");
  const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v));
  const shuffle = (n) => {
    const a = Array.from({ length: n }, (_, i) => i);
    for (let i = n - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  /* ---- splitting text into words and characters, keeping inline spans intact */

  function splitNode(node, chars) {
    Array.from(node.childNodes).forEach((child) => {
      if (child.nodeType === Node.ELEMENT_NODE) { splitNode(child, chars); return; }
      if (child.nodeType !== Node.TEXT_NODE) return;
      const frag = document.createDocumentFragment();
      child.textContent.split(/(\s+)/).forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(" ")); return; }
        const word = document.createElement("span");
        word.className = "word";
        for (const c of part) {
          const ch = document.createElement("span");
          ch.className = "ch";
          ch.textContent = c;
          word.appendChild(ch);
          chars.push(ch);
        }
        frag.appendChild(word);
      });
      child.replaceWith(frag);
    });
  }

  /* The visible split is hidden from assistive technology; a plain copy is read instead. */
  function splitAccessible(el) {
    const plain = document.createElement("span");
    plain.className = "sr-only";
    plain.textContent = el.textContent.replace(/\s+/g, " ").trim();
    const visual = document.createElement("span");
    visual.setAttribute("aria-hidden", "true");
    while (el.firstChild) visual.appendChild(el.firstChild);
    const chars = [];
    splitNode(visual, chars);
    el.append(plain, visual);
    return chars;
  }

  /* trionn's stagger: a fixed gap per character in random order. Very long lines are capped. */
  function randomDelays(chars, each, cap) {
    const step = chars.length > 1 ? Math.min(each, cap / (chars.length - 1)) : 0;
    const order = shuffle(chars.length);
    chars.forEach((ch, i) => ch.style.setProperty("--d", Math.round(order[i] * step) + "ms"));
    return step * Math.max(0, chars.length - 1);
  }

  /* ---- reveals: text unblurs by character at 90% of the viewport, blocks rise 20px */

  function initReveals() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -10% 0px" });

    document.querySelectorAll(".blur").forEach((el) => {
      randomDelays(splitAccessible(el), 50, 1500);
      el.dataset.ready = "";
      io.observe(el);
    });
    const heroDelays = { "hero-actions": 0, "hero-cue": 100, "hero-box": 100, "hero-intro": 300 };
    document.querySelectorAll(".rise").forEach((el) => {
      el.dataset.ready = "";
      if (!el.closest(".hero")) { io.observe(el); return; }
      const key = Object.keys(heroDelays).find((k) => el.classList.contains(k));
      el.style.setProperty("--rd", (heroDelays[key] || 0) + "ms");
      window.requestAnimationFrame(() => window.requestAnimationFrame(() => el.classList.add("is-in")));
    });
    const heroDivider = document.querySelector(".hero-divider");
    if (heroDivider) window.requestAnimationFrame(() => window.requestAnimationFrame(() => heroDivider.classList.add("is-in")));
  }

  /* ---- the hero headline: sixteen items, swapped every 3s by trionn's blur swap */

  const WORDS = [
    "monthly reports", "online marketing", "morning brief", "product catalog",
    "competitor research", "ten-year-old website", "wholesale orders", "staff scheduling",
    "contract review", "knowledge base", "compliance paperwork", "meeting notes",
    "supplier prices", "product translations", "search rankings", "industry news"
  ];
  const ROTATE_MS = 3000;

  function initRotator() {
    const slot = document.querySelector("[data-rotate]");
    if (!slot) return;
    const line = slot.closest(".hero-line-word");
    const hero = slot.closest("section");
    let chars = [];
    let index = 0;
    let timer = null;
    let visible = true;
    let held = false;

    /* Reserve the height of the tallest item at this width, so nothing below it moves. */
    function reserve() {
      const probe = line.cloneNode(true);
      probe.setAttribute("aria-hidden", "true");
      Object.assign(probe.style, { position: "absolute", visibility: "hidden", width: line.offsetWidth + "px", minHeight: "0" });
      line.parentNode.appendChild(probe);
      const word = probe.querySelector("[data-rotate]");
      let max = 0;
      WORDS.forEach((w) => { word.textContent = w; max = Math.max(max, probe.offsetHeight); });
      probe.remove();
      line.style.setProperty("--word-h", max + "px");
    }

    function render(text, hidden) {
      slot.textContent = text;
      chars = [];
      splitNode(slot, chars);
      if (hidden) chars.forEach((ch) => ch.classList.add("is-hidden"));
    }
    function reveal() {
      randomDelays(chars, 80, 400);
      void slot.offsetWidth;
      chars.forEach((ch) => ch.classList.remove("is-hidden"));
    }
    function swap() {
      const out = randomDelays(chars, 25, 300);
      chars.forEach((ch) => ch.classList.add("is-leaving"));
      window.setTimeout(() => {
        index = (index + 1) % WORDS.length;
        render(WORDS[index], true);
        reveal();
      }, out + 300);
    }
    function sync() {
      const run = visible && !held && !document.hidden && !reduced.matches;
      if (run && !timer) timer = window.setInterval(swap, ROTATE_MS);
      if (!run && timer) { window.clearInterval(timer); timer = null; }
    }

    reserve();
    window.addEventListener("resize", reserve);
    if (document.fonts) document.fonts.ready.then(reserve);
    render(WORDS[0], !reduced.matches);
    if (!reduced.matches) window.requestAnimationFrame(reveal);

    new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); }).observe(hero);
    const title = slot.closest("h1");
    title.addEventListener("pointerenter", () => { held = true; sync(); });
    title.addEventListener("pointerleave", () => { held = false; sync(); });
    document.addEventListener("visibilitychange", sync);
    reduced.addEventListener("change", () => {
      if (reduced.matches) { index = 0; render(WORDS[0], false); }
      sync();
    });
    sync();
  }

  /* ---- the text button: label characters shift toward the arrow, last one first */

  function initButtons() {
    document.querySelectorAll("[data-button]").forEach((button) => {
      const label = button.querySelector(".button-text-label");
      button.setAttribute("aria-label", label.textContent.trim());
      label.setAttribute("aria-hidden", "true");
      const chars = Array.from(label.textContent.trim(), (c) => {
        const ch = document.createElement("span");
        ch.className = "ch";
        ch.textContent = c;
        return ch;
      });
      label.replaceChildren(...chars);
      button.style.setProperty("--n", chars.length);
      chars.forEach((ch, i) => ch.style.setProperty("--d", (chars.length - 1 - i) * 30 + "ms"));

      const measure = () => {
        const arrow = button.querySelector(".button-text-arrow").getBoundingClientRect();
        const shift = arrow.left - label.getBoundingClientRect().right - 12;
        button.style.setProperty("--shift", Math.max(0, shift) + "px");
      };
      const on = () => { measure(); button.classList.add("is-hover"); };
      const off = () => button.classList.remove("is-hover");
      button.addEventListener("pointerenter", on);
      button.addEventListener("pointerleave", off);
      button.addEventListener("focus", () => { if (button.matches(":focus-visible")) on(); });
      button.addEventListener("blur", off);
    });
  }

  /* ---- link hover: trionn's char blur swap, a clone layer arriving as the letters leave */

  function initLinkSwap() {
    document.querySelectorAll(".menu-link, .footer-nav a").forEach((link) => {
      const text = Array.from(link.childNodes).find((n) => n.nodeType === Node.TEXT_NODE && n.textContent.trim());
      if (!text) return;
      const label = text.textContent.trim();
      const wrap = document.createElement("span");
      wrap.className = "swap";
      const sr = document.createElement("span");
      sr.className = "sr-only";
      sr.textContent = label;
      const layers = ["swap-a", "swap-b"].map((cls) => {
        const layer = document.createElement("span");
        layer.className = cls;
        layer.setAttribute("aria-hidden", "true");
        Array.from(label).forEach((c, i) => {
          const ch = document.createElement("span");
          ch.className = "ch";
          ch.textContent = c;
          ch.style.setProperty("--dy", i % 2 ? "10px" : "-10px");
          ch.style.setProperty("--d-out", i * 25 + "ms");
          ch.style.setProperty("--d-in", Math.max(0, i * 25 + 280) + "ms");
          layer.appendChild(ch);
        });
        return layer;
      });
      wrap.append(sr, ...layers);
      text.replaceWith(wrap);
    });
  }

  /* ---- the set-up the scroll pieces need: tones stacking, pins, wipes */

  const wipes = Array.from(document.querySelectorAll(".wipe")).map((el) => ({
    el,
    stage: el.querySelector(".wipe-stage"),
    bands: Array.from(el.querySelectorAll("i")).reverse(),
    tone: null
  }));
  const sections = Array.from(document.querySelectorAll("main > section"));
  const pins = Array.from(document.querySelectorAll("[data-pin]"));

  function layout() {
    const motion = !reduced.matches;
    root.classList.toggle("fx", motion);
    sections.forEach((s, i) => {
      s.style.setProperty("--z", i + 1);
      const prev = s.previousElementSibling;
      s.classList.toggle("pulled", !!(prev && prev.querySelector(":scope > .wipe")));
    });
    const vh = wipes[0] ? wipes[0].stage.offsetHeight || window.innerHeight : window.innerHeight;
    pins.forEach((p) => p.style.setProperty("--pin-top", Math.round(vh - p.offsetHeight) + "px"));
    wipes.forEach((w) => { w.tone = getComputedStyle(w.el).getPropertyValue("--wipe-tone"); });
  }

  /* ---- scroll-scrubbed pieces */

  function initScroll() {
    const header = document.querySelector("[data-header]");
    const dividers = Array.from(document.querySelectorAll(".divider:not(.hero-divider)"));
    const steps = Array.from(document.querySelectorAll("[data-step]"));
    const facts = Array.from(document.querySelectorAll("[data-fact]")).map((el) => ({ el, cur: 0, target: 0 }));
    const factRow = document.querySelector("[data-facts]");
    const fills = Array.from(document.querySelectorAll("[data-fill]")).map((el) => {
      const chars = splitAccessible(el);
      el.dataset.ready = "";
      return { el, chars };
    });
    steps.forEach((s) => { s.dataset.ready = ""; });
    let settling = false;

    function update() {
      const vh = window.innerHeight;

      dividers.forEach((d) => {
        const top = d.getBoundingClientRect().top;
        d.style.setProperty("--p", clamp((vh - top) / (vh * 0.5)).toFixed(3));
      });

      steps.forEach((s) => {
        const p = clamp((vh * 0.95 - s.getBoundingClientRect().bottom) / (vh * 0.35));
        s.style.setProperty("--p", p.toFixed(3));
        if (p > 0.4) s.classList.add("is-in");
      });

      fills.forEach(({ el, chars }) => {
        const r = el.getBoundingClientRect();
        const p = clamp((vh * 0.8 - r.top) / Math.max(1, vh * 0.3 + r.height * 0.5));
        const lit = Math.round(p * chars.length);
        chars.forEach((ch, i) => ch.classList.toggle("is-on", i < lit));
      });

      /* key facts: the row unfolds as it rises from 90% to 30% of the viewport, cards 0.6 apart */
      if (factRow) {
        if (wide.matches) {
          const p = clamp((vh * 0.9 - factRow.getBoundingClientRect().top) / (vh * 0.6));
          facts.forEach((f, i) => { f.target = clamp((p * 2.65 - i * 0.6) / 1.45); });
        } else {
          facts.forEach((f) => { f.target = clamp((vh * 0.95 - f.el.getBoundingClientRect().top) / (vh * 0.4)); });
        }
      }

      /* the stripe wipes: bottom band first, each band half the run, 0.125 apart */
      let wipeTone = null;
      wipes.forEach((w) => {
        const r = w.el.getBoundingClientRect();
        const run = Math.max(1, r.height - 2 * w.stage.offsetHeight);
        const p = clamp(-r.top / run);
        w.bands.forEach((band, k) => band.style.setProperty("--s", clamp((p - k * 0.125) / 0.5).toFixed(3)));
        if (p >= 1 && r.bottom > vh * 0.5) wipeTone = w.tone;
      });

      /* the header takes the tone painted under it; later sections sit on top */
      const y = header.getBoundingClientRect().bottom;
      const under = sections.slice().reverse().find((s) => {
        const r = s.getBoundingClientRect();
        return r.top <= y && r.bottom > y;
      });
      const tone = wipeTone || (under ? getComputedStyle(under).getPropertyValue("--tone") : "");
      if (tone) header.style.setProperty("--header-tone", tone);
    }

    /* the card unfold lags behind the scroll, as trionn's scrub: 2 does */
    function settleFacts() {
      let moving = false;
      facts.forEach((f) => {
        const next = f.cur + (f.target - f.cur) * 0.08;
        f.cur = Math.abs(f.target - next) < 0.001 ? f.target : next;
        if (f.cur !== f.target) moving = true;
        f.el.style.setProperty("--f", f.cur.toFixed(4));
      });
      if (moving) window.requestAnimationFrame(settleFacts);
      else settling = false;
    }

    function settleAll() {
      dividers.concat(steps).forEach((el) => el.style.setProperty("--p", "1"));
      steps.forEach((s) => s.classList.add("is-in"));
      fills.forEach(({ chars }) => chars.forEach((ch) => ch.classList.add("is-on")));
      facts.forEach((f) => { f.cur = f.target = 1; f.el.style.setProperty("--f", "1"); });
      wipes.forEach((w) => w.bands.forEach((b) => b.style.setProperty("--s", "0")));
    }

    let queued = false;
    const frame = () => {
      queued = false;
      if (reduced.matches) {
        const h = document.querySelector("[data-header]");
        const y = h.getBoundingClientRect().bottom;
        const under = sections.find((s) => { const r = s.getBoundingClientRect(); return r.top <= y && r.bottom > y; });
        if (under) h.style.setProperty("--header-tone", getComputedStyle(under).getPropertyValue("--tone"));
        return;
      }
      update();
      if (!settling) { settling = true; window.requestAnimationFrame(settleFacts); }
    };
    const request = () => { if (!queued) { queued = true; window.requestAnimationFrame(frame); } };
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", () => { layout(); request(); });
    const onModeChange = () => {
      layout();
      if (reduced.matches) settleAll();
      request();
    };
    reduced.addEventListener("change", onModeChange);
    wide.addEventListener("change", onModeChange);
    if (document.fonts) document.fonts.ready.then(() => { layout(); request(); });
    new ResizeObserver(() => { layout(); request(); }).observe(document.querySelector("main"));
    if (reduced.matches) settleAll();
    request();
  }

  /* ---- the menu: trionn's panel, a circle opening from the toggle in 1.2s, closing 1.75x faster */

  function initMenu() {
    const header = document.querySelector("[data-header]");
    const toggle = header.querySelector(".menu-toggle");
    const menu = header.querySelector(".menu");
    const text = toggle.querySelector(".menu-toggle-text");
    const closedText = text.textContent;
    let openedAt = 0;
    toggle.hidden = false;
    menu.querySelectorAll(".menu-list li").forEach((li, i) => li.style.setProperty("--i", i));
    menu.querySelector(".menu-meta").style.setProperty("--i", 7);

    function set(open) {
      header.classList.toggle("menu-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      text.textContent = open ? text.dataset.openText : closedText;
      openedAt = window.scrollY;
    }
    const isOpen = () => header.classList.contains("menu-open");
    toggle.addEventListener("click", () => set(!isOpen()));
    menu.addEventListener("click", (e) => { if (e.target.closest("a")) set(false); });
    document.addEventListener("click", (e) => {
      if (isOpen() && !menu.contains(e.target) && !toggle.contains(e.target)) set(false);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && isOpen()) { set(false); toggle.focus(); }
    });
    window.addEventListener("scroll", () => { if (isOpen() && Math.abs(window.scrollY - openedAt) > 50) set(false); }, { passive: true });
    window.addEventListener("resize", () => { if (isOpen()) set(false); });
  }

  /* ---- testimonials: an index of three, square arrows, a fading panel */

  function initTabs() {
    const box = document.querySelector("[data-tabs]");
    if (!box) return;
    const index = box.querySelector("[data-tab-index]");
    const tabs = Array.from(box.querySelectorAll("[role=tab]"));
    const panels = tabs.map((t) => document.getElementById(t.getAttribute("aria-controls")));
    let current = 0;
    index.hidden = false;
    box.classList.add("tabs-on");
    panels.forEach((p) => { p.setAttribute("role", "tabpanel"); p.tabIndex = 0; });

    function show(i, focus) {
      current = (i + tabs.length) % tabs.length;
      tabs.forEach((t, k) => {
        const on = k === current;
        t.setAttribute("aria-selected", String(on));
        t.tabIndex = on ? 0 : -1;
        panels[k].classList.toggle("is-current", on);
        panels[k].hidden = false;
      });
      if (focus) tabs[current].focus();
    }
    tabs.forEach((t, i) => {
      t.addEventListener("click", () => show(i));
      t.addEventListener("keydown", (e) => {
        const moves = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
        if (e.key in moves) { e.preventDefault(); show(current + moves[e.key], true); }
        if (e.key === "Home") { e.preventDefault(); show(0, true); }
        if (e.key === "End") { e.preventDefault(); show(tabs.length - 1, true); }
      });
    });
    box.querySelectorAll("[data-step-by]").forEach((b) => {
      b.addEventListener("click", () => show(current + Number(b.dataset.stepBy)));
    });
    show(0);
  }

  /* ---- the form: trionn's full data capture, validated on submit, sent as an email */

  function initForm() {
    const form = document.querySelector("[data-form]");
    if (!form) return;
    const get = (name) => form.elements[name];
    form.querySelectorAll(".field-control").forEach((c) => {
      const sync = () => c.classList.toggle("is-filled", c.tagName !== "SELECT" && c.value.trim() !== "");
      c.addEventListener("input", () => {
        sync();
        if (c.getAttribute("aria-invalid") === "true" && valid(c)) setError(c, false);
      });
    });

    function valid(c) {
      if (!c.required) return true;
      return c.value.trim() !== "" && c.validity.valid;
    }
    function setError(c, on) {
      const field = c.closest("[data-field]");
      const msg = field.querySelector(".field-error");
      c.setAttribute("aria-invalid", String(on));
      if (msg) msg.textContent = on ? msg.dataset.error : "";
      if (on && !reduced.matches) {
        field.classList.remove("is-shaking");
        void field.offsetWidth;
        field.classList.add("is-shaking");
      }
    }
    form.addEventListener("animationend", (e) => e.target.classList.remove("is-shaking"));

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const controls = Array.from(form.querySelectorAll(".field-control"));
      const bad = controls.filter((c) => !valid(c));
      controls.forEach((c) => setError(c, bad.includes(c)));
      if (bad.length) { bad[0].focus(); return; }
      const body = [
        "Name: " + get("name").value.trim(),
        "Email: " + get("email").value.trim(),
        "Service: " + get("service").value,
        "Budget: " + get("budget").value.trim(),
        "",
        "What problem do you want solved?",
        get("problem").value.trim()
      ].join("\n");
      window.location.href = "mailto:hello@hurulab.com?subject=" +
        encodeURIComponent("30-minute discovery call") + "&body=" + encodeURIComponent(body);
    });
  }

  /* ---- the footer: the page lifts off it; the huge name blurs in and follows the pointer */

  function initFooter() {
    const footer = document.querySelector("[data-footer]");
    const name = footer.querySelector("[data-name]");
    const letters = Array.from(name.textContent.trim(), (c) => {
      const ch = document.createElement("span");
      ch.className = "ch";
      ch.textContent = c;
      return ch;
    });
    name.replaceChildren(...letters);
    name.dataset.ready = "";
    const starts = shuffle(letters.length).map((k) => k * 0.06);
    const state = letters.map(() => ({ w: 700, y: 0, c: 0 }));
    let pointer = null;
    let running = false;

    const inner = footer.querySelector(".footer-inner");
    const fit = () => footer.classList.toggle("is-tall", inner.offsetHeight > window.innerHeight + 1);
    fit();
    window.addEventListener("resize", fit);
    if (document.fonts) document.fonts.ready.then(fit);

    function tick() {
      const vh = window.innerHeight;
      const r = footer.getBoundingClientRect();
      const shown = clamp((vh - r.top) / vh);
      const still = reduced.matches;
      let moving = false;
      letters.forEach((ch, i) => {
        const o = still ? 1 : clamp((shown - 0.35 - starts[i]) / 0.3);
        let target = { w: 700, y: 0, c: 0 };
        if (pointer && !still) {
          const b = ch.getBoundingClientRect();
          const d = Math.abs(pointer - (b.left + b.width / 2)) / (b.width * 1.6);
          const k = d < 1 ? (Math.cos(d * Math.PI) + 1) / 2 : 0;
          target = { w: 700 - 500 * k, y: -0.12 * k, c: d < 0.35 ? 1 : 0 };
        }
        const s = state[i];
        ["w", "y", "c"].forEach((key) => {
          const next = s[key] + (target[key] - s[key]) * 0.14;
          s[key] = Math.abs(target[key] - next) < 0.002 ? target[key] : next;
          if (s[key] !== target[key]) moving = true;
        });
        ch.style.setProperty("--o", o.toFixed(3));
        ch.style.setProperty("--y", ((1 - o) * 0.35 + s.y).toFixed(3) + "em");
        ch.style.setProperty("--w", Math.round(s.w));
        ch.style.setProperty("--c", s.c.toFixed(3));
      });
      if (moving) window.requestAnimationFrame(tick);
      else running = false;
    }
    const run = () => { if (!running) { running = true; window.requestAnimationFrame(tick); } };

    footer.addEventListener("pointermove", (e) => { pointer = e.clientX; run(); });
    footer.addEventListener("pointerdown", (e) => { pointer = e.clientX; run(); });
    footer.addEventListener("pointerleave", () => { pointer = null; run(); });
    footer.addEventListener("pointercancel", () => { pointer = null; run(); });
    window.addEventListener("scroll", run, { passive: true });
    reduced.addEventListener("change", run);
    run();
  }

  layout();
  initMenu();
  initButtons();
  initLinkSwap();
  initRotator();
  initReveals();
  initScroll();
  initTabs();
  initForm();
  initFooter();
})();
