import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
const Support = () => {
  const theme: any = useTheme();
  return (
    <Box sx={{ height: "calc(100vh - 107px)", overflowY: "auto" }}>
      <Typography
        sx={{
          color: theme.palette.text.primary,
          fontSize: "20px",
          fontWeight: 700,
          margin: "40px 40px 25px",
        }}
      >
        Support Page
      </Typography>
      <Box
        sx={{
          color: theme.palette.text.primary,
          fontSize: "20px",
          margin: "0px 40px 40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70%",
        }}
      >
        <Typography>Reach out to our support team via the following channels. Our admins will never contact you first!
Discord: https://discord.com/invite/Hj4MAmA5gs
Telegram: https://t.me/official_beldex
E-mail: support@beldex.io</Typography>
      </Box>
    </Box>
  );
};

export default Support;
