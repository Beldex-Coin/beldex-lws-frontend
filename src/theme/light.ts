import { ThemeOptions } from "@mui/material";

export const lightTheme: ThemeOptions = {
    palette: {
        mode: "light",
        primary: {
            main: "#00AD07",
            light: "#FCFCFC",
            dark: "#00AD07",
            contrastText: "#000"
        },
        info: {
            main: '#2879FB'
        },
        error: {
            main: '#E22B2B'
        },
        success: {
            main: "#FCFCFC",
            light: "#FCFCFC"
        }, 
        secondary: {
          main: "#F5F5F5"
        },
        text: {
            primary: '#222222',
            secondary: '#7F7F88'
        },
        // common: {
        //     white: '#FCFCFC',
        //     black: '#2B2B3C'
        // },
        background: {
            paper: "#f8f8f8",
            // paper: "#F2F2F2",
            default: "#F2F2F2"
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