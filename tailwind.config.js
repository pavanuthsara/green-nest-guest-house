/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Primary palette */
        forest: {
          DEFAULT: "#4a7c59",
          light: "#6aa878",
          dark: "#335947",
          50:  "#f0f7f2",
          100: "#d9eddf",
          200: "#b3dbc0",
          300: "#82c298",
          400: "#55a872",
          500: "#4a7c59",
          600: "#335947",
          700: "#264237",
          800: "#1a2d26",
          900: "#0e1a17",
        },
        /* Earthy sandy beige */
        sand: {
          DEFAULT: "#e8dcc8",
          50:  "#fdfaf4",
          100: "#f7f0df",
          200: "#ede0c0",
          300: "#e0cfa0",
          400: "#cdb87a",
          500: "#b89a56",
        },
        /* WhatsApp green */
        wa: "#25d366",
        "wa-hover": "#20ba5a",
        /* Warm cream background */
        cream: "#f6f3eb",
        "cream-dark": "#eee8d8",
      },

      fontFamily: {
        serif: ["'Libertinus Serif'", "Georgia", "serif"],
        sans: ["'Noto Sans'", "Inter", "system-ui", "sans-serif"],
      },

      keyframes: {
        floatLeaf: {
          from: { transform: "scale(1) rotate(0deg)" },
          to:   { transform: "scale(1.06) rotate(6deg)" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(32px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        iconPulse: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(74,124,89,0.25)" },
          "50%":       { boxShadow: "0 0 0 10px rgba(74,124,89,0)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      animation: {
        "leaf-tl":   "floatLeaf 8s ease-in-out infinite alternate",
        "leaf-br":   "floatLeaf 10s ease-in-out infinite alternate-reverse",
        "slide-up":  "slideUp 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "fade-in":   "fadeIn 0.6s ease both",
        "icon-pulse":"iconPulse 3s ease-in-out infinite",
      },
      boxShadow: {
        card:       "0 8px 32px rgba(74,124,89,0.08), 0 2px 8px rgba(0,0,0,0.06)",
        "card-lg":  "0 20px 60px rgba(74,124,89,0.12), 0 8px 20px rgba(0,0,0,0.08)",
        wa:         "0 4px 18px rgba(37,211,102,0.35)",
        "wa-hover": "0 8px 24px rgba(37,211,102,0.45)",
        "wa-active":"0 4px 12px rgba(37,211,102,0.30)",
        "inner-sm": "inset 0 2px 8px rgba(0,0,0,0.06)",
      },
      maxWidth: {
        card: "520px",
        "7xl": "80rem",
      },
      borderRadius: {
        card: "24px",
        pill: "50px",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(160deg, #f0f7f2 0%, #f6f3eb 50%, #e8dcc8 100%)",
        "green-gradient":
          "linear-gradient(135deg, #4a7c59 0%, #6aa878 100%)",
        "leaf-pattern":
          "radial-gradient(ellipse at 20% 50%, rgba(74,124,89,0.04) 0%, transparent 60%), radial-gradient(ellipse at 80% 10%, rgba(74,124,89,0.06) 0%, transparent 50%)",
      },
    },
  },
  plugins: [],
}
