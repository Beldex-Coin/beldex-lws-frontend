import { ThemeOptions } from "@mui/material";

export const darkTheme: ThemeOptions = {
    palette: {
        mode: "dark",
        primary: {
            main: "#00D030",
            light: "red",
            dark: "#00D090",
            contrastText: "#fff"
        },
        secondary: {
            main: "#2B2B3C",
            light: "#2B2B3C"
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#AFAFBE'
        },
        // common: {
        //     white: '#FCFCFC',
        //     black: '#2B2B3C'
        // },
        background: {
            paper: "#242433",
            // paper: "#1C1C26",
            default: "#1C1C26"
        }
    },
    typography: {
        fontFamily: 'Poppins',
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 'bold',
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
            @font-face {
              font-family: 'Poppins';
              
            }
          `,
        },
    }
}