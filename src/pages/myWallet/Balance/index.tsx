import React, { useEffect } from 'react';
import { Box, Typography, Button, useMediaQuery, useTheme, SvgIcon } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

import { CoreBridgeInstanceContext } from "../../../CoreBridgeInstanceContext";
import { useSelector } from 'react-redux';
import { setBalance } from "../../../stores/features/seedDetailSlice";
import { useAppDispatch } from "../../../stores/hooks";
const JSBigInt = require('@bdxi/beldex-bigint').BigInteger;
const beldex_amount_format_utils = require('@bdxi/beldex-money-format')
const pollingPeriodTimeInterval_s = 15;

export default function Balance() {
  const theme: any = useTheme();
  const isMobileMode = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useAppDispatch();
  const coreBridgeInstance = React.useContext(CoreBridgeInstanceContext)
  console.log('--isMobileMode-', isMobileMode);
  const walletDetails = useSelector((state: any) => state.seedDetailReducer);
  // const balance = useSelector((state: any) =>console.log('balance ::',state.seedDetailReducer) );

  const [lockedBalance, setLockedBalance] = React.useState<any>(() => '');
  const [totalSent, setTotalSent] = React.useState<any>(() => '');
  const [totalReceived, setTotalReceived] = React.useState<any>(() => '');

  const getWalletDetails = async () => {
    try {
      if (coreBridgeInstance.hostedMoneroAPIClient) {
        coreBridgeInstance.hostedMoneroAPIClient.AddressInfo_returningRequestHandle(
          walletDetails.address_string,
          walletDetails.sec_viewKey_string,
          walletDetails.pub_spendKey_string,
          walletDetails.sec_spendKey_string
          , function (
            err: any,
            total_received: any,
            locked_balance: any,
            total_sent: any,
            spent_outputs: any,
            account_scanned_tx_height: any,
            account_scanned_block_height: any,
            account_scan_start_height: any,
            transaction_height: any,
            blockchain_height: any,
            ratesBySymbol: any) {
            if (err) { // already logged
              console.log("err:", err);
              return;
            }
            setLockedBalance(locked_balance);
            setTotalSent(total_sent);
            setTotalReceived(total_received);
            getBalance(total_sent, total_received, locked_balance)
          });
      }

      const Balance_JSBigInt = (totalsent: any, totalReceived: any) => {
        let total_received = totalReceived
        let total_sent = totalsent
        if (typeof total_received === 'undefined') {
          total_received = new JSBigInt(0) // patch up to avoid crash as this doesn't need to be fatal
        }
        if (typeof total_sent === 'undefined') {
          total_sent = new JSBigInt(0) // patch up to avoid crash as this doesn't need to be fatal
        }
        const balance_JSBigInt = total_received.subtract(total_sent)
        if (balance_JSBigInt.compare(0) < 0) {
          return new JSBigInt(0)
        }
        return balance_JSBigInt
      }

      const getBalance = (total_sent: any, total_received: any, locked_balance: any) => {
        let amountJSBigInt = Balance_JSBigInt(total_sent, total_received);
        const balance = beldex_amount_format_utils.formatMoney(amountJSBigInt);
        console.log("Actaul balance balance:", balance)
        dispatch(setBalance(balance));
      }

    } catch (err) {
      console.log("errr:", err)
    }

  }

  useEffect(() => {
    getWalletDetails();
    const intervalTimeout = setInterval(function () {
      getWalletDetails();
    }, pollingPeriodTimeInterval_s * 1000 /* ms */)
    return () => {
      clearInterval(intervalTimeout)
    }
  }, []);

  return (
    <Box className="balanceWrapper" sx={{
      background: (theme) => theme.palette.success.light,
      borderRadius: '15px',
      padding: '16px 24px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <Box>
        <Box className="balanceTxt" sx={{ display: 'flex', alignItems: 'center' }}>
          <SvgIcon
            height="14"
            viewBox="0 0 22.706 22.706"
            sx={{ width: '14px', height: '14px', fill: (theme) => theme.palette.text.primary }}
          >
            <path d="M20.566,5.676H4.032a2.128,2.128,0,0,1-2.018-.957L19.867,2.838v-.7A2.139,2.139,0,0,0,17.728,0L2.14,2.9C.843,3.134,0,3.858,0,5.037V20.566a2.139,2.139,0,0,0,2.14,2.14H20.566a2.139,2.139,0,0,0,2.14-2.14V7.816A2.139,2.139,0,0,0,20.566,5.676ZM18.921,16.083a1.892,1.892,0,1,1,1.892-1.892A1.891,1.891,0,0,1,18.921,16.083Z" />
          </SvgIcon>
          <Typography className="text" sx={{
            fontWeight: 300,
            color: (theme) => theme.palette.text.primary,
            fontSize: '1.2rem',
            paddingLeft: '5px',
          }}>Balance</Typography>
        </Box>
        <Box className="balance" sx={{
          fontWeight: 600, fontSize: "1.3rem", display: 'flex', alignItems: 'center', marginTop: '8px', color: (theme) => theme.palette.text.primary,
        }}>
          {walletDetails.unlocked_balance}
          <Typography
            className="currency"
            sx={{
              fontWeight: 600, fontSize: "1.3rem", color: (theme) => theme.palette.mode === 'dark' ? '#20d030' : '#19AD1C',
              marginRight: '5px',
              marginLeft: '5px',
            }}
          >
            BDX
          </Typography>
        </Box>
      </Box>
      {/* {isMobileMode && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            color="info"
            variant="contained"
            sx={{ borderRadius: "5px" }}
          >
            <SendIcon
              sx={{
                color: "white",
                transform: "rotate(-48deg)",
                fontSize: 18,
              }}
            />
            Send
          </Button>
          <Button>
            <PowerSettingsNewIcon sx={{ fill: "#D1D1D3" }} />
          </Button>
        </Box>
      )} */}
    </Box>
  );
}
