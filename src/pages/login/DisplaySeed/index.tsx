import React, { useState } from "react";
import {
  Box,
  Button,
  MenuItem,
  Select,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import theme from "../../../theme";

export default function DisplaySeed() {
  const isMobileMode = useMediaQuery(theme.breakpoints.down("sm"));

  const [language, setLanguage] = useState("English");
  return (
    <Box
      className="DisplaySeed"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#2B2B3C",
          width: "694px",
          height: "100%",
          padding: isMobileMode ? "15px" : "35px",
          display: "flex",
          justifyContent: "center",
            alignItems: "center",
          flexDirection: "column",
          marginTop:isMobileMode?'40px': "70px",
          borderRadius: "20px",
        }}
      >
        <Typography
          textAlign="center"
          sx={{ color: "white", fontWeight: "bold", fontSize: "1.5rem" }}
        >
          Create New Wallet
        </Typography>
        <Typography sx={{ fontWeight: 600, textAlign: "center" }} mt={2}>
          Note down your Recovery Seed!
        </Typography>
        <Typography
          sx={{ fontWeight: 300, textAlign: "center", color: "#B9B9CC" }}
        >
          You’ll confirm this sequence on the next screen.
        </Typography>

        <Box mt={4} display="flex" flexDirection="row">
          <Typography
            sx={{
              width: "100%",
              // height: "100px",
              color: "#B9B9CC",
              background: "#303045",
              padding: "10px 20px",
              borderRadius: "18px",
              overflow: "auto",
              fontWeight: 400,
              display: "flex",
              alignItems: "center",
              fontSize:isMobileMode?'11px':'1rem'

              //   marginTop: "10px",
            }}
          >
            inflamed dehydrate adhesive bawled vegan mice aztec prying oozed
            seismic video cider sixteen sleepless snug ripped snout rover onward
            wetsuit vane lakes viking volcano sleep
          </Typography>
          <Box sx={{ display: "flex",
                justifyContent: "center",
                alignItems: "center",}}>
            <Box
              sx={{
                backgroundColor: "#128B17",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                width: "40px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50px",
               
                marginLeft:isMobileMode?"8px":"20px",
                cursor: "pointer",
              }}
            >
              <ContentCopyIcon
                sx={{
                  fill: "#FFF",
                  fontSize: "1rem",
                }}
              />
            </Box>
          </Box>
        </Box>

        <Typography sx={{ fontWeight: 400, fontSize:isMobileMode?'12px':'1rem' }} mt={3}>
          <Typography component="span" sx={{ color: "#FF2424" }} mr={1}>
            Note :
          </Typography>
          This is the way to use the access your wallet if you switch devices,
          use another Beldex wallet app, or lose your data.
        </Typography>

        <Box className="drop-down-wrapper" mt={3} textAlign="center">
          <Typography component="span" sx={{ color: "#B9B9CC" }}>
            Language
          </Typography>
          <Select
            disableUnderline
            SelectDisplayProps={{
              style: {
                paddingTop: "10px",
                paddingBottom: "10px",
                backgroundColor: "#303045",
                borderRadius: "5px",
                fontWeight: 400,
              },
            }}
            // className="currency-dropdown"
            IconComponent={KeyboardArrowDownIcon}
            sx={{
              color: "white",
              backgroundColor: "#303045",
              borderRadius: "10px",
              marginLeft: "10px",
              marginTop: "16px",
              "& .MuiSelect-icon": {
                fill: "white",
                color: "white",
              },
            }}
            variant="filled"
            inputProps={{
              MenuProps: {
                MenuListProps: {
                  sx: {
                    color: "white",
                    backgroundColor: "#303045",
                    // height: "300px",
                    // overflow: "auto",
                  },
                },
              },
            }}
            value={language}
            defaultValue={language}
            onChange={(event) => setLanguage(event.target.value)}
          >
            {/* {Object.values(exchangeCurrencyList).map((item, key) => ( */}
            <MenuItem value={"English"}>English</MenuItem>
            <MenuItem value={"Russian"}>Russian</MenuItem>
            {/* ))} */}
          </Select>
        </Box>
        <Box
          mt={5}
          width={"100%"}
          display="flex"
          justifyContent="center"
          flexDirection={"row"}
          flexWrap={"wrap"}
          alignContent="center"
        >
          <Button
            variant="contained"
            color="secondary"
            sx={{
              width: isMobileMode ? "70%" : "200px",
              borderRadius: isMobileMode ? "40px" : "10px",
              fontWeight: 600,
              height: "50px",
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{
              fontWeight: 600,
              // borderRadius: "10px",
              color: "white",
              height: "50px",
              marginLeft: isMobileMode ? "0" : "10px",
              marginTop: isMobileMode ? "10px" : "0",
              width: isMobileMode ? "70%" : "200px",
              borderRadius: isMobileMode ? "40px" : "10px",
            }}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
