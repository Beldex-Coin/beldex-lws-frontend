import React from "react";
import { Box, Button, Input, Typography } from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function SignInWithKey() {
  return (
    <Box
      className="SignInWithKey"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#2B2B3C",
          width: "694px",
          height: "100%",
          padding: "35px",
          display: "flex",
          justifyContent: "center",
          //   alignItems: "center",
          flexDirection: "column",
          marginTop: "50px",
          borderRadius: "20px",
        }}
      >
        <Typography
          textAlign="center"
          sx={{ color: "white", fontWeight: "bold", fontSize: "1.5rem" }}
        >
          Existing Wallet
        </Typography>
        <Typography sx={{fontWeight:700}}>Address <InfoOutlinedIcon  sx={{fontSize: "0.9rem" }}/> </Typography>
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

        <Typography sx={{fontWeight:700}} mt={2}>View Key <InfoOutlinedIcon  sx={{fontSize: "0.9rem" }} /> </Typography>
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

        <Typography sx={{fontWeight:700}} mt={2}>Spend Key <InfoOutlinedIcon  sx={{fontSize: "0.9rem" }} /> </Typography>
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
        <Typography mt={3} textAlign={'center'}>
          or Use the <Typography component={'span'} sx={{fontWeight:500,color:'#289AFB',textDecoration:'underline'}}>or Use the Recovery Seed</Typography>
        </Typography>
        <Box mt={3} 
         display= "flex"
         justifyContent= "center"
        >
           <Button
            variant="contained"
            color="secondary"
            sx={{
              fontWeight: 600,
              borderRadius: "10px",
              height: '55px',
              width: '35%'
          
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{
              fontWeight: 600,
              borderRadius: "10px",
              color: "white",
              marginLeft: "10px",
              height: '55px',
              width: '35%'
            }}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
