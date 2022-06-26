/** @type {import('tailwindcss').Config} */
module.exports = {
  //  content: ["./src/*.html"],
  content: ["./src/index.html"],
  theme: {
    extend: {
      backgroundColor: {
        valide: "#5BE881",
        rejected: "#FF0000",
        "on-validation": "#FDB64D",
        register: "#f5a811",
      },
    },
  },
  plugins: [],
};
