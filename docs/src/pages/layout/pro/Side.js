import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-material/styles';
import classNames from 'classnames';
import Typography from 'react-material/Typography';
import Grid from 'react-material/Grid';
import Divider from 'react-material/Divider';
import IconButton from 'react-material/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Menu from 'react-material/Menu/Menu';
import SvgIcon from 'react-material/SvgIcon';
import common from 'react-material/colors/common';
import { routes } from './data';
import AppBar from 'react-material/AppBar';
import Toolbar from 'react-material/Toolbar';

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;
const sideWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 350,
    zIndex: 1,
    overflowY: 'scroll',
    position: 'relative',
  },
  main: {
    display: 'flex',
    minHeight: 350,
  },
  side: {
    background: 'rgba(0, 0, 0, 0.87)',
    width: sideWidth,
    position: 'relative',
    paddingBottom: '48px',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  sideClose: {
    width: 72,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  toolbar: {
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 8px',
    height: 48,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
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

class Side extends React.Component {
  state = {
    open: true,
    menuConfig: {
      inlineCollapsed: false,
      mode: 'inline',
      theme: 'dark',
    },
  };

  renderMenu() {
    const { menuConfig } = this.state;
    return <Menu {...menuConfig}>{this.renderSubMenu(routes)}</Menu>;
  }

  renderSubMenu(routes) {
    return routes.map(route => {
      const children = route.children;
      const Icon = route.icon;
      let title = route.name;
      if (Icon) {
        title = (
          <span>
            {Icon}
            <span>{route.name}</span>
          </span>
        );
      }
      if (children) {
        return (
          <SubMenu title={title} key={route.key}>
            {this.renderSubMenu(children)}
          </SubMenu>
        );
      } else {
        return <MenuItem key={route.key}>{title}</MenuItem>;
      }
    });
  }

  toggleDrawer = () => {
    this.setState({
      menuConfig: {
        ...this.state.menuConfig,
        inlineCollapsed: !this.state.menuConfig.inlineCollapsed,
      },
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.main}>
          <div
            className={classNames(
              classes.side,
              this.state.menuConfig.inlineCollapsed && classes.sideClose,
            )}
          >
            <Grid
              container
              style={{
                height: '70px',
              }}
              direction="row"
              alignItems="stretch"
              justify="center"
              spacing="2"
            >
              <Grid item>
                <Logo
                  style={{
                    fontSize: '48px',
                    marginTop: '20px',
                  }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="title"
                  style={{
                    lineHeight: '70px',
                    color: common.white,
                    display: this.state.menuConfig.inlineCollapsed && 'none',
                  }}
                >
                  React-Material
                </Typography>
              </Grid>
            </Grid>
            {this.renderMenu()}
            <Divider />
            <div className={classes.toolbar}>
              <IconButton onClick={this.toggleDrawer} style={{ color: common.white }}>
                {!this.state.menuConfig.inlineCollapsed ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </div>
          </div>
          <main className={classes.content}>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="title" color="inherit">
                  Title
                </Typography>
              </Toolbar>
            </AppBar>
            <Typography noWrap>xxx</Typography>
          </main>
        </div>
      </div>
    );
  }
}

Side.propTypes = {
  // classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Side);
