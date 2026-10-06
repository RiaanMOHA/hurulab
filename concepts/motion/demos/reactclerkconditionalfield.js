/* Clerk conditional field, adapted: a field's error line grows into the
   contact form on a measured height, and collapses once the field is fixed. */
(() => {
  const SPRING = M.springConfig({ visualDuration: 0.4, bounce: 0.3 });
  const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const FIELDS = [
    {
      name: "email",
      label: "Email",
      start: "you@example",
      fixed: "you@example.com",
      error: "Error: Enter a valid email.",
      valid: (value) => EMAIL_PATTERN.test(value.trim()),
    },
    {
      name: "message",
      label: "Message",
      start: "Hello.",
      error: "Error: Tell us a little more, 20 characters or more.",
      valid: (value) => value.trim().length >= 20,
      multiline: true,
    },
  ];

  /* The height container animates to the live measured height of its
     content; the error line enters with a fade and a short drop, and exits
     with a fade only, popped out of flow while the container shrinks. */
  function conditional(container) {
    const measure = M.el("div", "measure");
    container.append(measure);
    let open = false;
    let height = 0;
    let line = null;
    let lineMotion = null;

    const heightMotion = M.springs({ h: 0 }, SPRING, (v) => {
      container.style.height = `${Math.max(0, v.h)}px`;
    });
    new ResizeObserver(() => {
      height = measure.offsetHeight;
      if (open) heightMotion.to({ h: height });
    }).observe(measure);

    function show(text) {
      if (open) return;
      open = true;
      if (line) line.remove();
      line = M.el("p", "error", text);
      const current = line;
      measure.append(current);
      height = measure.offsetHeight;
      const drop = -0.148 * height;
      lineMotion = M.springs({ opacity: 0, y: drop }, SPRING, (v, moving) => {
        current.style.opacity = String(Math.max(0, Math.min(1, v.opacity)));
        current.style.transform = `translateY(${v.y}px)`;
        if (!moving && v.opacity === 0 && current !== line) current.remove();
      });
      lineMotion.set({ opacity: 0, y: drop }).to({ opacity: 1, y: 0 });
      heightMotion.to({ h: height });
    }

    function hide(instant) {
      if (!open && !instant) return;
      open = false;
      if (line) {
        line.classList.add("leaving");
        line = null;
        if (!instant) lineMotion.to({ opacity: 0, y: 0 });
      }
      if (!instant) return heightMotion.to({ h: 0 });
      measure.replaceChildren();
      heightMotion.set({ h: 0 });
    }

    return { show, hide, isOpen: () => open };
  }

  window.MOTION_DEMOS.push({
    id: "clerk-conditional-field",
    title: "Growing error line",
    source: "reactclerkconditionalfield.md",
    section: "contact",
    where: "Under each field of the contact form in the contact panel, where \"Error: Enter a valid email.\" and the other errors appear.",
    how: "Pressing Send Message with a field wrong grows the form by exactly the error's height while the error drops into place, and fixing the field fades it out as the space closes.",
    css: `
      .m-clerk-conditional-field form {
        width: min(24rem, calc(100% - 3rem));
        min-height: 20rem;
        margin: 2rem 0;
        display: flex;
        flex-direction: column;
      }
      .m-clerk-conditional-field .field + .field {
        margin-top: 1rem;
      }
      .m-clerk-conditional-field label {
        display: block;
        margin-bottom: 0.5rem;
        font: 600 0.7901rem/1.2 var(--font-title);
      }
      .m-clerk-conditional-field input,
      .m-clerk-conditional-field textarea {
        display: block;
        width: 100%;
        padding: 0.625rem 1rem;
        border: 1px solid var(--border-interactive);
        border-radius: 0.75rem;
        corner-shape: squircle;
        background: var(--surface-page);
        color: var(--text-primary);
        font: 400 1rem/1.5 var(--font-body);
        resize: none;
      }
      .m-clerk-conditional-field input:focus-visible,
      .m-clerk-conditional-field textarea:focus-visible {
        outline: 2px solid var(--border-focus);
        outline-offset: -1px;
      }
      .m-clerk-conditional-field .grow {
        will-change: height;
      }
      .m-clerk-conditional-field .measure {
        position: relative;
      }
      .m-clerk-conditional-field .error {
        margin: 0;
        padding-top: 0.5rem;
        color: var(--er);
        font-size: 0.8889rem;
      }
      .m-clerk-conditional-field .error.leaving {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
      }
      .m-clerk-conditional-field .m-button {
        align-self: flex-start;
        margin-top: 1.5rem;
        transition: transform 150ms var(--ease);
      }
      .m-clerk-conditional-field .m-button.pressed {
        transform: scale(0.95);
      }
    `,
    mount(stage) {
      const form = M.el("form");
      form.noValidate = true;
      form.setAttribute("aria-label", "Contact form");

      const rows = FIELDS.map((field) => {
        const wrap = M.el("div", "field");
        const id = `m-clerk-conditional-field-${field.name}`;
        const label = M.el("label", "", field.label);
        label.htmlFor = id;
        const input = M.el(field.multiline ? "textarea" : "input");
        input.id = id;
        input.name = field.name;
        if (field.multiline) input.rows = 2;
        else input.type = "email";
        const grow = M.el("div", "grow");
        wrap.append(label, input, grow);
        form.append(wrap);
        return { field, input, error: conditional(grow) };
      });

      const send = M.el("button", "m-button", "Send Message");
      send.type = "submit";
      form.append(send);
      stage.append(form);

      function validate() {
        let firstInvalid = null;
        for (const row of rows) {
          if (row.field.valid(row.input.value)) row.error.hide();
          else {
            row.error.show(row.field.error);
            firstInvalid = firstInvalid || row.input;
          }
        }
        return firstInvalid;
      }

      // The form never goes anywhere: submitting only checks the fields.
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const invalid = validate();
        if (invalid) invalid.focus({ preventScroll: true });
      });
      for (const row of rows) {
        row.input.addEventListener("input", () => {
          if (row.error.isOpen() && row.field.valid(row.input.value)) row.error.hide();
        });
      }
      stage.addEventListener("keyup", (event) => {
        if (event.key === "Escape") rows.forEach((row) => row.error.hide());
      });

      let run = 0;
      function reset() {
        for (const row of rows) {
          row.input.value = row.field.start;
          row.error.hide(true);
        }
      }
      reset();

      return {
        async play() {
          const id = ++run;
          reset();
          const live = () => id === run;
          await M.wait(400);
          if (!live()) return;
          send.classList.add("pressed");
          await M.wait(150);
          send.classList.remove("pressed");
          validate();
          await M.wait(1600);
          const email = rows[0];
          for (const char of email.field.fixed.slice(email.input.value.length)) {
            if (!live()) return;
            email.input.value += char;
            email.input.dispatchEvent(new Event("input"));
            await M.wait(M.reduced() ? 0 : 90);
          }
        },
      };
    },
  });
})();
