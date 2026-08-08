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
