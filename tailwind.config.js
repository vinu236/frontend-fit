/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "custom-gym":'#f36100',
        "custom-head":'#E50914',
        'custom-green':'#66bb6a',
        
      }
    },
  },
  plugins: [],
}

