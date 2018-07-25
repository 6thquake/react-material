import React, { Component } from 'react';
import { routes } from './data';
import MenuBar, {
  MenuBarItem,
  MenuBarItemGroup,
  SubMenuBar,
} from '@6thquake/react-material/MenuBar';
import AppBar from '@6thquake/react-material/AppBar';
import { withStyles } from '@6thquake/react-material/styles';
const styles = theme => ({
  root: {
    position: 'relative',
    height: '300px',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    flexGrow: 1,
    overflowY: 'scroll',
  },
  content: {
    height: '500px',
  },
});

class Fixed extends Component {
  renderMenuBar() {
    return routes.map((route, index) => {
      const children = route.children;
      return (
        <SubMenuBar key={index} title={route.name}>
          {children
            ? children.map((route, index) => {
                const children = route.children;
                return children ? (
                  <MenuBarItemGroup key={index} title={route.name}>
                    {children.map((route, index) => (
                      <MenuBarItem key={index}>{route.name}</MenuBarItem>
                    ))}
                  </MenuBarItemGroup>
                ) : (
                  <MenuBarItemGroup>
                    <MenuBarItem>{route.name}</MenuBarItem>
                  </MenuBarItemGroup>
                );
              })
            : null}
        </SubMenuBar>
      );
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="sticky" color="default">
          <MenuBar>{this.renderMenuBar()}</MenuBar>
        </AppBar>
        <div className={classes.main}>
          <div className={classes.content}>content</div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Fixed);
