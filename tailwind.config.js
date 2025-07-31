    // tailwind.config.js
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: ["./MultipleFiles/index.html"], // Ensure this path is correct
      theme: {
        extend: {
          spacing: {
            '15': '15px', // Example: Define custom spacing if needed
            '30': '30px',
            '50': '50px',
            '70': '70px',
            '90': '90px',
            '120': '120px',
            '130': '130px',
            '160': '160px',
            '165': '165px',
            '300': '300px',
            '945': '945px',
          },
          width: {
            '20.5': '82px', // Assuming 20.5 is slightly larger than 20 (80px)
            '35': '140px', // Assuming 35 is a custom width
            '80': '320px',
            '120': '480px',
            '130': '520px',
            '160': '640px',
            '65%': '65%',
          },
          height: {
            '9': '36px',
            '12': '48px',
            '20.5': '82px',
            '70': '280px',
            '945': '945px',
            '300': '1200px',
          },
          margin: {
            '-1.5': '-6px',
            '-24': '-96px',
            '-120': '-480px',
            '-132': '-528px',
            '15': '60px',
            '30': '120px',
            '50': '200px',
            '70': '280px',
            '90': '360px',
            '165': '660px',
          },
          top: {
            '2': '8px',
            '150': '600px',
          },
          right: {
            '31': '124px',
            '55': '220px',
            '57': '228px',
          },
          colors: {
            '#D7D7D7': '#D7D7D7',
            '#C4C4C4': '#C4C4C4',
            '#909090': '#909090',
          },
          fontFamily: {
            'jersey-10-regular': ['"Jersey 10"', 'sans-serif'],
            'montserrat-300': ['Montserrat', 'sans-serif'],
            'montserrat-600': ['Montserrat', 'sans-serif'],
            'montserrat-800': ['Montserrat', 'sans-serif'],
            'raleway-800': ['Raleway', 'sans-serif'],
          },
        },
      },
      plugins: [],
    }