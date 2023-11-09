import React, { useState } from "react";
import { Box, Button, Input, Typography, useMediaQuery } from "@mui/material";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import { useNavigate } from "react-router-dom";
import SignInWithKey from "../SignInWithKey";
import { useTheme } from "@emotion/react";
import { Height } from "@mui/icons-material";

export default function SignIn() {

  const theme: any = useTheme();
  const [showSignWithKey, setShowSignWithKey] = useState(true);
  const isMobileMode = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const signWithKey = (bool: boolean) => {
    setShowSignWithKey(bool);
  }

  return (
    <>
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height:"100%"
    }}>
      {!showSignWithKey && <Box
        className="SignIn"
        sx={{
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",

          // color: "#fff",
          width:isMobileMode?"unset": "60%",
          // padding: isMobileMode ? "25px" : '30px 45px',
          // height: 'calc(100vh - 110px)',
          overflow: 'auto',

        }}
      >
        <Box
          sx={{
            // minWidth: "70%",
            // maxWidth: "95%",

            // width: '70%',
            height: isMobileMode ? "unset":'550px',

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
          <Typography sx={{ color: '#FF2424', fontWeight: 400, marginTop: '5px' }}>The phrase is Invalid!</Typography>
          <Typography mt={3} textAlign={'center'}>
            or Use the <Typography component={'span'} onClick={() => signWithKey(true)} sx={{ fontWeight: 500, color: '#289AFB', textDecoration: 'underline', cursor: 'pointer' }}>Address and Recovery Keys</Typography>
          </Typography>
          <Box
            sx={{ flexWrap: 'wrap', columnGap: "10px", mt: 2, display: "flex", justifyContent: "center", alignContent: "center",marginTop:'120px' }}
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
              onClick={() => navigate('/mywallet')}
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
      </Box>
    </>
  );
}
