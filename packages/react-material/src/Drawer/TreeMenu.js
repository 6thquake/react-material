import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme } from '../styles';
import List, { ListItem, ListItemText, ListItemIcon } from '../List';
import Collapse from '../transitions/Collapse';
import classNames from 'classnames';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import Menu from '@material-ui/icons/Menu';

const defaultItemKeysMap = {
  name: 'name',
  icon: 'icon',
  children: 'children',
  beforeChildren: 'beforeChildren',
  before: 'before',
  onClick: 'onClick',
  onHandle: 'onHandle',
  style: 'style',
  className: 'className',
  open: 'open',
  selected: 'selected'
};
const theme = createMuiTheme();
const styles = theme => ({
  '@media (max-width: 600px)': {
    MuiListItemButton: {
      paddingLeft: theme.spacing.unit * 2 + 'px !important',
      paddingRight: theme.spacing.unit * 2 + 'px !important'
    }
  },
  '@global .selected': {
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.primary.main
  }
});

class MenuList extends React.Component {
  static childContextTypes = {
    level: PropTypes.number,
  }
  static contextTypes = {
    level: PropTypes.number,
    itemKeysMap: PropTypes.object,
  }

  getChildContext() {
    return {
      level: this.context.level + 1
    }
  }

  itemKeyToProps(item) {
    const { itemKeysMap } = this.context;
    let result = {};
    for (const key in itemKeysMap) {
      const resultKey = itemKeysMap[key];
      result[key] = item[resultKey];
    }
    return result;
  }

  render() {
    const { list } = this.props;
    return list ? <List>
      {
        list.map((item, index) => {
          const Component = withStyles(styles)(Item);
          return <Component key={index} {...this.itemKeyToProps(item)} />
        })
      }

    </List> : null;
  }
}

MenuList.propTypes = {
  list: PropTypes.array.isRequired
};

class Item extends React.Component {
  static contextTypes = {
    level: PropTypes.number,
    inlineIndent: PropTypes.number,
    root: PropTypes.object
  }
  state = {
    open: this.props.open,
    selected: this.selected()
  }
  selected(selected = this.props.selected) {
    const { children, beforeChildren, before } = this.props;
    if (!selected) return false;
    if (children) {
      //有子节点
      if (!beforeChildren()) {
        //不显示子节点
        return true;
      }
    } else {
      //无子节点
      if (before()) {
        //显示该节点
        return true;
      }
    }
  }
  isBranch() {
    const { children, beforeChildren } = this.props;
    if (children && beforeChildren())
      return true;
    return false;
  }

  handleClick = (e) => {
    const {
      onClick,
      onHandle
    } = this.props;
    if (this.handle !== 'pending') {
      let result = onHandle();
      if (result instanceof Promise || typeof result.then === 'function') {
        this.handle = 'pending';
        result.then(() => {
          this.handle = 'resolve';
        }, () => {
          this.handle = 'reject';
        }).catch(() => {
          this.handle = 'reject';
        });
      }
    }
    onClick();
    // let root = ReactDOM.findDOMNode(this.context.root);
    // let ele = root.getElementsByClassName('selected')[0];
    // if(ele){
    //   ele.className = ele.className.replace('selected','');
    // }
    // this.state.selected = this.selected(true);
    this.setState({ open: !this.state.open });
  }


  render() {
    const {
      name,
      icon,
      children,
      beforeChildren,
      before,
      style,
      className: classNamePro,
      classes,
    } = this.props;
    const { selected } = this.state;
    const {
      level,
      inlineIndent
    } = this.context;
    const className = classNames({
      [classes.MuiListItemButton]: true
    }, classNamePro);

    return before() ? <React.Fragment>
      <ListItem onClick={this.handleClick}
        className={className}
        button
        style={{ paddingLeft: level * inlineIndent * theme.spacing.unit, ...style }}>
        {icon && <ListItemIcon>
          {icon}
        </ListItemIcon>}
        {!icon && !this.state.open && <ListItemIcon>
          <Menu />
        </ListItemIcon>}
        <ListItemText primary={name} />
        {this.isBranch() && (this.state.open ? <ExpandLess /> : <ExpandMore />)}
      </ListItem>
      {beforeChildren() && children && <Collapse in={this.state.open} timeout="auto" unmountOnExit>
        <MenuList list={children} />
      </Collapse>}
    </React.Fragment> : null;
  }
}

Item.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.node,
  icon: PropTypes.element,
  children: PropTypes.array,
  beforeChildren: PropTypes.func,
  before: PropTypes.func,
  onClick: PropTypes.func,
  onHandle: PropTypes.func,
  style: PropTypes.object,
  className: PropTypes.object,
  /**
   * 是否打开
   */
  open: PropTypes.bool,
  /**
   * 是否被选中
   */
  selected: PropTypes.bool
};

Item.defaultProps = {
  open: false,
  before: () => true,
  beforeChildren: () => true,
  onClick: () => true,
  onHandle: () => true,
  selected: false
};

class TreeMenu extends React.Component {
  static childContextTypes = {
    level: PropTypes.number,
    itemKeysMap: PropTypes.object,
    inlineIndent: PropTypes.number,
    // root:PropTypes.object
  }

  getChildContext() {
    return {
      level: 0,
      itemKeysMap: { ...defaultItemKeysMap, ...this.props.itemKeysMap },
      inlineIndent: this.props.inlineIndent,
      // root:this
    }
  }

  render() {
    return (
      <MenuList ref={e => this.e = e} list={this.props.list} />
    );
  }
}

TreeMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  /**
   * 要展示的menu
   */
  list: PropTypes.array.isRequired,
  /**
   * 缩进
   */
  inlineIndent: PropTypes.number,
  /**
   * menu的每一项数据的key值
   */
  itemKeysMap: PropTypes.shape({
    name: PropTypes.string,
    icon: PropTypes.string,
    children: PropTypes.string,
    beforeChildren: PropTypes.string,
    before: PropTypes.string,
    onClick: PropTypes.string,
    onHandle: PropTypes.string,
    style: PropTypes.string,
    className: PropTypes.string,
    open: PropTypes.string
  }),
  /**
   * 选中的样式，class
   */
  selected: PropTypes.string
};
TreeMenu.defaultProps = {
  inlineIndent: 3,
  itemKeysMap: defaultItemKeysMap
};

export default withStyles()(TreeMenu);