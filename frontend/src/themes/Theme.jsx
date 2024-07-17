import { createTheme, responsiveFontSizes } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#4a4139",
      light: "#413d39",
    },
    secondary: {
      main: "#474b4f",
    },
    background: {
      paper: "rgba(240,241,240,0.16)",
      default: "#cfd8dc",
    },
    text: {
      primary: "#3e362e",
      secondary: "#6e6658",
      disabled: "#ffffff",
      hint: "#4d1919",
    },
  },
  typography: {
    h4: {
      fontFamily: "Montserrat",
      textTransform: "uppercase",
    },
    body1: {
      fontFamily: "Abel",
      fontWeight: 500,
    },
    body2: {
      fontWeight: "bolder",
      fontFamily: "Montserrat",
      textTransform: "uppercase",
      fontSize: "1rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "white",
          },
        },
      },
    },
  },
})

export const themeOptions = responsiveFontSizes(theme)
