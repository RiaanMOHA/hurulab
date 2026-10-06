(() => {
  const ID = "skeleton-shimmer";
  const WIPE = `--m-${ID}-wipe`;
  const SHIMMER_MS = 1500;
  const LOAD_DELAY = 2500;
  const REVEAL = { duration: 600, easing: M.easeInOut };

  try {
    CSS.registerProperty({ name: WIPE, syntax: "<percentage>", inherits: true, initialValue: "-100%" });
  } catch (error) {
    // Already registered on this page.
  }

  window.MOTION_DEMOS.push({
    id: ID,
    title: "Skeleton shimmer",
    source: "reactskeletonshimmer.md",
    section: "contact",
    where: "The contact panel, between pressing Send Message and the \"Message sent.\" confirmation.",
    how: "While the message is on its way, the confirmation's own shapes shimmer in place, then a soft wipe reveals the real text with nothing moving or resizing.",
    css: `
.m-${ID} .shell { display: grid; width: min(100% - 2rem, 24rem); padding: 2rem 0; }
.m-${ID} .shell > * { grid-area: 1 / 1; }
.m-${ID} [hidden] { display: none !important; }
.m-${ID} .panel { display: flex; flex-direction: column; gap: 1rem; }
.m-${ID} label { display: flex; flex-direction: column; gap: 0.375rem; font: 500 0.7901rem/1.2 var(--font-title); }
.m-${ID} input, .m-${ID} textarea { width: 100%; padding: 0.625rem 0.875rem; border: 1px solid var(--border-interactive); border-radius: 0.75rem;
  background: var(--surface-page); color: var(--text-primary); font: 400 0.8889rem/1.4 var(--font-body); resize: none; }
.m-${ID} input:focus-visible, .m-${ID} textarea:focus-visible, .m-${ID} .m-button:focus-visible { outline: 2px solid var(--border-focus); outline-offset: 2px; }
.m-${ID} .m-button { align-self: flex-start; }
.m-${ID} .m-button:not(.border):hover { background: var(--surface-brand-hover); }
.m-${ID} .done h4 { margin: 0; font: 700 clamp(1.728rem, 1.5rem + 1.1vw, 2.488rem)/1.2 var(--font-title); letter-spacing: -0.02em; }
.m-${ID} .done p { margin: 0; color: var(--text-secondary); }
.m-${ID} .mark { display: block; width: 2.5rem; height: 2.5rem; border-radius: 999px; background: var(--surface-secondary); }
.m-${ID} .reveal { position: relative; display: grid; }
.m-${ID} .reveal > * { grid-area: 1 / 1; }
.m-${ID} .skeleton { position: relative; z-index: 2; pointer-events: none;
  -webkit-mask-image: linear-gradient(to right, black var(${WIPE}), transparent calc(var(${WIPE}) + 100%));
  mask-image: linear-gradient(to right, black var(${WIPE}), transparent calc(var(${WIPE}) + 100%)); }
.m-${ID} .bone { width: fit-content; max-width: 100%; border-radius: 0.5rem; overflow: hidden;
  background: linear-gradient(90deg, var(--surface-sunken) 25%, var(--surface-raised) 50%, var(--surface-sunken) 75%);
  background-size: 200% 100%; animation: m-${ID}-shimmer ${SHIMMER_MS}ms ${M.easeInOut} infinite; }
.m-${ID} .bone > * { visibility: hidden; }
.m-${ID} .bone.round { border-radius: 999px; }
@keyframes m-${ID}-shimmer { from { background-position: -200% 0; } to { background-position: 200% 0; } }
@media (prefers-reduced-motion: reduce) { .m-${ID} .bone { animation: none; } }
`,
    mount(stage) {
      const shell = M.el("div", "shell");

      const form = M.el("form", "m-card panel");
      form.noValidate = true;
      const emailLabel = M.el("label", "", "Email");
      const email = M.el("input");
      email.type = "email";
      email.value = "you@example.com";
      emailLabel.append(email);
      const messageLabel = M.el("label", "", "Message");
      const message = M.el("textarea");
      message.rows = 3;
      messageLabel.append(message);
      const send = M.el("button", "m-button", "Send Message");
      send.type = "submit";
      form.append(emailLabel, messageLabel, send);

      // The confirmation, built twice: the real one, and a skeleton sized by the same content.
      function confirmation(skeleton) {
        const panel = M.el("div", `m-card panel done${skeleton ? " skeleton" : ""}`);
        const wrap = (node, round) => {
          if (!skeleton) return node;
          const bone = M.el("div", `bone${round ? " round" : ""}`);
          bone.append(node);
          return bone;
        };
        const reply = M.el("p", "", "");
        const again = M.el("button", "m-button border", "Send Another Message");
        again.type = "button";
        panel.append(
          wrap(M.el("span", "mark"), true),
          wrap(M.el("h4", "", "Message sent.")),
          wrap(reply),
          wrap(again, true),
        );
        if (skeleton) panel.inert = true;
        return { panel, reply, again };
      }
      const real = confirmation(false);
      const ghost = confirmation(true);
      const reveal = M.el("div", "reveal");
      reveal.append(real.panel, ghost.panel);
      real.panel.setAttribute("role", "status");
      shell.append(form, reveal);
      stage.append(shell);

      let run = 0;
      let wipe = null;
      function showForm() {
        run++;
        if (wipe) wipe.cancel();
        form.hidden = false;
        reveal.hidden = true;
      }
      async function submit() {
        const token = ++run;
        const text = `Thanks for writing. We'll reply to ${email.value || "you"}.`;
        real.reply.textContent = text;
        ghost.reply.textContent = text;
        form.hidden = true;
        reveal.hidden = false;
        if (wipe) wipe.cancel();
        if (M.reduced()) {
          ghost.panel.hidden = true;
          real.panel.inert = false;
          return;
        }
        ghost.panel.hidden = false;
        ghost.panel.style.setProperty(WIPE, "100%");
        real.panel.inert = true;
        await M.wait(LOAD_DELAY);
        if (token !== run) return;
        wipe = ghost.panel.animate([{ [WIPE]: "100%" }, { [WIPE]: "-100%" }], { ...REVEAL, fill: "forwards" });
        await wipe.finished.catch(() => {});
        if (token !== run) return;
        ghost.panel.hidden = true;
        real.panel.inert = false;
      }

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        submit();
      });
      real.again.addEventListener("click", showForm);
      showForm();

      return {
        async play() {
          showForm();
          const token = run;
          if (M.reduced()) return submit();
          await M.wait(500);
          if (token !== run) return;
          send.animate([{ transform: "scale(1)" }, { transform: "scale(0.96)" }, { transform: "scale(1)" }], {
            duration: 200,
            easing: M.ease,
          });
          await M.wait(200);
          if (token !== run) return;
          submit();
        },
      };
    },
  });
})();
