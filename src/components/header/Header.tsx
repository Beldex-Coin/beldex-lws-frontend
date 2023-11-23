import React, { Fragment } from 'react';
import { List, AppBar, ListItemButton, Box, ListItemIcon, ListItemText, Typography, Toolbar, Paper, Grow, Popper, IconButton, useTheme } from '@mui/material';
import { useNavigate } from "react-router-dom";
import InboxIcon from "@mui/icons-material/Inbox";
import ClickAwayListener from '@mui/material/ClickAwayListener';
import useMediaQuery from '@mui/material/useMediaQuery';
import LogoDark from '../../icons/LogoDark';
import SettingIconDark from '../../icons/SettingIconDark';
import MoonDark from '../../icons/MoonDark';
import MenuDark from '../../icons/MenuDark';
import BaseButton from '../button/BaseButton';
import { ColorContext } from '../../ColorContext';
const styles = {
  logoContainer: {
    padding: 0,
    display: 'flex',
    gap: 2,
    alignItems: 'center',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  menuIconContainer: {
    marginLeft: 'auto',
  },
  appbar: {
    boxShadow: 'none',
    background: (theme: any) => theme.palette.background.default,
    padding: '10px 30px 5px 30px',
    zIndex: (theme: any) => theme.zIndex.modal + 1,
  },
};

const DesktopNavigation = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', padding: '0 0 0 20px', width: '100%', justifyContent: 'space-between' }}>
      <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>Home</Typography>
      <Box>
        <BaseButton label="LOGOUT" variant='contained' cbFunction={() => navigate('/')} />
        <IconButton sx={styles.menuIconContainer} onClick={() => navigate('/settings')}>
          <SettingIconDark />
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
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpenMenu(false);
    } else if (event.key === 'Escape') {
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
                placement === 'bottom-start' ? 'left top' : 'left bottom',
            }}
          >
            <Paper sx={{
              // width: "100%",
              maxWidth: 200,
              padding: 2,
              background: (theme: any) => theme.palette.background.paper,
              borderRadius: '25px',
              height: "100%",
              display: "flex",
              flexDirection: "column"
            }}>
              <ClickAwayListener onClickAway={handleClose}>
                <List onKeyDown={handleListKeyDown}>
                  <ListItemButton
                    sx={{
                      m: 0.5,
                      p: 2,
                      maxHeight: "60px",
                      "&.Mui-selected": {
                        // theme.palette.mode
                        background: (theme: any) =>theme.palette.mode === 'dark' ? "#32324A" : "#f2f2f2",
                        borderRadius: "15px",
                        "&:hover": {
                          background: (theme: any) =>theme.palette.mode === 'dark' ? "#32324A" : "#f2f2f2"
                        }
                      }
                    }}
                    onClick={() => navigate('/mywallet')}
                  >
                    <ListItemIcon sx={{ minWidth: '40px' }}>
                      <InboxIcon
                        sx={{ fill: "#D1D1D3" }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        color: (theme) => theme.palette.text.secondary,
                        ".MuiListItemText-primary": {
                          fontWeight: "400"
                        }
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
                        background: (theme: any) => theme.palette.mode === 'dark' ? "#32324A" : "#f2f2f2",
                        borderRadius: "15px",
                        "&:hover": {
                          background: (theme: any) => theme.palette.mode === 'dark' ? "#32324A" : "#f2f2f2"
                        }
                      }
                    }}
                    onClick={() => navigate('/privacy')}

                  >
                    <ListItemIcon sx={{ minWidth: '40px' }}>
                      <InboxIcon
                        sx={{ fill: "#D1D1D3" }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        color: (theme) => theme.palette.text.secondary,
                        ".MuiListItemText-primary": {
                          fontWeight: "400"
                        }
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
                        background: (theme: any) => theme.palette.mode === 'dark' ? "#32324A" : "#f2f2f2",
                        borderRadius: "15px",
                        "&:hover": {
                          background: (theme: any) => theme.palette.mode === 'dark' ? "#32324A" : "#f2f2f2"
                        }
                      }
                    }}
                    onClick={() => navigate('/terms')}

                  >
                    <ListItemIcon sx={{ minWidth: '40px' }}>
                      <InboxIcon
                        sx={{ fill: "#D1D1D3" }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        color: (theme) => theme.palette.text.secondary,
                        ".MuiListItemText-primary": {
                          fontWeight: "400"
                        }
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
                        background: (theme: any) => theme.palette.mode === 'dark' ? "#32324A" : "#f2f2f2",
                        borderRadius: "15px",
                        "&:hover": {
                          background: (theme: any) => theme.palette.mode === 'dark' ? "#32324A" : "#f2f2f2"
                        }
                      }
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: '40px' }}>
                      <InboxIcon
                        sx={{ fill: "#D1D1D3" }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        color: (theme) => theme.palette.text.secondary,
                        ".MuiListItemText-primary": {
                          fontWeight: "400"
                        }
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
                        background: (theme: any) => theme.palette.mode === 'dark' ? "#32324A" : "#f2f2f2",
                        borderRadius: "15px",
                        "&:hover": {
                          background: (theme: any) => theme.palette.mode === 'dark' ? "#32324A" : "#f2f2f2"
                        }
                      }
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: '40px' }}>
                      <InboxIcon
                        sx={{ fill: "#D1D1D3" }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        color: (theme) => theme.palette.text.secondary,
                        ".MuiListItemText-primary": {
                          fontWeight: "400"
                        }
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
        sx={styles.menuIconContainer} onClick={colorMode.toggleColorMode}
      >
        <MoonDark styles={{ width: '20px', height: '20px' }} />
      </IconButton>
      <IconButton onClick={() => navigate('/settings')}>
        <SettingIconDark styles={{ width: '20px', height: '20px' }} />
      </IconButton>
      <IconButton
        ref={anchorRef}
        id="composition-button"
        aria-controls={openMenu ? 'composition-menu' : undefined}
        aria-expanded={openMenu ? 'true' : undefined}
        aria-haspopup="true"

        onClick={() => setOpenMenu(!openMenu)}
      >
        <MenuDark styles={{ width: '20px', height: '20px' }} />
      </IconButton>
    </React.Fragment>
  );
};

const Header = () => {
  const theme: any = useTheme();
  const isMobileMode = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  return (
    <Fragment>
      <AppBar
        position="fixed"
        sx={styles.appbar}
        elevation={9}
      >
        <Toolbar disableGutters={true}>
          <Box sx={styles.logoContainer} onClick={() => navigate('/')}>
            <LogoDark />
            <Box>
              <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>MyBeldex</Typography>
              <Typography sx={{ fontSize: '11px', fontWeight: 600 }}>V1.0.0</Typography>
            </Box>
          </Box>
          {isMobileMode ? <MobileNavigation /> : <DesktopNavigation />}
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Header;
