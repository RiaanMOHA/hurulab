/*
 * The motion proposal page. Each demo is a classic script in demos/ that
 * registers itself (classic, not a module, so the page also opens from disk):
 *
 *   window.MOTION_DEMOS.push({
 *     id: "rolling-text-button",          // kebab case; the stage gets class m-<id>
 *     title: "Rolling text button",       // sentence case
 *     source: "rollingtextbutton.md",     // the write-up it came from
 *     section: "hero",                    // where on the landing page, a SECTIONS key
 *     where: "One sentence, ending with a period.",
 *     how: "One sentence, ending with a period.",
 *     css: `.m-rolling-text-button .x { ... }`,  // scoped under .m-<id>
 *     mount(stage) { ...build into stage...; return { play() {} }; },
 *   });
 *
 * `play()` resets the demo and runs it from the start; the Play button calls it.
 * Helpers for the demos are on `window.M`.
 * Springs are shared too: M.spring, M.springs, M.springConfig and M.springEasing.
 */
window.MOTION_DEMOS = window.MOTION_DEMOS || [];

// Fills in a spring's mass, rest distance, rest speed and integration substep.
function springOptions(config, step) {
  const options = { mass: 1, rest: 0.001, step, ...config };
  if (options.restSpeed === undefined) options.restSpeed = options.rest * 10;
  return options;
}

// One semi-implicit Euler substep of h seconds on a spring state { x, v, t }.
function springStep(s, o, h) {
  s.v += ((-o.stiffness * (s.x - s.t) - o.damping * s.v) / o.mass) * h;
  s.x += s.v * h;
}

const springSettled = (s, o) => Math.abs(s.v) < o.restSpeed && Math.abs(s.x - s.t) < o.rest;

// Advances a spring state by dt seconds; snaps it to its target and returns false once settled.
function springAdvance(s, o, dt) {
  const n = Math.max(1, Math.ceil(dt / o.step));
  for (let i = 0; i < n; i++) springStep(s, o, dt / n);
  if (!springSettled(s, o)) return true;
  s.x = s.t;
  s.v = 0;
  return false;
}

window.M = {
  ease: "cubic-bezier(0.2, 0, 0, 1)",
  easeExit: "cubic-bezier(0.6, 0, 0.8, 0.6)",
  // Motion's easeOut and easeInOut tweens.
  easeOut: "cubic-bezier(0, 0, 0.58, 1)",
  easeInOut: "cubic-bezier(0.42, 0, 0.58, 1)",
  reduced: () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  wait: (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
  lerp: (a, b, p) => a + (b - a) * p,
  el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  },

  // Motion's spring options, { visualDuration, bounce } or { stiffness, damping }, as stiffness and damping.
  springConfig(options) {
    if (options.stiffness) return { stiffness: options.stiffness, damping: options.damping };
    const root = (2 * Math.PI) / (options.visualDuration * 1.2);
    const stiffness = root * root;
    return { stiffness, damping: 2 * Math.min(1, Math.max(0.05, 1 - options.bounce)) * Math.sqrt(stiffness) };
  },

  // One number on a spring that keeps its velocity when retargeted; onUpdate(x, v) runs every frame.
  // to(next, done) runs done once settled; set(x, v) jumps; shift(d) moves value and target together.
  // config: stiffness, damping, and optionally mass, rest, restSpeed (rest * 10) and step (4ms).
  spring(config, onUpdate, from = 0) {
    const o = springOptions(config, 0.004);
    const s = { x: from, v: 0, t: from };
    let raf = 0;
    let last = 0;
    let done = null;
    function frame(now) {
      const dt = Math.max(0, Math.min((now - last) / 1000, 0.064));
      last = now;
      if (springAdvance(s, o, dt)) {
        onUpdate(s.x, s.v);
        raf = requestAnimationFrame(frame);
        return;
      }
      raf = 0;
      onUpdate(s.x, s.v);
      const callback = done;
      done = null;
      if (callback) callback();
    }
    return {
      to(next, callback) {
        s.t = next;
        done = callback || null;
        if (M.reduced()) {
          this.set(next);
          if (callback) callback();
          return;
        }
        if (!raf) {
          last = performance.now();
          raf = requestAnimationFrame(frame);
        }
      },
      set(next, velocity = 0) {
        cancelAnimationFrame(raf);
        raf = 0;
        s.x = s.t = next;
        s.v = velocity;
        done = null;
        onUpdate(s.x, s.v);
      },
      shift(delta) {
        s.x += delta;
        s.t += delta;
        onUpdate(s.x, s.v);
      },
      get value() {
        return s.x;
      },
    };
  },

  // Named numbers on one shared spring and frame loop; render(values, moving) runs every frame.
  // to(targets) retargets mid-flight; set(values) jumps. config as M.spring, with a 2ms step.
  springs(initial, config, render) {
    const o = springOptions(config, 0.002);
    const state = {};
    for (const key in initial) state[key] = { x: initial[key], v: 0, t: initial[key] };
    let frame = 0;
    let last = 0;
    const values = () => Object.fromEntries(Object.entries(state).map(([key, s]) => [key, s.x]));
    function tick(now) {
      const dt = Math.max(0, Math.min(0.05, (now - last) / 1000));
      last = now;
      let moving = false;
      for (const s of Object.values(state)) if (springAdvance(s, o, dt)) moving = true;
      frame = moving ? requestAnimationFrame(tick) : 0;
      render(values(), moving);
    }
    return {
      to(target) {
        if (M.reduced()) return this.set(target);
        for (const key in target) state[key].t = target[key];
        if (!frame) {
          last = performance.now();
          frame = requestAnimationFrame(tick);
        }
        return this;
      },
      set(target) {
        for (const key in target) Object.assign(state[key], { x: target[key], v: 0, t: target[key] });
        render(values(), Boolean(frame));
        return this;
      },
    };
  },

  // Samples a mass-1 spring from 0 to 1 into a CSS linear() easing and its settle time in ms.
  springEasing({ stiffness, damping }) {
    const o = springOptions({ stiffness, damping }, 0);
    const s = { x: 0, v: 0, t: 1 };
    const h = 1 / 600;
    let t = 0;
    const points = ["0"];
    while (t < 3) {
      for (let i = 0; i < 10; i++) {
        springStep(s, o, h);
        t += h;
      }
      points.push(s.x.toFixed(4));
      if (springSettled(s, o)) break;
    }
    points.push("1");
    return { easing: `linear(${points.join(", ")})`, duration: Math.round(t * 1000) };
  },
};

const SECTIONS = {
  header: "The header and menu",
  hero: "The hero",
  problem: "The problem",
  discovery: "Discovery",
  services: "What we bring",
  contact: "The contact panel",
  closing: "The closing and footer",
  page: "Across the page",
};

const PLAY_ICON =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="6 3 20 12 6 21 6 3"/></svg>';

function card(demo, number) {
  const item = M.el("li", "motion");
  item.id = demo.id;

  const stage = M.el("div", `stage m-${demo.id}`);
  const about = M.el("div", "about");
  about.append(
    M.el("span", "number", String(number).padStart(2, "0")),
    M.el("h3", "", demo.title),
  );

  const where = M.el("p");
  where.append(M.el("span", "label", "Where"), demo.where);
  const how = M.el("p");
  how.append(M.el("span", "label", "How"), demo.how);

  const play = M.el("button", "play");
  play.type = "button";
  play.innerHTML = `${PLAY_ICON}<span>Play</span>`;
  play.setAttribute("aria-label", `Play the ${demo.title.toLowerCase()}`);

  about.append(where, how, play, M.el("span", "source", demo.source));
  item.append(stage, about);

  if (demo.css) {
    const style = document.createElement("style");
    style.textContent = demo.css;
    document.head.append(style);
  }
  const controls = demo.mount(stage) || {};
  play.addEventListener("click", () => controls.play && controls.play());
  return item;
}

function render() {
  const root = document.getElementById("motions");
  let number = 0;
  for (const [key, heading] of Object.entries(SECTIONS)) {
    const demos = window.MOTION_DEMOS.filter((demo) => demo.section === key);
    if (!demos.length) continue;
    root.append(M.el("h2", "", heading));
    const list = M.el("ol", "motions");
    for (const demo of demos) list.append(card(demo, ++number));
    root.append(list);
  }
}

document.addEventListener("DOMContentLoaded", render);
