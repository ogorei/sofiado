module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    /* Mantineと一致させる: https://mantine.dev/theming/responsive */
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
        stencil: ['Allerta Stencil', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
