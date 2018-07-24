import React from 'react';
import Switch from '@6thquake/react-material/Switch';
import FormControlLabel from '@6thquake/react-material/FormControlLabel';
import FormGroup from '@6thquake/react-material/FormGroup';
import { withStyles } from '@6thquake/react-material/styles';
import ButtonBase from '@6thquake/react-material/ButtonBase';
import MenuBar, { MenuBarItem, MenuBarItemGroup, SubMenuBar } from '@6thquake/react-material/MenuBar';
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  logo: {
    padding: '5px 10px',
  },
  button: {
    height: '100%',
    padding: '0 20px',
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
});
function Logo(props) {
  const { className } = props;
  return <img className={className} height="100%" src="/static/logo.png" alt="" />;
}
function RightTools(props) {
  const { classes } = props;
  return <ButtonBase className={classes.button}>Login</ButtonBase>;
}
class MenuBarDemo extends React.Component {
  state = {
    theme: 'dark',
    selectedKeys: [],
  };
  onChange = ({ key, keyPath }) => {
    this.setState({
      selectedKeys: keyPath,
    });
  };
  handleChange = (event, checked) => {
    this.setState({ theme: checked ? 'dark' : 'light' });
  };

  render() {
    const { classes } = this.props;
    const { theme } = this.state;
    return (
      <div className={classes.root}>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={theme === 'dark' ? true : false}
                onChange={this.handleChange}
                aria-label="ThemeSwitch"
              />
            }
            label={theme === 'dark' ? 'Dark' : 'Light'}
          />
        </FormGroup>
        <MenuBar
          leftTools={<Logo className={classes.logo} />}
          rightTools={<RightTools classes={classes} />}
          theme={theme}
          selectedKeys={this.state.selectedKeys}
          onClick={this.onChange}
        >
          <SubMenuBar title="中国">
            <MenuBarItemGroup title="北京">
              <MenuBarItem>朝阳区</MenuBarItem>
              <MenuBarItem>海淀区</MenuBarItem>
              <MenuBarItem>丰台区</MenuBarItem>
              <MenuBarItem>石景山区</MenuBarItem>
            </MenuBarItemGroup>
            <MenuBarItemGroup title="上海">
              <MenuBarItem>长宁区</MenuBarItem>
              <MenuBarItem>普陀区</MenuBarItem>
            </MenuBarItemGroup>
            <MenuBarItemGroup title="山东">
              <MenuBarItem>济南</MenuBarItem>
              <MenuBarItem>青岛</MenuBarItem>
              <MenuBarItem>日照</MenuBarItem>
              <MenuBarItem>威海</MenuBarItem>
            </MenuBarItemGroup>
            <MenuBarItemGroup title="浙江">
              <MenuBarItem>杭州</MenuBarItem>
              <MenuBarItem>宁波</MenuBarItem>
            </MenuBarItemGroup>
            <MenuBarItemGroup title="陕西">
              <MenuBarItem>西安</MenuBarItem>
            </MenuBarItemGroup>
          </SubMenuBar>
          <SubMenuBar title="美国">
            <MenuBarItemGroup title="纽约市">
              <MenuBarItem>曼哈顿区</MenuBarItem>
              <MenuBarItem>皇后区</MenuBarItem>
              <MenuBarItem>布鲁克林区</MenuBarItem>
              <MenuBarItem>布朗克斯区</MenuBarItem>
            </MenuBarItemGroup>
            <MenuBarItemGroup title="洛杉矶">
              <MenuBarItem>洛杉矶县</MenuBarItem>
              <MenuBarItem>橙县</MenuBarItem>
              <MenuBarItem>河滨县</MenuBarItem>
              <MenuBarItem>圣伯纳丁县</MenuBarItem>
              <MenuBarItem>文图拉县</MenuBarItem>
            </MenuBarItemGroup>
          </SubMenuBar>
          <SubMenuBar title="俄罗斯">
            <MenuBarItemGroup title="莫斯科">
              <MenuBarItem>中央行政区</MenuBarItem>
              <MenuBarItem>北行政区</MenuBarItem>
              <MenuBarItem>东北行政区</MenuBarItem>
              <MenuBarItem>东行政区</MenuBarItem>
              <MenuBarItem>东南行政区</MenuBarItem>
              <MenuBarItem>南行政区</MenuBarItem>
            </MenuBarItemGroup>
          </SubMenuBar>
          <SubMenuBar title="英国">
            <MenuBarItemGroup>
              <MenuBarItem>伦敦</MenuBarItem>
            </MenuBarItemGroup>
            <MenuBarItemGroup>
              <MenuBarItem>伯明翰</MenuBarItem>
            </MenuBarItemGroup>
            <MenuBarItemGroup>
              <MenuBarItem>曼切斯特</MenuBarItem>
            </MenuBarItemGroup>
            <MenuBarItemGroup>
              <MenuBarItem>利兹</MenuBarItem>
            </MenuBarItemGroup>
            <MenuBarItemGroup>
              <MenuBarItem>格拉斯哥</MenuBarItem>
            </MenuBarItemGroup>
            <MenuBarItemGroup>
              <MenuBarItem key={'123'}>纽卡斯尔</MenuBarItem>
            </MenuBarItemGroup>
          </SubMenuBar>
        </MenuBar>
      </div>
    );
  }
}

export default withStyles(styles)(MenuBarDemo);
