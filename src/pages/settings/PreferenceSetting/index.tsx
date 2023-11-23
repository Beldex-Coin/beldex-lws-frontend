import { useState } from "react";
import "./styles.scss";
import AppTimeoutSlider from "../AppTimeoutSlider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import {
  Box,
  Typography,

  Button,
  Select,
  MenuItem,
} from "@mui/material";

export default function PreferenceSetting() {
  const [displayCurrency, setDisplayCurrency] = useState("USD");
  const exchangeCurrencyList = {
    USD: "USD",
    AUD: "AUD",
    BRL: "BRL",
    CAD: "CAD",
    CHF: "CHF",
    CNY: "CNY",
    EUR: "EUR",
    GBP: "GBP",
    HKD: "HKD",
    INR: "INR",
    JPY: "JPY",
    KRW: "KRW",
    MXN: "MXN",
    NOK: "NOK",
    NZD: "NZD",
    SEK: "SEK",
    SGD: "SGD",
    TRY: "TRY",
    RUB: "RUB",
    ZAR: "ZAR",
  };
  return (
    <Box className="PreferenceSetting">
      <Typography  component="h2" className="header" textAlign={'center'} fontSize={22}>
        Mybeldex Settings
      </Typography>

      <Typography mt={3} component="h4" className="header">
        App Timeout
      </Typography>
      <AppTimeoutSlider />

      <Box className="drop-down-wrapper" mt={3}>
        <Typography component="span">Display Currency</Typography>
        <Select
          disableUnderline
          SelectDisplayProps={{ style: { paddingTop: 0, paddingBottom: 0 } }}
          // className="currency-dropdown"
          IconComponent={KeyboardArrowDownIcon}
          sx={{
            color: "white",
            backgroundColor: "#303045",
            height: "35px",
            borderRadius: "10px",
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;'
          }}
          variant="filled"
          inputProps={{
         
            MenuProps: {
              MenuListProps: {
                sx: {
                  color: "white",
                  backgroundColor: "#303045",
                  height: "300px",
                  overflow: "auto",
                },
              },
            },
          }}
          value={displayCurrency}
          defaultValue={displayCurrency}
          onChange={(event) => setDisplayCurrency(event.target.value)}
        >
          {Object.values(exchangeCurrencyList).map((item, key) => (
            <MenuItem key={key} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
        {/* <select
          value={displayCurrency}
          onChange={(event) => setDisplayCurrency(event.target.value)}
        >
          {Object.values(exchangeCurrencyList).map((item, key) => (
            <option key={key} value={item}>
              {item}
            </option>
          ))}
        </select> */}
      </Box>

     <Box className="info-wrapper" mt={3}
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      >
        <Typography component="span" >
          <svg
            width="14"
            height="14"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="icons8-info"
              d="M9.82123 0.713867C4.40893 0.713867 0 5.1228 0 10.5351C0 15.9474 4.40893 20.3563 9.82123 20.3563C15.2335 20.3563 19.6425 15.9474 19.6425 10.5351C19.6425 5.1228 15.2335 0.713867 9.82123 0.713867ZM9.82123 2.22483C14.419 2.22483 18.1315 5.9373 18.1315 10.5351C18.1315 15.1329 14.419 18.8454 9.82123 18.8454C5.22343 18.8454 1.51096 15.1329 1.51096 10.5351C1.51096 5.9373 5.22343 2.22483 9.82123 2.22483ZM9.06575 5.24674V6.7577H10.5767V5.24674H9.06575ZM9.06575 8.26866V15.8234H10.5767V8.26866H9.06575Z"
              fill="white"
            />
          </svg>
        </Typography>
        <Typography component="span" className="link">About MyBeldex</Typography>
      </Box>
      <Box className="logout-btn-wrapper" mt={1}>
        <Button className="logout-btn">Logout</Button>
      </Box>
    </Box>
  );
}
