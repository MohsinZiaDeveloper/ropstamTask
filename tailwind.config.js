const defaultColors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "rotate-img": {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-90deg)" },
          "50%": { transform: "rotate(-180deg)" },
          "75%": { transform: "rotate(-270deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
      },

      animation: {
        "spin-slow": "spin-slow 12s linear infinite",
        "rotate-img": "rotate-img 6s linear infinite",
      },
    },
    colors: {
      ...defaultColors,
      // my colors
      pinkColor: "#E600FF",
      blueColor: "#2E2CF3",
      purpleColor: "#7158D6",
      orangeColor: "#FC9626",
      grayColor: "#363345",
      darkBlue: "#363345",
      navyblueColor: "#261A59",
      skyBlueColor: "#48A6F2",
      redishColor: "#E9437B",
      darkPurpleColor: "#653FB0",
      normalblueColor: "#452EAE",
      greeninshColor: "#33C5D7",
    },
  },
  plugins: [],
};
