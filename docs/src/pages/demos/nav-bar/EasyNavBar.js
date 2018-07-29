import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import classNames from 'classnames';
import Drawer from '@6thquake/react-material/Drawer';
import AppBar from '@6thquake/react-material/AppBar';
import Toolbar from '@6thquake/react-material/Toolbar';
import Typography from '@6thquake/react-material/Typography';
import Divider from '@6thquake/react-material/Divider';
import IconButton from '@6thquake/react-material/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import NavBar from '@6thquake/react-material/NavBar';
import Scrollbar from '@6thquake/react-material/Scrollbar';
import Grid from '@6thquake/react-material/Grid';
import SvgIcon from '@6thquake/react-material/SvgIcon';
import common from '@6thquake/react-material/colors/common';
import data from './data';

const drawerWidth = 240;
const defaultItemKeysMap = {
  name: 'name',
  icon: 'icon',
  children: 'children',
  beforeChildren: 'beforeChildren',
  before: 'before',
  onClick: 'onClick',
  onHandle: 'onHandle',
  style: 'style',
  className: 'className',
  open: 'open',
  selected: 'selected',
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    marginLeft: 72,
    width: `calc(100% - 72px)`,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    height: '100%',
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
  docked: {
    overflow: 'hidden',
    height: '100%',
  },
});

const logoStyles = {
  cl1: {
    fill: 'rgb(132, 241, 246)',
    opacity: 0.55,
    isolation: 'isolate',
  },
  cl2: {
    fill: 'rgb(36, 136, 199)',
  },
  cl3: {
    fill: 'rgb(132, 241, 246)',
    stroke: 'rgb(132, 241, 246)',
    strokeMiterlimit: 10,
    strokeWidth: '0.06px',
  },
};

const Logo = props => (
  <SvgIcon {...props}>
    <polygon style={logoStyles.cl1} points="5.6 9.8 6.8 11.6 5.6 9.8 5.6 9.8" />
    <polygon style={logoStyles.cl2} points="1 0.4 0.1 1 0.5 14.3 1.4 15.6 1 0.4" />
    <polygon style={logoStyles.cl2} points="5.6 8 5.6 9.8 6.8 11.6 9 12.9 5.6 8" />
    <polygon style={logoStyles.cl2} points="12.3 7.6 10 11.4 10.1 13.2 12.1 14.3 12.3 7.6" />
    <polygon style={logoStyles.cl2} points="12.6 0.9 10.2 1.5 8 4.8 9.1 6.5 12.6 0.9" />
    <polygon
      style={logoStyles.cl3}
      points="12.6 0.9 9.1 6.5 8 4.8 5.4 0.6 1 0.4 1.4 15.6 5.6 15.1 5.6 9.8 5.6 9.8 5.6 8 9 12.9 10 11.4 12.3 7.6 12.1 14.3 15.4 13.9 15.9 0.9 12.6 0.9"
    />
  </SvgIcon>
);

class MiniDrawer extends React.Component {
  state = {
    open: true,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  toggleDrawer = () => {
    this.setState({ open: !this.state.open });
  };

  onClick(info) {
    console.log('click ', info);
  }
  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar
          position="absolute"
          className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
        >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, this.state.open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              Mini variant drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
            docked: classes.docked,
          }}
          open={this.state.open}
        >
          <Grid
            container
            direction="column"
            alignItems="stretch"
            justify="space-between"
            style={{
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.87)',
            }}
          >
            <Grid
              item
              container
              style={{
                height: '100px',
              }}
              direction="row"
              alignItems="stretch"
              justify="center"
            >
              <Grid item>
                <Logo
                  style={{
                    height: '48px',
                    fontSize: '48px',
                    marginTop: '32px',
                  }}
                />
              </Grid>
              {this.state.open ? (
                <Grid item>
                  <Typography
                    variant="title"
                    style={{
                      lineHeight: '100px',
                      color: common.white,
                    }}
                  >
                    React-Material
                  </Typography>
                </Grid>
              ) : null}
            </Grid>
            <Grid item>
              <Divider />
            </Grid>
            <Grid item xs style={{ position: 'relative' }}>
              <Scrollbar style={{ position: 'initial', height: '100%' }}>
                <NavBar
                  list={data}
                  itemKeysMap={{
                    name: 'component',
                    children: 'childRoutes',
                    key: 'path',
                  }}
                  onClick={this.onClick}
                  mode="inline"
                  inlineCollapsed={!this.state.open}
                  theme={'dark'}
                />
              </Scrollbar>
            </Grid>
            <Grid item container direction="row" alignItems="stretch" justify="center">
              <Grid item>
                <div className={classes.toolbar}>
                  <IconButton onClick={this.toggleDrawer} style={{ color: common.white }}>
                    {this.state.open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                  </IconButton>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography noWrap>xxx</Typography>
        </main>
      </div>
    );
  }
}

MiniDrawer.propTypes = {
  // classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MiniDrawer);
