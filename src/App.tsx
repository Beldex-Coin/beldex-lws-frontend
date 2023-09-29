import React from 'react';
import { Box, PaletteMode, createTheme } from '@mui/material';
import { CssBaseline, ThemeProvider } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
// import theme from './theme/theme';
import NavBar from './components/sideNavBar/NavBar';
import Header from './components/header/Header';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { darkTheme } from './theme/dark';
import { lightTheme } from './theme/light';
import { ColorContext } from './ColorContext';
import RouteList from './routers';

function App() {
  const [mode, setMode] = React.useState<PaletteMode>("dark");
  const colorMode = React.useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevMode: PaletteMode) => prevMode === "light" ? "dark" : "light")
    }
  }), []);
  const theme = React.useMemo(() => createTheme(mode === "light" ? lightTheme : darkTheme), [mode]);
  const isMobileMode = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ColorContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ minHeight: '100vh', padding: '20px' }}>
          <Header />
          <Box sx={{ paddingTop: '65px', display: 'flex', gap: '20px', minHeight: 'calc(100vh - 45px)' }}>
            {!isMobileMode && <NavBar />}
            <Box sx={{ width: '100%', background: isMobileMode ? '' : theme.palette.background.paper, borderRadius: '25px' }}>
              <Routes>
                {RouteList.map((route: any) => <Route key={route.id} path={route.path} element={route.component} />)}
              </Routes>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </ColorContext.Provider>
  );
}

export default App;
