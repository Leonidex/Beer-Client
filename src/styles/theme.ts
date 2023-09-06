import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#EEF4ED",
    },
    secondary: {
      main: "#96918B",
    },
    text: {
      primary: "#EEF4ED",
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
