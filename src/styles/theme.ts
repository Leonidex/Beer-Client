import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#C1BFB8",
    },
    secondary: {
      main: "#EEF4ED",
    },
    text: {
      primary: "#EEF4ED",
    },
    background: {
      default: "#272829",
      paper: "#131415",
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
