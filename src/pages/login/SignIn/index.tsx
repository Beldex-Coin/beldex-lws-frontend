import React, { useState } from "react";
import { Box, Button, Input, Typography, useMediaQuery } from "@mui/material";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import { useNavigate } from "react-router-dom";
import SignInWithKey from "../SignInWithKey";
import { useTheme } from "@emotion/react";
import { CoreBridgeInstanceContext } from '../../../CoreBridgeInstanceContext';
import { useAppDispatch } from "../../../stores/hooks";
import { setSeedDetails } from "../../../stores/features/seedDetailSlice";

export default function SignIn() {

  const theme: any = useTheme();
  const [showSignWithKey, setShowSignWithKey] = useState(true);
  const isMobileMode = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const [userMnemonic, setUserMnemonic] = React.useState<string>('');
  const [showErrMsg, setShowErrMsg] = React.useState<boolean>(false);
  const [errMsg, setErrMsg] = React.useState<string>('');
  const coreBridgeInstance = React.useContext(CoreBridgeInstanceContext);
  const dispatch = useAppDispatch();

  const signWithKey = (bool: boolean) => {
    setShowSignWithKey(bool);
  }

  const validatingMnemonic = () => {
    console.log('----user entered seed---', userMnemonic);
    if (userMnemonic === '' || userMnemonic === null || userMnemonic === undefined) {
      setShowErrMsg(true);
      setErrMsg('All the fields are required')
    } else if (userMnemonic.split(' ').length < 25) {
      setShowErrMsg(true);
      setErrMsg('Please enter a 25 secret mnemonic.')
    } else {
      setShowErrMsg(false);
      setErrMsg('');
      validateComponentsForLogin();
    }
    //Invalid 25-word mnemonic

  }

  const validateComponentsForLogin = () => {
    try {
      const validatingMnemonic = coreBridgeInstance.beldex_utils.seed_and_keys_from_mnemonic(userMnemonic, coreBridgeInstance.nettype);
      console.log("ret:", validatingMnemonic)

      console.log("validatingMnemonic:", validatingMnemonic)
      const loginValidate = coreBridgeInstance.beldex_utils.validate_components_for_login(
        validatingMnemonic.address_string,
        validatingMnemonic.sec_viewKey_string,
        validatingMnemonic.sec_spendKey_string || '', // expects string
        validatingMnemonic.sec_seed_string || '', // expects string
        coreBridgeInstance.nettype
      );
      validatingMnemonic.mnemonic_string = userMnemonic;
      dispatch(setSeedDetails(validatingMnemonic));
      console.log("loginValidate:", loginValidate)
      if (loginValidate.isValid === false) { // actually don't think we're expecting this..
        console.log("Invalid input...")
        return
      }
      const loginCB = (login__err: any, new_address: any, received__generated_locally: any, start_height: any) => {
        console.log('---login__err-', login__err);
        console.log('---new_address-', new_address);
        console.log('---received__generated_locally-', received__generated_locally);
        console.log('---start_height-', start_height);
        navigate('/mywallet');


      }
      coreBridgeInstance.hostedMoneroAPIClient.LogIn(
        validatingMnemonic.address_string,
        validatingMnemonic.sec_viewKey_string,
        false,
        loginCB
      );

    } catch (error) {
      let err = typeof error === 'string' ? error : '' + error;
      if (err.includes('Invalid 25-word mnemonic')) {
        setShowErrMsg(true);
        setErrMsg('The phrase is Invalid!');
      }
      console.log("Error:", err)
    }
  }

  return (
    <>
      {!showSignWithKey && <Box
        className="SignIn"
        sx={{
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          // width: "100%",
          padding: isMobileMode ? "25px" : '30px 45px',
          height: 'calc(100vh - 110px)',
          overflow: 'auto'
        }}
      >
        <Box
          sx={{
            // minWidth: "70%",
            // maxWidth: "95%",
            padding: isMobileMode ? "15px" : "20px 50px",
            backgroundColor: (theme) => theme.palette.primary.light,
            borderRadius: "20px",
          }}
        >
          <Typography
            textAlign="center"
            sx={{ color: theme.palette.text.primary, fontWeight: "bold", fontSize: "1.5rem" }}
          >
            Existing Wallet
          </Typography>
          <Typography mt={3}>Recovery Seed</Typography>
          <Box mt={1} display="flex" flexDirection="row">
            <Input
              placeholder="Enter Recovery Seed from Existing wallet"
              disableUnderline={true}
              onChange={event => setUserMnemonic(event.target.value)}
              multiline
              sx={{
                width: "100%",
                height: "150px",
                color: (theme) => theme.palette.text.secondary,
                backgroundColor: (theme) => theme.palette.secondary.main,
                padding: "0 20px",
                borderRadius: "18px",
                overflow: "auto",
              }}
            />
            <Box
              sx={{
                backgroundColor: (theme) => theme.palette.secondary.main,
                // boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                width: "40px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: '50px',
                marginTop: '50px',
                marginLeft: '20px',
                cursor: 'pointer'
              }}
            >
              <ContentPasteIcon
                sx={{
                  backgroundColor: (theme: any) => theme.palette.secondary.main,
                  fill: "#1BB71F",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                }}
              />
            </Box>
          </Box>
          {showErrMsg && <Typography sx={{ color: '#FF2424', fontWeight: 400, marginTop: '5px' }}>{errMsg}</Typography>}
          <Typography mt={3} textAlign={'center'}>
            or Use the <Typography component={'span'} onClick={() => signWithKey(true)} sx={{ fontWeight: 500, color: '#289AFB', textDecoration: 'underline', cursor: 'pointer' }}>Address and Recovery Keys</Typography>
          </Typography>
          <Box
            sx={{ flexWrap: 'wrap', columnGap: "10px", mt: 2, display: "flex", justifyContent: "center", alignContent: "center" }}
          >
            <Button
              variant="contained"
              color="secondary"
              sx={{
                width: isMobileMode ? "70%" : '150px',
                borderRadius: isMobileMode ? "40px" : "10px",
                fontWeight: 600,
                height: "50px",
                marginTop: "10px",
              }}
              onClick={() => navigate('/')}
            >Cancel

            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={validatingMnemonic}
              sx={{
                fontWeight: 600,
                color: "white",
                height: "50px",
                width: isMobileMode ? "70%" : "150px",
                borderRadius: isMobileMode ? "40px" : "10px",
                marginTop: "10px",
              }}
            >
              Next
            </Button>
          </Box>
        </Box>
      </Box>}
      {showSignWithKey && <SignInWithKey cbFunction={signWithKey} />}
    </>
  );
}
