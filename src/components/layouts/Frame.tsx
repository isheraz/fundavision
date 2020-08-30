import React, { useState, ReactElement } from 'react';
import { push, Push } from 'connected-react-router';
import { createStyles, withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { ExitToApp, AccountCircle, SearchRounded } from '@material-ui/icons';
import {
  AppBar,
  Button,
  Link,
  InputBase,
  Menu,
  Toolbar,
  MenuItem,
  Typography,
  CssBaseline
} from '@material-ui/core';

import FundaVisionLogo from '../../assets/logos/logo.png';
import LoginModal from '../../pages/login';
import HomeMenu from './Menuitems';

const drawerWidth = 240;

const mapStateToProps = () => ({});

const styles = (theme: any) =>
  createStyles({
    logo: {
      maxWidth: 160
    },
    root: {
      display: 'flex',
      height: '100vh',
      flexDirection: 'column'
    },
    grow: {
      flexGrow: 1
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      zIndex: theme.zIndex.drawer + 1,
      backgroundColor: 'white',
      color: theme.palette.grey[700]
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block'
      },
      marginLeft: theme.spacing(3),
      color: theme.palette.grey[700],
      textDecoration: 'none',
      cursor: 'pointer'
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px',
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end'
    },
    drawerHeaderHidden: {
      display: 'none'
    },
    content: {
      flexGrow: 1,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    contentFixed: {
      flexGrow: 1,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      position: 'fixed',
      minWidth: '100vw'
    },
    contentPadding: {
      padding: theme.spacing(3)
    },
    searchIcon: {
      marginLeft: '83%',
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    search: {
      position: 'relative',
      borderRadius: '20px',
      backgroundColor: 'white',
      border: '2px solid #C0C0C0',

      '&:hover': {
        backgroundColor: 'light-gray'
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '200%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto'
      }
    },
    inputRoot: {
      color: 'inherit',
      width: '100%'
    },

    inputInput: {
      paddingRight: '100px',
      paddingLeft: '20px',
      transition: theme.transitions.create('width'),
      width: '30ch',
      [theme.breakpoints.up('md')]: {
        width: '30ch'
      }
    },
    sectionDesktop: {
      display: 'none',

      [theme.breakpoints.up('sm')]: {
        display: 'flex'
      }
    },
    loginButton: {
      marginRight: '20px',
      borderRadius: '20px',
      color: '#363636',
      border: '1px solid #C0C0C0',

      '&:hover': {
        backgroundColor: '#0082D8'
      }
    },
    link: {
      textDecoration: 'none',
      color: theme.palette.text.primary
    },
    settingsIcons: {
      marginRight: theme.spacing(1)
    },
    anchor: {
      textDecoration: 'none',
      paddingRight: '24px',
      color: '#363636',
      fontSize: '15px',
      fontWeight: 'lighter',
      fontFamily: 'Poppins-Regular',

      '&:hover': {
        color: '#0082D8'
      }
    }
  });

type FrameProps = {
  classes: Record<string, string>;
  children: ReactElement;
  userAuth?: any;
  noFramePadding: boolean;
  location?: any;
  push: Push;
};

const Frame = ({
  classes,
  userAuth,
  children,
  noFramePadding,
  location,
  push
}: FrameProps) => {
  const [settingsAnchorElt, setSettingsAnchor] = useState<Element | null>();
  const [openLogin, setOpenlogin] = useState(false);

  const handleProfileMenuOpen = (event: React.MouseEvent) => {
    setSettingsAnchor(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setSettingsAnchor(null);
  };

  const handleLoginModal = (loginState: boolean) => {
    setOpenlogin(loginState);
  };

  const isProfileMenuOpen = Boolean(settingsAnchorElt);

  const debounceHandleSearch = async () => {
    console.log('debounce');
  };

  const settingsMenu = () => (
    <Menu
      anchorEl={settingsAnchorElt}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isProfileMenuOpen}
      onClose={handleProfileMenuClose}
    >
      {userAuth && (
        <MenuItem
          className={classes.link}
          onClick={() => {
            handleProfileMenuClose();
            push('/settings/');
          }}
        >
          <AccountCircle color="inherit" className={classes.settingsIcons} />
          My Account
        </MenuItem>
      )}
      {userAuth && (
        <MenuItem
          id="logout"
          onClick={() => {
            handleProfileMenuClose();
            push('/logout');
          }}
        >
          <ExitToApp color="inherit" className={classes.settingsIcons} />
          Logout
        </MenuItem>
      )}
    </Menu>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar id="appbar" position="fixed" className={classes.appBar}>
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            color="inherit"
            noWrap
            className={classes.title}
          >
            <img src={FundaVisionLogo} className={classes.logo} alt="logo" />
          </Typography>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchRounded />
            </div>
            <InputBase
              placeholder="Search Buisness or Organization"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              onClick={debounceHandleSearch}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

          <div id="search-box-portal" />
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link className={classes.anchor} href="#">
              Funding
            </Link>
            <Link className={classes.anchor} href="#">
              Help
            </Link>
            <Link className={classes.anchor} href="#">
              About us{' '}
            </Link>
            <Link className={classes.anchor} href="#">
              Sign Up
            </Link>
          </div>
          <Button
            className={classes.loginButton}
            onClick={() => handleLoginModal(!openLogin)}
            variant="outlined"
          >
            Login
          </Button>
        </Toolbar>
        <HomeMenu />
      </AppBar>
      {openLogin && <LoginModal setOpen={handleLoginModal} />}
      {settingsMenu}
      <main
        id="main"
        className={
          noFramePadding
            ? classes.contentFixed
            : `${classes.content} ${classes.contentPadding}`
        }
      >
        <div
          id="drawerHeader"
          className={
            noFramePadding ? classes.drawerHeaderHidden : classes.drawerHeader
          }
        />
        {children}
      </main>
    </div>
  );
};
export default connect(mapStateToProps, { push })(
  withStyles(styles, { withTheme: true })(Frame)
);
