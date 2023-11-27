/** @type {import('tailwindcss').Config} */
module.exports = {
  purge:[
    "./src/components/**/*.{js,jsx}",
    "./public/index.html"
  ],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

