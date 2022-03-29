module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      
      boxShadow: {
        'tw-shad': '2px -4px 100px 100px #0000000f',
        'tw-shad2': '0 10px 30px 5px rgb(0 0 0/0.1),0 4px 6px -4px rgb(0 0 0/0.1)',
      },
      borderRadius: {
        'rounded-4xl': '2rem',
        '4rem': '4rem',
      },
      padding: {
        'mps': '200px',
      },
      width:{
        '130': '50rem',
        '440': '462px',
        '480px': '480px',
        '550px': '550px',
        '500px': '500px',
        
      },
      minHeight: {
        '3/5': '80vh',
      },
      height: {
        '60px': '60px',
        '58px': '58px',
        '900px': '900px',
        '228': '50rem',
        '130': '27.5rem',
      },
      backgroundImage: {
        'hero-pattern': "url('./images/Dots.png')",
      },
      colors:{
        'header':'rgba(255, 255, 255, 0.6)',
        'chido-gray': {
          DEFAULT: '#EEEEEE'
        },
  
        'oxford-blue': {
          DEFAULT: '#374151',
        },
        'pale-sky': {
          DEFAULT: '#6B7280',
        },
        'blue-ribbon': {
          DEFAULT: '#2C4BFF',
        },
        'confetti': {
          DEFAULT: '#ECCB65',
        },
        'pickled-bluewood': {
          DEFAULT: '#2E3B4E'
        },
        'dusty-gray': {
          DEFAULT: '#999999'
        },
      },
    },
  },
  plugins: [],
}
