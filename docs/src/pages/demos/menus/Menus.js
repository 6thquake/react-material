import React from 'react';
import Menu from 'react-material/Menu/Menu';
import Button from 'react-material/Button';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Icon from 'react-material/Icon';
import {withStyles} from 'react-material/styles';
const styles = theme=>({
  root:{
    width:400,
    background:'#fff'
  }
});
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;
const MenuItemGroup = Menu.ItemGroup;
class Test extends React.Component {
  onClick(info) {
    console.log('click ', info.item.props.path);
  }
  state = {
    collapsed: true,
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  getMenu() {
    return (
      <div>
        <Button variant="raised" color="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          <Icon>{this.state.collapsed ? 'trending_flat' : 'menu'} </Icon>
        </Button>
        <Menu
          onClick={this.onClick}
          mode="inline"
          inlineCollapsed={this.state.collapsed}
          // theme={'dark'}
          // defaultSelectedKeys={["1-1"]}
          // defaultOpenKeys={['sub1']}
        >
          <SubMenu key='1' title={<span><i className="material-icons">
            accessibility
          </i><span>Navigation One</span></span>}>
            <MenuItem path="/l/o" key="1-1" selected><InboxIcon />item1-1</MenuItem>
            <MenuItem key="1-2"><i className="material-icons">
              accessibility
            </i>item1-2</MenuItem>
          </SubMenu>
          <SubMenu key="sub1" title={<span><InboxIcon /><span>Navigation One</span></span>}>
            <MenuItemGroup key="g1" title="Item 1">
              <Menu.Item key="g1-1">Option 1</Menu.Item>
              <Menu.Item key="g1-2">Option 2</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup key="g2" title="Item 2">
              <Menu.Item key="g2-3">Option 3</Menu.Item>
              <Menu.Item key="g2-4">Option 4</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <SubMenu key="2" title="submenu2">
            <MenuItem key="2-1">item2-1</MenuItem>
            <MenuItem key="2-2"><i className="material-icons">
              accessibility
            </i>item2-2</MenuItem>
            <SubMenu key="2-3" title="submenu2-3">
              <MenuItem key="2-3-1">item2-3-1</MenuItem>
              <MenuItem key="2-3-2">item2-3-2</MenuItem>
            </SubMenu>
            <MenuItem key="2-4">item2-4</MenuItem>
          </SubMenu>
          <MenuItem key="3">item3</MenuItem>
        </Menu>
      </div>
    );
  }

  render() {
    const {classes} = this.props;
      return (<div>
      <div className={classes.root}>{this.getMenu()}</div>
    </div>);
  }
}

export default withStyles(styles)(Test);
