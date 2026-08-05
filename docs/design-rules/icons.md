# Icons

Owner decision, 4 August 2026. This file owns the icon set and the rules for using it.

---

## 1. The set

**Phosphor, and only Phosphor.** No second set, no one-off icons from anywhere else, no
hand-drawn glyphs, no text characters standing in for icons.

**One weight: regular.** Phosphor ships six weights; this system uses regular everywhere. A
second weight is a second voice.

Icons are pasted in as inline SVG with `fill: currentColor`, so every icon takes the color of
the text beside it. No icon font, no runtime CDN.

## 2. Sizes

Owned by [breakpoints.md](breakpoints.md) section 5: `--icon-sm`, `--icon-md`, `--icon-lg` and
`--icon-xl`, all in rem, each paired with the text size it sits beside.

## 3. Rules

- **Icons trail actions, never lead.** Owned by [layout.md](layout.md) section 5.
- **Explanatory icons lead.** Owner decision, 5 August 2026: when an icon explains content
  rather than marking an action, it sits before the words. Only actions take trailing icons.
- **An icon inherits the color of its text.** It never carries its own hue. The one exception
  is the arrow inside the button circle, which takes `--color-text-on-brand` from the fill it
  sits on.
- **An icon never carries meaning alone.** A status is an icon and a word
  ([color.md](color.md) section 8). An icon-only control carries a text label for screen
  readers.
- **No decorative icons.** No icon tile above a heading, no icon filling an empty corner
  ([layout.md](layout.md) section 11). An icon exists to be read, or it is removed.

## 4. What fails review

A second icon set. A weight other than regular. A text character used as an icon. An icon in
its own color. A status shown by an icon with no word. A decorative icon.
