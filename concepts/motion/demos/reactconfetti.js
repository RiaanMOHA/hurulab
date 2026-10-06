/* Confetti, adapted: Send Message springs on hover and press, and a sent
   message bursts sixty small pieces in the identity's colors from the button. */
(() => {
  const BUTTON_SPRING = { stiffness: 400, damping: 15 };
  const SETTINGS = {
    particleCount: 60,
    startVelocity: 25,
    spread: 100,
    decay: 0.91,
    gravity: 1,
    drift: 0,
    duration: 2.5,
    size: 1,
  };
  const COLORS = [
    "var(--p-default)",
    "var(--p-hover)",
    "var(--p-300)",
    "var(--p-400)",
    "var(--a-default)",
    "var(--n-950)",
    "var(--n-500)",
  ];
  const SHAPES = ["circle", "rect", "rect", "strip", "strip"];
  const STEPS = 40;
  const POP = 0.08;
  const pick = (list) => list[Math.floor(Math.random() * list.length)];

  // The source's physics, unchanged: 41 keyframes over 150 ticks.
  function keyframes({ angle, velocity, wobbleSpeed, wobbleOffset, tiltRotations, rotation }) {
    const { decay, gravity, drift, size, duration } = SETTINGS;
    const ticks = Math.round(duration * 60);
    const frames = [];
    let vel = velocity;
    let x = 0;
    let y = 0;
    let wob = wobbleOffset;
    let tick = 0;
    for (let step = 0; step <= STEPS; step++) {
      const s = step / STEPS;
      if (step > 0) {
        const targetTick = Math.round((step * ticks) / STEPS);
        while (tick < targetTick) {
          x += Math.cos(angle) * vel + drift;
          y += Math.sin(angle) * vel + gravity * 3;
          vel *= decay;
          wob += wobbleSpeed;
          tick++;
        }
      }
      const px = step === 0 ? 0 : x + Math.cos(wob) * 15 * size;
      let scale = 1;
      if (s < POP * 0.6) scale = (s / (POP * 0.6)) * 1.15;
      else if (s < POP) scale = 1.15 - ((s - POP * 0.6) / (POP * 0.4)) * 0.15;
      let opacity = 1;
      if (s > 0.8) opacity = 0.5 - ((s - 0.8) / 0.2) * 0.5;
      else if (s > 0.5) opacity = 1 - ((s - 0.5) / 0.3) * 0.5;
      frames.push({
        transform: `translate(${px}px, ${y}px) scale(${scale}) rotateY(${tiltRotations * 360 * s}deg) rotate(${rotation}deg)`,
        opacity,
      });
    }
    return frames;
  }

  function particle() {
    const { startVelocity, spread, size } = SETTINGS;
    const spreadRad = spread * (Math.PI / 180);
    const frames = keyframes({
      angle: -Math.PI / 2 + (0.5 * spreadRad - Math.random() * spreadRad),
      velocity: startVelocity * 0.5 + Math.random() * startVelocity,
      wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
      wobbleOffset: Math.random() * 10,
      tiltRotations: 2 + Math.random() * 4,
      rotation: Math.random() * 360,
    });
    const base = 6 * size + Math.random() * 6 * size;
    const shape = pick(SHAPES);
    const node = M.el("div", "piece");
    node.style.width = `${shape === "strip" ? base * 0.3 : shape === "rect" ? base * 0.7 : base}px`;
    node.style.height = `${shape === "strip" ? base * 2 : base}px`;
    node.style.borderRadius = shape === "circle" ? "50%" : shape === "strip" ? `${base * 0.12}px` : "2px";
    node.style.backgroundColor = pick(COLORS);
    return { node, frames };
  }

  window.MOTION_DEMOS.push({
    id: "confetti-burst",
    title: "Sent message burst",
    source: "reactconfetti.md",
    section: "contact",
    where: "The Send Message button in the contact panel, at the moment the form turns into \"Message sent.\"",
    how: "Send Message springs up on hover and down on press, and a sent message throws a short burst of small purple, marigold and ink pieces up from the button that fall and fade within two and a half seconds.",
    css: `
      .m-confetti-burst .scene {
        position: absolute;
        inset: 0;
      }
      .m-confetti-burst .anchor {
        position: absolute;
        top: 62%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        width: min(24rem, calc(100% - 3rem));
      }
      .m-confetti-burst .trigger {
        position: relative;
        z-index: 1;
        user-select: none;
        will-change: transform;
      }
      .m-confetti-burst .trigger:focus-visible {
        outline: 2px solid var(--border-focus);
        outline-offset: 2px;
      }
      .m-confetti-burst .batch {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 2;
        pointer-events: none;
      }
      .m-confetti-burst .piece {
        position: absolute;
        pointer-events: none;
        will-change: transform, opacity;
      }
      .m-confetti-burst .sent {
        margin: 0;
        text-align: center;
        transition: opacity 300ms var(--ease);
      }
      .m-confetti-burst .sent[hidden] {
        display: block;
        visibility: hidden;
        opacity: 0;
      }
      .m-confetti-burst .sent strong {
        display: block;
        font: 700 1.2rem/1.3 var(--font-title);
        letter-spacing: -0.02em;
      }
      .m-confetti-burst .sent span {
        color: var(--text-secondary);
      }
    `,
    mount(stage) {
      const scene = M.el("div", "scene");
      const anchor = M.el("div", "anchor");
      const holder = M.el("div");
      holder.style.position = "relative";
      const trigger = M.el("button", "trigger m-button", "Send Message");
      trigger.type = "button";
      holder.append(trigger);
      const sent = M.el("p", "sent");
      sent.append(
        M.el("strong", "", "Message sent."),
        M.el("span", "", "Thanks for writing. We'll reply to you@example.com."),
      );
      sent.setAttribute("aria-live", "polite");
      anchor.append(holder, sent);
      scene.append(anchor);
      stage.append(scene);

      let hovered = false;
      const press = M.springs({ scale: 1 }, BUTTON_SPRING, ({ scale }) => {
        trigger.style.transform = `scale(${scale})`;
      });
      const rest = () => press.to({ scale: hovered ? 1.05 : 1 });
      trigger.addEventListener("pointerenter", () => {
        hovered = true;
        rest();
      });
      trigger.addEventListener("pointerleave", () => {
        hovered = false;
        rest();
      });
      trigger.addEventListener("pointerdown", () => press.to({ scale: 0.95 }));
      trigger.addEventListener("pointerup", rest);
      trigger.addEventListener("pointercancel", rest);

      // Each burst is its own layer and removes itself 0.5s after it ends.
      function fire() {
        sent.hidden = false;
        if (M.reduced()) return;
        const batch = M.el("div", "batch");
        const pieces = Array.from({ length: SETTINGS.particleCount }, particle);
        for (const { node } of pieces) batch.append(node);
        holder.append(batch);
        const duration = SETTINGS.duration * 1000;
        for (const { node, frames } of pieces) node.animate(frames, { duration, easing: "linear", fill: "forwards" });
        setTimeout(() => batch.remove(), duration + 500);
      }
      trigger.addEventListener("click", fire);
      sent.hidden = true;

      let run = 0;
      return {
        async play() {
          const id = ++run;
          sent.hidden = true;
          holder.querySelectorAll(".batch").forEach((batch) => batch.remove());
          press.set({ scale: 1 });
          if (M.reduced()) return fire();
          await M.wait(300);
          if (id !== run) return;
          press.to({ scale: 0.95 });
          await M.wait(140);
          if (id !== run) return;
          rest();
          fire();
        },
      };
    },
  });
})();
