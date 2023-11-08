import React, { useState } from "react";
import {
  Box,
  Typography,
  Input,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import RefreshIcon from "@mui/icons-material/Refresh";
import CallMadeIcon from "@mui/icons-material/CallMade";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useTheme } from "@emotion/react";

const SendFund = () => {
  const theme = useTheme();
  const [currency, setCurrency] = useState("AUD");
  const [priority, setPriority] = useState("Flash");
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
    <Box className="sendFund" sx={{padding: '30px 20px 50px', height: '100%', background:(theme) => theme.palette.success.main, '.MuiSelect-iconFilled': { fill: 'white', color: 'white' }}}>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <SendIcon
          sx={{ color: "white", transform: "rotate(-48deg)", fontSize: 18 }}
        />
        <Typography
          mt={1}
          sx={{ color: "white", fontSize: 18, fontWeight: "bold" }}
        >
          Send BDX
        </Typography>
      </Box>
      <Box
        mt={2}
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          mr={1}
          sx={{
            color: "#8787A8",
            fontSize: 14,
            fontWeight: 600,

            // fontFamily: "poppins-semibold",
          }}
        >
          Total Balance
        </Typography>
        <InfoOutlinedIcon sx={{ color: "#8787A8", fontSize: 18 }} />
      </Box>
      <Typography
        mr={1}
        textAlign="center"
        sx={{ color: "white", fontSize: 20, fontWeight: 600 }}
      >
        126.984127600 <span style={{ color: "#20D030" }}>BDX</span>
      </Typography>
      <Box mt={3} mb={3} sx={{ height: "0.2px", backgroundColor: "#8787A8" }} />
      <Typography mt={2} mb={1} sx={{ color: "white", fontWeight: 600 }}>
        Amount
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        sx={{ width: "100%" }}
      >
        <Box
          sx={{
            background: "#1C1C26",
            padding: "0 20px",
            width: "100%",
            color: "white",
            borderRadius: "18px",
          }}
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          <Input
            placeholder="00.00"
            disableUnderline={true}
            sx={{
              width: "100%",
              height: "55px",
              color: "white",
            }}
          />
          <Select
            className="currency-dropdown"
            disableUnderline
            SelectDisplayProps={{ style: { paddingTop: '5px', paddingBottom: '5px', backgroundColor: "#303045", borderRadius: '10px', fontWeight: 600 } }}
            IconComponent={KeyboardArrowDownIcon}
            sx={{
              color: "white",
              backgroundColor: (theme: any) => theme.palette.secondary.main,
              height: "35px",
              borderRadius: "10px",
              "& .MuiSelect-icon": {
                fill: "white",
                color: "white",
              },
            }}
            variant="filled"
            inputProps={{
              MenuProps: {
                MenuListProps: {
                  sx: {
                    color: "white",
                    backgroundColor: (theme: any) => theme.palette.secondary.main,
                    height: "300px",
                    overflow: "auto",
                  },
                },
              },
            }}
            value={currency}
            defaultValue={currency}
            onChange={(event) => setCurrency(event.target.value)}
          >
            {Object.values(exchangeCurrencyList).map((item, key) => (
              <MenuItem key={key} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Button
          color="info"
          variant="contained"
          sx={{
            marginLeft: "10px",
            width: "100px",
            height: "35px",
            borderRadius: "10px",
            fontWeight: 600,
            color: "white",
          }}
        >
          Max
        </Button>
      </Box>
      <Box display="flex" flexDirection="row" mb={2} mt={1}>
        <Typography
          mr={1}
          sx={{
            color: "#8787A8",
            fontSize: 14,
          }}
        >
          +0.001436762 BDX EST. Fee
        </Typography>
        <InfoOutlinedIcon sx={{ color: "#8787A8", fontSize: 18 }} />
      </Box>
      <Typography
        component={"span"}
        mr={"4px"}
        sx={{
          color: "White",
          fontWeight: 600,
        }}
      >
        To
      </Typography>
      <InfoOutlinedIcon sx={{ color: "#8787A8", fontSize: 14 }} />
      <Input
        placeholder="Beldex Address"
        disableUnderline={true}
        multiline
        sx={{
          width: "100%",
          height: "100px",
          color: "white",
          background: "#1C1C26",
          padding: "0 20px",
          borderRadius: "18px",
          overflow: "auto",
          marginTop: "10px",
        }}
      />
      <Typography
        mt={2}
        mb={1}
        sx={{
          color: "White",
          fontWeight: 600,
        }}
      >
        Enter Payment ID or
        <span
          style={{
            color: "#289AFB",
            textDecoration: "underline",
            marginLeft: "5px",
          }}
        >
          Generate One
        </span>
      </Typography>

      <Input
        placeholder="Enter the Payment ID"
        disableUnderline={true}
        sx={{
          width: "100%",
          height: "55px",
          color: "white",
          background: "#1C1C26",
          padding: "0 20px",
          borderRadius: "18px",
          overflow: "auto",
        }}
      />
      <Box display="flex" flexDirection="row" alignItems="center" mt={2}>
        <Typography
          component={"span"}
          mr={"4px"}
          sx={{
            color: "White",
            fontWeight: 600,
          }}
        >
          Priority
        </Typography>
        <InfoOutlinedIcon sx={{ color: "#8787A8", fontSize: 14 }} />
        <Select
          sx={{
            color: "white",
            backgroundColor: (theme: any) => theme.palette.secondary.main,
            height: "35px",
            borderRadius: "10px",
            marginLeft: "10px",

            "& .MuiSelect-icon": {
              fill: "white",
              color: "white",
            },
          }}
          SelectDisplayProps={{
            style: {
              paddingTop: '10px', paddingBottom: '10px', backgroundColor: "#303045", borderRadius: '10px', width: '77px'
            }
          }}
          variant="filled"
          disableUnderline
          IconComponent={KeyboardArrowDownIcon}
          inputProps={{
            MenuProps: {
              MenuListProps: {
                sx: {
                  color: "white",
                  backgroundColor: (theme: any) => theme.palette.secondary.main,
                },
              },
            },
          }}
          value={priority}
          defaultValue={priority}
          onChange={(event) => setPriority(event.target.value)}
        >
          <MenuItem value={"Flash"}>Flash</MenuItem>
          <MenuItem value={"Slow"}>Normal</MenuItem>
        </Select>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        mt={5}
      >
        <Button
          variant="contained"
          color="secondary"
          sx={{
            fontWeight: 600,
            marginRight: "10px",
            width: "150px",
            height: "45px",
            borderRadius: "10px",
            color: "white",
          }}
        >
          <RefreshIcon /> Reset
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{
            fontWeight: 600,
            width: "150px",
            height: "45px",
            borderRadius: "10px",
            color: "white",
          }}
        >
          <CallMadeIcon />
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default SendFund;
