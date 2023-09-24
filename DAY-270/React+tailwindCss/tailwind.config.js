/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#1A202C", //(dark charcoal)
        primary: "#f7ae56", //(deep blue-green)
        acc: "#6D5F9B", //(rich plum)
        text: "#F2F2F2",// (light grey)
        btn: "#4A5568", //(mid-tone gray)
        btnH: "#718096",// (slate gray)
        btnA: "#2D3748",// (dark charcoal)
        btnD: "#4A5568",// (mid-tone gray)
        
        
      },
      animation: {
        'spin-s': 'spin 25s linear infinite',
      },

    },
    patterns: {
        opacities: {
            100: "1",
            80: ".80",
            60: ".60",
            40: ".40",
            20: ".20",
            10: ".10",
            5: ".05",
        },
        sizes: {
            1: "0.25rem",
            2: "0.5rem",
            4: "1rem",
            6: "1.5rem",
            8: "2rem",
            16: "4rem",
            20: "5rem",
            24: "6rem",
            32: "8rem",
        }
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    
    require('tailwindcss-bg-patterns'),
  ],
}






