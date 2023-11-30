import React from "react";
import { Box, Typography } from "@mui/material";
import "./styles.scss";
import OutboundIcon from "@mui/icons-material/Outbound";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useTheme } from "@emotion/react";
const beldex_amount_format_utils = require("@bdxi/beldex-money-format");

export default function TransactionDetails(props: any) {
  const theme: any = useTheme();
  const { transactionDetails, setTransactionDetails } = props;
  const amount = beldex_amount_format_utils.formatMoney(
    transactionDetails[0].amount
  );
  const status =
    transactionDetails[0].approx_float_amount < 0 ? "Sent" : "Receive";
  console.log("prop propps ::", props.transactionDetails);
  const dateString = (dateVal: any) => {
    const date = new Date(dateVal);
    return date
      .toLocaleDateString("en-US" /* for now */, {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      })
      .toUpperCase();
  };
  const  copyText=(text: string) =>{
    navigator.clipboard.writeText(text);
    // await new Wallet().Login();
  }
  return (
    <Box
      className="transactionDetails"
      mt={2}
      // sx={{background:(theme) => theme.palette.success.main}}
    >
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Box display="flex" flexDirection="row" alignItems="center">
          <OutboundIcon
            sx={{
              transform: "rotate(225deg)",
              fontSize: "2rem",
              cursor: "pointer",
            }}
            onClick={() => setTransactionDetails([])}
          />
          <Typography ml={1} sx={{ fontWeight: 600 }}>
            Details
          </Typography>
        </Box>
        <Typography
          sx={{
            fontWeight: 600,
            color: status === "Sent" ? "#FC2727" : "#20D030",
            fontSize:'1.2rem'
          }}
        >
          {/* {transactionDetails[0].total_received/1e9} BDX */}
          {amount} BDX
        </Typography>
        <Typography sx={{ fontWeight: 400 }}>{status}</Typography>
      </Box>

      <Box pl={1}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          mt={4}
        >
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "1.1rem",
            }}
          >
            Date
          </Typography>

          <Typography sx={{ fontSize: "1rem", fontWeight: 400 }}>
            {dateString(transactionDetails[0].timestamp)}
          </Typography>
        </Box>
        <Box mt={3} sx={{ height: "0.5px", backgroundColor: "#8787A8" }}></Box>

        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          mt={3}
        >
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "1.1rem",

            }}
          >
            Total
          </Typography>

          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: 600,
              color: status === "Sent" ? "#FC2727" : "#20D030",
            }}
          >
            {/* {transactionDetails[0].total_received/1e9} BDX */}
            {amount} BDX
          </Typography>
        </Box>
        <Box mt={3} sx={{ height: "0.5px", backgroundColor: "#8787A8" }}></Box>

        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          mt={3}
        >
          <Box>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "1.1rem",

              }}
            >
              Payment ID
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "14px",
                color: "#7D7D9C",
              }}
            >
              None
            </Typography>
          </Box>

          <ContentCopyIcon
            sx={{ fontSize: "1.4rem", fill: "#8787A8" }}
          ></ContentCopyIcon>
        </Box>
        <Box mt={3} sx={{ height: "0.5px", backgroundColor: "#8787A8" }}></Box>

        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          mt={3}
        >
          <Box>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "1.1rem",

              }}
            >
              Transaction ID
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "14px",
                color: "#7D7D9C",
                width: "70%",
                wordBreak: "break-word",
              }}
            >
              {transactionDetails[0].hash}
            </Typography>
          </Box>

          <ContentCopyIcon
            sx={{ fontSize: "1.4rem", fill: "#20D030", cursor: "pointer" }}
            onClick={() => copyText(transactionDetails[0].hash)}
          ></ContentCopyIcon>
        </Box>
        <Box mt={3} sx={{ height: "0.5px", backgroundColor: "#8787A8" }}></Box>

        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          mt={3}
        >
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "1.1rem",

            }}
          >
            Ring size
          </Typography>

          <Typography sx={{ fontSize: "1rem", fontWeight: 400 }}>10</Typography>
        </Box>
        {/* <Box mt={3} mb={2} sx={{ height: "0.5px" }}></Box> */}
      </Box>
    </Box>
  );
}
