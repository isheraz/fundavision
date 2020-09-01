
import { createStyles, withStyles, fade} from '@material-ui/core/styles';
import React, { useState } from 'react';
import * as Icons from '@material-ui/icons';


import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircle from '@material-ui/icons/AccountCircle';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import { push, Push } from 'connected-react-router';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Menu from '@material-ui/core/Menu';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import FrameClasses from './Frame.module.css'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { connect } from 'react-redux';
import { Button, Link } from '@material-ui/core';
import FundaVisionLogo from '../../assets/logos/logo.png';
import LoginModal from '../../pages/login';

const drawerWidth = 240;


const mapStateToProps = () => ({

  //our state will come here 

});

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
      // vertical padding + font size from searchIcon
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
  userAuth?: any;
  // organization?: ESnapshot<EOrganization>;
  // user?: ESnapshot<EUser>;
  noFramePadding: boolean;
  location?: any;
  // activeOrganization: ESnapshot<EOrganization>;
  push: Push;
};

type FrameState = {
  settingsAnchorElt: Element | null | undefined;
  openLogin: boolean;
};

class Frame extends React.Component<FrameProps, FrameState> {
  constructor(props: FrameProps) {
    super(props);
    this.state = {
      settingsAnchorElt: undefined,
      openLogin: false
    };
  }

  handleProfileMenuOpen = (event: React.MouseEvent) => {
    this.setState({ settingsAnchorElt: event.currentTarget });
  };

  handleProfileMenuClose = () => {
    this.setState({ settingsAnchorElt: null });
  };

  handleLoginModal = (loginState: boolean) => {
    this.setState({ openLogin: loginState });
  };

  render() {
    const { classes, children, userAuth, noFramePadding, push } = this.props;
    const { settingsAnchorElt, openLogin } = this.state;
    const isProfileMenuOpen = Boolean(settingsAnchorElt);

    const settingsMenu = (
      <Menu
        anchorEl={settingsAnchorElt}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isProfileMenuOpen}
        onClose={this.handleProfileMenuClose}
      >
        {userAuth && (
          <MenuItem
            className={classes.link}
            onClick={() => {
              this.handleProfileMenuClose();
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
              this.handleProfileMenuClose();
              push('/logout');
            }}
          >
            <ExitToAppIcon color="inherit" className={classes.settingsIcons} />
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
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search Buisness or Organization"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
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
              onClick={() => this.handleLoginModal(!openLogin)}
              variant="outlined"
            >
              Login
            </Button>

          </Toolbar>
        </AppBar>
        {openLogin && <LoginModal setOpen={this.handleLoginModal} />}
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
  }
}
export default connect(mapStateToProps, { push })(
  withStyles(styles, { withTheme: true })(Frame)
);
