import React, { useEffect } from "react";
import { Box, GlobalStyles, PaletteMode, createTheme } from "@mui/material";
import { CssBaseline, ThemeProvider } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
// import theme from './theme/theme';
import NavBar from "./components/sideNavBar/NavBar";
import Header from "./components/header/Header";
import "./App.scss";
import { darkTheme } from "./theme/dark";
import { lightTheme } from "./theme/light";
import { ColorContext } from "./ColorContext";
import { CoreBridgeInstanceContext } from "./CoreBridgeInstanceContext";
import RouteList from "./routers";

const mnemonic_languages = require("@bdxi/beldex-locales");
const appBridge = require("@bdxi/beldex-app-bridge");
const HostedMoneroAPIClient = require("@bdxi/beldex-hosted-api");
const BackgroundAPIResponseParser = require("@bdxi/beldex-response-parser-utils");

function App() {
  const [mode, setMode] = React.useState<PaletteMode>("dark");
  const [bdxUtils, setBDXUtils] = React.useState<any>({});

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );
  const netType: any = process.env.NETTYPE;
  const config: any = {
    nettype: parseInt(netType), // critical setting 0 - MAINNET, 2 - STAGENET
    apiUrl: process.env.SERVER_URL,
    version: process.env.APP_VERSION,
    name: process.env.APP_NAME,
  };
  const beldex_utils: any = React.useMemo(
    () => ({
      set_Utils_data: (data: any) => {
        setBDXUtils(data);
      },

      beldex_utils: bdxUtils.beldex_utils,
      backgroundAPIResponseParser: bdxUtils.backgroundAPIResponseParser,
      hostedMoneroAPIClient: new HostedMoneroAPIClient(
        {
          appUserAgent_product: config.name,
          appUserAgent_version: config.version,
          apiUrl: config.apiUrl,
          request_conformant_module: require("xhr"),
        },
        bdxUtils
      ),
      // new BackgroundAPIResponseParser({
      //   coreBridge_instance: bdxUtils // the same as coreBridge_instance
      // }, config)
      ...config,
    }),
    [bdxUtils]
  );

  const getBridgeInstance = async () => {
    // let coreBridgeInstance = await appBridge({});
    const context: any = {};
    context.beldex_utils = await appBridge({});
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    context.backgroundAPIResponseParser = new BackgroundAPIResponseParser(
      {
        coreBridge_instance: context.beldex_utils, // the same as coreBridge_instance
      },
      context
    );
    beldex_utils.set_Utils_data(context);
  };
  // console.log("beldex_utils:", beldex_utils)
  useEffect(() => {
    getBridgeInstance();
  }, []);

  const theme = React.useMemo(
    () => createTheme(mode === "light" ? lightTheme : darkTheme),
    [mode]
  );
  const isMobileMode = useMediaQuery(theme.breakpoints.down("sm"));

  const isEmpty = Object.keys(bdxUtils).length === 0;

  if (isEmpty) {
    return <div>Loading....</div>;
  }

  return (
    <ColorContext.Provider value={colorMode}>
      <CoreBridgeInstanceContext.Provider value={beldex_utils}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles
            styles={{
              "*::-webkit-scrollbar": {
                width: "5px",
              },
              "*::-webkit-scrollbar-track": {
                // "-webkit-box-shadow": "inset 0 0 5px grey",
                // boxShadow: "inset 0 0 5px grey",
                borderRadius: "10px",
                backgroundColor:
                  theme.palette.mode == "dark"
                    ? theme.palette.background.default
                    : "#F2F2F2",
              },
              "*::-webkit-scrollbar-thumb": {
                background:
                  theme.palette.mode == "dark" ? "#585870" : "#C7C7C7",
                borderRadius: "10px",
              },
              "*::-webkit-scrollbar-thumb:hover": {
                background:
                  theme.palette.mode == "dark" ? "#585870" : "#C7C7C7",
              },
              "& .MuiButton-root":{
                textTransform: 'capitalize !important',

              },
              "& .MuiButton-containedPrimary:hover":{
               opacity:0.7
              }
            }}
          />
          <Box sx={{ minHeight: "100vh", padding: "20px" }}>
            <Header />
            <Box
              sx={{
                paddingTop: "65px",
                display: "flex",
                gap: "20px",
                minHeight: "calc(100vh - 45px)",
              }}
            >
              {!isMobileMode && <NavBar />}
              <Box
                sx={{
                  minWidth: isMobileMode ? "100%" : "calc(100% - 250px)",
                  background:isMobileMode?"unset": theme.palette.background.paper,
                  borderRadius: "25px",
                }}
              >
                {/* <Routes> */}
                <RouteList />
                {/* </Routes> */}
              </Box>
            </Box>
          </Box>
        </ThemeProvider>
      </CoreBridgeInstanceContext.Provider>
    </ColorContext.Provider>
  );
}

export default App;
