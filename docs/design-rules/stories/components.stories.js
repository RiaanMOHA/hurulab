import { section, specimen } from "./source.js";

/**
 * The components, cloned out of storybook.html. A story holds no markup and no
 * values of its own (build.md 4): the page is the single source, so an edit
 * there reaches both views.
 */
export default { title: "Components" };

const owned = (story, by) => ({
  ...story,
  parameters: { docs: { description: { story: by } } },
});

export const Controls = owned(
  { name: "All controls", render: section("components") },
  "Every control at every state, as the page draws them. layout.md 5 owns the button's shape and its seven variants; color.md 5 owns every state.",
);

export const Composed = owned(
  { name: "Composed", render: section("composed") },
  "Controls and foundations put together into one unit: the card, and the status message that never carries meaning by color alone.",
);

export const Message = {
  name: "Message",
  parameters: {
    docs: {
      description: {
        story:
          "Every status carries an icon and a word, never color alone. Under deuteranopia success and error render as nearly the same olive, and warning's burnt orange lives in that family too, which is why the rule is absolute (color.md 8, WCAG 1.4.1). There is no info color: an informational notice is not a status, it is text on a sunken surface.",
      },
    },
  },
  args: { kind: "message-success", text: "Two directions are live on the store." },
  argTypes: {
    kind: {
      control: "select",
      options: ["message-success", "message-error", "message-warning", "message-info"],
    },
    text: { control: "text" },
  },
  render: (args) => {
    /* Taken per kind, so the icon is always the one the page pairs with that
       status rather than one chosen here. */
    const msg = specimen("composed", "." + args.kind);
    msg.querySelector("span").lastChild.textContent = " " + args.text;
    return msg;
  },
};

/**
 * The playground. Controls change the button's words, its variant and its
 * state, never its values: the specimen is taken from the page, and only its
 * classes and its label are swapped.
 */
export const Button = {
  name: "Button",
  parameters: {
    docs: {
      description: {
        story:
          "One button, seven variants. Every button carries `button` plus exactly one variant, and a page never defines a button of its own: if it needs something no variant does, the variant changes in layout.md 5 and every page gets it.",
      },
    },
  },
  args: {
    label: "Book a Call",
    variant: "button-primary",
    state: "rest",
  },
  argTypes: {
    label: { control: "text" },
    variant: {
      control: "select",
      options: [
        "button-primary",
        "button-primary-icon",
        "button-border",
        "button-border-icon",
        "button-ghost",
        "button-icon",
        "button-ghost-icon",
      ],
    },
    state: {
      control: "inline-radio",
      options: ["rest", "hover", "pressed", "focus", "disabled"],
    },
  },
  render: (args) => {
    /* Take the specimen for the chosen variant rather than building one, so the
       playground can never draw a button the page does not have. */
    const btn = specimen("components", "." + args.variant);

    btn.className = "button " + args.variant;
    btn.disabled = args.state === "disabled";
    if (args.state === "hover") btn.classList.add("is-hover");
    if (args.state === "pressed") btn.classList.add("is-press");
    if (args.state === "focus") btn.classList.add("ring");

    /* The two icon-only variants have no label to set: the glyph is the whole
       control, and its accessible name is the aria-label the page gives it. */
    const iconOnly =
      args.variant === "button-icon" || args.variant === "button-ghost-icon";
    if (!iconOnly) {
      const icon = btn.querySelector(".icn");
      btn.textContent = args.label;
      if (icon) btn.appendChild(icon);
    }

    return btn;
  },
};

export const Input = {
  name: "Input",
  parameters: {
    docs: {
      description: {
        story:
          "Body size, never smaller: type.md 11 forbids a form field below step 0, because 17px is the threshold that stops iOS Safari zooming the page on focus. The focus ring stays purple on an invalid field, since the red border already carries the error.",
      },
    },
  },
  args: { value: "hello@company.com", state: "rest" },
  argTypes: {
    value: { control: "text" },
    state: {
      control: "select",
      options: ["rest", "hover", "focus", "valid", "invalid", "disabled"],
    },
  },
  render: (args) => {
    const field = specimen("components", ".field");
    const input = field.querySelector(".input");

    input.className = "input";
    input.value = args.value;
    input.disabled = args.state === "disabled";
    if (args.state === "hover") input.classList.add("is-hover");
    if (args.state === "focus") input.classList.add("is-focus");
    if (args.state === "valid") input.classList.add("is-valid");
    if (args.state === "invalid") input.classList.add("is-invalid");

    field.querySelector("label").textContent = "Email";
    /* The error message belongs to the invalid state and to nothing else: a
       status is an icon and a word, never a color (color.md 8). */
    const existing = field.querySelector(".field-error");
    if (existing) existing.remove();
    if (args.state === "invalid") {
      field.appendChild(specimen("components", ".field-error"));
    }

    return field;
  },
};

export const Checkbox = {
  name: "Checkbox",
  parameters: {
    docs: {
      description: {
        story:
          "Checked is black, never purple: five checked boxes in purple is five accents, and one accented element per view is a hard rule (color.md rule 3). The row clears 44px even though the box is 1.5rem.",
      },
    },
  },
  args: { label: "Send the case study", checked: false, state: "rest" },
  argTypes: {
    label: { control: "text" },
    checked: { control: "boolean" },
    state: { control: "inline-radio", options: ["rest", "hover", "focus", "disabled"] },
  },
  render: (args) => {
    const row = specimen("components", ".checkbox");
    const box = row.querySelector(".checkbox-box");

    row.className = "checkbox" + (args.state === "disabled" ? " is-disabled" : "");
    box.className = "checkbox-box";
    if (args.checked) box.classList.add("is-checked");
    if (args.state === "hover") box.classList.add("is-hover");
    if (args.state === "focus") box.classList.add("ring");

    /* The tick is the checked state's only mark, so it is taken from a checked
       specimen rather than drawn here. */
    box.innerHTML = args.checked
      ? specimen("components", ".checkbox-box.is-checked").innerHTML
      : "";

    row.lastChild.textContent = args.label;
    return row;
  },
};
