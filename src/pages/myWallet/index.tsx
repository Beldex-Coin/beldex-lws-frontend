import React, { useEffect } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import SendFund from './SendFund';
import Balance from './Balance';
import WalletAddressAndKeys from './WalletAddressAndKeys';
import TransactionHistrory from "./TransactionHistrory";
// import TransactionDetails from './TransactionDetails';
import { CoreBridgeInstanceContext } from '../../CoreBridgeInstanceContext';
import { setSeedDetails } from "../../stores/features/seedDetailSlice";
import { useSelector } from 'react-redux';
const JSBigInt = require('@bdxi/beldex-bigint').BigInteger;
const beldex_amount_format_utils = require('@bdxi/beldex-money-format')

const MyWallet = () => {
    const theme: any = useTheme();
    const isMobileMode = useMediaQuery(theme.breakpoints.down('md'));
    const coreBridgeInstance = React.useContext(CoreBridgeInstanceContext)
    console.log('--isMobileMode-', isMobileMode);
    const walletDetails = useSelector((state: any) => state.seedDetailReducer);
    const [transactionHistory, setTransactionHistory] = React.useState<any>(() => []);
    const [lockedBalance, setLockedBalance] = React.useState<any>(() => '');
    const [totalSent, setTotalSent] = React.useState<any>(() => '');
    const [totalReceived, setTotalReceived] = React.useState<any>(() => '');


    const pollingPeriodTimeInterval_s = 15;

    // startPollingTimer() {
    //     const self = this
    //     // it would be cool to change the sync polling interval to faster while any transactions are pending confirmation, then dial it back while passively waiting
    //     console.log("pollingPeriodTimeInterval_s:", pollingPeriodTimeInterval_s)
    //     // self.
    //   }

    const startPollingTimer = () => {
        let intervalTimeout = setInterval(function () {
            getWalletDetails();
        }, pollingPeriodTimeInterval_s * 1000 /* ms */)
    }

    const getWalletDetails = async () => {
        try {
            if (coreBridgeInstance.hostedMoneroAPIClient) {
                const requestHandle = coreBridgeInstance.hostedMoneroAPIClient.AddressTransactions_returningRequestHandle(
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
                        console.log("Transaction_History:", transactions)
                        setTransactionHistory(transactions);

                    }
                )
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
                console.log("Actaul balance :", balance)
            }

        } catch (err) {
            console.log("errr:", err)
        }

    }

    useEffect(() => {
        startPollingTimer();
    }, []);

    return (
        <Box sx={{ display: isMobileMode ? 'block' : 'flex', gap: '20px', minHeight: '100%', padding: '20px' }}>
            {/* {isMobileMode && } */}
            <Box sx={{ width: '100%' }}>
                {/* <Typography>Left Panel - Balance, address and list</Typography> */}
                <Balance />
                <WalletAddressAndKeys />
                <TransactionHistrory transaction={transactionHistory} />
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