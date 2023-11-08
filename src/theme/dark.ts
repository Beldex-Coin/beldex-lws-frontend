import { ThemeOptions } from "@mui/material";

export const darkTheme: ThemeOptions = {
    palette: {
        mode: "dark",
        primary: {
            main: "#00AD07",
            light: "#2B2B3C",
            dark: "#00AD07",
            contrastText: "#fff"
        },
        info: {
            main: '#2879FB'
        },
        error: {
            main: '#E22B2B'
        },
        secondary: {
            main: '#303045'
        },
        success : {
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