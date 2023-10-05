/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        light:{
          bg : "#00000"

        },
        dark:{
          bg:"#0C1222"
        }
      }
    },
  },
  plugins: [],
};
