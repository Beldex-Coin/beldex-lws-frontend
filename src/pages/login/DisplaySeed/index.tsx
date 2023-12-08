import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  IconButton,
  MenuItem,
  Select,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useAppDispatch } from "../../../stores/hooks";
import { setSeedDetails } from "../../../stores/features/seedDetailSlice";
import { useNavigate } from "react-router-dom";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useTheme } from "@emotion/react";
import { useAppSelector } from "../../../stores/hooks";
import { CoreBridgeInstanceContext } from "../../../CoreBridgeInstanceContext";
import { seedDetailSelector, seedDetailState } from "../../../stores/features/seedDetailSlice";
const mnemonic_languages = require('@bdxi/beldex-locales');

export default function DisplaySeed() {
  const theme: any = useTheme();
  const seedDetails: seedDetailState = useAppSelector(seedDetailSelector);
  const isMobileMode = useMediaQuery(theme.breakpoints.down("sm"));

  const [language, setLanguage] = useState("English");
  const [isCopied, setIsCopied] = useState(false);
  const [seed, setSeed] = useState('');

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const coreBridgeInstance = React.useContext(CoreBridgeInstanceContext);
  useEffect(() => {
    console.log('--coreBridgeInstance-', coreBridgeInstance)
    if (coreBridgeInstance.beldex_utils.newly_created_wallet) {
      let compatibleLocaleCode = mnemonic_languages.compatibleCodeFromLocale(window.navigator.language)
      const recSeed = coreBridgeInstance.beldex_utils.newly_created_wallet(compatibleLocaleCode, 1)
      console.log('-dispatch recSeed---', recSeed);
      dispatch(setSeedDetails(recSeed));
      setSeed(recSeed.mnemonic_string);
    }
  }, [coreBridgeInstance.beldex_utils])

  async function copyText(text: string) {
    navigator.clipboard.writeText(text);
    // await new Wallet().Login();
    setIsCopied(true)
  }
  return (
    <Box
      className="DisplaySeed"
      sx={{
        padding: isMobileMode ? "25px" : '30px 45px',
        height: 'calc(100vh - 110px)',
        overflow: 'auto',
      }}
    >
      <Box
        sx={{
          padding: isMobileMode ? "15px" : "20px 50px",
          backgroundColor: (theme) => theme.palette.primary.light,
          borderRadius: "20px",
        }}
      >
        <Typography
          textAlign="center"
          sx={{ color: theme.palette.text.primary, fontWeight: "bold", fontSize: "1.5rem" }}
        >
          Create New Wallet
        </Typography>
        <Typography sx={{ fontWeight: 600, textAlign: "center" }} mt={2}>
          Note down your Recovery Seed!
        </Typography>
        <Typography
          sx={{ fontWeight: 300, textAlign: "center", color: (theme)=>theme.palette.secondary.light }}
        >
          You'll confirm this sequence on the next screen.
        </Typography>

        <Box mt={4} display="flex" flexDirection="row">
          <Typography
            sx={{
              width: "100%",
              color: (theme) => theme.palette.text.secondary,
              backgroundColor: (theme) => theme.palette.secondary.main,
              padding: isMobileMode ? "20px" : "20px 25px",
              borderRadius: "18px",
              lineHeight: 1.75,
              overflow: "auto",
              fontWeight: 400,
              display: "flex",
              alignItems: "center",
              fontSize: isMobileMode ? "11px" : "1rem",
            }}
          >{seed}</Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton
              onClick={() => copyText(seed)}
              disabled={seed.length === 0}
              sx={{
                backgroundColor: "#128B17",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                width: "40px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50px",

                marginLeft: isMobileMode ? "8px" : "20px",
                cursor: "pointer",
              }}
            >
              <ContentCopyIcon
                sx={{
                  fill: "#FFFFFF",
                  fontSize: "1rem",
                }}
              />
            </IconButton>
          </Box>
        </Box>

        <Typography
          sx={{ fontWeight: 400, fontSize: isMobileMode ? "12px" : "1rem" }}
          mt={3}
        >
          <Typography component="span" sx={{ color: "#FF2424" }} mr={1}>
            Note :
          </Typography>
          This is the way to use the access your wallet if you switch devices,
          use another Beldex wallet app, or lose your data.
        </Typography>

        <Box className="drop-down-wrapper" mt={3} textAlign="center">
          <Typography component="span" sx={{  color: theme.palette.text.secondary, }}>
            Language
          </Typography>
          <Select
            disableUnderline
            SelectDisplayProps={{
              style: {
                paddingTop: "10px",
                paddingBottom: "10px",
                // backgroundColor: "#303045",
                color: theme.palette.text.primary,
                backgroundColor:theme.palette.secondary.main,
                borderRadius: "5px",
                fontWeight: 400,
              },
            }}
            // className="currency-dropdown"
            IconComponent={KeyboardArrowDownIcon}
            sx={{
              color: theme.palette.text.primary,
              backgroundColor: (theme: any) => theme.palette.secondary.main,
              borderRadius: "10px",
              marginLeft: "10px",
              marginTop: "16px",
              "& .MuiSelect-icon": {
                fill:theme.palette.text.primary,
                color:theme.palette.text.primary,
              },
            }}
            variant="filled"
            inputProps={{
              MenuProps: {
                MenuListProps: {
                  sx: {
                    color: theme.palette.text.primary,
                    backgroundColor: (theme: any) => theme.palette.secondary.main,
                    // height: "300px",
                    // overflow: "auto",
                  },
                },
              },
            }}
            value={language}
            defaultValue={language}
            onChange={(event) => setLanguage(event.target.value)}
          >
            <MenuItem value={"English"}>English</MenuItem>
            <MenuItem value={"Russian"}>Russian</MenuItem>
          </Select>
        </Box>
        <Box
          sx={{ flexWrap: 'wrap', columnGap: "10px", mt: 2, display: "flex", justifyContent: "center", alignContent: "center" }}
        >
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate('/createNewWallet')}
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
            disabled={!isCopied}
            onClick={() => navigate('/authSeed')}
            sx={{
              width: isMobileMode ? "70%" : '150px',
              borderRadius: isMobileMode ? "40px" : "10px",
              fontWeight: 600,
              height: "50px",
              color: "#FFF",
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