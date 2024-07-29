/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjusted to include React file extensions
    "./public/index.html" // Ensure this file is also scanned if necessary
  ],
  daisyui: {
    themes: [
      "light",
      "dark",
      "black",
      "dim",
      "sunset",
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
