import React, { useEffect } from 'react';
import { Box, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import SendFund from './SendFund';
import Balance from './Balance';
import WalletAddressAndKeys from './WalletAddressAndKeys';
import TransactionHistory from "./TransactionHistory";
// import TransactionDetails from './TransactionDetails';
import { CoreBridgeInstanceContext } from '../../CoreBridgeInstanceContext';
import { useSelector } from 'react-redux';
const JSBigInt = require('@bdxi/beldex-bigint').BigInteger;
const beldex_amount_format_utils = require('@bdxi/beldex-money-format')
const pollingPeriodTimeInterval_s = 15;

const MyWallet = () => {
  const theme: any = useTheme();
  const isMobileMode = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ display: isMobileMode ? 'block' : 'flex', gap: '20px', minHeight: '100%', padding: '20px' }}>
      {/* {isMobileMode && } */}
      <Box sx={{ width: '100%' }}>
        {/* <Typography>Left Panel - Balance, address and list</Typography> */}
        <Balance />
        <WalletAddressAndKeys />
        <TransactionHistory />
        {/* <TransactionDetails/> */}
      </Box>
      <Box sx={{ minWidth: '320px', background: (theme) => theme.palette.success.main, borderRadius: '25px' }}>
        <SendFund />
        {/* <Typography>Fund transfer</Typography> */}
      </Box>
    </Box>
  )
}

export default MyWallet;