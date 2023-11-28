import React, { useEffect, useState } from "react";
import "./styles.scss";
import { Box, Button, SvgIcon, Typography } from "@mui/material";
import TransactionList from '../TransactionList';
import CustomPagination from '../../../components/CustomPagination';
import { CoreBridgeInstanceContext } from "../../../CoreBridgeInstanceContext";
import { useSelector } from 'react-redux';
const pollingPeriodTimeInterval_s = 15;



export default function TransactionHistory(transactionHistory: any) {
  const [page, setPage] = useState(1);
  const coreBridgeInstance = React.useContext(CoreBridgeInstanceContext);
  const [transactionList, setTransaction] = useState([]);
  const walletDetails = useSelector((state: any) => state.seedDetailReducer);


  const getWalletDetails = async () => {
    try {
      if (coreBridgeInstance.hostedMoneroAPIClient) {
        const requestHandle =
          coreBridgeInstance.hostedMoneroAPIClient.AddressTransactions_returningRequestHandle(
            walletDetails.address_string,
            walletDetails.sec_viewKey_string,
            walletDetails.pub_spendKey_string,
            walletDetails.sec_spendKey_string,
            function (
              err: any,
              account_scanned_height: any,
              account_scanned_block_height: any,
              account_scan_start_height: any,
              transaction_height: any,
              blockchain_height: any,
              transactions: any
            ) {
              console.log("err:", err);
              console.log("Transaction_History:", transactions);
              setTransaction(transactions)
            }
          );
      }
    } catch (err) {
      console.log("errr:", err);
    }
  };

  useEffect(() => {
    getWalletDetails();
    const intervalTimeout = setInterval(function () {
      getWalletDetails();
    }, pollingPeriodTimeInterval_s * 1000 /* ms */);
    return () => {
      clearInterval(intervalTimeout);
    };
  }, []);

  return (
    <Box sx={{
      background: (theme) => theme.palette.success.light,
      padding: '20px', borderRadius: '20px'
    }} mt={2}>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography sx={{
          fontWeight: 600, fontSize: '18px', color: (theme) => theme.palette.text.primary,
        }}>Transactions</Typography>
        <Button >
          <SvgIcon
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="icons8-csv"
              d="M2.24445 0.582031C1.24557 0.582031 0.422852 1.36926 0.422852 2.32505V7.55409H1.63725V2.32505C1.63725 1.99798 1.90264 1.74404 2.24445 1.74404H7.70925V5.23007H11.3524V7.55409H12.5668V4.40849L8.56787 0.582031H2.24445ZM8.92365 2.56562L10.4938 4.06806H8.92365V2.56562ZM2.24445 8.7161C1.24557 8.7161 0.422852 9.50333 0.422852 10.4591V11.6211V12.7831C0.422852 13.7389 1.24557 14.5262 2.24445 14.5262C3.24333 14.5262 4.06605 13.7389 4.06605 12.7831H2.85165C2.85165 13.1102 2.58627 13.3641 2.24445 13.3641C1.90264 13.3641 1.63725 13.1102 1.63725 12.7831V11.6211V10.4591C1.63725 10.132 1.90264 9.87811 2.24445 9.87811C2.58627 9.87811 2.85165 10.132 2.85165 10.4591H4.06605C4.06605 9.50333 3.24333 8.7161 2.24445 8.7161ZM7.10205 8.7161C6.38555 8.7161 5.96647 8.99319 5.74059 9.22675C5.24148 9.74152 5.27918 10.4266 5.28282 10.4591C5.28282 11.398 6.17478 11.8215 6.82691 12.1318C7.34425 12.377 7.70925 12.5668 7.70925 12.7922C7.70925 12.7945 7.69756 13.0757 7.53848 13.2302C7.50326 13.2639 7.40201 13.3641 7.10205 13.3641H5.39193C5.46479 13.5861 5.58124 13.8323 5.80226 14.0473C6.02693 14.2657 6.43534 14.5262 7.10205 14.5262C7.76875 14.5262 8.17833 14.2646 8.40421 14.045C8.92154 13.5419 8.92249 12.8505 8.92128 12.7831C8.92128 11.8303 8.02232 11.4026 7.36533 11.0901C6.85649 10.8484 6.49844 10.661 6.49722 10.4228C6.49722 10.4205 6.48669 10.1595 6.63242 10.0143C6.72229 9.92481 6.88103 9.87811 7.10205 9.87811H8.81929C8.61527 9.29362 8.093 8.7161 7.10205 8.7161ZM10.1381 8.7161L11.3524 14.5262H12.5668L13.7812 8.7161H12.5668L11.9596 12.0569L11.3524 8.7161H10.1381Z"
              fill="#20D030"
              stroke="#20D030"
              strokeWidth="0.5"
            />
          </SvgIcon>
          <Typography ml={1} sx={{ fontWeight: 600, color: (theme) => theme.palette.text.primary }}>Export CSV</Typography>
        </Button>
      </Box>
      <Box>
        <TransactionList transactions={transactionList} />
      </Box>
      <CustomPagination />
    </Box>
  );
}
