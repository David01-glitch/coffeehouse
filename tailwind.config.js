/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FBF7F0',
          100: '#F6EFE2',
          200: '#EEE2CB',
          300: '#E2CFA8',
        },
        espresso: {
          900: '#1F140C',
          800: '#2C1D12',
          700: '#3F2A1C',
          600: '#56392A',
        },
        caramel: {
          500: '#C58A47',
          400: '#D5A064',
          300: '#E0B583',
        },
        mocha: {
          700: '#6B4226',
          600: '#7E5236',
          500: '#946445',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        base: ['17px', '1.7'],
      },
      boxShadow: {
        cozy: '0 20px 60px -20px rgba(63, 42, 28, 0.35)',
        soft: '0 8px 30px -10px rgba(63, 42, 28, 0.18)',
      },
      backgroundImage: {
        'warm-grad': 'linear-gradient(135deg, #FBF7F0 0%, #F6EFE2 50%, #EEE2CB 100%)',
        'espresso-grad': 'linear-gradient(135deg, #2C1D12 0%, #3F2A1C 60%, #56392A 100%)',
      },
    },
  },
  plugins: [],
};
