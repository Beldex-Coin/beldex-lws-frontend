import { Box, useTheme, } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import SendFund from './SendFund';
import Balance from './Balance';
import WalletAddressAndKeys from './WalletAddressAndKeys';
import TransactionHistory from "./TransactionHistory";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';



const MyWallet = () => {
  const theme: any = useTheme();
  const isMobileMode = useMediaQuery(theme.breakpoints.down('md'));
  const walletDetails = useSelector((state: any) => state.seedDetailReducer);
  const navigate = useNavigate();


  useEffect(() => {initialRoutePathValidation()}, []);
  const initialRoutePathValidation=()=>{
    if(!walletDetails.mnemonic_language)
    {
      navigate('/');
    }
  }

  return (
    <Box sx={{ display: isMobileMode ? 'block' : 'flex', gap: '20px', minHeight: '100%', padding: '20px' }}>
      <Box sx={{ width: '100%' }}>
        <Balance />
        <WalletAddressAndKeys />
        <TransactionHistory  />
      </Box>
      <Box sx={{ minWidth: '320px', background: (theme) => theme.palette.success.main, borderRadius: '25px' }}>
        <SendFund />
      </Box>
    </Box>
  )
}

export default MyWallet;