/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#14B8A6",          // Teal 500
        secondary: "#F59E0B",        // Amber 500 (great contrast with teal)
        accent: "#0EA5E9",           // Sky blue accent
        "background-light": "#F7FAF9",
        "background-dark": "#0F172A",
        "text-light": "#0F172A",
        "text-dark": "#E5E7EB",
      },
      fontFamily: {
        display: ["Manrope", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      animation: {
        scroll: "scroll 25s linear infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "pulse-glow": "gentle-pulse 3s infinite",
        "pulse-glow-secondary": "gentle-pulse-secondary 3s infinite",
        "rotate-shape": "rotate-shape 20s linear infinite",
        shimmer: "shimmer 2s linear infinite",
        float: "float 6s ease-in-out infinite",
        spotlight: "spotlight 2s linear infinite",
        "fade-in-right": "fade-in-right 0.5s ease-out forwards",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "gentle-pulse": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(20, 184, 166, 0.4)" },
          "50%": { boxShadow: "0 0 0 10px rgba(20, 184, 166, 0)" },
        },
        "gentle-pulse-secondary": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(245, 158, 11, 0.4)" },
          "50%": { boxShadow: "0 0 0 10px rgba(245, 158, 11, 0)" },
        },
        "rotate-shape": {
          from: { transform: "rotate(0deg) scale(1)" },
          to: { transform: "rotate(360deg) scale(1.05)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        spotlight: {
          "0%": { opacity: "0", transform: "translate(-50%, -50%) scale(0.5)" },
          "10%": { opacity: "1" },
          "100%": { opacity: "0", transform: "translate(-50%, -50%) scale(1.5)" },
        },
        "fade-in-right": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
};
