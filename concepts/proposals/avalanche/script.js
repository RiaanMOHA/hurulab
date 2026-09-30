/* hurulab proposal, avalanche.com. Motion only enhances: every hidden state in
   styles.css waits for the .motion class this script adds after it has split the
   text, so the page reads in full if the script never runs. */
(function () {
  "use strict";

  const root = document.documentElement;
  const desktop = window.matchMedia("(min-width: 1025px)");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

  /* ---- split text into masked lines ------------------------------------ */
  const splitTargets = Array.from(document.querySelectorAll("[data-split]"));
  splitTargets.forEach(function (el) { el.dataset.source = el.innerHTML; });

  function wordsOf(el) {
    const tpl = document.createElement("div");
    tpl.innerHTML = el.dataset.source;
    const words = [];
    tpl.childNodes.forEach(function (node) {
      const cls = node.nodeType === 1 ? node.className : "";
      node.textContent.split(/\s+/).forEach(function (w) {
        if (w) words.push({ text: w, cls: cls });
      });
    });
    return words;
  }

  function wordSpan(word) {
    const s = document.createElement("span");
    if (word.cls) s.className = word.cls;
    s.textContent = word.text;
    return s;
  }

  function appendWords(parent, words) {
    return words.map(function (w, i) {
      const s = wordSpan(w);
      parent.appendChild(s);
      if (i < words.length - 1) parent.appendChild(document.createTextNode(" "));
      return s;
    });
  }

  function split(el) {
    const words = wordsOf(el);
    el.textContent = "";
    const spans = appendWords(el, words);
    const lines = [];
    let top = null;
    spans.forEach(function (s, i) {
      if (top === null || Math.abs(s.offsetTop - top) > 2) {
        lines.push([]);
        top = s.offsetTop;
      }
      lines[lines.length - 1].push(words[i]);
    });
    el.textContent = "";
    lines.forEach(function (line, n) {
      const outer = document.createElement("span");
      outer.className = "line";
      const inner = document.createElement("span");
      inner.className = "line-in";
      inner.style.setProperty("--i", n);
      appendWords(inner, line);
      outer.appendChild(inner);
      el.appendChild(outer);
    });
  }

  function splitAll() { splitTargets.forEach(split); }

  /* ---- one .visible class per section, replayed on re-entry from below -- */
  function observeSections() {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) entry.target.classList.add("visible");
        else if (entry.boundingClientRect.top > 0) entry.target.classList.remove("visible");
      });
    }, { threshold: 0, rootMargin: "0px 0px -1px 0px" });
    document.querySelectorAll("[data-section]").forEach(function (s) { io.observe(s); });
  }

  /* ---- the headline: the blank drops in from above every 3s ------------ */
  const ITEMS = ["monthly reports", "online marketing", "morning brief", "product catalog",
    "competitor research", "ten-year-old website", "wholesale orders", "staff scheduling",
    "contract review", "knowledge base", "compliance paperwork", "meeting notes",
    "supplier prices", "product translations", "search rankings", "industry news"];
  const rotator = document.querySelector("[data-rotator]");
  const heroLine = document.querySelector(".hero-line");
  const pauseButton = document.querySelector(".rot-pause");
  let rotIndex = 0;
  let rotTimer = 0;
  let paused = false;

  /* The line keeps the height of its tallest item, so nothing below it moves. */
  function reserveHeadline() {
    heroLine.style.minHeight = "";
    const probe = heroLine.cloneNode(true);
    probe.classList.add("hero-probe");
    probe.classList.remove("line-in");
    const word = probe.querySelector("[data-rotator]");
    heroLine.parentNode.appendChild(probe);
    let tallest = 0;
    ITEMS.forEach(function (item) {
      word.innerHTML = '<span class="rot-word">' + item + ",</span>";
      tallest = Math.max(tallest, probe.offsetHeight);
    });
    probe.remove();
    heroLine.style.minHeight = tallest + "px";
  }

  function rotate() {
    const current = rotator.querySelector(".is-current");
    rotIndex = (rotIndex + 1) % ITEMS.length;
    const next = document.createElement("span");
    next.className = "rot-word is-entering";
    next.textContent = ITEMS[rotIndex] + ",";
    rotator.appendChild(next);
    void next.offsetHeight;
    next.classList.add("go");
    current.classList.remove("is-current");
    current.classList.add("is-leaving");
    setTimeout(function () {
      current.remove();
      next.className = "rot-word is-current";
    }, 1000);
  }

  function syncRotator() {
    const allowed = !reduced.matches;
    pauseButton.hidden = !allowed;
    const run = allowed && !paused && !document.hidden;
    if (run && !rotTimer) rotTimer = setInterval(rotate, 3000);
    if (!run && rotTimer) { clearInterval(rotTimer); rotTimer = 0; }
  }

  pauseButton.addEventListener("click", function () {
    paused = !paused;
    pauseButton.setAttribute("aria-pressed", String(paused));
    pauseButton.querySelector(".sr-only").textContent =
      paused ? "Play the rotating headline" : "Pause the rotating headline";
    syncRotator();
  });
  document.addEventListener("visibilitychange", syncRotator);
  reduced.addEventListener("change", syncRotator);

  let lastWidth = window.innerWidth;
  let resizeTimer = 0;
  window.addEventListener("resize", function () {
    if (window.innerWidth === lastWidth) return;
    lastWidth = window.innerWidth;
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () { splitAll(); reserveHeadline(); }, 150);
  });

  /* ---- navigation drawer ----------------------------------------------- */
  const toggle = document.querySelector(".nav-toggle");
  function setMenu(open) {
    toggle.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("nav-open", open);
  }
  toggle.addEventListener("click", function () {
    setMenu(toggle.getAttribute("aria-expanded") !== "true");
  });
  document.querySelectorAll(".nav-links a").forEach(function (a) {
    a.addEventListener("click", function () { setMenu(false); });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setMenu(false);
      toggle.focus();
    }
  });
  desktop.addEventListener("change", function () { setMenu(false); });

  /* ---- the team: nine named tabs, one panel ----------------------------- */
  function roundButton(chevClass, label) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "round";
    b.innerHTML = '<span class="' + chevClass + '" aria-hidden="true"></span><span class="sr-only">' + label + "</span>";
    return b;
  }

  const steps = document.querySelector("[data-steps]");
  const panels = Array.from(steps.querySelectorAll(".step"));
  const panelWrap = steps.querySelector(".steps-panels");
  const rail = document.createElement("div");
  rail.className = "steps-rail";
  rail.setAttribute("role", "tablist");
  rail.setAttribute("aria-label", "What we bring");
  const stepMain = document.createElement("div");
  stepMain.className = "steps-main";
  const stepNav = document.createElement("div");
  stepNav.className = "steps-nav";
  const prevStep = roundButton("chev chev-left", "Previous");
  const nextStep = roundButton("chev", "Next");
  stepNav.append(prevStep, nextStep);
  steps.insertBefore(rail, panelWrap);
  steps.insertBefore(stepMain, panelWrap);
  stepMain.append(panelWrap, stepNav);

  const tabs = panels.map(function (panel, i) {
    const tab = document.createElement("button");
    tab.type = "button";
    tab.className = "steps-tab";
    tab.id = panel.id + "-tab";
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-controls", panel.id);
    tab.innerHTML = '<span class="num" aria-hidden="true">' + String(i + 1).padStart(2, "0") + "</span><span></span>";
    tab.lastChild.textContent = panel.querySelector(".step-title").textContent.trim();
    tab.addEventListener("click", function () { selectStep(i); });
    rail.appendChild(tab);
    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("aria-labelledby", tab.id);
    panel.tabIndex = 0;
    return tab;
  });

  let activeStep = 0;
  function selectStep(i, focus) {
    activeStep = (i + panels.length) % panels.length;
    panels.forEach(function (p, n) { p.hidden = n !== activeStep; });
    tabs.forEach(function (t, n) {
      const on = n === activeStep;
      t.setAttribute("aria-selected", String(on));
      t.tabIndex = on ? 0 : -1;
    });
    const tab = tabs[activeStep];
    if (!desktop.matches) {
      rail.scrollTo({ left: tab.offsetLeft - tabs[0].offsetLeft,
        behavior: reduced.matches ? "auto" : "smooth" });
    }
    if (focus) tab.focus({ preventScroll: true });
  }
  rail.addEventListener("keydown", function (e) {
    const keys = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
    if (e.key in keys) { e.preventDefault(); selectStep(activeStep + keys[e.key], true); }
    if (e.key === "Home") { e.preventDefault(); selectStep(0, true); }
    if (e.key === "End") { e.preventDefault(); selectStep(panels.length - 1, true); }
  });
  prevStep.addEventListener("click", function () { selectStep(activeStep - 1); });
  nextStep.addEventListener("click", function () { selectStep(activeStep + 1); });
  selectStep(0);

  /* ---- what we do: the two stages as accordion rows, one open at a time - */
  const stages = Array.from(document.querySelectorAll("[data-stages] .stage"));
  function openStage(index) {
    stages.forEach(function (stage, n) {
      const open = n === index;
      stage.classList.toggle("is-open", open);
      stage.querySelector(".stage-button").setAttribute("aria-expanded", String(open));
      stage.querySelector(".stage-body").inert = !open;
    });
  }
  stages.forEach(function (stage, n) {
    stage.querySelector(".stage-button").addEventListener("click", function () {
      openStage(stage.classList.contains("is-open") ? -1 : n);
    });
  });
  openStage(0);

  /* ---- the problem: clip-path tiles on desktop, accordion below -------- */
  const tileGroup = document.querySelector("[data-tiles]");
  const tiles = Array.from(tileGroup.querySelectorAll(".tile"));
  let activeTile = 0;

  function layoutTiles() {
    tileGroup.dataset.mode = desktop.matches ? "clip" : "accordion";
    const strip = 25 / (tiles.length - 1);
    tiles.forEach(function (tile, i) {
      const on = i === activeTile;
      let l;
      if (i < activeTile) l = i * strip;
      else if (on) l = activeTile * strip;
      else l = activeTile * strip + 75 + (i - activeTile - 1) * strip;
      tile.style.setProperty("--l", l);
      tile.style.setProperty("--w", on ? 75 : strip);
      tile.classList.toggle("is-on", on);
      tile.querySelector(".tile-num").setAttribute("aria-expanded", String(on));
      tile.querySelector(".tile-body").inert = !on;
    });
  }

  tiles.forEach(function (tile, i) {
    tile.querySelector(".tile-num").addEventListener("click", function (e) {
      e.stopPropagation();
      activeTile = i;
      layoutTiles();
    });
    tile.addEventListener("click", function () {
      if (desktop.matches && activeTile !== i) { activeTile = i; layoutTiles(); }
    });
  });
  desktop.addEventListener("change", layoutTiles);
  layoutTiles();

  /* ---- contact: open the visitor's mail app ---------------------------- */
  const form = document.querySelector("[data-mailto]");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const choice = form.elements.problem.value;
    const details = form.elements.details.value.trim();
    const parts = [];
    if (choice) parts.push("What problem do you want solved? " + choice);
    if (details) parts.push(details);
    window.location.href = "mailto:hello@hurulab.com?subject=" +
      encodeURIComponent("30-minute discovery call") + "&body=" + encodeURIComponent(parts.join("\n\n"));
  });

  /* ---- start: split once the faces have loaded, then arm the reveals ---- */
  const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();
  fontsReady.then(function () {
    splitAll();
    reserveHeadline();
    root.classList.add("motion");
    void root.offsetHeight;
    setTimeout(function () {
      document.querySelectorAll("[data-section]").forEach(function (s) {
        const r = s.getBoundingClientRect();
        if (r.top < window.innerHeight - 1 && r.bottom > 0) s.classList.add("visible");
      });
      observeSections();
    }, 30);
    syncRotator();
  });
})();
