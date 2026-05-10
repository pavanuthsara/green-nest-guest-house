/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#4a7c59",
          light: "#6aa878",
        },
        wa: "#25d366",
        "wa-hover": "#20ba5a",
      },
      keyframes: {
        floatLeaf: {
          from: { transform: "scale(1) rotate(0deg)" },
          to: { transform: "scale(1.06) rotate(6deg)" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(32px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        iconPulse: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(74,124,89,0.25)" },
          "50%": { boxShadow: "0 0 0 10px rgba(74,124,89,0)" },
        },
      },
      animation: {
        "leaf-tl": "floatLeaf 8s ease-in-out infinite alternate",
        "leaf-br": "floatLeaf 10s ease-in-out infinite alternate-reverse",
        "slide-up": "slideUp 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "icon-pulse": "iconPulse 3s ease-in-out infinite",
      },
      boxShadow: {
        card: "0 8px 32px rgba(74,124,89,0.08), 0 2px 8px rgba(0,0,0,0.06)",
        wa: "0 4px 18px rgba(37,211,102,0.35)",
        "wa-hover": "0 8px 24px rgba(37,211,102,0.45)",
        "wa-active": "0 4px 12px rgba(37,211,102,0.30)",
      },
      maxWidth: {
        card: "520px",
      },
      borderRadius: {
        card: "24px",
        pill: "50px",
      },
    },
  },
  plugins: [],
}

