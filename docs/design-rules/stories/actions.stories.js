import { section, specimen } from "./source.js";

/**
 * Actions. The category name is Atlassian's, not invented: theirs is the only
 * one of the three researched systems whose groupings describe what a reader is
 * looking for.
 *
 * A story holds no markup and no values of its own (build.md 4): the page is
 * the single source, so an edit there reaches both views.
 */
export default { title: "Actions" };

export const Button = {
  name: "Button",
  render: section("button"),
  parameters: {
    docs: {
      description: {
        story:
          "One button, three variants, cut from seven on the evidence in docs/research/atlassian.md: theirs was rebuilt because it 'was trying to do too much'. Every variant draws its own five states, following Carbon. The label wraps and never truncates, following Carbon over Atlassian, because the copy here is written rather than generated.",
      },
    },
  },
};

/**
 * The playground. Controls change the button's words, its variant and its
 * state, never its values: the specimen is taken from the page, and only its
 * classes and its label are swapped.
 */
export const Playground = {
  name: "Button playground",
  args: {
    label: "Book a Call",
    variant: "button-primary",
    state: "rest",
    icon: false,
  },
  argTypes: {
    label: { control: "text" },
    variant: {
      control: "inline-radio",
      options: ["button-primary", "button-border", "button-ghost"],
    },
    state: {
      control: "select",
      options: ["rest", "hover", "pressed", "focus", "disabled"],
    },
    icon: { control: "boolean" },
  },
  render: (args) => {
    const btn = specimen("button", "." + args.variant);

    btn.className = "button " + args.variant;
    btn.disabled = args.state === "disabled";
    if (args.state === "hover") btn.classList.add("is-hover");
    if (args.state === "pressed") btn.classList.add("is-press");
    if (args.state === "focus") btn.classList.add("ring");

    btn.textContent = args.label;
    /* The icon is taken from the page's own trailing-icon specimen rather than
       drawn here, so the playground cannot show a glyph the page does not. */
    if (args.icon) {
      const withIcon = specimen("button", ".button-primary .icn");
      btn.appendChild(withIcon);
    }

    return btn;
  },
};
