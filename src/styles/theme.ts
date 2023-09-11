import { createTheme } from "@mui/material/styles";

const primaryMain = "#EEF4ED";
const secondaryMain = "#C1BFB8";
const backgroundDefault = "#272829";
const backgroundPaper = "#131415";
const infoMain = "#2e353d";

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
    info: {
      main: infoMain,
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
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "none",
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          background: backgroundPaper,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(120px)",
          filter: "brightness(120%)",
        },
      },
    },
  },
});

export { theme };
