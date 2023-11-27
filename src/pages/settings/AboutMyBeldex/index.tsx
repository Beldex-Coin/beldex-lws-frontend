import { useTheme } from "@emotion/react";

import { Box, Typography, Button, Select, MenuItem, Link } from "@mui/material";
import Logo from "../../../icons/Logo.svg";

export default function AboutMyBeldex() {
  const theme: any = useTheme();

  return (
    <Box
      className="AboutMyBeldex"
      sx={{
        background: theme.palette.success.main,
        width: "70%",
        padding: "50px",
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        borderRadius: '25px',
      }}
    >
      <Typography
        component="h2"
        className="header"
        textAlign={"center"}
        fontSize={22}
        mb={4}
        sx={{ color: theme.palette.text.primary, fontWeight: 700 }}
      >
        About Mybeldex
      </Typography>
      <img src={Logo} style={{ width: "90px" }} />

      <Typography
        component="h2"
        fontSize={22}
        sx={{ color: theme.palette.text.primary, fontWeight: 700 }}
      >
        MyBeldex
      </Typography>
      <Typography
        
        sx={{
          color: theme.palette.text.secondary,
          fontSize: 14,
        }}
      >
        Version 1.0.0
      </Typography>

      <Typography
        mt={4}
        sx={{
          color: theme.palette.text.secondary,
          fontSize: '1.1rem',
          textDecoration:'underline',
          cursor:'pointer',
          fontWeight: 400
        }}
      >
        View on GitHub
      </Typography>
      <Box className="logout-btn-wrapper" mt={3}>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            fontWeight: 600,
            // marginRight: "10px",
            width: "250px",
            height: "60px",
            borderRadius: "20px",
          }}
        >
          Close
        </Button>
        {/* <Button className="logout-btn" color="secondary">Logout</Button> */}
      </Box>
    </Box>
  );
}
