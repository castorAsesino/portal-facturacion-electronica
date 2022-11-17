import { createGlobalStyle } from "styled-components";
import { blue, pink } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import crazyLogo from "../../assets/img/a.png";

export const defaultTheme = {
  body: "#fff",
  fontColor: "#000",
};

export const ModigaTheme = {
  body: "#fff",
  fontColor: "#000",
};

export const EnvacoTheme = {
  body: "#000",
  fontColor: "#fff",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}
`;

export const appTheme = createTheme({
  palette: {
    primary: pink,
    secondary: blue,
  },
  status: {
    logo: crazyLogo,
  },
  
});

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          fontSize: "62.5%" /* 62.5% of 16px = 10px */,
          fontFamily: "Poppins, sans-serif"
        },
        body: {
          margin: "0",
          color: "red",
          boxSizing: "border-box",
          fontFamily: "Poppins, sans-serif",
          backgroundColor: "#E3E3E3"
        },
        logo: crazyLogo,
        palette: {
          primary: pink,
          secondary: blue,
        },
      }
    }
  }
});

export const themes = {
  normal: {
    primaryColor: "#FFA72A",
    accentColor: "#458622",
    backgroundColor: "#FFC777",
    textColor: "#504f4d",
    secondaryColor: "#7F5315",
    logo: crazyLogo,
    rotate: false
  },
  crazy: {
    primaryColor: "#1B8C81",
    accentColor: "#458622",
    backgroundColor: "#8FC266",
    textColor: "#D94B2B",
    secondaryColor: "#B9667F",
    logo: crazyLogo,
    rotate: true
  }
};
