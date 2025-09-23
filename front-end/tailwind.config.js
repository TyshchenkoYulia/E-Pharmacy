/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primaryText: "#252539",
      secondaryText: "#93939A",
      greenPrimary: "#59B17A",
      whitePrimary: "#FFFFFF",
      whiteSecondary: "#F7F8FA",
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
