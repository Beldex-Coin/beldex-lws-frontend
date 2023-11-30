import { useState } from "react";
import "./styles.scss";
import { Box, Button, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
export default function TransactionList(props: any) {
  const transactions = props?.transactions?.length ? props?.transactions : [];
  const beldex_amount_format_utils = require('@bdxi/beldex-money-format')
console.log('transactions ::',transactions)

  const dateString = (dateVal: any) => {
    const date = new Date(dateVal);
    return date.toLocaleDateString(
      'en-US'/* for now */,
      { year: 'numeric', month: 'short', day: 'numeric' }
    ).toUpperCase();
  }
  return (
    <Box className="transactionList" >
      {transactions.length ? transactions.map((transaction: any, index: number) => (
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          mt={2}
          pb={2}
          key={index}
          sx={{
            borderBottom:'0.5px solid #8787A8',
             
          }}
        >
          <Box>
          <Typography
            sx={{
              color:transaction.approx_float_amount < 0 ? "#FC2727":"#20D030" ,
              fontWeight: 600,
              fontSize: "1.1rem",
            }}
          >
            {beldex_amount_format_utils.formatMoney(transaction.amount)} BDX
            {/* {transaction.total_received/1e9} BDX */}
          </Typography>
          <Typography sx={{color:'#D1D1D3',fontSize:'0.8rem'}}>
            {transaction.payment_id}
          </Typography>
          </Box>
          <Box display="flex" flexDirection="row" alignItems="center">
            <Box mr={2}>
              <Typography sx={{ fontSize: "0.8rem" }}>{dateString(transaction.timestamp)}</Typography>
              <Typography textAlign={"end"} sx={{ color: "#8787A8", fontSize: "14px" }}>
                {transaction.isConfirmed?"Confirmed":"Pending"}
              </Typography>
            </Box>
            <ArrowRightIcon sx={{ fill: '#8787A8', fontSize: '2rem' }} onClick={()=>props.setTransactionDetails([transaction])} />
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

