# Research findings

**What this file is.** The findings that survived the research files, kept because they are
useful and have no other owner. Started 7 September 2026 when `docs/research/` was read line by
line and deleted.

**What it is not.** It is not evidence, and nothing here is a claim about hurulab. The evidence
rule in `CLAUDE.md` is untouched by it: `docs/evidence.md` is still the only source for what
hurulab is. It is not a rule file either. Where a finding belonged to a topic that a file in
`docs/design-rules/` already owns, it was written into that file instead of here, and this file
does not restate it.

**Where findings went instead of here, 7 September 2026:**

- Form and error message wording, and how a price is put on a page: `copy.md` sections 5 and 7.
- The clickable container, tile groups, ghost button alignment, tag limits: `layout.md` sections
  5.3 and 6.
- What motion never does: `motion.md` section 6a.
- Purple as a category risk, and the escape: `color.md` section 2.
- Meaning accrues rather than being designed in: `brand.md` section 15a.

---

## How design work is presented to a client

From the logo research, 17 August 2026, extracted before that file was deleted. It is about
presenting work rather than about logos, which is why it outlived the logo question.

**The designers eliminate the options themselves, before the client sees anything.** Paul Rand
presented Steve Jobs **one** mark for NeXT, inside a written case of roughly one hundred pages
that included the rejected precursors and why each failed. Sagi Haviv presents finished
candidates only, in person, mounted in realistic applications, which reversed a client's
initial rejection of the Armani Exchange mark.

**Nobody shows the work-in-progress pile, because early work is too fragile to survive
committee judgment.** A pile of options asks the client to do the designer's elimination for
them, and they will do it on taste.

This is the reason behind the rule in `CLAUDE.md` that work is built one thing at a time and
shown finished, and behind `PLAN.md`'s "build one at a time, drawn and reviewed before the
next."

---

## Concede the objection in your own words

From the vellum.ai read. "Make AI **finally** work for you": the single word "finally" admits
that the reader's previous tools failed, and concedes it before the reader can raise it.

The same site answers its own worst pricing question in its own FAQ, by name: "Why does my
assistant cost money when I'm not actively using it?"

`copy.md` section 6 already says to admit the gaps in public. This is the mechanic for doing
it: put the reader's objection inside your own headline, and ask your worst question yourself.

---

## The method these files were checked by

The logo research put 32 extracted claims through adversarial verification: 29 upheld, 3
refuted, and it kept the refutations in the file, on the grounds that what the checks killed
matters as much as what they kept. Two were refuted:

- **"A mark must be simple to last" as a universal law.** The quote is real, but long-lived
  detailed marks such as Porsche's crest refute the universal form. Simplicity is the strong
  default, not a law.
- **"Appropriate, flexible, original" as Chermayeff & Geismar's judging criteria.** That line
  is Ivan Chermayeff describing memorable identities in a foreword. The firm's canonical test
  is appropriate, distinctive, simple.

Kept as a method, not as findings: research that records what its own checks killed can be
trusted; research that records only what survived cannot.

---

## Line height, 2 October 2026

Read for the owner's ruling of the same day, which is in `type.md` section 6. Two reads, 21
pages fetched, and one set of measurements on 20 live sites. **No source covers a bold monospace face, and none covers Chinese headlines
wrapping at 48 to 125px.** The owner's eye settled the value at 1.2; the research settled the
direction of the scale.

- **Leading tightens as type grows.** IBM Carbon runs 102/92 (1.11) at its largest size to
  24/16 (1.5) on body. Material Design 3 runs 64/57 (1.12) to 24/16 (1.5). GOV.UK runs 80/80
  (1.0) to 30/24 (1.25). GitHub Primer is the one exception, 1.375 at 40px.
- **Published headings at 48 to 125px sit between 1.0 and 1.2.** The US Web Design System
  allows 1 to 1.35 for a heading of a line or two.
- **WCAG 1.4.12 sets no author value.** It requires the page to survive a reader forcing 1.5.
- **Cascadia Mono Bold spans 0.977em from ascender top to descender bottom**, measured with
  fontTools. At 0.95 the lines overlap by 0.027em; at 1.2 the gap is 0.22em.
- **Chinese needs more room than Latin.** Material's 2014 edition: "For all styles, line height
  is 0.1em larger than the English-like languages." Adobe Spectrum sets CJK headings 0.2 above
  Latin, 1.5 against 1.3. Tencent's TDesign uses 1.125 to 1.22 on display sizes and Ant Design
  1.21 on h1, one value for all scripts. The owner approved one value for both languages.
- **Chinese body copy: 1.5 to 1.8, most often 1.7**, from W3C clreq, justfont and Typotheque.
  Not adopted; body stays 1.5 until the owner rules.
- **Measured on live pages, 1440 wide, 2 October 2026.** Six English heroes set in a mono
  face: median 1.05, range 1.00 to 1.50 (JetBrains Mono 1.05, Warp 1.05, SST 1.10, Monaspace
  1.00, Departure Mono 1.00, opencode 1.50). Thirteen Traditional Chinese heroes: median 1.20,
  range 1.04 to 1.50. Global brands keep 1.04 to 1.17 (Apple 1.09, Google Store 1.11,
  Microsoft 1.17, Notion 1.04); Taiwan sites use 1.20 to 1.50 (KKday 1.20, justfont 1.20,
  SHOPLINE 1.29, 91APP 1.36, Cathay 1.50). The owner's 1.2 is the Chinese median and above
  the English mono median.
- **Apple and others drop negative letter-spacing on Chinese headings.** Apple's privacy page
  is -1.2px in English and normal in Chinese. `type.md` applies -0.04em to both; not changed,
  no owner ruling.

Sources: carbondesignsystem.com/elements/typography/type-sets,
api.flutter.dev/flutter/material/TextTheme-class.html,
design-system.service.gov.uk/styles/type-scale,
designsystem.digital.gov/design-tokens/typesetting/line-height,
primer.style/product/primitives/typography, w3.org/WAI/WCAG21/Understanding/text-spacing.html,
m1.material.io/style/typography.html, unpkg.com/@adobe/spectrum-tokens, w3.org/TR/clreq,
ant.design/docs/spec/font-cn, blog.justfont.com/2022/12/lanyang-tip,
typotheque.com/articles/typesetting-cjk-text.

---

## References worth keeping

- Blanding, the category failure: https://www.fastcompany.com/90276496/blanding-the-hottest-branding-trend-of-the-year-is-also-the-worst
- Paul Rand, "Logos, flags and escutcheons", the source of meaning-accrues:
  https://www.paulrand.design/writing/articles/1991-logos-flags-and-escutcheons.html
- Atlassian's "Evolving buttons and links", March 2025, the rebuild whose lesson is in
  `layout.md` section 5: atlassian.design
- Coinbase CDS, the one of the three that is open source and readable in code:
  cds.coinbase.com, github.com/coinbase/cds
