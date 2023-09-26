import React, { useState } from "react";
import {
  Box,
  Button,
  MenuItem,
  Select,
  Input,
  Typography,
} from "@mui/material";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function AuthSeed() {
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
          padding: "35px",
          display: "flex",
          justifyContent: "center",
          //   alignItems: "center",
          flexDirection: "column",
          marginTop: "70px",
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
              width: '22%',
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
              width: '22%',
              color: 'white',
              borderWidth: '2px'
            }}
          >
            <RefreshOutlinedIcon sx={{fill:'#19AD1C',marginRight:'5px'}}/>
            Start Over
          </Button>
        </Box>
        <Box mt={6} display="flex" justifyContent="center">
          <Button
            variant="contained"
            color="secondary"
            sx={{
              fontWeight: 600,
              borderRadius: "10px",
              height: "55px",
              width: "35%",
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{
              fontWeight: 600,
              borderRadius: "10px",
              color: "white",
              marginLeft: "10px",
              height: "55px",
              width: "35%",
            }}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
