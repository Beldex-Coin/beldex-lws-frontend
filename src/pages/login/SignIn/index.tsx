import React, { useState } from "react";
import { Box, Button, Input, Typography, useMediaQuery } from "@mui/material";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import { useNavigate } from "react-router-dom";
import SignInWithKey from "../SignInWithKey";
import { useTheme } from "@emotion/react";

export default function SignIn() {

  const theme: any = useTheme();
  const [showSignWithKey, setShowSignWithKey] = useState(false);
  const isMobileMode = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const signWithKey = (bool: boolean) => {
    setShowSignWithKey(bool);
  }

  return (
    <>
      {!showSignWithKey && <Box
        className="SignIn"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
        }}
      >
        <Box
          sx={{
            backgroundColor: theme.palette.secondary.main,
            width: "694px",
            height: "100%",
            padding: isMobileMode ? "15px" : "35px",
            display: "flex",
            justifyContent: "center",
            //   alignItems: "center",
            flexDirection: "column",
            marginTop: isMobileMode ? '70px' : "112px",
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
                color: "white",
                background: "#303045",
                padding: "0 20px",
                borderRadius: "18px",
                overflow: "auto",

                //   marginTop: "10px",
              }}
            />
            <Box
              sx={{
                backgroundColor: "#303045",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
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
                  backgroundColor: "#303045",
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
          <Box mt={5}
            width={'100%'}
            display="flex"
            justifyContent="center"
            flexDirection={'row'}
            flexWrap={'wrap'}
            alignContent='center'
            sx={{columnGap:'10px'}}

          >
            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate('/')}
              sx={{
                width: isMobileMode ? "70%" : '200px',
                borderRadius: isMobileMode ? "40px" : "10px",
                fontWeight: 600,
                height: "50px",
              }}
            >Cancel

            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate('/mywallet')}
              sx={{
                fontWeight: 600,
                // borderRadius: "10px",
                color: "white",
                height: "50px",
                marginLeft: isMobileMode ? '0' : "10px",
                marginTop: isMobileMode ? '10px' : '0',
                width: isMobileMode ? "70%" : '200px',
                borderRadius: isMobileMode ? "40px" : "10px",
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
