import { useTheme } from "@emotion/react";

import { Box, Typography, Button, Select, MenuItem, Link } from "@mui/material";
// import Logo from "../../../icons/Logo.svg";
import LogoDark from "../../../icons/LogoDark";
import LogoWhite from "../../../icons/LogoWhite";

export default function About(props: any) {
  const theme: any = useTheme();

  return (
    <Box
      className="About"
      sx={{
        background: theme.palette.success.main,
        width: "70%",
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "25px",
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
      {theme.palette.mode === "dark" ? (
        <LogoDark sx={{ width: "4em", height: "4em" }} />
      ) : (
        <LogoWhite sx={{ width: "4em", height: "4em" }} />
      )}

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
        Version 0.0.3
      </Typography>

      <Typography
        mt={4}
        sx={{
          color: theme.palette.text.secondary,
          fontSize: "1.1rem",
          textDecoration: "underline",
          cursor: "pointer",
          fontWeight: 400,
        }}
      >
        <Link
          href="https://github.com/Beldex-Coin/beldex-lws-frontend"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: theme.palette.text.secondary }}
        >
          View on GitHub
        </Link>
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
          onClick={() => props.setIsPreference()}
        >
          Close
        </Button>
        {/* <Button className="logout-btn" color="secondary">Logout</Button> */}
      </Box>
    </Box>
  );
}
