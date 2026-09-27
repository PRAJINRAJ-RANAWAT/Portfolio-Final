// Tailwind can't see dynamically-built class names (e.g. `bg-${color}`), so
// pop-color "backing card" swatches that are chosen at runtime from data use
// this hex lookup + inline style instead of a Tailwind class.
export const POP_COLORS = {
  "pop-pink": "#FF90E8",
  "pop-cyan": "#00E5FF",
  "pop-salmon": "#FFA07A",
  "pop-violet": "#B388FF",
  "pop-yellow": "#FFC900",
};

export const popColorAt = (index) => {
  const keys = Object.keys(POP_COLORS);
  return POP_COLORS[keys[index % keys.length]];
};
