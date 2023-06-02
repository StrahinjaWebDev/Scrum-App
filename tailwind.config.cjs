/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(8,8,10)",
        secondary: "#6b6f76",
        third: "#D25E65",
        fourth: "#191a23",
        fifth: "#EEEEEE",
        sixth: "rgb(18,18,19)",
      },
      keyframes: {
        appearFromTop: {
          "0%": {
            transform: "translateY(-50px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        appearScale: {
          "0%": {
            opacity: "0",
            scale: "0.9",
          },
          "100%": {
            opacity: "1",
            scale: "1",
          },
        },
        dissAppearScale: {
          "0%": {
            opacity: "1",
            scale: "1",
          },
          "100%": {
            opacity: "0",
            scale: "0.9",
          },
        },
        dissapearToTop: {
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(-50px)",
          },
        },
        appear: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        dissAppear: {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    function ({ addUtilities }) {
      addUtilities({
        ".animation-forwards": { "animation-fill-mode": "forwards" },
      });
    },
  ],
};
