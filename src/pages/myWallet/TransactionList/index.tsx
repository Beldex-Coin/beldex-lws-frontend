import { useState } from "react";
import "./styles.scss";
import { Box, Button, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
export default function TransactionList(transactionHistory: any) {
  const transactions = transactionHistory.transactions.length ? transactionHistory.transactions : [];
  return (
    <Box className="transactionList" >
      {transactions.length ? transactions.map((transaction: any) => (
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
              fontWeight: 600,
              fontSize: "16px",
            }}
          >
            {transaction.total_received/1e9} BDX
          </Typography>
          <Box display="flex" flexDirection="row" alignItems="center">
            <Box mr={2}>
              <Typography sx={{ fontSize: "18px" }}>{transaction.timestamp}</Typography>
              <Typography textAlign={"end"} sx={{ color: "#8787A8", fontSize: "14px" }}>
                Pending
              </Typography>
            </Box>
            <ArrowRightIcon sx={{ fill: '#8787A8', fontSize: '2rem' }} />
          </Box>
        </Box>

      )) :
        (
          <Box>
            <Typography>
              History not found....
            </Typography>
          </Box>
        )}
    </Box>
  );
}

