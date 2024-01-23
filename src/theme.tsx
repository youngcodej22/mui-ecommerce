// import { createTheme } from "@mui/material/styles";
import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1920,
    },
  },
  // unstable_sxConfig: {
  //   pl: 0,
  //   pr: 0
  // }
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          // maxWidth: "100vw",
          paddingLeft: 0,
          paddingRight: 0,

          ['@media (min-width:600px)']: {
            paddingLeft: 0,
            paddingRight: 0,
          },
        },
      },
    },
  }
});

export default theme;
