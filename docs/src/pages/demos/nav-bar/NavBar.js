import React from 'react';
import Switch from '@6thquake/react-material/Switch';
import FormControlLabel from '@6thquake/react-material/FormControlLabel';
import FormGroup from '@6thquake/react-material/FormGroup';
import { withStyles } from '@6thquake/react-material/styles';
import ButtonBase from '@6thquake/react-material/ButtonBase';
import NavBar, { NavBarItem, NavBarItemGroup, SubNavBar } from '@6thquake/react-material/NavBar';

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
class NavBarDemo extends React.Component {
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
        <NavBar
          leftTools={<Logo className={classes.logo} />}
          rightTools={<RightTools classes={classes} />}
          theme={theme}
          selectedKeys={this.state.selectedKeys}
          onClick={this.onChange}
        >
          <SubNavBar title="中国">
            <NavBarItemGroup title="北京">
              <NavBarItem>朝阳区</NavBarItem>
              <NavBarItem>海淀区</NavBarItem>
              <NavBarItem>丰台区</NavBarItem>
              <NavBarItem>石景山区</NavBarItem>
            </NavBarItemGroup>
            <NavBarItemGroup title="上海">
              <NavBarItem>长宁区</NavBarItem>
              <NavBarItem>普陀区</NavBarItem>
            </NavBarItemGroup>
            <NavBarItemGroup title="山东">
              <NavBarItem>济南</NavBarItem>
              <NavBarItem>青岛</NavBarItem>
              <NavBarItem>日照</NavBarItem>
              <NavBarItem>威海</NavBarItem>
            </NavBarItemGroup>
            <NavBarItemGroup title="浙江">
              <NavBarItem>杭州</NavBarItem>
              <NavBarItem>宁波</NavBarItem>
            </NavBarItemGroup>
            <NavBarItemGroup title="陕西">
              <NavBarItem>西安</NavBarItem>
            </NavBarItemGroup>
          </SubNavBar>
          <SubNavBar title="美国">
            <NavBarItemGroup title="纽约市">
              <NavBarItem>曼哈顿区</NavBarItem>
              <NavBarItem>皇后区</NavBarItem>
              <NavBarItem>布鲁克林区</NavBarItem>
              <NavBarItem>布朗克斯区</NavBarItem>
            </NavBarItemGroup>
            <NavBarItemGroup title="洛杉矶">
              <NavBarItem>洛杉矶县</NavBarItem>
              <NavBarItem>橙县</NavBarItem>
              <NavBarItem>河滨县</NavBarItem>
              <NavBarItem>圣伯纳丁县</NavBarItem>
              <NavBarItem>文图拉县</NavBarItem>
            </NavBarItemGroup>
          </SubNavBar>
          <SubNavBar title="俄罗斯">
            <NavBarItemGroup title="莫斯科">
              <NavBarItem>中央行政区</NavBarItem>
              <NavBarItem>北行政区</NavBarItem>
              <NavBarItem>东北行政区</NavBarItem>
              <NavBarItem>东行政区</NavBarItem>
              <NavBarItem>东南行政区</NavBarItem>
              <NavBarItem>南行政区</NavBarItem>
            </NavBarItemGroup>
          </SubNavBar>
          <SubNavBar title="英国">
            <NavBarItemGroup>
              <NavBarItem>伦敦</NavBarItem>
            </NavBarItemGroup>
            <NavBarItemGroup>
              <NavBarItem>伯明翰</NavBarItem>
            </NavBarItemGroup>
            <NavBarItemGroup>
              <NavBarItem>曼切斯特</NavBarItem>
            </NavBarItemGroup>
            <NavBarItemGroup>
              <NavBarItem>利兹</NavBarItem>
            </NavBarItemGroup>
            <NavBarItemGroup>
              <NavBarItem>格拉斯哥</NavBarItem>
            </NavBarItemGroup>
            <NavBarItemGroup>
              <NavBarItem key={'123'}>纽卡斯尔</NavBarItem>
            </NavBarItemGroup>
          </SubNavBar>
        </NavBar>
      </div>
    );
  }
}

export default withStyles(styles)(NavBarDemo);
