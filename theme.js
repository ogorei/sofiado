import { createTheme, rem } from "@mantine/core";

export const theme = createTheme({
  colors: {
    // Add your color
    deepBlue: ['#E9EDFC', '#C1CCF6', '#99ABF0' /* ... */],
    // or replace default theme color
    blue: ['#E9EDFC', '#C1CCF6', '#99ABF0' /* ... */],
  },

  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },

  headings: {
    fontSizes: {
      xs: rem(10),
      sm: rem(11),
      md: rem(14),
      lg: rem(16),
      xl: rem(20),
    },
  }
});