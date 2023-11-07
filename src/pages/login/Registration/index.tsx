import React from "react";
import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import coinImg from '../../../icons/coin.png';
import emptyScreenImg from "../../../icons/Empty_screen_image.png";
import blueImg from "../../../icons/blue.png";

export default function Registration() {
  const theme:any = useTheme();
  const isMobileMode = useMediaQuery(theme.breakpoints.down("sm"));
  console.log("isMobileMode ::", isMobileMode);
  const navigate = useNavigate();

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
          backgroundColor: theme.palette.secondary.main,
          maxWidth: "694px",
          height: "100%",
          padding: "35px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop:isMobileMode ?"50px":"112px",
          borderRadius: "20px",
          position: "relative"
        }}
      >
        <Typography
          textAlign="center"
          sx={{ color: theme.palette.text.primary, fontWeight: "bold", fontSize: "1.5rem" }}
        >
          MyBeldex
        </Typography>
        <Box>
          <Box
            sx={{
              width: isMobileMode ? "75px" : "125px",
              position: "absolute",
              left: isMobileMode ? "-33px" : "-80px",
            }}
          >
            <img
              src={coinImg}
              style={{ width: "100%", height: "100%" }}
              alt="coin"
            />
          </Box>
        </Box>
        <Box sx={{ width: "87%", height: "auto" }} mt={5}>
          <img
            src={emptyScreenImg}
            style={{ width: "100%", height: "100%" }}
            alt="display"
          />
          {/* <EmptyScreenImageDark styles={{ fontSize: "6rem" }} /> */}
        </Box>
        <Typography sx={{ color: (theme) => theme.palette.text.secondary, fontWeight: 400,fontSize:isMobileMode?'0.8rem':'1rem' }}>
          Welcome to MyBeldex! Let’s get started :)
        </Typography>

        <Box>
          <Box
            sx={{
              width: isMobileMode ? "55px" : "84px",
              position: "absolute",
              right: isMobileMode ? "-20px" : "-40px",
              top: "46%",
            }}
          >
            <img
              src={blueImg}
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
              color: "white",
              height: "50px",
            }}
            onClick={() => navigate('/login')}
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
            onClick={() => navigate('/createNewWallet')}

          >
            Create New Wallet
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
