import React, { Component } from 'react';
import { routes } from './data';
import {FlatNavBar} from '@6thquake/react-material/NavBar';
import AppBar from '@6thquake/react-material/AppBar';
import { withStyles } from '@6thquake/react-material/styles';

const {Item, SubNavBar, ItemGroup} = FlatNavBar;
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
        <SubNavBar key={route.key} title={route.name}>
          {children
            ? children.map(route => {
                const children = route.children;
                return children ? (
                  <ItemGroup key={route.key} title={route.name}>
                    {children.map((route, index) => (
                      <Item key={route.key}>{route.name}</Item>
                    ))}
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
        <AppBar className={classes.appBar} position="static" color="default">
          <FlatNavBar selectedKeys={this.state.selectedKeys} onClick={this.onChange}>
            {this.renderMenuBar()}
          </FlatNavBar>
        </AppBar>
        <main className={classes.content}>content</main>
      </div>
    );
  }
}

export default withStyles(styles)(Top);
