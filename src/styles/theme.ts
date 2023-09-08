import { createTheme } from "@mui/material/styles";

const primaryMain = "#EEF4ED";
const secondaryMain = "#C1BFB8";
const backgroundDefault = "#272829";
const backgroundPaper = "#131415";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: primaryMain,
    },
    secondary: {
      main: secondaryMain,
    },
    text: {
      primary: primaryMain,
      secondary: secondaryMain,
    },
    background: {
      default: backgroundDefault,
      paper: backgroundPaper,
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
        },
      },
    },
  },
});

export { theme };
