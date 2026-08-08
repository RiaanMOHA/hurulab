import { section } from "./source.js";

/**
 * The values. A foundation cannot render on its own and has no variants to
 * vary, so none of these carries controls: each specimen shows the whole set
 * at once, which is the point of it. The description names the file that owns
 * the values.
 */
export default { title: "Foundations" };

const owned = (story, by) => ({
  ...story,
  parameters: { docs: { description: { story: by } } },
});

export const Color = owned(
  { name: "Color", render: section("color") },
  "Owned by color.md. Base, the eleven neutrals, six purples and the status ramps. Click a swatch to copy its value.",
);

export const Tokens = owned(
  { name: "Semantic tokens", render: section("names") },
  "Owned by color.md 4. The only names a component may use. A component naming a ramp step fails review.",
);

export const Type = owned(
  { name: "Type", render: section("type") },
  "Owned by type.md. Geist for headings, IBM Plex Sans for body, the role sizes from display down to label.",
);

export const Spacing = owned(
  { name: "Spacing", render: section("spacing") },
  "Owned by spacing.md. The ten-step scale and the job each step does. The parent owns the gap.",
);

export const Breakpoints = owned(
  { name: "Breakpoints", render: section("breakpoints") },
  "Owned by breakpoints.md 1. Four screens: 360, 768, 1440 and 1560 up. 1440 is where you design, 360 is where you prove it.",
);

export const Radius = owned(
  { name: "Radius", render: section("radius") },
  "Owned by layout.md 3. The five radii, all on Apple's continuous curve, and the concentric rule for anything nested.",
);

export const Icons = owned(
  { name: "Icons", render: section("icons") },
  "Owned by icons.md. Phosphor at regular weight, inline SVG in the text color. Icons trail an action, never lead it.",
);

export const Motion = owned(
  { name: "Motion", render: section("motion") },
  "Owned by motion.md. The enter and exit curves, the four durations and the 450ms ceiling. Motion is cross-cutting: a button animates, and the animation is not a component.",
);

export const Logo = owned(
  { name: "Logo", render: section("mark") },
  "Owned by logo.md. The asterisk in the brand color, raised and enlarged against the h, and the favicon drawn from it.",
);
