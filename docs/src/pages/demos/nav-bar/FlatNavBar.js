import React from 'react';
import Switch from '@6thquake/react-material/Switch';
import FormControlLabel from '@6thquake/react-material/FormControlLabel';
import FormGroup from '@6thquake/react-material/FormGroup';
import { withStyles } from '@6thquake/react-material/styles';
import ButtonBase from '@6thquake/react-material/ButtonBase';
import {FlatNavBar} from '@6thquake/react-material/NavBar';
const {Item:FlatNavItem, SubNavBar:FlatNavSub, ItemGroup:FlatNavGroup} = FlatNavBar;
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
        <FlatNavBar
          leftTools={<Logo className={classes.logo} />}
          rightTools={<RightTools classes={classes} />}
          theme={theme}
          selectedKeys={this.state.selectedKeys}
          onClick={this.onChange}
        >
          <FlatNavSub title="中国">
            <FlatNavGroup title="北京">
              <FlatNavItem>朝阳区</FlatNavItem>
              <FlatNavItem>海淀区</FlatNavItem>
              <FlatNavItem>丰台区</FlatNavItem>
              <FlatNavItem>石景山区</FlatNavItem>
            </FlatNavGroup>
            <FlatNavGroup title="上海">
              <FlatNavItem>长宁区</FlatNavItem>
              <FlatNavItem>普陀区</FlatNavItem>
            </FlatNavGroup>
            <FlatNavGroup title="山东">
              <FlatNavItem>济南</FlatNavItem>
              <FlatNavItem>青岛</FlatNavItem>
              <FlatNavItem>日照</FlatNavItem>
              <FlatNavItem>威海</FlatNavItem>
            </FlatNavGroup>
            <FlatNavGroup title="浙江">
              <FlatNavItem>杭州</FlatNavItem>
              <FlatNavItem>宁波</FlatNavItem>
            </FlatNavGroup>
            <FlatNavGroup title="陕西">
              <FlatNavItem>西安</FlatNavItem>
            </FlatNavGroup>
          </FlatNavSub>
          <FlatNavSub title="美国">
            <FlatNavGroup title="纽约市">
              <FlatNavItem>曼哈顿区</FlatNavItem>
              <FlatNavItem>皇后区</FlatNavItem>
              <FlatNavItem>布鲁克林区</FlatNavItem>
              <FlatNavItem>布朗克斯区</FlatNavItem>
            </FlatNavGroup>
            <FlatNavGroup title="洛杉矶">
              <FlatNavItem>洛杉矶县</FlatNavItem>
              <FlatNavItem>橙县</FlatNavItem>
              <FlatNavItem>河滨县</FlatNavItem>
              <FlatNavItem>圣伯纳丁县</FlatNavItem>
              <FlatNavItem>文图拉县</FlatNavItem>
            </FlatNavGroup>
          </FlatNavSub>
          <FlatNavSub title="俄罗斯">
            <FlatNavGroup title="莫斯科">
              <FlatNavItem>中央行政区</FlatNavItem>
              <FlatNavItem>北行政区</FlatNavItem>
              <FlatNavItem>东北行政区</FlatNavItem>
              <FlatNavItem>东行政区</FlatNavItem>
              <FlatNavItem>东南行政区</FlatNavItem>
              <FlatNavItem>南行政区</FlatNavItem>
            </FlatNavGroup>
          </FlatNavSub>
          <FlatNavSub title="英国">
            <FlatNavGroup>
              <FlatNavItem>伦敦</FlatNavItem>
            </FlatNavGroup>
            <FlatNavGroup>
              <FlatNavItem>伯明翰</FlatNavItem>
            </FlatNavGroup>
            <FlatNavGroup>
              <FlatNavItem>曼切斯特</FlatNavItem>
            </FlatNavGroup>
            <FlatNavGroup>
              <FlatNavItem>利兹</FlatNavItem>
            </FlatNavGroup>
            <FlatNavGroup>
              <FlatNavItem>格拉斯哥</FlatNavItem>
            </FlatNavGroup>
            <FlatNavGroup>
              <FlatNavItem key={'123'}>纽卡斯尔</FlatNavItem>
            </FlatNavGroup>
          </FlatNavSub>
        </FlatNavBar>
      </div>
    );
  }
}

export default withStyles(styles)(NavBarDemo);
