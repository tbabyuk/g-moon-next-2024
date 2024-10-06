/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "g-moon-very-light-gray": "#F0F0F0",
        "g-moon-light-gray": "#C2C0C1",
        "g-moon-medium-gray": "#8C8C8C",
        "g-moon-medium-gray-hover": "#737373",
        "g-moon-dark-gray": "#686864",
        "g-moon-gold": "#D6B981",
        "g-moon-gold-hover": "#C9A459",
        "g-moon-white": "#F3F4F6"
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["corporate"],
  },

};
