import React, { useState } from "react";

import "./styles.scss";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function WalletAddressAndKeys() {
  const [seedVisible, setSeedVisible] = useState(false);
  let address =
    "bxcALKJHSakhdsadhaskdhHHHDJADHUAWasasgjhrewrb6bxcALKJHSakhdsadhaskdhHHHDJADHUAWasasgjhrewrb6";
  function addEllipse(text: string) {
    return text.slice(0, 20) + "...";
  }
  return (
    <div className="WalletAddressAndKeys">
      {/* <Accordion sx={{backgroundColor: "#1C1C26" }} > */}
      {/* <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ backgroundColor: "#1C1C26", color: "white" }}
        > */}
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        sx={{ width: "100%", color: "white" }}
        // mt={2}
      >
        <Box className={!seedVisible ? "address-wrapper" : ""}>
          <Typography sx={{ fontWeight: 600 }}>Address</Typography>
          <Typography
            className={
              !seedVisible ? "address-without-key" : "address-with-key"
            }
            // sx={{
            //   color: (theme) => theme.palette.text.secondary,
            //   wordBreak: "break-all",
            //   fontWeight: 400,
            //   width: "85%",
            // }}
          >
            {!seedVisible ? addEllipse(address) : address}
          </Typography>
        </Box>
        <Box display="flex" flexDirection="row">
          <ContentCopyIcon
            className="copyIcon"
            sx={{ fontSize: "1.4rem" }}
          ></ContentCopyIcon>

          <ArrowRightIcon
            sx={{ fill: "#8787A8", cursor: "pointer" }}
            className={seedVisible ? "rotate" : ""}
            onClick={() => setSeedVisible(!seedVisible)}
          />
        </Box>
      </Box>
      {/* </AccordionSummary> */}
      {/* <AccordionDetails  sx={{ backgroundColor: "#1C1C26", color: "white" }}> */}
      <Box className={!seedVisible ? "d-none" : "d-block"}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          sx={{ width: "100%" }}
          mt={2}
        >
          <Box>
            <Typography sx={{ fontWeight: 600 }}>Secret View Key</Typography>
            <Typography
              sx={{
                color: (theme) => theme.palette.text.secondary,
                wordBreak: "break-all",
                fontWeight: 400,
                width: "85%",
              }}
              mt={1}
            >
              bxcALKJHSakhdsadhaskdhHHHDJADHUAWasasgjhrewrb6bxcALKJHSakhdsadhaskdhHHHDJADHUAWasasgjhrewrb6
            </Typography>
          </Box>
          <Box>
            <ContentCopyIcon
              className="copyIcon"
              sx={{ fontSize: "1.4rem", marginRight: "20px" }}
            ></ContentCopyIcon>
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          sx={{ width: "100%" }}
          mt={2}
        >
          <Box>
            <Typography sx={{ fontWeight: 600 }}>Secret Spend Key</Typography>
            <Typography
              sx={{
                color: (theme) => theme.palette.text.secondary,
                wordBreak: "break-all",
                fontWeight: 400,
                width: "85%",
              }}
              mt={1}
            >
              bxcALKJHSakhdsadhaskdhHHHDJADHUAWasasgjhrewrb6bxcALKJHSakhdsadhaskdhHHHDJADHUAWasasgjhrewrb6
            </Typography>
          </Box>
          <Box>
            <ContentCopyIcon
              className="copyIcon"
              sx={{ fontSize: "1.4rem", marginRight: "20px" }}
            ></ContentCopyIcon>
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          sx={{ width: "100%" }}
          mt={2}
        >
          <Box>
            <Typography sx={{ fontWeight: 600 }}>Recovery Seed</Typography>
            <Typography
              sx={{
                color: (theme) => theme.palette.text.secondary,
                wordBreak: "break-word",
                fontWeight: 400,
                width: "85%",
              }}
              mt={1}
            >
              inflamed dehydrate adhesive bawled vegan mice aztec prying oozed
              seismic video cider sixteen sleepless snug ripped snout rover
              onward wetsuit vane lakes viking volcano sleep
            </Typography>
          </Box>
          <Box>
            <ContentCopyIcon
              className="copyIcon"
              sx={{ fontSize: "1.4rem", marginRight: "20px" }}
            ></ContentCopyIcon>
          </Box>
        </Box>
      </Box>
     
    </div>
  );
}
