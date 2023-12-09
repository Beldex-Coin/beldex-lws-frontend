import { useState } from "react";
import "./styles.scss";
import { Box, Button, SvgIcon, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import EmptyTransactions from '../../../icons/EmptyTransactionsDark';
import { useTheme } from "@emotion/react";

export default function TransactionList(props: any) {
  const transactions = props?.transactions?.length ? props?.transactions : [];

  const beldex_amount_format_utils = require("@bdxi/beldex-money-format");
  const theme: any = useTheme();
  console.log("transactions ::", transactions);

  // const beldex_amount_format_utils = require("@bdxi/beldex-money-format");
  // console.log("transactions ::", transactions);


  const dateString = (dateVal: any) => {
    const date = new Date(dateVal);
    return date
      .toLocaleDateString("en-US" /* for now */, {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
      .toUpperCase();
  };

  const decimalValidation = (amount: string) => {
    const actualAmount: any = beldex_amount_format_utils.formatMoney(amount);
    return Number(actualAmount.replace("-", "")).toFixed(4);
  }

  const paymentIdZeroValidation = (payment_id: any) => {
    let index = 0;
    let zeroCount = 0;
    if (payment_id) {
      while (index < (payment_id.length).toString()) {
        if (payment_id.slice(index, index + 1) == "0") {
          zeroCount = zeroCount + 1;
        }
        index++;
      }
      if (zeroCount == 16) {
        return '';
      }
      return payment_id;
    }
  }

  return (
    <Box className="transactionList">
      {transactions.length ? (
        transactions.map((transaction: any, index: number) => (
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            mt={2}
            pb={2}
            key={index}
            sx={{
              borderBottom: "0.5px solid #8787A8",
            }}
            onClick={() => props.setTransactionDetails([transaction])}
          >
            <Box>
              <Typography
                sx={{
                  color:
                    transaction.approx_float_amount < 0 ? "#FC2727" : "#20D030",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                }}
              >
                {decimalValidation(transaction.amount)} BDX
                {/* {transaction.total_received/1e9} BDX */}
              </Typography>
              <Typography sx={{ color: "#D1D1D3", fontSize: "0.8rem" }}>
                {paymentIdZeroValidation(transaction.payment_id)}
              </Typography>
            </Box>
            <Box display="flex" flexDirection="row" alignItems="center">
              <Box mr={2}>
                <Typography sx={{ fontSize: "0.8rem" }}>
                  {dateString(transaction.timestamp)}
                </Typography>
                <Typography
                  textAlign={"end"}
                  sx={{ color: "#8787A8", fontSize: "14px" }}
                >
                  {transaction.isConfirmed ? "Confirmed" : "Pending"}
                </Typography>
              </Box>
              <ArrowRightIcon sx={{ fill: "#8787A8", fontSize: "2rem" }} />
            </Box>
          </Box>
        ))
      ) :
        (
          <Box display="flex" alignItems="center" justifyItems="center" width='100%' height='400px'>
            <Box display='flex' alignItems='center' alignContent='center' justifyContent='center' flexDirection="column" width="400px" height="300px" margin="auto" sx={{ border: `${theme.palette.mode == 'dark' ? "2px solid #454556" : "2px solid #D7D7D7"}`, borderRadius: '8px' }}>
              <Box >
                <EmptyTransactions sx={{ width: "100px", height: "100px" }} />
              </Box>
              <Typography mt={0.8} sx={{ fontWeight: '600' }}>No Transactions yet!</Typography>
              <Typography mt={1} sx={{ color: '#82828D', fontSize: '12px' }}>After your first transaction,</Typography>
              <Typography sx={{ color: '#82828D', fontSize: '12px' }}>you will be able to view it here.,</Typography>
            </Box>
          </Box>
        )}

    </Box>
  );
}
