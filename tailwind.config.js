/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "index.html"
  ],
  // prefix: 'tw-', // 「名前の完全一致」を避けれそうです。ただtailswind classを使用する度に全tw-を付ける必要がありそうです。
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
    },

  },
  plugins: [],
}

