import { useState } from "react";
import "./styles.scss";
import { Box, Button, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
export default function TransactionList() {
  return (
    <Box className="transactionList" >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        mt={2}
      >
        <Typography
          sx={{
            color: "#FC2727",
            fontWeight:600,
            fontSize: "16px",
          }}
        >
          -2 BDX
        </Typography>
        <Box display="flex" flexDirection="row" alignItems="center">
          <Box mr={2}>
            <Typography sx={{ fontSize: "18px" }}>Jan 11, 2023</Typography>
            <Typography textAlign={"end"} sx={{ color: "#8787A8",fontSize:"14px" }}>
              Pending
            </Typography>
          </Box>
           <ArrowRightIcon sx={{fill:'#8787A8',fontSize: '2rem'}} />
        </Box>
      </Box>
      <Box mt={2} sx={{ height: "0.5px", backgroundColor: "#8787A8" }}></Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        mt={2}
      >
        <Typography
          sx={{
            color: "#FC2727",
            fontWeight:600,
            fontSize: "16px",
          }}
        >
          -2 BDX
        </Typography>
        <Box display="flex" flexDirection="row" alignItems="center">
          <Box mr={2}>
            <Typography sx={{ fontSize: "16px" }}>Jan 11, 2023</Typography>
            <Typography textAlign={"end"} sx={{ color: "#8787A8",fontSize:"14px" }}>
              Pending
            </Typography>
          </Box>
          <ArrowRightIcon sx={{fill:'#8787A8',fontSize: '2rem'}} />
        </Box>
      </Box>
      <Box mt={2} sx={{ height: "0.5px", backgroundColor: "#8787A8" }}></Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        mt={2}
      >
        <Typography
          sx={{
            color: "#20D030",
            fontWeight:600,
            fontSize: "16px",
          }}
        >
          -16 BDX
        </Typography>
        <Box display="flex" flexDirection="row" alignItems="center">
          <Box mr={2}>
            <Typography sx={{ fontSize: "16px" }}>Jan 11, 2023</Typography>
            <Typography textAlign={"end"} sx={{ color: "#8787A8",fontSize:"14px" }}>
              Pending
            </Typography>
          </Box>
           <ArrowRightIcon sx={{fill:'#8787A8',fontSize: '2rem'}} />
        </Box>
      </Box>
      <Box mt={2} sx={{ height: "0.5px", backgroundColor: "#8787A8" }}></Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        mt={2}
      >
        <Typography
          sx={{
            color: "#20D030",
            fontWeight:600,
            fontSize: "16px",
          }}
        >
          -8 BDX
        </Typography>
        <Box display="flex" flexDirection="row" alignItems="center">
          <Box mr={2}>
            <Typography sx={{ fontSize: "16px" }}>Jan 11, 2023</Typography>
            <Typography textAlign={"end"} sx={{ color: "#8787A8",fontSize:"14px" }}>
              Pending
            </Typography>
          </Box>
           <ArrowRightIcon sx={{fill:'#8787A8',fontSize: '2rem'}} />
        </Box>
      </Box>
      <Box mt={2} sx={{ height: "0.5px", backgroundColor: "#8787A8" }}></Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        mt={2}
      >
        <Typography
          sx={{
            color: "#FC2727",
            fontWeight:600,
            fontSize: "16px",
          }}
        >
          -8 BDX
        </Typography>
        <Box display="flex" flexDirection="row" alignItems="center">
          <Box mr={2}>
            <Typography sx={{ fontSize: "16px" }}>Jan 11, 2023</Typography>
            <Typography textAlign={"end"} sx={{ color: "#8787A8",fontSize:"14px" }}>
              Pending
            </Typography>
          </Box>
           <ArrowRightIcon sx={{fill:'#8787A8',fontSize: '2rem'}} />
        </Box>
      </Box>
      <Box mt={2} sx={{ height: "0.5px", backgroundColor: "#8787A8" }}></Box>
    </Box>
  );
}
