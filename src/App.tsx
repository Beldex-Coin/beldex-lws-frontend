import React from 'react';
import { Box } from '@mui/material';
import { CssBaseline, ThemeProvider } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from './theme';
import NavBar from './components/sideNavBar/NavBar';
import Header from './components/header/Header';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import RouteList from './routers';

function App() {
  const isMobileMode = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ background: '#1C1C26', minHeight: '100vh', padding: '20px' }}>
        <Header />
        <Box sx={{ paddingTop: '75px', display: 'flex', gap: '20px', minHeight: 'calc(100vh - 45px)' }}>
          {!isMobileMode && <NavBar />}
          <Box sx={{ width: '100%', background:isMobileMode? '':'#242433', borderRadius: '25px' }}>
          <Routes>
            {RouteList.map((route: any)=> <Route key={route.id} path={route.path} element={route.component}/>)}
          </Routes>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
