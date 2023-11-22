import React from "react";
import { Box, Typography } from "@mui/material";
import "./styles.scss";
import OutboundIcon from "@mui/icons-material/Outbound";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useTheme } from "@emotion/react";


export default function TransactionDetails() {
  const theme:any = useTheme();
  return (
    <Box className="transactionDetails" mt={3} sx={{background:(theme) => theme.palette.success.main}}>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Box display="flex" flexDirection="row" alignItems="center">
          <OutboundIcon
            sx={{ transform: "rotate(225deg)", fontSize: "2rem",cursor:'pointer' }}
          />
          <Typography ml={1} sx={{ fontWeight: 600 }}>Details</Typography>
        </Box>
        <Typography sx={{ fontWeight: 600, color: "#FC2727" }}>
          -2 BDX
        </Typography>
        <Typography sx={{ fontWeight: 400,  }}>Sent</Typography>
      </Box>

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
            fontSize: "16px",
          }}
        >
          Date
        </Typography>

        <Typography sx={{ fontSize: "16px", fontWeight: 400 }}>
          Jan 11, 2023, 2:02:53 PM
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
            fontSize: "16px",
          }}
        >
          Total
        </Typography>

        <Typography
          sx={{ fontSize: "16px", fontWeight: 600, color: "#FC2727" }}
        >
          -2 BDX
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
              fontSize: "16px",
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
              fontSize: "16px",
            }}
          >
            Transaction ID
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "14px",
              color: "#7D7D9C",
              width:'70%',
              wordBreak:'break-word'
            }}
          >
            79bf9e4b0703d65223af71f3318711d1bc5462588c901c09bda751447b69a0a1
          </Typography>
        </Box>

        <ContentCopyIcon
          sx={{ fontSize: "1.4rem", fill: "#20D030" }}
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
            fontSize: "16px",
          }}
        >
          Ring size
        </Typography>

        <Typography
          sx={{ fontSize: "16px", fontWeight: 400}}
        >
          10
        </Typography>
      </Box>
      <Box mt={3} mb={2} sx={{ height: "0.5px" }}></Box>
    </Box>
  );
}
