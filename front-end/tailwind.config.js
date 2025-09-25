/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primaryText: "#252539",
      secondaryText: "#93939A",
      greenPrimary: "#59B17A",
      lightGreenPrimary: "#59B17A1A",
      lightGreen: "#E7F1ED",
      hoverGreen: "#3F945F",
      whitePrimary: "#FFFFFF",
      whiteSecondary: "#F7F8FA",
      backgroundColor: "#F5F5F5",
      grayColor: "#1D1E211A",
      redText: "#E85050",
      lightRed: "#E850501A",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    screens: {
      // mobile: "375px",
      tablet: "768px",
      desktop: "1440px",
    },
  },
  plugins: [],
};
