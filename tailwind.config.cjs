/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Share Tech Mono', 'sans']
      },
      keyframes: {
        typewritter: {
          from: { 
            color: 'white',
            'max-width': '0',
            'white-space': 'nowrap',
            overflow: 'hidden'
          },
          to: { 
            'max-width': '30rem',
            'white-space': 'nowrap',
            overflow: 'hidden'
          }
        },
        blink: {
          from: { 
            'background-color': 'white'
          }
        }
      },
      animation: {
        typewritter: 'typewritter 500ms steps(50, end)',
        blink: 'blink 500ms ease'
      }
    },
  },
  plugins: [],
};

module.exports = config;