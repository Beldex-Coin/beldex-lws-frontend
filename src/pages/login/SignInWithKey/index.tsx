import React from "react";
import theme from "../../../theme";
import { Box, Button, Input, Typography,useMediaQuery, useTheme } from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function SignInWithKey(props: any) {
  const theme: any = useTheme();

  const isMobileMode = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      className="SignInWithKey"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        height: "100%",
        width: "100%",
      }}
    >
      <Box
        sx={{

          // width: "694px",
          // height: "100%",
          width: isMobileMode ? "98%" : "70%",
          height: "90%",
          padding: isMobileMode ? "15px" : "35px",
          backgroundColor: theme.palette.secondary.main,         
          display: "flex",
          justifyContent: "center",
          //   alignItems: "center",
          flexDirection: "column",
          borderRadius: "20px",
          overflow: "auto",
        }}
      >
        <Typography
          mt={3}
          textAlign="center"
          sx={{ color: theme.palette.text.primary, fontWeight: "bold", fontSize: "1.5rem" }}
        >
          Existing Wallet
        </Typography>
        <Typography mt={3} sx={{ fontWeight: 700 }}>
          Address <InfoOutlinedIcon sx={{ fontSize: "0.9rem" }} />{" "}
        </Typography>
        <Box mt={1} display="flex" flexDirection="row">
          <Input
            placeholder="Enter address"
            disableUnderline={true}
            multiline
            sx={{
              width: "100%",
              height: "100px",
              color: "white",
              background: "#303045",
              padding: "0 20px",
              borderRadius: "18px",
              overflow: "auto",

              //   marginTop: "10px",
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
              height: "100px",
              color: "white",
              background: "#303045",
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
              height: "100px",
              color: "white",
              background: "#303045",
              padding: "0 20px",
              borderRadius: "18px",
              overflow: "auto",

              //   marginTop: "10px",
            }}
          />
        </Box>
        <Typography color={theme.palette.text.primary} mt={3} textAlign={'center'}>
          or Use the <Typography component={'span'} onClick={() => props.cbFunction(false)} sx={{fontWeight:500,color:'#289AFB',textDecoration:'underline', cursor: 'pointer'}}>or Use the Recovery Seed</Typography>
        </Typography>
        <Box
          mt={5}
          width={"100%"}
          display="flex"
          justifyContent="center"
          flexDirection={"row"}
          flexWrap={"wrap"}
          alignContent="center"
          sx={{ columnGap: "10px" }}
        >
          <Button
            variant="contained"
            color="secondary"
            sx={{
              width: isMobileMode ? "70%" : "200px",
              borderRadius: isMobileMode ? "40px" : "10px",
              fontWeight: 600,
              height: "50px",
              marginTop: "10px",
            }}
          >
            Cancel
          </Button>
          {/* {!isMobileMode &&<Box sx={{width:'50px',height:'20px'}}></Box>} */}
          <Button
            variant="contained"
            color="primary"
            sx={{
              fontWeight: 600,
              // borderRadius: "10px",
              color: "white",
              height: "50px",
              // marginLeft:isMobileMode? '0':"10px",
              // marginTop:isMobileMode?'10px':'0',
              width: isMobileMode ? "70%" : "200px",
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
