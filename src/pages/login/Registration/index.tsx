import React, { useEffect } from "react";
import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../stores/hooks";
import {setSeedDetails} from "../../../stores/features/seedDetailSlice";
import coinImg from '../../../icons/coin.png';
import emptyScreenImg from "../../../icons/Empty_screen_image.png";
import blueImg from "../../../icons/blue.png";
import { CoreBridgeInstanceContext } from "../../../CoreBridgeInstanceContext";
const mnemonic_languages = require('@bdxi/beldex-locales')

export default function Registration() {
  const theme:any = useTheme();
  //const dispatch = useAppDispatch();
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
          backgroundColor: theme.palette.success.main,
          height: "100%",
          padding: "25px",
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
          sx={{ color: theme.palette.text.primary, fontWeight: "bold", fontSize: "1.5rem" }}
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
