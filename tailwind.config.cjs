/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: "#FFFFFF",
        dark: "#1B1B1B",
        pane: "var(--color-pane)",
        "pane-edge": "var(--color-pane-edge)",
        accent: "var(--color-accent)",
        "accent-ink": "var(--color-accent-ink)",
        "pop-pink": "#FF90E8",
        "pop-cyan": "#00E5FF",
        "pop-salmon": "#FFA07A",
        "pop-violet": "#B388FF",
        "pop-yellow": "#FFC900",
      },
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        space: ['"Space Grotesk"', "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "brutal-sm": "2px 2px 0 0 var(--shadow-color)",
        "brutal-md": "4px 4px 0 0 var(--shadow-color)",
        "brutal-lg": "6px 6px 0 0 var(--shadow-color)",
        "brutal-xl": "8px 8px 0 0 var(--shadow-color)",
      },
      screens: {
        xs: "450px",
      },
      transitionTimingFunction: {
        quart: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
