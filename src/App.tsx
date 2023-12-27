import React, { useEffect, useRef } from "react";
import { Box, GlobalStyles, PaletteMode, useMediaQuery, useTheme } from "@mui/material";
import NavBar from "./components/sideNavBar/NavBar";
import Header from "./components/header/Header";
import "./App.scss";
import { CoreBridgeInstanceContext } from "./CoreBridgeInstanceContext";
import RouteList from "./routers";
import MUIWrapper from "./theme/MUIWrapper";
import ToastMsg, { ToastMsgRef } from "./components/snackbar/ToastMsg";
import { useAppDispatch } from "./stores/hooks";
import {
  setUserLogout
} from "./stores/features/seedDetailSlice";
const mnemonic_languages = require("@bdxi/beldex-locales");
const appBridge = require("@bdxi/beldex-app-bridge");
const HostedMoneroAPIClient = require("@bdxi/beldex-hosted-api");
const BackgroundAPIResponseParser = require("@bdxi/beldex-response-parser-utils");

function App() {

  const [bdxUtils, setBDXUtils] = React.useState<any>({});
  const toastMsgRef = useRef<ToastMsgRef>(null);
  const netType: any = process.env.NETTYPE;
  const config: any = {
    nettype: parseInt(netType), // critical setting 0 - MAINNET, 2 - STAGENET
    apiUrl: process.env.SERVER_URL,
    version: process.env.APP_VERSION,
    name: process.env.APP_NAME,
  };
  const dispatch = useAppDispatch();
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

  const handleShowToastMsg = () => {
    if (toastMsgRef.current) {
      toastMsgRef.current.showAlert("You are offline. Connect to the Internet.", "error");
    }
  };

  useEffect(() => {
    const alertUser = (e: any) => {
      dispatch(setUserLogout());
    };

    window.addEventListener("beforeunload", alertUser);
    getBridgeInstance();
    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);

  useEffect(() => {
    const isOnLine = navigator.onLine
    if (!isOnLine) {
      handleShowToastMsg();
    }
  })

  const theme = useTheme();
  const isMobileMode = useMediaQuery(theme.breakpoints.down("sm"));
  const isEmpty = Object.keys(bdxUtils).length === 0;
  if (isEmpty) {
    return <div>Loading....</div>;
  }

  return (
    <CoreBridgeInstanceContext.Provider value={beldex_utils}>
      <MUIWrapper>
        <Box sx={{ height: isMobileMode ? "unset" : "100vh", padding: "20px" }}>
          <Header />
          <Box
            sx={{
              paddingTop: "65px",
              display: "flex",
              gap: "20px",
              height: "100%"
              // minHeight: "calc(100vh - 45px)",
            }}
          >
            <NavBar />
            <RouteList />
          </Box>
        </Box>
        <ToastMsg ref={toastMsgRef} />
      </MUIWrapper>
    </CoreBridgeInstanceContext.Provider>
  );
}

export default App;
