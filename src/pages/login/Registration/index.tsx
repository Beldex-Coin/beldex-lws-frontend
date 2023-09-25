import React from "react";
import { Box, Button, Typography } from "@mui/material";

export default function Registration() {
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
          width: '694px',
          height: "100%",
          padding: "35px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "112px",
          borderRadius:'20px'
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
              width: "125px",
              position: "absolute",
              left: "-416px",
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
        <Typography sx={{ color: "#AFAFBE", fontWeight: 400 }}>
          Welcome to MyBeldex! Let’s get started :)
        </Typography>

        <Box position="relative">
          <Box
            sx={{
              width: "84px",
              position: "absolute",
              left: "313px",
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
            sx={{ fontWeight: 600, borderRadius: "10px", height: "50px" }}
          >
            Use Existing Wallet
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{
              fontWeight: 600,
              borderRadius: "10px",
              color: "white",
              height: "50px",
              marginLeft: "10px",
            }}
          >
            Create New Wallet
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
