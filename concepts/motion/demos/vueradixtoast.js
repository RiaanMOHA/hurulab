(() => {
  const ID = "sent-toast";
  // Motion's default spring as measured: visualDuration 0.3, bounce 0.3.
  const DEFAULT = { stiffness: 304.6, damping: 24.4 };
  const OFFSET = 100;
  const THRESHOLD = 100;
  const ELASTIC = 0.1;
  const DURATION = 3000;
  const FALLBACK_EMAIL = "you@example.com";

  window.MOTION_DEMOS.push({
    id: ID,
    title: "Message sent notice",
    source: "vueradixtoast.md",
    section: "contact",
    where: "The sent state of the contact panel, after the visitor presses Send Message.",
    how: "The Message sent note slides in from the right with a small spring, can be swiped away to the right, and fades and shrinks out on its own after three seconds or when Send Another Message is chosen.",
    css: `
.m-sent-toast .form {
  display: grid;
  gap: 0.875rem;
  width: min(26rem, calc(100% - 2rem));
  margin-bottom: 4.5rem;
}
.m-sent-toast .row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
  gap: 0.875rem;
}
.m-sent-toast label {
  display: grid;
  gap: 0.375rem;
  color: var(--text-secondary);
  font: 500 0.7901rem/1.2 var(--font-title);
}
.m-sent-toast input,
.m-sent-toast textarea {
  width: 100%;
  padding: 0.625rem 1rem;
  border: 1px solid var(--border-interactive);
  border-radius: 999px;
  background: var(--surface-page);
  color: var(--text-primary);
  font: 400 1rem/1.3 var(--font-body);
}
.m-sent-toast textarea { border-radius: 1rem; resize: none; }
.m-sent-toast input:focus-visible,
.m-sent-toast textarea:focus-visible,
.m-sent-toast button:focus-visible { outline: 2px solid var(--border-focus); outline-offset: 2px; }
.m-sent-toast .send { justify-self: start; }
.m-sent-toast .viewport {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  z-index: 2;
  width: min(22rem, calc(100% - 2rem));
}
.m-sent-toast .toast {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.375rem;
  padding: 1rem 1.25rem;
  touch-action: pan-y;
  user-select: none;
  cursor: grab;
}
.m-sent-toast .toast-title { margin: 0; font-size: 1rem; }
.m-sent-toast .toast-text { margin: 0; color: var(--text-secondary); font-size: 0.9375rem; overflow-wrap: anywhere; }
.m-sent-toast .toast .m-button {
  min-height: 2.25rem;
  margin-top: 0.375rem;
  padding: 0.375rem 1rem;
  font-size: 0.7901rem;
}
`,
    mount(stage) {
      const form = M.el("div", "form");
      const field = (text, node) => {
        const label = M.el("label", "", text);
        label.append(node);
        return label;
      };
      const name = M.el("input");
      name.type = "text";
      name.autocomplete = "off";
      const email = M.el("input");
      email.type = "email";
      email.autocomplete = "off";
      email.value = FALLBACK_EMAIL;
      const message = M.el("textarea");
      message.rows = 2;
      const row = M.el("div", "row");
      row.append(field("Name", name), field("Email", email));
      const send = M.el("button", "m-button send", "Send Message");
      send.type = "button";
      form.append(row, field("Message", message), send);

      const viewport = M.el("div", "viewport");
      viewport.setAttribute("role", "status");
      stage.append(form, viewport);

      const press = M.spring(DEFAULT, (p) => { send.style.transform = `scale(${1 - 0.1 * p})`; });

      let current = null;
      let queued = false;
      let script = 0;

      function createToast() {
        const node = M.el("div", "toast m-card");
        node.append(
          M.el("p", "toast-title m-title", "Message sent."),
          M.el("p", "toast-text", `Thanks for writing. We'll reply to ${email.value.trim() || FALLBACK_EMAIL}.`),
        );
        const again = M.el("button", "m-button", "Send Another Message");
        again.type = "button";
        node.append(again);

        const toast = { node, leaving: false, timer: 0, started: 0, remaining: DURATION };
        const look = { x: OFFSET, o: 0, s: 1 };
        const paint = () => {
          node.style.opacity = Math.max(0, Math.min(1, look.o));
          node.style.transform = `translateX(${look.x}px) scale(${look.s})`;
        };
        toast.x = M.spring({ ...DEFAULT, rest: 0.1 }, (x) => {
          look.x = x;
          paint();
          if (x > THRESHOLD) dismiss(toast);
        });
        toast.o = M.spring(DEFAULT, (o) => { look.o = o; paint(); });
        toast.s = M.spring(DEFAULT, (s) => { look.s = s; paint(); });

        const startTimer = () => {
          toast.started = performance.now();
          toast.timer = setTimeout(() => dismiss(toast), toast.remaining);
        };
        const pauseTimer = () => {
          clearTimeout(toast.timer);
          toast.remaining = Math.max(0, toast.remaining - (performance.now() - toast.started));
        };
        toast.startTimer = startTimer;
        node.addEventListener("pointerenter", pauseTimer);
        node.addEventListener("pointerleave", () => { if (!toast.leaving) startTimer(); });

        again.addEventListener("click", () => {
          message.value = "";
          dismiss(toast);
        });

        let grab = null;
        node.addEventListener("pointerdown", (event) => {
          if (event.target.closest("button") || toast.leaving) return;
          node.setPointerCapture(event.pointerId);
          grab = event.clientX - toast.x.value;
        });
        node.addEventListener("pointermove", (event) => {
          if (grab === null) return;
          const raw = event.clientX - grab;
          toast.x.set(raw < 0 ? raw * ELASTIC : raw);
        });
        const release = () => {
          if (grab === null) return;
          grab = null;
          if (!toast.leaving) toast.x.to(0);
        };
        node.addEventListener("pointerup", release);
        node.addEventListener("pointercancel", release);
        return toast;
      }

      function show() {
        const toast = createToast();
        current = toast;
        viewport.append(toast.node);
        toast.x.set(OFFSET);
        toast.o.set(0);
        toast.s.set(1);
        toast.x.to(0);
        toast.o.to(1);
        toast.startTimer();
      }

      function dismiss(toast) {
        if (toast.leaving) return;
        toast.leaving = true;
        clearTimeout(toast.timer);
        toast.s.to(0.9);
        toast.o.to(0, () => {
          toast.node.remove();
          if (current === toast) current = null;
          if (queued) {
            queued = false;
            show();
          }
        });
      }

      function sendMessage() {
        if (!current) return show();
        queued = true;
        dismiss(current);
      }

      send.addEventListener("pointerdown", () => press.to(1));
      ["pointerup", "pointerleave", "pointercancel"].forEach((type) =>
        send.addEventListener(type, () => press.to(0)),
      );
      send.addEventListener("click", sendMessage);

      function reset() {
        if (current) clearTimeout(current.timer);
        viewport.replaceChildren();
        current = null;
        queued = false;
        press.set(0);
      }

      return {
        async play() {
          const run = ++script;
          reset();
          await M.wait(400);
          if (run !== script) return;
          press.to(1);
          await M.wait(160);
          if (run !== script) return;
          press.to(0);
          sendMessage();
        },
      };
    },
  });
})();
