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
    extend: {
      backgroundImage:{
        'hero-pattern': "url('https://w1.pngwing.com/pngs/561/274/png-transparent-cartoon-book-reactive-design-patterns-distributed-computing-computer-programming-system-programming-ebook-edition-application-software-computer-network-blue.png')"
      }
    },
  },
  plugins: [],
}
