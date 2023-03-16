/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
     backgroundImage:{
      'pack-train': "url(/src/images/alt-bantta-kullanılan-logo.svg')"
     }
    },
  },
  plugins: [],
}
