import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import NProgress from 'nprogress';
import Router from 'next/router';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';
import MenuIcon from '@material-ui/icons/Menu';
import LightbulbOutline from '@material-ui/icons/LightbulbOutline';
import LightbublFull from '@material-ui/docs/svgIcons/LightbublFull';
import NProgressBar from '@material-ui/docs/NProgressBar';
import FormatTextdirectionLToR from '@material-ui/icons/FormatTextdirectionLToR';
import FormatTextdirectionRToL from '@material-ui/icons/FormatTextdirectionRToL';
import Github from '@material-ui/docs/svgIcons/GitHub';
import AppDrawer from 'docs/src/modules/components/AppDrawer';
import AppSearch from 'docs/src/modules/components/AppSearch';
import Notifications from 'docs/src/modules/components/Notifications';
import { pageToTitle } from 'docs/src/modules/utils/helpers';
import actionTypes from 'docs/src/modules/redux/actionTypes';

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'stretch',
    minHeight: '100vh',
    width: '100%',
  },
  grow: {
    flex: '1 1 auto',
  },
  title: {
    marginLeft: 24,
    flex: '0 1 auto',
  },
  appBar: {
    transition: theme.transitions.create('width'),
    '@media print': {
      position: 'absolute',
    },
  },
  appBarHome: {
    boxShadow: 'none',
  },
  appBarShift: {
    [theme.breakpoints.up('lg')]: {
      width: 'calc(100% - 250px)',
    },
  },
  drawer: {
    [theme.breakpoints.up('lg')]: {
      width: 250,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
});

class AppFrame extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerOpen = () => {
    this.setState({ mobileOpen: true });
  };

  handleDrawerClose = () => {
    this.setState({ mobileOpen: false });
  };

  handleTogglePaletteType = () => {
    this.props.dispatch({
      type: actionTypes.THEME_CHANGE_PALETTE_TYPE,
      payload: {
        paletteType: this.props.uiTheme.paletteType === 'light' ? 'dark' : 'light',
      },
    });
  };

  handleToggleDirection = () => {
    this.props.dispatch({
      type: actionTypes.THEME_CHANGE_DIRECTION,
      payload: {
        direction: this.props.uiTheme.direction === 'ltr' ? 'rtl' : 'ltr',
      },
    });
  };

  render() {
    const { children, classes, uiTheme } = this.props;

    if (!this.context.activePage) {
      throw new Error('Missing activePage.');
    }

    const title =
      this.context.activePage.title !== false ? pageToTitle(this.context.activePage) : null;

    let disablePermanent = false;
    let navIconClassName = '';
    let appBarClassName = classes.appBar;

    if (title === null) {
      // home route, don't shift app bar or dock drawer
      disablePermanent = true;
      appBarClassName += ` ${classes.appBarHome}`;
    } else {
      navIconClassName = classes.navIconHide;
      appBarClassName += ` ${classes.appBarShift}`;
    }

    return (
      <div className={classes.root}>
        <NProgressBar />
        <AppBar className={appBarClassName}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              className={navIconClassName}
            >
              <MenuIcon />
            </IconButton>
            {title !== null && (
              <Typography className={classes.title} variant="title" color="inherit" noWrap>
                {title}
              </Typography>
            )}
            <div className={classes.grow} />
            <AppSearch />
            <Tooltip id="appbar-theme" title="Toggle light/dark theme" enterDelay={300}>
              <IconButton
                color="inherit"
                onClick={this.handleTogglePaletteType}
                aria-labelledby="appbar-theme"
              >
                {uiTheme.paletteType === 'light' ? <LightbulbOutline /> : <LightbublFull />}
              </IconButton>
            </Tooltip>
            <Tooltip
              id="appbar-direction"
              title="Toggle right-to-left/left-to-right"
              enterDelay={300}
            >
              <IconButton
                color="inherit"
                onClick={this.handleToggleDirection}
                aria-labelledby="appbar-direction"
              >
                {uiTheme.direction === 'rtl' ? (
                  <FormatTextdirectionLToR />
                ) : (
                  <FormatTextdirectionRToL />
                )}
              </IconButton>
            </Tooltip>
            <Tooltip id="appbar-github" title="Material-UI GitHub repo" enterDelay={300}>
              <IconButton
                component="a"
                color="inherit"
                href="https://github.com/mui-org/material-ui"
                aria-labelledby="appbar-github"
              >
                <Github />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
        <Notifications />
        <AppDrawer
          className={classes.drawer}
          disablePermanent={disablePermanent}
          onClose={this.handleDrawerClose}
          onOpen={this.handleDrawerOpen}
          mobileOpen={this.state.mobileOpen}
        />
        {children}
      </div>
    );
  }
}

AppFrame.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  uiTheme: PropTypes.object.isRequired,
};

AppFrame.contextTypes = {
  activePage: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default compose(
  withStyles(styles, {
    name: 'AppFrame',
  }),
  connect(state => ({
    uiTheme: state.theme,
  })),
)(AppFrame);
