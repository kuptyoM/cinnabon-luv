/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cinnabon-pattern1' : "url('https://img.freepik.com/premium-photo/commercial-ad-banner-featuring-delicious-looking-cinnamon-rolls_1110958-62687.jpg?w=2000')",
        'cinnabon-pattern2' : "url('https://img.freepik.com/premium-photo/cinnamon-roll-is-teapot-teapot_975681-61833.jpg?w=1800')"
      }
    },
  },
  plugins: [],
}