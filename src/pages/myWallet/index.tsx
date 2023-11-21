import React, { useEffect } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import SendFund from './SendFund';
import Balance from './Balance';
import WalletAddressAndKeys from './WalletAddressAndKeys';
import TransactionHistrory from "./TransactionHistrory";
import TransactionDetails from './TransactionDetails';
import { CoreBridgeInstanceContext } from '../../CoreBridgeInstanceContext';
import { setSeedDetails } from "../../stores/features/seedDetailSlice";
import { useSelector } from 'react-redux';

const MyWallet = () => {
    const theme: any = useTheme();
    const isMobileMode = useMediaQuery(theme.breakpoints.down('md'));
    const coreBridgeInstance = React.useContext(CoreBridgeInstanceContext)
    console.log('--isMobileMode-', isMobileMode);
    const walletDetails = useSelector((state: any) => state.seedDetailReducer);

    const getWalletDetails = async () => {
        console.log("walletDetails:", walletDetails)        
        // const walletInfo = coreBridgeInstance.hostedMoneroAPIClient.AddressInfo_returningRequestHandle(
        //     walletDetails.address_string,
        //     walletDetails.sec_viewKey_string,
        //     walletDetails.pub_spendKey_string,
        //     walletDetails.sec_spendKey_string
        // );
    }

    useEffect(() => {
        console.log("nowfil");
        getWalletDetails();
    }, []);

    return (
        <Box sx={{ display: isMobileMode ? 'block' : 'flex', gap: '20px', minHeight: '100%', padding: '20px' }}>
            {/* {isMobileMode && } */}
            <Box sx={{ width: '100%' }}>
                {/* <Typography>Left Panel - Balance, address and list</Typography> */}
                <Balance />
                <WalletAddressAndKeys />
                <TransactionHistrory />
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