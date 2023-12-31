import { Box, useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import SendFund from "./SendFund";
import Balance from "./Balance";
import WalletAddressAndKeys from "./WalletAddressAndKeys";
import TransactionHistory from "./TransactionHistory";
import userIdleTimerController from "../settings/AppTimeoutSlider/userIdleTimerController";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const MyWallet = () => {
  const theme: any = useTheme();
  const isMobileMode = useMediaQuery(theme.breakpoints.down("md"));
  const walletDetails = useSelector((state: any) => state.seedDetailReducer);
  walletDetails.timer !== 1500 && userIdleTimerController();

  const navigate = useNavigate();

  useEffect(() => {
    const handlePopstate = (event: any) => {
      window.history.pushState(null, document.title, window.location.href);
    };

    // Attach the event listener
    window.addEventListener("popstate", handlePopstate);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("popstate", handlePopstate);
      // window.removeEventListener('unload', handleTabClose);
    };

    // The dependency array is empty to mimic componentDidMount
  }, []);

  return (
    <Box
      sx={{
        minWidth: isMobileMode ? "100%" : "calc(100% - 250px)",
        background: isMobileMode ? "unset" : theme.palette.background.paper,
        borderRadius: "25px",
      }}
    >
      <Box
        sx={{
          display: isMobileMode ? "block" : "flex",
          gap: "20px",
          // minHeight: "100%",
          height: '100%',
          padding: isMobileMode ? "0" : "20px",
          overflow: isMobileMode ? "unset" : 'hidden'
        }}
      >
        <Box sx={{ width: "100%", overflow: 'auto' }}>
          <Balance />
          <WalletAddressAndKeys />
          <TransactionHistory />
        </Box>
        <Box
          sx={{
            minWidth: "320px",
            background: (theme) => theme.palette.success.main,
            borderRadius: "25px",
            padding: '30px 10px',
            mt: isMobileMode ? 2 : 'unset',
            mb: isMobileMode ? 2 : 'unset',
          }}
        >
          <SendFund />
        </Box>
      </Box>
    </Box>
  );
};

export default MyWallet;
