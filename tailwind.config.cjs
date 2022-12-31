/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true,
    },
    screens: {
      '2xl': { max: '1535px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },

      minsm: { min: '640px' },
      minmd: { min: '768px' },
      minlg: { min: '1024px' },
      minxl: { min: '1280px' },
      min2xl: { min: '1536px' },
    },
    extend: {
      colors: {
        "blue-primary": "#00C2FF",
        "blue-dark": "#2354FF",
        "blue-light": "#70DDFF",
        "black-dark": "#1B1B1B",
        "gray-light": "#999999",
        "gray-medium": "#393939",
        'gray-dark': '#333333',
        'gray-extra-dark': '#252525',
        success: "#22CD9D",
      },
    },
    fontFamily: {
      sans: ["Proxima-Nova", "sans-serif"],
      'proxima-cn': 'Proxima-Nova-Cn'
    },
  },
  variants: {
    extend: {
      fontSmoothing: ["hover", "focus"],
      fontSize: ["hover", "focus"],
      fontStyle: ["hover", "focus"],
      fontWeight: ["hover", "focus"],
      animation: ["hover", "focus"],
    },
  },
  plugins: [],
}
