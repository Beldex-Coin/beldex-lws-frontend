import React, { useState } from "react";

import "./styles.scss";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Box, useMediaQuery, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useTheme } from "@emotion/react";
import { useSelector } from "react-redux";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function WalletAddressAndKeys() {
  const theme: any = useTheme();
  const walletDetails = useSelector((state: any) => state.seedDetailReducer);
  // const log = useSelector((state: any) =>
  //   console.log("logloglog ::", state.seedDetailReducer)
  // );
  const [seedVisible, setSeedVisible] = useState(false);
  // let address =
  //   "bxcALKJHSakhdsadhaskdhHHHDJADHUAWasasgjhrewrb6bxcALKJHSakhdsadhaskdhHHHDJADHUAWasasgjhrewrb6";
  // function addEllipse(text: string) {
  //   return text.slice(0, 20) + "...";
  // }
  async function copyText(text: string) {
    navigator.clipboard.writeText(text);
    // await new Wallet().Login();
  }
  return (
    <Box
      className="WalletAddressAndKeys"
      sx={{
        marginTop: "20px",
        // color: #fff,
        padding: "20px",
        borderRadius: "20px",
        backgroundColor: (theme) => theme.palette.background.default,
      }}
    >
      {/* <Accordion sx={{backgroundColor: "#1C1C26" }} > */}
      {/* <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ backgroundColor: "#1C1C26", color: "white" }}
        > */}
      <Box
        sx={{
          width: "100%",
          color: "white",

          display: "flex",
          justifyContent: "space-between",
          position: "relative",
          flexDirection: "row",
        }}
        // mt={2}
      >
        <Box className={!seedVisible ? "address-wrapper" : ""}>
          <Typography
            sx={{ fontWeight: 600, color: theme.palette.text.primary }}
          >
            Address
          </Typography>
          <Typography
            className={
              !seedVisible ? "address-without-key" : "address-with-key"
            }
            sx={{
              color: (theme) => theme.palette.text.secondary,
              // wordBreak: "break-all",
              // fontWeight: 400,
              // width: "85%",
            }}
          >
            {walletDetails.address_string}
          </Typography>
          {/* <ContentCopyIcon
            className="copyIcon"
            sx={{ fontSize: "1.4rem" }}
          ></ContentCopyIcon>

          <ArrowRightIcon
            sx={{ fill: "#8787A8", cursor: "pointer" }}
            className={seedVisible ? "rotate" : ""}
            onClick={() => setSeedVisible(!seedVisible)}
          /> */}
        </Box>
        <Box display="flex" flexDirection="row">
          <ContentCopyIcon
            onClick={() => copyText(walletDetails.address_string)}
            className="copyIcon"
            sx={{ fontSize: "1.4rem",cursor:'pointer' }}
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
            <Typography
              sx={{ fontWeight: 600, color: theme.palette.text.primary }}
            >
              Secret View Key
            </Typography>
            <Typography
              sx={{
                color: (theme) => theme.palette.text.secondary,
                wordBreak: "break-all",
                fontWeight: 400,
                width: "85%",
              }}
              mt={1}
            >
              {walletDetails.sec_viewKey_string}
            </Typography>
          </Box>
          <Box>
            <ContentCopyIcon
              onClick={() => copyText(walletDetails.sec_viewKey_string)}
              className="copyIcon"
              sx={{ fontSize: "1.4rem", marginRight: "20px",cursor:'pointer' }}
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
            <Typography
              sx={{ fontWeight: 600, color: theme.palette.text.primary }}
            >
              Secret Spend Key
            </Typography>
            <Typography
              sx={{
                color: (theme) => theme.palette.text.secondary,
                wordBreak: "break-all",
                fontWeight: 400,
                width: "85%",
              }}
              mt={1}
            >
              {walletDetails.sec_spendKey_string}
            </Typography>
          </Box>
          <Box>
            <ContentCopyIcon
              onClick={() => copyText(walletDetails.sec_spendKey_string)}
              className="copyIcon"
              sx={{ fontSize: "1.4rem", marginRight: "20px",cursor:'pointer' }}
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
            <Typography
              sx={{ fontWeight: 600, color: theme.palette.text.primary }}
            >
              Recovery Seed
            </Typography>
            <Typography
              sx={{
                color: (theme) => theme.palette.text.secondary,
                wordBreak: "break-word",
                fontWeight: 400,
                width: "85%",
              }}
              mt={1}
            >
              {walletDetails.mnemonic_string}
            </Typography>
          </Box>
          <Box>
            <ContentCopyIcon
              onClick={() => copyText(walletDetails.mnemonic_string)}
              className="copyIcon"
              sx={{ fontSize: "1.4rem", marginRight: "20px",cursor:'pointer' }}
            ></ContentCopyIcon>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
