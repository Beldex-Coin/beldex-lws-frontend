import React from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import theme from "../../../theme";

export default function Registration() {
  const isMobileMode = useMediaQuery(theme.breakpoints.down("sm"));
  console.log("isMobileMode ::", isMobileMode);

  return (
    <Box
      className="registration"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#2B2B3C",
          width: "694px",
          height: "100%",
          padding: "35px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "112px",
          borderRadius: "20px",
        }}
      >
        <Typography
          textAlign="center"
          sx={{ color: "white", fontWeight: "bold", fontSize: "1.5rem" }}
        >
          MyBeldex
        </Typography>
        <Box position="relative">
          <Box
            sx={{
              width: isMobileMode ? "75px" : "125px",
              position: "absolute",
              left: isMobileMode ? "-209px" : "-416px",
            }}
          >
            <img
              src={require("../../../icons/coin.png")}
              style={{ width: "100%", height: "100%" }}
              alt="coin"
            />
          </Box>
        </Box>
        <Box sx={{ width: "87%", height: "auto" }} mt={5}>
          <img
            src={require("../../../icons/Empty_screen_image.png")}
            style={{ width: "100%", height: "100%" }}
            alt="display"
          />
          {/* <EmptyScreenImageDark styles={{ fontSize: "6rem" }} /> */}
        </Box>
        <Typography sx={{ color: "#AFAFBE", fontWeight: 400,fontSize:isMobileMode?'0.8rem':'1rem' }}>
          Welcome to MyBeldex! Let’s get started :)
        </Typography>

        <Box position="relative">
          <Box
            sx={{
              width: isMobileMode ? "55px" : "84px",
              position: "absolute",
              left: isMobileMode ? "140px" : "313px",
              top: "-68px",
            }}
          >
            <img
              src={require("../../../icons/blue.png")}
              style={{ width: "100%", height: "100%" }}
              alt="coin"
            />
          </Box>
        </Box>
        <Box mt={5}>
          <Button
            variant="contained"
            color="info"
            sx={{
              width: isMobileMode?"100%":'200px',
              borderRadius: isMobileMode ? "40px" : "10px",
              fontWeight: 600,
              height: "50px",
            }}
          >
            Use Existing Wallet
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{
              fontWeight: 600,
              // borderRadius: "10px",
              color: "white",
              height: "50px",
              marginLeft:isMobileMode? '0':"10px",
              marginTop:isMobileMode?'10px':'0',
              width: isMobileMode?"100%":'200px',
              borderRadius: isMobileMode ? "40px" : "10px",
            }}
          >
            Create New Wallet
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
