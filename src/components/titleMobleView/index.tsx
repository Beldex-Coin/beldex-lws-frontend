
import React from 'react'
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const TitleMobileView = () => {
  const theme = useTheme();
    const walletDetails = useSelector((state: any) => state.seedDetailReducer);
    const location:any = useLocation()?.pathname;
  const isMobileMode = useMediaQuery(theme.breakpoints.down("sm"));
  const istabletMode = useMediaQuery(theme.breakpoints.down("md"));
  

  const titleValidator = () => {
    const defaultTitle = "Home";

    if (!walletDetails.isLogin && (location === '/mywallet' || location === '/')) {
      return defaultTitle;
    }

    switch (location) {
      // case "/":
      //   return "Home";
      case "/settings":
        return "Settings";
      case "/privacy":
        return "Privacy";
      case "/terms":
        return "Terms";
      case "/support":
        return "Support";
      default:
        return "Wallet";
    }
  };

  return (
    <>
      { istabletMode && (
        <Typography
          sx={{
            paddingTop: "65px",
            fontSize: "18px",
            fontWeight: 600,
            mb: 2,
          }}
        >
          {titleValidator()}
        </Typography>
      )}
    </>
  );
};
export default TitleMobileView;


