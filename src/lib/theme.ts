/**
 * Centralised theme constants.
 *
 * Every colour, animation variant, and spring preset lives here so that
 * a future palette or motion change only needs to touch this one file.
 */

// ── Palette ──────────────────────────────────────────────────────────
export const colors = {
  bg:          "#0a0a0c",
  accent:      "#c0392b",
  accentSoft:  "#e74c3c",
} as const;

// Tailwind arbitrary-value class fragments (the bit inside the brackets).
// Use these to build className strings without scattering hex codes:
//   `text-[${tw.accent}]`  →  `text-[#c0392b]`
export const tw = colors;

// ── Framer Motion variants ───────────────────────────────────────────
export const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.4 },
};

// ── Spring presets ───────────────────────────────────────────────────
export const spring = {
  snappy:  { type: "spring" as const, stiffness: 400, damping: 15 },
  gentle:  { type: "spring" as const, stiffness: 300, damping: 20 },
  bounce:  { type: "spring" as const, stiffness: 300, damping: 10 },
};
