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
      scrollbar: ["rounded"],
      colors: {
        primary: "rgb(8,8,10)",
        secondary: "#6b6f76",
        third: "#D25E65",
        fourth: "#191a23",
        fifth: "#EEEEEE",
        sixth: "rgb(18,18,19)",
        "dark-1": "#121212",
        "dark-2": "#212121",
        "dark-3": "#303030",
        "dark-4": "#424242",
      },

      keyframes: {
        appear: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        disappear: {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
        appearFromTop: {
          "0%": {
            tranform: "translateY(-100px)",
            opacity: "0",
          },
          "10%": {
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        appearFromBottom: {
          "0%": {
            tranform: "translateY(100px)",

            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        appearScale: {
          "0%": {
            scale: "0.9",
            opacity: "0",
          },
          "100%": {
            scale: 1,
            opacity: "1",
          },
        },
        dissapearScale: {
          "0%": {
            scale: 1,
            opacity: "1",
          },
          "100%": {
            scale: "0.9",
            opacity: "0",
          },
        },
        slideTop: {
          "0%": {},
          "100%": {
            transform: "translateY(-100%)",
          },
        },
        slideBottom: {
          "0%": {
            transform: "translateY(-100%)",
          },
          "100%": {
            transform: "translateY(100%)",
          },
        },
        slideBottomHalf: {
          "0%": {
            transform: "translateY(-100%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        increaseRadius: {
          "0%": {
            borderRadius: "5px",
          },
          "100%": {
            borderRadius: "50%",
          },
        },
        decreaseRadius: {
          "0%": {
            borderRadius: "50%",
          },
          "100%": {
            borderRadius: "5px",
          },
        },
        toggleRight: {
          "0%": {
            left: "0",
          },
          "100%": {
            left: "50%",
          },
        },
        toggleLeft: {
          "0%": {
            left: "50%",
          },
          "100%": {
            left: "0",
          },
        },
        closeHeight: {
          "0%": {
            height: "13em",
          },
          "100%": {
            height: "9em",
          },
        },
        expandHeight: {
          "0%": {
            height: "9em",
          },
          "100%": {
            height: "13em",
          },
        },
        slideRight: {
          "0%": {
            transform: "translateX(-50%)",
            opacity: "1",
          },
          "100%": {
            transform: "translateX(-40%)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    // eslint-disable-next-line no-undef
    function ({ addUtilities }) {
      addUtilities({
        ".animation-forwards": { "animation-fill-mode": "forwards" },
      });
    },
  ],
};
