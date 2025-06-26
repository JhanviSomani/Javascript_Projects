/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", // 👈 for root HTML files
    "./**/*.html", // 👈 include subfolders
    "./js/**/*.js", // 👈 if you use JavaScript files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
