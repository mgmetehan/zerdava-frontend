/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "nav-bg": "url('/src/img/giriş-sayfasında-kullanılan-üst-panelde-ki-gölge.svg')"
      }
    },
  },
  plugins: [],
}
