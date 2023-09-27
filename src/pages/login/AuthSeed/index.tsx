import React, { useState } from "react";
import {
  Box,
  Button,
  MenuItem,
  Select,
  Input,
  Typography,
  useMediaQuery
} from "@mui/material";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import theme from "../../../theme";
// import ContentCopyIcon from "@mui/icons-material/ContentCopy";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


export default function AuthSeed() {
  const isMobileMode = useMediaQuery(theme.breakpoints.down("sm"));
  const verifySeed = [
    "inflamed",
    "dehydrate",
    "adhesive",
    "bawled",
    "vegan",
    "mice",
    "aztec",
  ];
  return (
    <Box
      className="AuthSeed"
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
          width: "870px",
          height: "100%",
          padding:isMobileMode?'15px': "35px",
          display: "flex",
          justifyContent: "center",
          //   alignItems: "center",
          flexDirection: "column",
          marginTop:isMobileMode?"30px":"70px",
          borderRadius: "20px",
        }}
      >
        <Typography
          textAlign="center"
          sx={{ color: "white", fontWeight: "bold", fontSize: "1.5rem" }}
        >
          Create New Wallet
        </Typography>
        <Typography sx={{ fontWeight: 600, textAlign: "center" }} mt={4}>
          Verify your seed
        </Typography>
        <Typography
          sx={{ fontWeight: 300, textAlign: "center", color: "#B9B9CC" }}
        >
          Choose the first 7 words in the correct order
        </Typography>

        <Box mt={2} display="flex" flexDirection="row">
          <Input
            placeholder="Enter Recovery Seed from Existing wallet"
            disableUnderline={true}
            multiline
            sx={{
              width: "100%",
              height: "150px",
              color: "white",
              background: "#303045",
              padding: "0 20px",
              borderRadius: "18px",
              overflow: "auto",

              //   marginTop: "10px",
            }}
          />
        </Box>

        <Box
          mt={2}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {verifySeed.map((item) => (
            <Typography
              mr={2}
              mt={2}
              sx={{
                color: "#B9B9CC",
                fontWeight: 400,
                backgroundColor: "#32324A",
                padding: "5px 15px",
                borderRadius: "20px",
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>

        <Typography
          sx={{ color: "#FF2424", fontWeight: 400, textAlign: "center" }}
          mt={2}
        >
          That’s not right. You can try again or start over with a new mnemonic.
        </Typography>
        <Box mt={6} display="flex" justifyContent="center">
          <Button
            variant="outlined"
            color="secondary"
            sx={{
              fontWeight: 600,
              borderRadius: '30px',
              height: '50px',
              width:isMobileMode?'48%' :'22%',
              color: 'white',
              borderWidth: '2px',
              marginRight:'20px'
            }}
          >
            <AutorenewOutlinedIcon sx={{fill: '#289AFB',marginRight:'5px'}} /> Try again
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            sx={{
              fontWeight: 600,
              borderRadius: '30px',
              height: '50px',
              width:isMobileMode?'48%' :'22%',
              color: 'white',
              borderWidth: '2px'
            }}
          >
            <RefreshOutlinedIcon sx={{fill:'#19AD1C',marginRight:'5px'}}/>
            Start Over
          </Button>
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
