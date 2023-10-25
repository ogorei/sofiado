module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      sm: ['10px', '20px'],
      base: ['14px', '24px'],
      lg: ['18px', '28px'],
      xl: ['24px', '32px'],
    },
    screens: {
      xs: '576px',
      sm: '768px',
      md: '992px',
      lg: '1200px',
      xl: '1400px',
    },
    height: {
      screen: ['100vh', '100dvh'],
    },
    minHeight: {
      screen: ['100vh', '100dvh'],
    },
    maxHeight: {
      screen: ['100vh', '100dvh'],
    },
    extend: {
      backgroundImage: theme => ({
        'footer-texture': "url('/img/footer_texture.jpg')",
        'background-ec': "url('/img/backgroud-ec.jpg')",
      }),
      fontFamily: {
        body: ['Noto Sans JP', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
