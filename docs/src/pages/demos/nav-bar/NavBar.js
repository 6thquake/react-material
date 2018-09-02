import React from 'react';
import NavBar from '@6thquake/react-material/NavBar';
import Button from '@6thquake/react-material/Button';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Icon from '@6thquake/react-material/Icon';
import { withStyles } from '@6thquake/react-material/styles';

const styles = theme => ({
  root: {
    width: 400,
    background: '#fff',
  },
});
const SubNavBar = NavBar.SubNavBar;
const NavItem = NavBar.Item;
const ItemGroup = NavBar.ItemGroup;

class Test extends React.Component {
  onClick(info) {
    console.log('click ', info.item.props.path);
  }
  state = {
    collapsed: true,
  };
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  getMenu() {
    return (
      <div>
        <Button
          variant="raised"
          color="primary"
          onClick={this.toggleCollapsed}
          style={{ marginBottom: 16 }}
        >
          <Icon>{this.state.collapsed ? 'trending_flat' : 'menu'} </Icon>
        </Button>
        <NavBar
          onClick={this.onClick}
          mode="inline"
          inlineCollapsed={this.state.collapsed}
          theme={'dark'}
          // defaultSelectedKeys={["1-1"]}
          // defaultOpenKeys={['sub1']}
        >
          <SubNavBar
            key="1"
            title={
              <span>
                <i className="material-icons">accessibility</i>
                <span>Navigation One</span>
              </span>
            }
          >
            <NavItem path="/l/o" key="1-1" selected>
              <InboxIcon />
              item1-1
            </NavItem>
            <NavItem key="1-2">
              <i className="material-icons">accessibility</i>
              item1-2
            </NavItem>
          </SubNavBar>
          <SubNavBar
            key="sub1"
            title={
              <span>
                <InboxIcon />
                <span>Navigation One</span>
              </span>
            }
          >
            <ItemGroup key="g1" title="Item 1">
              <NavBar.Item key="g1-1">Option 1</NavBar.Item>
              <NavBar.Item key="g1-2">Option 2</NavBar.Item>
            </ItemGroup>
            <ItemGroup key="g2" title="Item 2">
              <NavBar.Item key="g2-3">Option 3</NavBar.Item>
              <NavBar.Item key="g2-4">Option 4</NavBar.Item>
            </ItemGroup>
          </SubNavBar>
          <SubNavBar
            key="2"
            title={
              <span>
                <i className="material-icons">accessibility</i>
                <span>SubNavBar2</span>
              </span>
            }
          >
            <NavItem key="2-1">item2-1</NavItem>
            <NavItem key="2-2">
              <i className="material-icons">accessibility</i>
              item2-2
            </NavItem>
            <SubNavBar key="2-3" title="SubNavBar2-3">
              <NavItem key="2-3-1">item2-3-1</NavItem>
              <NavItem key="2-3-2">item2-3-2</NavItem>
            </SubNavBar>
            <NavItem key="2-4">item2-4</NavItem>
          </SubNavBar>
        </NavBar>
      </div>
    );
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.root}>{this.getMenu()}</div>
      </div>
    );
  }
}

export default withStyles(styles)(Test);
