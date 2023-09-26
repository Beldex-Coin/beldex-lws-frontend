import React from 'react';
import { Box, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from '../../theme';
import SendFund from './SendFund';
import Balance from './Balance';
import WalletAddressAndKeys from './WalletAddressAndKeys';
import TransactionHistrory from "./TransactionHistrory";
import TransactionDetails from './TransactionDetails'
const MyWallet = () => {
    const isMobileMode = useMediaQuery(theme.breakpoints.down('md'));
    console.log('--isMobileMode-', isMobileMode)

    return (
        <Box sx={{display: isMobileMode ? 'block' : 'flex', gap: '20px', minHeight: '100%',  padding: '20px'}}>
            {/* {isMobileMode && } */}
            <Box sx={{width: '100%'}}>
                {/* <Typography>Left Panel - Balance, address and list</Typography> */}
                <Balance />
                <WalletAddressAndKeys />
                <TransactionHistrory />
                <TransactionDetails/>
            </Box>
            <Box sx={{minWidth: '320px', background: '#2B2B3C', borderRadius: '25px'}}>
                <SendFund />
                {/* <Typography>Fund transfer</Typography> */}
            </Box>
            {/* <Typography  sx={{color: 'white',fontSize: '20px',textAlign: 'center',fontWeight: 500,margin: '40px'}}>MyWallet Page</Typography> */}
        </Box>
    )
}

export default MyWallet;