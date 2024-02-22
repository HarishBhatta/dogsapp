/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     
      fontSize: {
        primary: ['16.672px','25.008px']
      },
      backgroundImage: {
        'cat' : "url('./background.jpg)",
      },
      fontFamily: {
        primary: ['Poppins'],
        mono: ['var(--font-roboto-mono)']      },
      colors: {
        "blue" : "rgba(19, 162, 169)", 
      },
    },
  },
  plugins: [],
};
