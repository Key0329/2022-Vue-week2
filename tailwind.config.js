/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true, // 水平置中
      padding: "12px", // 水平間距
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
