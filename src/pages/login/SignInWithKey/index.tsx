import React from "react";
import { Box, Button, Input, Typography, useMediaQuery, useTheme } from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function SignInWithKey(props: any) {
  const theme: any = useTheme();
  const isMobileMode = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      className="SignInWithKey"
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
        <Typography mt={2} sx={{ fontWeight: 700 }}>
          Address <InfoOutlinedIcon sx={{ fontSize: "0.9rem" }} />{" "}
        </Typography>
        <Box mt={1}>
          <Input
            placeholder="Enter address"
            disableUnderline={true}
            multiline
            sx={{
              width: "100%",
              height: "70px",
              color: (theme) => theme.palette.text.secondary,
              backgroundColor: (theme) => theme.palette.secondary.main,
              padding: "0 20px",
              borderRadius: "18px",
              overflow: "auto",
            }}
          />
        </Box>

        <Typography sx={{ fontWeight: 700 }} mt={2}>
          View Key <InfoOutlinedIcon sx={{ fontSize: "0.9rem" }} />{" "}
        </Typography>
        <Box mt={1} display="flex" flexDirection="row">
          <Input
            placeholder="Enter view Key"
            disableUnderline={true}
            multiline
            sx={{
              width: "100%",
              height: "70px",
              color: (theme) => theme.palette.text.secondary,
              backgroundColor: (theme) => theme.palette.secondary.main,
              padding: "0 20px",
              borderRadius: "18px",
              overflow: "auto",

              //   marginTop: "10px",
            }}
          />
        </Box>

        <Typography sx={{ fontWeight: 700 }} mt={2}>
          Spend Key <InfoOutlinedIcon sx={{ fontSize: "0.9rem" }} />{" "}
        </Typography>
        <Box mt={1} display="flex" flexDirection="row">
          <Input
            placeholder="Enter Spend Key"
            disableUnderline={true}
            multiline
            sx={{
              width: "100%",
              height: "70px",
              color: (theme) => theme.palette.text.secondary,
              backgroundColor: (theme) => theme.palette.secondary.main,
              padding: "0 20px",
              borderRadius: "18px",
              overflow: "auto",

              //   marginTop: "10px",
            }}
          />
        </Box>
        <Typography color={theme.palette.text.primary} mt={2} textAlign={'center'}>
          or Use the <Typography component={'span'} onClick={() => props.cbFunction(false)} sx={{ fontWeight: 500, color: '#289AFB', textDecoration: 'underline', cursor: 'pointer' }}>or Use the Recovery Seed</Typography>
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
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
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
    </Box>
  );
}
