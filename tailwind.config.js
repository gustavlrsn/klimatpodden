module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.md",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        sidebar: "1fr 280px"
      }
    }
  },
  variants: {},
  plugins: []
};
