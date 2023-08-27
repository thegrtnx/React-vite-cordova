/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        urbanPurple: {
          DEFAULT: "#632FD9"
        },
        urbanWhite: {
          DEFAULT: '#E6E6E6'
        },
        urbanDark: {
          DEFAULT: '#1A1A1A'
        },
        urbanGrey: {
          DEFAULT: '#484649'
        },
        urbanDarkMode: {
          DEFAULT: '#070707'
        },
        urbanPlaceHolder: {
          DEFAULT: '#B2B2B2'
        }
      },
      borderWidth: {
        urbanPurple: "1px",
      },
      borderColor: {
        urbanPurple: {
          DEFAULT: "#632FD9"
        },
        urbanBorder: {
          DEFAULT: '#B2B2B2'
        }
      },
      screens: {
        'smartphone': {'max': '380px'},
        // => @media (min-width: 640px) { ... }
      },
    },
  },
  variants: {
    extend: {
      display: ['dark'],
    },
  },
  plugins: [],
}