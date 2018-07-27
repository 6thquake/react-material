import React, { Component } from 'react';
import { withStyles } from '../../styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const styles = theme => ({
  root: {
    zIndex: theme.zIndex.appBar,
    width: '100%',
    height: '60px',
    transition: 'background .3s cubic-bezier(0,0,.2,1) 0ms',
    background: '#333',
    position: 'relative',
    // background:'rgba(55,61,65,0)',
    '&:hover': {
      background: '#373d41',
    },
  },
  subContainer: {
    position: 'absolute',
    color: '#fff',
    left: 0,
    right: 0,
    top: '60px',
    background: '#272b2e',
    transition: 'transform .3s',
    transform: 'scaleY(0)',
    transformOrigin: '0% 0%',
  },
  lightSubContainer: {
    color: '#333',
    background: '#fff',
    boxShadow: theme.shadows[4],
    borderTop: `1px solid ${theme.palette.primary.main}`,
    top: '61px',
  },
  topContainer: {
    height: '100%',
  },
  topBar: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    height: '100%',
    display: 'inline-block',
    position: 'relative',
  },
  line: {
    transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'absolute',
    width: '0',
    background: theme.palette.primary.main,
    left: 0,
    bottom: 0,
    height: 3,
  },
  left: {
    float: 'left',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  right: {
    float: 'right',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  lightRoot: {
    background: '#fff',
    '&:hover': {
      background: '#fff',
    },
    boxShadow: theme.shadows[4],
  },
});

class NavBar extends Component {
  state = {
    line: {
      left: 0,
      width: 0,
    },
    activeKey: null,
    subNavOpen: false,
    initMenu: {
      index: '',
      activeKey: '',
      line: {
        width: '',
        left: '',
      },
    },
    selectedKeys: [],
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    let initMenu = {
      index: 0,
      line: {},
    };
    const { selectedKeys, children } = nextProps;
    if (JSON.stringify(selectedKeys) === JSON.stringify(prevState.selectedKeys)) {
      return null;
    }
    if (prevState.topBar) {
      for (let i = 0, l = children.length; i < l; i++) {
        const key = children[i].key || `menu-${i}`;
        const index = selectedKeys.indexOf(key);
        if (index !== -1) {
          initMenu.index = i;
          initMenu.activeKey = key;
          const ele = prevState.topBar.childNodes[i];
          initMenu.line.width = ele.offsetWidth; //+ this.left.offsetWidth;
          initMenu.line.left = ele.offsetLeft;
          //todo
          return {
            activeKey: initMenu.activeKey,
            line: {
              width: initMenu.line.width,
              left: initMenu.line.left,
            },
            initMenu,
            selectedKeys,
          };
        }
      }
    }

    return null;
  }

  getChildContext() {
    return {
      onClick: this.props.onClick,
      theme: this.props.theme,
      hiddenSubContainer: this.hiddenSubContainer,
      selectedKeys: this.props.selectedKeys,
    };
  }

  getNav = e => {
    const ele = e.target;
    if (ele.getAttribute('top-nav-title')) {
      this.setState({
        activeKey: ele.getAttribute('event-key'),
        line: {
          width: ele.offsetWidth,
          left: ele.offsetLeft,
        },
        subNavOpen: true,
        hover: ele.getAttribute('event-key'),
      });
    }
  };

  renderNavItem(child, i) {
    const { selectedKeys } = this.props;
    let childKey = child.key || `menu-${i}`;
    let props = {
      index: i,
      eventKey: childKey,
      hover: this.state.hover === childKey,
      active: this.state.activeKey === childKey,
      selected: selectedKeys.indexOf(childKey) === -1 ? false : true,
      selectedKeys: selectedKeys,
      topNav: this,
    };
    return React.cloneElement(child, props);
  }

  componentDidMount() {
    // console.log('did mount');
    this.getInitMenu();
  }

  getInitMenu = (props = this.props) => {
    const { selectedKeys, children } = props;
    for (let i = 0, l = children.length; i < l; i++) {
      const key = children[i].key || `menu-${i}`;
      const index = selectedKeys.indexOf(key);
      if (index !== -1) {
        this.state.initMenu.index = i;
        this.state.initMenu.activeKey = key;
        const initMenu = this.state.topBar.childNodes[i];
        this.state.initMenu.line.width = initMenu.offsetWidth; //+ this.left.offsetWidth;
        this.state.initMenu.line.left = initMenu.offsetLeft;
        //todo
        this.init();
        break;
      }
    }
  };

  /**
   * 挂在之后初始化 line
   */
  init = () => {
    this.setState({
      activeKey: this.state.initMenu.activeKey,
      line: {
        width: this.state.initMenu.line.width,
        left: this.state.initMenu.line.left,
      },
      subNavOpen: false,
    });
  };

  getSubContainerStyles() {
    return {
      transform: `scaleY(${this.state.subNavOpen ? 1 : 0})`,
    };
  }

  hiddenSubContainer = () => {
    this.setState({
      subNavOpen: false,
    });
  };

  render() {
    const { children, classes, rightTools, leftTools, theme } = this.props;
    const className = classNames(
      {
        [classes.lightRoot]: theme === 'light',
      },
      classes.root,
    );
    const subContainerClassNames = classNames(
      {
        [classes.lightSubContainer]: theme === 'light',
      },
      classes.subContainer,
    );
    return (
      <div className={className} onMouseLeave={e => this.init(e)}>
        <div className={classes.topContainer}>
          <div className={classes.left} ref={e => (this.left = e)}>
            {leftTools}
          </div>
          <ul
            className={classes.topBar}
            onMouseOver={e => this.getNav(e)}
            ref={e => (this.state.topBar = e)}
          >
            {React.Children.map(children, (c, i) => this.renderNavItem(c, i))}
            <span ref={e => (this.line = e)} className={classes.line} style={this.state.line} />
          </ul>
          <div className={classes.right}>{rightTools}</div>
        </div>
        <div
          ref={e => (this.subContainer = e)}
          className={subContainerClassNames}
          style={this.getSubContainerStyles()}
        />
      </div>
    );
  }
}

NavBar.propTypes = {
  /**
   * 左侧工具区
   */
  leftTools: PropTypes.node,
  /**
   * 点击 NavBarItem 调用此函数
   */
  onClick: ({ key, keyPath }, NavBarItem, event) => null,
  /**
   * 右侧工具区
   */
  rightTools: PropTypes.node,
  /**
   * 选中的菜单项 key 数组
   */
  selectedKeys: PropTypes.array,
  /**
   * 主题颜色
   */
  theme: PropTypes.oneOf(['dark', 'light']),
};
NavBar.defaultProps = {
  selectedKeys: [],
  theme: 'dark',
};
NavBar.childContextTypes = {
  onClick: PropTypes.func,
  theme: PropTypes.string,
  hiddenSubContainer: PropTypes.func,
  selectedKeys: PropTypes.array,
};
export default withStyles(styles)(NavBar);
