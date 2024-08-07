import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#000814",
    },
    secondary: {
      main: "#e8f1f2",
    },
  },
  typography: {
    fontFamily: "Segoe UI Symbol",
  }
});

theme = responsiveFontSizes(theme)

export default theme;
