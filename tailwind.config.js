/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#576CBC',
      'accent': '#52616B',
      'divider': '#BBE1FA',
      'background': '#242424',
      'primary-text': '#F1FAFF',
      'secondary-text': '"757575'
    },
    fontFamily: {
      'raleway':['Raleway', 'sans serif'],
      'poppins': ['Poppins', 'sans serif']
    },
    extend: {},
  },
  plugins: [],
}