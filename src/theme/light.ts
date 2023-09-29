import { ThemeOptions } from "@mui/material";

export const lightTheme: ThemeOptions = {
    palette: {
        mode: "light",
        primary: {
            main: "#00D030",
            light: "Blue",
            dark: "#00D090",
            contrastText: "#000"
        },
        secondary: {
            main: "#FCFCFC",
            light: "#FCFCFC"
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