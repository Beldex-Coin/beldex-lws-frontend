import React, { useState } from "react";
import {
  Box,
  Typography,
  Input,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import RefreshIcon from "@mui/icons-material/Refresh";
import CallMadeIcon from "@mui/icons-material/CallMade";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { CoreBridgeInstanceContext } from "../../../CoreBridgeInstanceContext";
import { useTheme } from "@emotion/react";
import { useSelector } from "react-redux";
const JSBigInt = require("@bdxi/beldex-bigint").BigInteger;
const beldex_amount_format_utils = require("@bdxi/beldex-money-format");
const beldex_config = require("@bdxi/beldex-config");

const SendFund = () => {
  const theme: any = useTheme();
  const coreBridgeInstance = React.useContext(CoreBridgeInstanceContext);
  const walletDetails = useSelector((state: any) => state.seedDetailReducer);
  const netType: any = (process.env.NETTYPE)

  const [currency, setCurrency] = useState("AUD");
  const [priority, setPriority] = useState(5);
  const [toAddress, setToAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [isSweepTx, setIsSweepTx] = useState(false);
  const [paymentIdToggle, setPaymentIdToggle] = useState(false);
  const [manualPaymentId, setManualPaymentId] = useState("");

  const exchangeCurrencyList = {
    USD: "USD",
    AUD: "AUD",
    BRL: "BRL",
    CAD: "CAD",
    CHF: "CHF",
    CNY: "CNY",
    EUR: "EUR",
    GBP: "GBP",
    HKD: "HKD",
    INR: "INR",
    JPY: "JPY",
    KRW: "KRW",
    MXN: "MXN",
    NOK: "NOK",
    NZD: "NZD",
    SEK: "SEK",
    SGD: "SGD",
    TRY: "TRY",
    RUB: "RUB",
    ZAR: "ZAR",
  };
  const processStepMessageSuffix_byEnumVal: any = {
    0: "", // 'none'
    1: "", // "initiating send" - so we don't want a suffix
    2: "Fetching latest balance.",
    3: "Calculating fee.",
    4: "Fetching decoy outputs.",
    5: "Constructing transaction.", // may go back to .calculatingFee
    6: "Submitting transaction.",
  };
  const failureCodeMessage_byEnumVal: any = {
    0: "--", // message is provided - this should never get requested
    1: "Unable to load that wallet.",
    2: "Unable to log into that wallet.",
    3: "This wallet must first be imported.",
    4: "Please specify the recipient of this transfer.",
    5: "Couldn't resolve this OpenAlias address.",
    6: "Couldn't validate destination Beldex address.",
    7: "Please enter a valid payment ID.",
    8: "Couldn't construct integrated address with short payment ID.",
    9: "The amount you've entered is too low.",
    10: "Please enter a valid amount to send.",
    11: "--", // errInServerResponse_withMsg
    12: "--", // createTransactionCode_balancesProvided
    13: "--", // createTranasctionCode_noBalances
    14: "Unable to construct transaction after many attempts.",
    //
    99900: "Please contact support with code: 99900.", // codeFault_manualPaymentID_while_hasPickedAContact
    99901: "Please contact support with code: 99901.", // codeFault_unableToFindResolvedAddrOnOAContact
    99902: "Please contact support with code: 99902.", // codeFault_detectedPIDVisibleWhileManualInputVisible
    99903: "Please contact support with code: 99903.", // codeFault_invalidSecViewKey
    99904: "Please contact support with code: 99904.", // codeFault_invalidSecSpendKey
    99905: "Please contact support with code: 99905.", // codeFault_invalidPubSpendKey
  };
  const createTxErrCodeMessage_byEnumVal: any = {
    0: "No error",
    1: "No destinations provided",
    2: "Wrong number of mix outputs provided",
    3: "Not enough outputs for mixing",
    4: "Invalid secret keys",
    5: "Output amount overflow",
    6: "Input amount overflow",
    7: "Mix RCT outs missing commit",
    8: "Result fee not equal to given fee",
    9: "Invalid destination address",
    10: "Payment ID must be blank when using an integrated address",
    11: "Payment ID must be blank when using a subaddress",
    12: "Couldn't add nonce to tx extra",
    13: "Invalid pub key",
    14: "Invalid commit or mask on output rct",
    15: "Transaction not constructed",
    16: "Transaction too big",
    17: "Not yet implemented",
    18: "Couldn't decode address",
    19: "Invalid payment ID",
    20: "The amount you've entered is too low",
    21: "Can't get decrypted mask from 'rct' hex",
    90: "Spendable balance too low",
  };
  function generatePaymentId() {
    let paymentId = coreBridgeInstance.beldex_utils.new_payment_id();
    setManualPaymentId(paymentId);
    console.log("paymentId ::", paymentId);
  }
  function numberOnly(e: any) {
    const re = /^\d+\.?\d*$/;
    if (e === '' || re.test(e)) {
      setAmount(e);
    }
  }
  const addressInputChange = (e:any) => {
    const value = e.target.value;

    // Allow only alphanumeric characters
    const alphanumericRegex = /^[a-zA-Z0-9]*$/;
    if (alphanumericRegex.test(value)) {
      setToAddress(value);
    }
  };
  async function sendFundFieldValidation() {
    // console.log("netConnetion()",netConnetion())
    // if (!window.globalOnlineStatus) {
    //    ToastUtils.pushToastError(
    //     'internetConnectionError',
    //     'Please check your internet connection'
    //   );
    //   return
    // }
    if(!amount)
    
    {
     return console.log('please enter the amount to send.') 
    }
    if (Number(amount) > walletDetails.unlocked_balance) {
      // return ToastUtils.pushToastError('notEnoughBalance', 'Not enough unlocked balance');
      console.log("Not enough unlocked balance");
      return;
    }
    if(Number(amount) === walletDetails.unlocked_balance) 
    {
      setIsSweepTx(true);

    }
    if(!toAddress)
    {
      console.log("couldn't validate destination beldex address");
      return; 
    }
    if (toAddress.length > 106 || toAddress.length < 95) {
      // return ToastUtils.pushToastError('invalidAddress', 'Invalid address');
      console.log('Invalid address');
      return;
    }
    if (Number(amount) == 0) {
      // return ToastUtils.pushToastError('zeroAmount', 'Amount must be greater than zero');
      console.log('Amount must be greater than zero');
      return;

    }
    // let addressValidate = await wallet.validateAddres(address);
    // if (!addressValidate) {
    //   return ToastUtils.pushToastError('invalidAddress', 'Invalid address');
    // }
    sendFund()
  }

  async function sendFund() {
    let args: any = {
      fromWallet_didFailToInitialize: false,
      fromWallet_didFailToBoot: false,
      fromWallet_needsImport: false,
      requireAuthentication: true,
      destinations: [
        {
          to_address: toAddress,
          send_amount: amount,
        },
      ],
      hasPickedAContact: false,
      resolvedAddress_fieldIsVisible: false,
      manuallyEnteredPaymentID_fieldIsVisible: manualPaymentId ? true : false,
      resolvedPaymentID_fieldIsVisible: false,
      is_sweeping: isSweepTx,
      from_address_string: walletDetails.address_string,

      sec_viewKey_string: walletDetails.sec_viewKey_string,

      sec_spendKey_string: walletDetails.sec_spendKey_string,

      pub_spendKey_string: walletDetails.pub_spendKey_string,
      priority: priority,
      nettype:parseInt(netType),
      resolvedAddress: "",
      manuallyEnteredPaymentID: manualPaymentId,
      resolvedPaymentID: "",
    };

    args.willBeginSending_fn = function () {
      console.log("willBeginSending_fn ::");
    };
    args.authenticate_fn = function (cb: any) {
      function Initiate_VerifyUserAuthenticationForAction(
        customNavigationBarTitle_orNull: any, // String? -- null if you don't want one
        canceled_fn: any, // () -> Void
        entryAttempt_succeeded_fn: any // () -> Void
      ) {
        entryAttempt_succeeded_fn(); // rather than not implementing this in Lite mode, just going to return immediately - it's more convenient for app objects to be coded as if it exists
      }
      Initiate_VerifyUserAuthenticationForAction(
        "Authenticate",
        function () {
          cb(false);
        },
        function () {
          cb(true);
        }
      );
    };
    args.status_update_fn = function (params: any) {
      const raw_amount_string = amount;
      const statusUpdate_messageBase = isSweepTx
        ? "Sending wallet balance…"
        : `Sending ${raw_amount_string} BDX…`;
      const suffix = processStepMessageSuffix_byEnumVal[params.code]; // this is kept in JS rather than C++ to allow for localization via the same mechanism as the rest of the app
      // preSuccess_nonTerminal_statusUpdate_fn(`${statusUpdate_messageBase} ${suffix}`) // TODO: localize concatenation
      console.log("status_update_fn ::", statusUpdate_messageBase, suffix);
    };
    args.canceled_fn = function () {
      console.log("canceled_fn ");
      clearStates();
    };
    args.success_fn = function (params: any) {
      console.log("success_fn ::", params);

      //
      const total_sent__JSBigInt: any = BigInt("" + params.total_sent);
      const total_sent__atomicUnitString = total_sent__JSBigInt.toString();
      // const total_sent__floatString = monero_amount_format_utils.formatMoney(total_sent__JSBigInt)
      // const total_sent__float = parseFloat(total_sent__floatString)
      //
      const mockedTransaction = {
        hash: params.tx_hash,
        mixin: "" + params.mixin,
        coinbase: false,
        mempool: true,
        //
        isJustSentTransaction: true, // this is set back to false once the server reports the tx's existence
        timestamp: new Date(), // faking
        //
        unlock_time: 0,
        //
        // height: null, // mocking the initial value -not- to exist (rather than to erroneously be 0) so that isconfirmed -> false
        //
        total_sent: total_sent__JSBigInt,
        total_received: 0,
        //
        approx_float_amount: -1 * total_sent__atomicUnitString, // -1 cause it's outgoing
        // amount: new JSBigInt(sentAmount), // not really used (note if you uncomment, import JSBigInt)
        //
        payment_id: params.final_payment_id, // b/c `payment_id` may be nil of short pid was used to fabricate an integrated address
        //
        // info we can only preserve locally
        tx_fee: params.used_fee,
        tx_key: params.tx_key,
        target_address: params.target_address,
      };
      // fn(null, mockedTransaction, params.isXMRAddressIntegrated, params.integratedAddressPIDForDisplay)
      //
      // manually insert .. and subsequent fetches from the server will be
      // diffed against this, preserving the tx_fee, tx_key, target_address...
      // self._manuallyInsertTransactionRecord(mockedTransaction)
      clearStates();
    };
    args.error_fn = (params: any) => {
      //
      console.log("params params", params);
      const code = params.err_code;
      let errStr;
      if (code === 0 || typeof code === "undefined" || code === null) {
        // msgProvided
        errStr = params.err_msg;
      } else if (isNaN(code)) {
        errStr = "Unexpected NaN err code - please contact support";
      } else if (code === 11) {
        // errInServerResponse_withMsg
        errStr = params.err_msg;
      } else if (code === 12) {
        // createTransactionCode_balancesProvided
        if (params.createTx_errCode == 90) {
          // needMoreMoneyThanFound
          errStr = `Spendable balance too low. Have ${beldex_amount_format_utils.formatMoney(
            new JSBigInt("" + params.spendable_balance)
          )} ${
            beldex_config.coinSymbol
          }; need ${beldex_amount_format_utils.formatMoney(
            new JSBigInt("" + params.required_balance)
          )} ${beldex_config.coinSymbol}.`;
        } else {
          errStr = createTxErrCodeMessage_byEnumVal[params.createTx_errCode];
        }
      } else if (code === 13) {
        // createTranasctionCode_noBalances
        errStr = createTxErrCodeMessage_byEnumVal[params.createTx_errCode];
      } else {
        errStr = failureCodeMessage_byEnumVal[code];
      }
      console.log("error ::", errStr);
      clearStates()
      const err = new Error(errStr);
      console.error(err);
    };
    args.get_unspent_outs_fn = function (req_params: any, cb: any) {
      coreBridgeInstance.hostedMoneroAPIClient.UnspentOuts(req_params, cb);
      console.log("get_unspent_outs_fn ::", req_params);
    };
    args.get_random_outs_fn = function (req_params: any, cb: any) {
      coreBridgeInstance.hostedMoneroAPIClient.RandomOuts(req_params, cb);
      console.log("get_random_outs_fn ::", req_params);
    };
    args.submit_raw_tx_fn = function (req_params: any, cb: any) {

      coreBridgeInstance.hostedMoneroAPIClient.SubmitRawTx(req_params, cb);
      console.log("submit_raw_tx_fn ::", req_params);
    };
    console.log("argsargs::", args);
    coreBridgeInstance.beldex_utils.async__send_funds(args);
  }


  function clearStates() {
    setPriority(5);
    setToAddress("");
    setAmount("");
    setIsSweepTx(false);
    setManualPaymentId("");
    setPaymentIdToggle(false)
  }

  return (
    <Box
      className="sendFund"
      sx={{
        padding: "30px 20px 50px",
        height: "100%",
        background: (theme) => theme.palette.success.main,
        ".MuiSelect-iconFilled": { fill: "white", color: "white" },
      }}
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <SendIcon
          sx={{
            color: theme.palette.text.primary,
            transform: "rotate(-48deg)",
            fontSize: 18,
          }}
        />
        <Typography
          mt={1}
          sx={{
            fontSize: 18,
            fontWeight: "bold",
            color: theme.palette.text.primary,
          }}
        >
          Send BDX
        </Typography>
      </Box>
      <Box
        mt={2}
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          mr={1}
          sx={{
            color: "#8787A8",
            fontSize: 14,
            fontWeight: 600,

            // fontFamily: "poppins-semibold",
          }}
        >
          Total Balance
        </Typography>
        <InfoOutlinedIcon sx={{ color: "#8787A8", fontSize: 18 }} />
      </Box>
      <Typography
        mr={1}
        textAlign="center"
        sx={{ fontSize: 20, fontWeight: 600 }}
      >
      { walletDetails.unlocked_balance} <span style={{ color: "#20D030" }}>BDX</span>
      </Typography>
      <Box mt={3} mb={3} sx={{ height: "0.2px", backgroundColor: "#8787A8" }} />
      <Typography
        mt={2}
        mb={1}
        sx={{ color: theme.palette.text.primary, fontWeight: 600 }}
      >
        Amount
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        sx={{ width: "100%" }}
      >
        <Box
          sx={{
            // background: "#1C1C26",
            backgroundColor: (theme) => theme.palette.background.default,
            padding: "0 20px",
            width: "100%",
            color: "white",
            borderRadius: "18px",
          }}
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          <Input
            placeholder="00.00"
            disableUnderline={true}
            sx={{
              width: "100%",
              height: "55px",
              // color: "white",
              color: (theme) => theme.palette.text.secondary,
            }}
            value={amount}
            onChange={(event: any) => numberOnly(event.target.value)}
            
          />
          {/* <Select
            className="currency-dropdown"
            disableUnderline
            SelectDisplayProps={{
              style: {
                paddingTop: "5px",
                paddingBottom: "5px",
                background: theme.palette.success.main,
                borderRadius: "10px",
                fontWeight: 600,
              },
            }}
            IconComponent={KeyboardArrowDownIcon}
            sx={{
              color: theme.palette.text.primary,
              backgroundColor: (theme: any) => theme.palette.secondary.main,
              height: "35px",
              borderRadius: "10px",
              "& .MuiSelect-icon": {
                fill: theme.palette.text.primary,
                color: theme.palette.text.primary,
              },
            }}
            variant="filled"
            inputProps={{
              MenuProps: {
                MenuListProps: {
                  sx: {
                    // color: "white",
                    color: theme.palette.text.primary,
                    backgroundColor: (theme: any) =>
                      theme.palette.secondary.main,
                    height: "300px",
                    overflow: "auto",
                  },
                },
              },
            }}
            value={currency}
            defaultValue={currency}
            onChange={(event: any) => setCurrency(event.target.value)}
          >
            {Object.values(exchangeCurrencyList).map((item, key) => (
              <MenuItem key={key} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select> */}
        </Box>
        <Button
          color="info"
          variant="contained"
          onClick={() => setAmount(walletDetails.unlocked_balance)}
          sx={{
            marginLeft: "10px",
            width: "100px",
            height: "35px",
            borderRadius: "10px",
            fontWeight: 600,
            color: "white",
          }}
        >
          Max
        </Button>
      </Box>
      <Box display="flex" flexDirection="row" mb={2} mt={1}>
        <Typography
          mr={1}
          sx={{
            color: "#8787A8",
            fontSize: 14,
          }}
        >
          +0.001436762 BDX EST. Fee
        </Typography>
        <InfoOutlinedIcon sx={{ color: "#8787A8", fontSize: 18 }} />
      </Box>
      <Typography
        component={"span"}
        mr={"4px"}
        sx={{
          color: theme.palette.text.primary,
          fontWeight: 600,
        }}
      >
        To
      </Typography>
      <InfoOutlinedIcon sx={{ color: "#8787A8", fontSize: 14 }} />
      <Input
        placeholder="Beldex Address"
        disableUnderline={true}
        multiline
        sx={{
          width: "100%",
          height: "100px",
          color: theme.palette.text.primary,
          backgroundColor: (theme) => theme.palette.background.default,
          padding: "0 20px",
          borderRadius: "18px",
          overflow: "auto",
          marginTop: "10px",
        }}
        value={toAddress}
        onChange={(event: any) => addressInputChange(event)}
      />
      {paymentIdToggle ? (
        <>
          <Typography
            mt={2}
            mb={1}
            sx={{
              color: theme.palette.text.primary,
              fontWeight: 600,
            }}
          >
            Enter Payment ID or
            <span
              style={{
                color: "#289AFB",
                textDecoration: "underline",
                marginLeft: "5px",
              }}
              onClick={() => generatePaymentId()}
            >
              Generate One
            </span>
          </Typography>

          <Input
            placeholder="Enter the Payment ID"
            disableUnderline={true}
            value={manualPaymentId}
            sx={{
              width: "100%",
              height: "55px",
              // color: "white",
              // background: "#1C1C26",
              color: theme.palette.text.primary,
              backgroundColor: (theme) => theme.palette.background.default,
              padding: "0 20px",
              borderRadius: "18px",
              overflow: "auto",
            }}
            onChange={(event: any) => setManualPaymentId(event?.target.value)}
          />
        </>
      ) : (
        <Typography
          mt={2}
          mb={1}
          sx={{
            color: "#289AFB",
            fontWeight: 400,
            fontSize: "1rem",
            textDecorationLine: "underline",
            cursor: "pointer",
          }}
          onClick={()=>setPaymentIdToggle(true)}
        >
          + Add Payment ID
        </Typography>
      )}
      <Box display="flex" flexDirection="row" alignItems="center" mt={2}>
        <Typography
          component={"span"}
          mr={"4px"}
          sx={{
            color: theme.palette.text.primary,
            fontWeight: 600,
          }}
        >
          Priority
        </Typography>
        <InfoOutlinedIcon sx={{ color: "#8787A8", fontSize: 14 }} />
        <Select
          sx={{
            color: theme.palette.text.primary,
            backgroundColor: (theme: any) => theme.palette.secondary.main,
            height: "35px",
            borderRadius: "10px",
            marginLeft: "10px",

            "& .MuiSelect-icon": {
              fill: theme.palette.text.primary,
              color: theme.palette.text.primary,
            },
          }}
          SelectDisplayProps={{
            style: {
              paddingTop: "10px",
              paddingBottom: "10px",
              backgroundColor: theme.palette.secondary.main,
              borderRadius: "10px",
              width: "77px",
            },
          }}
          variant="filled"
          disableUnderline
          IconComponent={KeyboardArrowDownIcon}
          inputProps={{
            MenuProps: {
              MenuListProps: {
                sx: {
                  color: theme.palette.text.primary,
                  backgroundColor: (theme: any) => theme.palette.secondary.main,
                },
              },
            },
          }}
          value={priority}
          defaultValue={priority}
          onChange={(event: any) => setPriority(event.target.value)}
        >
          <MenuItem value={5}>Flash</MenuItem>
          <MenuItem value={1}>Normal</MenuItem>
        </Select>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        mt={5}
      >
        <Button
          variant="contained"
          color="secondary"
          sx={{
            fontWeight: 600,
            marginRight: "10px",
            width: "150px",
            height: "45px",
            borderRadius: "10px",
            // color: "white",
            color: theme.palette.text.primary,
          }}
        >
          <RefreshIcon /> Reset
        </Button>
        <Button
          variant="contained"
          color="primary"
          
          sx={{
            fontWeight: 600,
            width: "150px",
            height: "45px",
            borderRadius: "10px",
            // color: "white",
            color: theme.palette.text.primary,
          }}
          onClick={() => sendFundFieldValidation()}
        >
          <CallMadeIcon />
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default SendFund;
