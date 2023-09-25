import React, {useEffect } from "react";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import {useNavigate, useLocation} from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import { styled } from "@mui/material/styles";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Switch from "@mui/material/Switch";
import MoonDark from '../../icons/MoonDark';

import Privacy from '../../icons/Privacy';
import Term from '../../icons/Terms';
import Support from '../../icons/Support';
import Website from '../../icons/Website';
import MyWallet from '../../icons/MyWallet';


const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)"
    }
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "light" ? "#00AD07" : "#00D030"
      }
    }
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200
    })
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.mode === "light" ? "#818181" : "#AFAFBE",
    boxSizing: "border-box"
  }
}));

export default function NavBar() {
  const [checked, setChecked] = React.useState(["wifi"]);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const navigate = useNavigate();
	const location = useLocation();
  const routerPath = ['/mywallet', '/privacy', '/terms']

  useEffect(() => {
    const routerIndex = routerPath.findIndex((item: string) =>  item === location.pathname);
    setSelectedIndex(routerIndex);
  }, []);
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
    if(index < 3) navigate(routerPath[index]);
    
  };
  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Box sx={{  width: '350px', background: '#242433', borderRadius: '25px'  }}>
      <List
        sx={{
          // width: "100%",
          // maxWidth: 360,
          padding: 2,
          bgcolor: "#242433",
          borderRadius: '25px',
          height: "100%",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
          sx={{
            m: 0.5,
            p: 2,
            maxHeight: "60px",
            "&.Mui-selected": {
              background: "#32324A",
              borderRadius: "15px",
              "&:hover": {
                background: "#32324A"
              }
            }
          }}
        >
          <ListItemIcon sx={{minWidth: '40px'}}>
          <MyWallet
              sx={{ fill: selectedIndex === 0 ? "#00D030" : "#D1D1D3" }}
            />
          </ListItemIcon>
          <ListItemText
            sx={{
              color: selectedIndex === 0 ? "white" : "#AFAFBE",
              ".MuiListItemText-primary": {
                fontWeight: selectedIndex === 0 ? "600" : "300"
              }
            }}
            primary="My Wallet"
          />
          {selectedIndex === 0 && (
            <KeyboardArrowRightRoundedIcon sx={{ fill: "white" }} />
          )}
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
          sx={{
            m: 0.5,
            p: 2,
            maxHeight: "60px",
            "&.Mui-selected": {
              background: "#32324A",
              borderRadius: "15px",
              "&:hover": {
                background: "#32324A"
              }
            }
          }}
        >
          <ListItemIcon sx={{minWidth: '40px'}}>
            {/* <DraftsIcon
              sx={{ fill: selectedIndex === 1 ? "#00D030" : "#D1D1D3" }}
            /> */}
             <Privacy
              sx={{ fill: selectedIndex === 1 ? "#00D030" : "#D1D1D3" }}
            />
          </ListItemIcon>
          <ListItemText
            sx={{
              color: selectedIndex === 1 ? "white" : "#AFAFBE",
              ".MuiListItemText-primary": {
                fontWeight: selectedIndex === 1 ? "600" : "300"
              }
            }}
            primary="Privacy"
          />
          {selectedIndex === 1 && (
            <KeyboardArrowRightRoundedIcon sx={{ fill: "white" }} />
          )}
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 2}
          sx={{
            m: 0.5,
            p: 2,
            maxHeight: "60px",
            "&.Mui-selected": {
              background: "#32324A",
              borderRadius: "15px",
              "&:hover": {
                background: "#32324A"
              }
            }
          }}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemIcon sx={{minWidth: '40px'}}>
          <Term
              sx={{ fill: selectedIndex === 2 ? "#00D030" : "#D1D1D3" }}
            />
          </ListItemIcon>
          <ListItemText
            sx={{
              color: selectedIndex === 2 ? "white" : "#AFAFBE",
              ".MuiListItemText-primary": {
                fontWeight: selectedIndex === 2 ? "600" : "300"
              }
            }}
            primary="Terms"
          />
          {selectedIndex === 2 && (
            <KeyboardArrowRightRoundedIcon sx={{ fill: "white" }} />
          )}
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 3}
          sx={{
            m: 0.5,
            p: 2,
            maxHeight: "60px",
            "&.Mui-selected": {
              background: "#32324A",
              borderRadius: "15px",
              "&:hover": {
                background: "#32324A"
              }
            }
          }}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemIcon sx={{minWidth: '40px'}}>
          <Support
              sx={{ fill: selectedIndex === 3 ? "#00D030" : "#D1D1D3" }}
            />
          </ListItemIcon>
          <ListItemText
            sx={{
              color: selectedIndex === 3 ? "white" : "#AFAFBE",
              ".MuiListItemText-primary": {
                fontWeight: selectedIndex === 3 ? "600" : "300"
              }
            }}
            primary="Support"
          />
          {selectedIndex === 3 && (
            <KeyboardArrowRightRoundedIcon sx={{ fill: "white" }} />
          )}
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 4}
          sx={{
            m: 0.5,
            mb: "auto",
            p: 2,
            maxHeight: "60px",
            "&.Mui-selected": {
              background: "#32324A",
              borderRadius: "15px",
              "&:hover": {
                background: "#32324A"
              }
            }
          }}
          onClick={(event) => handleListItemClick(event, 4)}
        >
          <ListItemIcon sx={{minWidth: '40px'}}>
          <Website
              sx={{ fill: selectedIndex === 4 ? "#00D030" : "#D1D1D3" }}
            />
          </ListItemIcon>
          <ListItemText
            sx={{
              color: selectedIndex === 4 ? "white" : "#AFAFBE",
              ".MuiListItemText-primary": {
                fontWeight: selectedIndex === 4 ? "600" : "300"
              }
            }}
            primary="Website"
          />
          {selectedIndex === 4 && (
            <KeyboardArrowRightRoundedIcon sx={{ fill: "white" }} />
          )}
        </ListItemButton>
        <ListItem sx={{ p: 2 }}>
          <ListItemIcon sx={{minWidth: '30px'}}>
            <MoonDark styles={{width: '18px', height: '18px'}} />
          </ListItemIcon>
          <ListItemText id="switch-list-label-bluetooth" primary="Dark Mode" 
            sx={{
              color: "#AFAFBE"
            }}/>
          <AntSwitch
            onChange={handleToggle("bluetooth")}
            checked={checked.indexOf("bluetooth") !== -1}
            inputProps={{ "aria-label": "ant design" }}
          />
        </ListItem>
      </List>
    </Box>
  );
}
