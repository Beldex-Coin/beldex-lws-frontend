import { Box, Typography, Button, useMediaQuery, useTheme } from "@mui/material";
import "./styles.scss";
import SendIcon from "@mui/icons-material/Send";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

export default function Balance() {
  const theme: any = useTheme();
  const isMobileMode = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className="Balance">
      <div className="header">
        <Box>
          <Box className="balanceTxt">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 22.706 22.706"
              fill="#FFFFFF"
            >
              <path d="M20.566,5.676H4.032a2.128,2.128,0,0,1-2.018-.957L19.867,2.838v-.7A2.139,2.139,0,0,0,17.728,0L2.14,2.9C.843,3.134,0,3.858,0,5.037V20.566a2.139,2.139,0,0,0,2.14,2.14H20.566a2.139,2.139,0,0,0,2.14-2.14V7.816A2.139,2.139,0,0,0,20.566,5.676ZM18.921,16.083a1.892,1.892,0,1,1,1.892-1.892A1.891,1.891,0,0,1,18.921,16.083Z" />
            </svg>
            <Typography className="text">Balance</Typography>
          </Box>
          <Box className="balance" sx={{ fontWeight: 600, fontSize: "1.3rem" }}>
            1000.1234
            <Typography
              className="currency"
              sx={{ fontWeight: 600, fontSize: "1.3rem" }}
            >
              BDX
            </Typography>
          </Box>
        </Box>
        {isMobileMode && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button 
              color="info"
              variant="contained"
              sx={{ borderRadius: "5px" }}
            >
              <SendIcon
                sx={{
                  color: "white",
                  transform: "rotate(-48deg)",
                  fontSize: 18,
                }}
              />
              Send
            </Button>
            <Button>
              <PowerSettingsNewIcon sx={{ fill: "#D1D1D3" }} />
            </Button>
          </Box>
        )}
      </div>
    </div>
  );
}
