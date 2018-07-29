import React, { Component } from 'react';
import { routes } from './data';
import { FlatNavBar as NavBar } from '@6thquake/react-material/NavBar';
import AppBar from '@6thquake/react-material/AppBar';
import { withStyles } from '@6thquake/react-material/styles';
const SubNavBar = NavBar.SubNavBar;
const Item = NavBar.Item;
const ItemGroup = NavBar.ItemGroup;

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
  renderNavBar() {
    return routes.map((route, index) => {
      const children = route.children;
      return (
        <SubNavBar key={index} title={route.name}>
          {children
            ? children.map((route, index) => {
                const children = route.children;
                return children ? (
                  <ItemGroup key={index} title={route.name}>
                    {children.map((route, index) => <Item key={index}>{route.name}</Item>)}
                  </ItemGroup>
                ) : (
                  <ItemGroup>
                    <Item>{route.name}</Item>
                  </ItemGroup>
                );
              })
            : null}
        </SubNavBar>
      );
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="sticky" color="default">
          <NavBar>{this.renderNavBar()}</NavBar>
        </AppBar>
        <div className={classes.main}>
          <div className={classes.content}>content</div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Fixed);
