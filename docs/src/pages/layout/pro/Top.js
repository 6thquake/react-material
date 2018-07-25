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
    height: '300px',
    flexGrow: 1,
    overflowY: 'scroll',
  },
  content: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    height: '500px',
  },
});

class Top extends Component {
  state = {
    selectedKeys: [],
  };
  onChange = ({ key, keyPath }) => {
    this.setState({
      selectedKeys: keyPath,
    });
  };
  renderMenuBar() {
    return routes.map((route, index) => {
      const children = route.children;
      return (
        <SubMenuBar key={route.key} title={route.name}>
          {children
            ? children.map(route => {
                const children = route.children;
                return children ? (
                  <MenuBarItemGroup key={route.key} title={route.name}>
                    {children.map((route, index) => (
                      <MenuBarItem key={route.key}>{route.name}</MenuBarItem>
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
        <AppBar className={classes.appBar} position="static" color="default">
          <MenuBar selectedKeys={this.state.selectedKeys} onClick={this.onChange}>
            {this.renderMenuBar()}
          </MenuBar>
        </AppBar>
        <main className={classes.content}>content</main>
      </div>
    );
  }
}

export default withStyles(styles)(Top);
