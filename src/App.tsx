import React, { useEffect } from 'react';
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
import { CoreBridgeInstanceContext } from './CoreBridgeInstanceContext';
import RouteList from './routers';
const mnemonic_languages = require('@bdxi/beldex-locales');
const appBridge = require('@bdxi/beldex-app-bridge');


// import {mnemonic_languages} from '@bdxi/beldex-locales';
// const coreBridgeInstance = await require('@bdxi/beldex-app-bridge')({})

function App() {
  const [mode, setMode] = React.useState<PaletteMode>("dark");
  const [bdxUtils, setBDXUtils] = React.useState<any>({});
  const colorMode = React.useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevMode: PaletteMode) => prevMode === "light" ? "dark" : "light")
    }
  }), []);

  const beldex_utils = React.useMemo(() => ({
    set_Utils_data: (data: any) => {
      setBDXUtils(data)
    },
    beldex_utils: bdxUtils
  }), [bdxUtils]);

  const getBridgeInstance = async () => {
    let coreBridgeInstance = await appBridge({})
    beldex_utils.set_Utils_data(coreBridgeInstance);
    // let compatibleLocaleCode = mnemonic_languages.compatibleCodeFromLocale(window.navigator.language)
    // console.log('---coreBridgeInstance---', coreBridgeInstance);
    // console.log('---compatibleLocaleCode---', compatibleLocaleCode);
    // console.log('---Process---', process.env.NETTYPE);
    // const recSeed = coreBridgeInstance.newly_created_wallet(compatibleLocaleCode, 1)
    // console.log('---coreBridgeInstance---', recSeed)
  }
  useEffect(() => {
    getBridgeInstance();
  }, [])

  const theme = React.useMemo(() => createTheme(mode === "light" ? lightTheme : darkTheme), [mode]);
  const isMobileMode = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ColorContext.Provider value={colorMode}>
      <CoreBridgeInstanceContext.Provider value={beldex_utils}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box sx={{ minHeight: '100vh', padding: '20px' }}>
            <Header />
            <Box sx={{ paddingTop: '65px', display: 'flex', gap: '20px', minHeight: 'calc(100vh - 45px)' }}>
              {!isMobileMode && <NavBar />}
              <Box sx={{ minWidth: isMobileMode ? '100%' : 'calc(100% - 250px)', background: theme.palette.background.paper, borderRadius: '25px' }}>
                <Routes>
                  {RouteList.map((route: any) => <Route key={route.id} path={route.path} element={route.component} />)}
                </Routes>
              </Box>
            </Box>
          </Box>
        </ThemeProvider>
      </CoreBridgeInstanceContext.Provider>
    </ColorContext.Provider>
  );
}

export default App;
