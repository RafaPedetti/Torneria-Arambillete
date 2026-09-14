// theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#022764", 
      light: "#e9e9e9",
      contrastText: "#fff",
    },
    secondary: {
      main: "#022764", // dorado
      contrastText: "#000",
    },
    background: {
      default: "#dbe9f3", // color de fondo claro
      paper: "white",
    },
    text: {
      primary: "#2B2B2B", // texto oscuro
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "#022764",
        },
        root: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#022764",
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          "&.Mui-focused:after": {
            borderBottom: "2px solid #022764",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          "&:-webkit-autofill": {
            boxShadow: "0 0 0 1000px #022764 inset",
            WebkitTextFillColor: "#2B2B2B",
            transition: "background-color 5000s ease-in-out 0s",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "16px",
          "& .MuiButton-root": {
            backgroundColor: "#022764", 
            color: "white",
            padding: "8px 16px",
            marginTop: "8px",
            borderRadius: 20,
            textDecoration: "none", 
           
            "&:hover": {
              backgroundColor: "#022764",
            },
          },
        },
      },
    },
  },
});

export default theme;
