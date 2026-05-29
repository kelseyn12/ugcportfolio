import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy:  '#1a2e38',
        steel: '#3f4d56',
        teal:  '#4a6b73',
        coral: '#b85c38',
        cream: '#e8dcc8',
        peach: '#d4c4a8',
      },
    },
  },
  plugins: [],
};

export default config;
