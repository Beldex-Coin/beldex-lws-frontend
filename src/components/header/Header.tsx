import React, { Fragment } from "react";
import {
  List,
  AppBar,
  ListItemButton,
  Box,
  ListItemIcon,
  ListItemText,
  Typography,
  Toolbar,
  Paper,
  Grow,
  Popper,
  IconButton,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import InboxIcon from "@mui/icons-material/Inbox";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import useMediaQuery from "@mui/material/useMediaQuery";
import LogoDark from "../../icons/LogoDark";
import LogoWhite from "../../icons/LogoWhite";
import SettingIconDark from "../../icons/SettingIconDark";
import MoonDark from "../../icons/MoonDark";
import MenuDark from "../../icons/MenuDark";
import { ColorContext } from "../../ColorContext";
import { useSelector } from "react-redux";
const styles = {
  logoContainer: {
    padding: 0,
    display: "flex",
    gap: 2,
    alignItems: "center",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  menuIconContainer: {
    marginLeft: "auto",
  },
  appbar: {
    boxShadow: "none",
    background: (theme: any) => theme.palette.background.default,
    padding: "10px 30px 5px 30px",
    zIndex: (theme: any) => theme.zIndex.modal + 1,
  },
};

const DesktopNavigation = () => {
  const navigate = useNavigate();
  const walletDetails = useSelector((state: any) => state.seedDetailReducer);

  const titleValidator = () => {
    const defaultTitle = "Home";
    
    if (walletDetails.isLogin) {
      return window.location.pathname === "/settings" ? "Settings" : "My Beldex Wallet";
    } else {
      return defaultTitle;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        padding: "0 0 0 121px",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
        {titleValidator()}
      </Typography>
      <Box>
        {/* <BaseButton label="LOGOUT" variant='contained' cbFunction={() => navigate('/')} /> */}
        <IconButton
          sx={styles.menuIconContainer}
          onClick={() => navigate("/settings")}
        >
          <SettingIconDark
            styles={{ fill: (theme: any) => theme.palette.secondary.light }}
          />
        </IconButton>
      </Box>
    </Box>
  );
};

const MobileNavigation = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();
  const colorMode = React.useContext(ColorContext);

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpenMenu(false);
    } else if (event.key === "Escape") {
      setOpenMenu(false);
    }
  }

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpenMenu(false);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(openMenu);
  React.useEffect(() => {
    if (prevOpen.current === true && openMenu === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = openMenu;
  }, [openMenu]);

  return (
    <React.Fragment>
      <Popper
        open={openMenu}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper
              sx={{
                // width: "100%",
                maxWidth: 200,
                padding: 2,
                background: (theme: any) => theme.palette.background.paper,
                borderRadius: "25px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <List onKeyDown={handleListKeyDown}>
                  <ListItemButton
                    sx={{
                      m: 0.5,
                      p: 2,
                      maxHeight: "60px",
                      "&.Mui-selected": {
                        // theme.palette.mode
                        background: (theme: any) => theme.palette.common.white,
                        borderRadius: "15px",
                        "&:hover": {
                          background: (theme: any) =>
                            theme.palette.common.white,
                        },
                      },
                    }}
                    onClick={() => navigate("/mywallet")}
                  >
                    <ListItemIcon sx={{ minWidth: "40px" }}>
                      <InboxIcon
                        sx={{
                          fill: (theme: any) => theme.palette.secondary.light,
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        color: (theme) => theme.palette.text.secondary,
                        ".MuiListItemText-primary": {
                          fontWeight: "400",
                        },
                      }}
                      primary="My Wallet"
                    />
                  </ListItemButton>
                  <ListItemButton
                    sx={{
                      m: 0.5,
                      p: 2,
                      maxHeight: "60px",
                      "&.Mui-selected": {
                        background: (theme: any) => theme.palette.common.white,
                        borderRadius: "15px",
                        "&:hover": {
                          background: (theme: any) =>
                            theme.palette.common.white,
                        },
                      },
                    }}
                    onClick={() => navigate("/privacy")}
                  >
                    <ListItemIcon sx={{ minWidth: "40px" }}>
                      <InboxIcon
                        sx={{
                          fill: (theme: any) => theme.palette.secondary.light,
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        color: (theme) => theme.palette.text.secondary,
                        ".MuiListItemText-primary": {
                          fontWeight: "400",
                        },
                      }}
                      primary="Privacy"
                    />
                  </ListItemButton>
                  <ListItemButton
                    sx={{
                      m: 0.5,
                      p: 2,
                      maxHeight: "60px",
                      "&.Mui-selected": {
                        background: (theme: any) => theme.palette.common.white,
                        borderRadius: "15px",
                        "&:hover": {
                          background: (theme: any) =>
                            theme.palette.common.white,
                        },
                      },
                    }}
                    onClick={() => navigate("/terms")}
                  >
                    <ListItemIcon sx={{ minWidth: "40px" }}>
                      <InboxIcon
                        sx={{
                          fill: (theme: any) => theme.palette.secondary.light,
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        color: (theme) => theme.palette.text.secondary,
                        ".MuiListItemText-primary": {
                          fontWeight: "400",
                        },
                      }}
                      primary="Terms"
                    />
                  </ListItemButton>
                  <ListItemButton
                    sx={{
                      m: 0.5,
                      p: 2,
                      maxHeight: "60px",
                      "&.Mui-selected": {
                        background: (theme: any) => theme.palette.common.white,
                        borderRadius: "15px",
                        "&:hover": {
                          background: (theme: any) =>
                            theme.palette.common.white,
                        },
                      },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: "40px" }}>
                      <InboxIcon
                        sx={{
                          fill: (theme: any) => theme.palette.secondary.light,
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        color: (theme) => theme.palette.text.secondary,
                        ".MuiListItemText-primary": {
                          fontWeight: "400",
                        },
                      }}
                      primary="Supports"
                    />
                  </ListItemButton>
                  <ListItemButton
                    sx={{
                      m: 0.5,
                      p: 2,
                      maxHeight: "60px",
                      "&.Mui-selected": {
                        background: (theme: any) => theme.palette.common.white,
                        borderRadius: "15px",
                        "&:hover": {
                          background: (theme: any) =>
                            theme.palette.common.white,
                        },
                      },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: "40px" }}>
                      <InboxIcon
                        sx={{
                          fill: (theme: any) => theme.palette.secondary.light,
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        color: (theme) => theme.palette.text.secondary,
                        ".MuiListItemText-primary": {
                          fontWeight: "400",
                        },
                      }}
                      primary="Website"
                    />
                  </ListItemButton>
                </List>
                {/* <MenuList
                  autoFocusItem={openMenu}

                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </MenuList> */}
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>

      <IconButton
        sx={styles.menuIconContainer}
        onClick={colorMode.toggleColorMode}
      >
        <MoonDark styles={{ width: "20px", height: "20px" }} />
      </IconButton>
      <IconButton onClick={() => navigate("/settings")}>
        <SettingIconDark styles={{ width: "20px", height: "20px" }} />
      </IconButton>
      <IconButton
        ref={anchorRef}
        id="composition-button"
        aria-controls={openMenu ? "composition-menu" : undefined}
        aria-expanded={openMenu ? "true" : undefined}
        aria-haspopup="true"
        onClick={() => setOpenMenu(!openMenu)}
      >
        <MenuDark styles={{ width: "20px", height: "20px" }} />
      </IconButton>
    </React.Fragment>
  );
};

const Header = () => {
  const theme: any = useTheme();
  const isMobileMode = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  console.log(" theme.palette.mode theme.palette.mode ::",theme.palette.mode)
  return (
    <Fragment>
      <AppBar position="fixed" sx={styles.appbar} elevation={9}>
        <Toolbar disableGutters={true}>
          <Box sx={styles.logoContainer} onClick={() => navigate("/")}>
           { theme.palette.mode === "dark" ?<LogoDark  sx={{width:'1.2em',height:"1.2em"}}/> : <LogoWhite sx={{width:'1.2em',height:"1.2em"}}/>}
            <Box>
              <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>MyBeldex</Typography>
              <Typography sx={{ fontSize: '13px', fontWeight: 400 }}>V0.0.3</Typography>
            </Box>
          </Box>
          {isMobileMode ? <MobileNavigation /> : <DesktopNavigation />}
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Header;
