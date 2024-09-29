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
        "g-moon-light-gray": "#C2C0C1",
        "g-moon-dark-gray": "#5C5C58",
        "g-moon-gold": "#D6B981"
      },
    },
  },
  plugins: [],
};
