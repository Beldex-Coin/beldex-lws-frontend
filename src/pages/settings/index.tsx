import React from "react";
import { Box, Typography } from "@mui/material";
import PreferenceSetting from "./PreferenceSetting";
import OutboundIcon from "@mui/icons-material/Outbound";
import { useNavigate } from "react-router-dom";
const Settings = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ padding: "25px" }}>
      <Box sx={{ display: "flex", flexDirection:'row',alignItems:'center' }}>
        <OutboundIcon
          sx={{
            transform: "rotate(225deg)",
            fontSize: "2rem",
            cursor: "pointer",
          }}
          onClick={()=>  navigate("/mywallet")}
        />
        <Typography ml={1} sx={{ fontWeight: 600 }}>
          Back
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "60px",
        }}
      >
        <PreferenceSetting />
      </Box>
      {/* <Typography  sx={{color: 'white',fontSize: '20px',textAlign: 'center',fontWeight: 500,margin: '40px'}}>Settings Page</Typography> */}
    </Box>
  );
};

export default Settings;
