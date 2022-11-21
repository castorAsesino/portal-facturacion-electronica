import { createTheme } from "@mui/material/styles";
import LogoModiga from "../assets/img/logo-modiga.svg";
import LogoModigaNavbar from "../assets/img/logo-modiga-blanco.svg";


export const ModigaTheme = createTheme({
  //'#f59c00',
  palette: {
    primary: {
      light: '#4d5382',
      main: '#212b55',
      dark: '#00002c',
      contrastText: '#fff',
    },
 /*    secondary: blue,
    error: blue, */
  },
  status: {
    imgLogin: LogoModiga,
    imgNavbar: LogoModigaNavbar,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          fontFamily: "Poppins, sans-serif"
        },
        a: {
          "&:hover": {
            color: '#00002c',
          },
        }
      }
    }
  }
});
