import { createTheme } from "@mui/material";

const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#f0f",
    },
    background: {
      default: "#000",
      paper: "#1a1a1a",
    },
    text: {
      primary: "#fff",
      secondary: "#f0f",
    },
  },
  typography: {
    fontFamily: "'Orbitron', 'Roboto', 'Arial', sans-serif",
    h1: {
      fontSize: "4rem",
      fontWeight: 700,

      textTransform: "uppercase",
    },
    h2: {
      fontSize: "3rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "2.5rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      color: "#ccc",
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 300,
      color: "#999",
    },
    button: {
      fontSize: "1rem",
      fontWeight: 600,
      textTransform: "uppercase",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#1a1a1a",

          color: "#0ff",

          transition: "0.3s ease-in-out",
          "&:hover": {
            color: "#000",
          },
        },
      },
    },
  },
});

export default theme;
