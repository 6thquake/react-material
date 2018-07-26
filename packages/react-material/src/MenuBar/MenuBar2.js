import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme } from '../styles';
import classNames from 'classnames';

import Menu from '../Menu';

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

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
  selected: 'selected',
  key: 'key',
};
const theme = createMuiTheme();
const styles = theme => ({
  '@media (max-width: 600px)': {
    MuiListItemButton: {
      paddingLeft: theme.spacing.unit * 2 + 'px !important',
      paddingRight: theme.spacing.unit * 2 + 'px !important',
    },
  },

  '@global .selected': {
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.primary.main,
  },
});

class Item extends React.Component {
  static contextTypes = {
    level: PropTypes.number,
    inlineIndent: PropTypes.number,
    root: PropTypes.object,
  };

  renderItem() {
    const { name, key, children } = this.props;
    if (this.isRenderItem()) {
      return (
        <React.Fragment>
          <MenuItem key={key}>
            {renderIcon(this.props)}
            {name}
          </MenuItem>
          {children ? <MenuList list={children} /> : null}
        </React.Fragment>
      );
    } else {
      return null;
    }
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
    const { level, inlineIndent } = this.context;

    return this.renderItem();
  }
}

Item.propTypes = {
  name: PropTypes.node || PropTypes.string,
  icon: PropTypes.element || PropTypes.string,
  children: PropTypes.array,
  beforeChildren: PropTypes.func,
  before: PropTypes.func,
  onClick: PropTypes.func,
  onHandle: PropTypes.func,
  style: PropTypes.object,
  className: PropTypes.object,
};

Item.defaultProps = {
  open: false,
  before: () => true,
  beforeChildren: () => true,
  onClick: () => true,
  onHandle: () => true,
  selected: false,
};

class MenuBar2 extends React.Component {
  static childContextTypes = {
    level: PropTypes.number,
    itemKeysMap: PropTypes.object,
    inlineIndent: PropTypes.number,
    // root:PropTypes.object
  };
  state = {
    itemKeysMap: { ...defaultItemKeysMap, ...this.props.itemKeysMap },
  };

  itemKeyToProps(item) {
    const { itemKeysMap } = this.state;
    let result = {};
    for (const key in itemKeysMap) {
      const resultKey = itemKeysMap[key];
      result[key] = item[resultKey];
    }
    return result;
  }

  /**
   * 是否渲染当前节点
   * @param item
   */
  isRenderItem(item) {
    if (item.before) return item.before();
    return true;
  }

  /**
   * 渲染icon
   * @param icon
   */
  renderIcon(icon) {
    if (icon) {
      if (typeof icon === 'string') {
        return <i className="material-icons">{icon}</i>;
      } else {
        return icon;
      }
    } else {
      return null;
    }
  }

  getChildContext() {
    return {
      level: 0,
      itemKeysMap: { ...defaultItemKeysMap, ...this.props.itemKeysMap },
      inlineIndent: this.props.inlineIndent,
      // root:this
    };
  }

  /**
   * 是否渲染子节点
   * @param item 当前节点
   * @return boolean
   */
  isRenderChildren(item) {
    if (item.children && item.children !== 0) {
      if (item.beforeChildren) return item.beforeChildren();
      else return true;
    } else {
      return false;
    }
  }

  renderMenu(list, parentKey) {
    if (!Array.isArray(list)) return null;

    return list.map((item, index) => {
      const result = this.itemKeyToProps(item);
      const { icon, name, children, key } = result;
      let _key;
      if (key) {
        _key = key;
      } else {
        _key = parentKey === undefined ? index : `${parentKey}-${index}`;
      }
      if (this.isRenderItem(item)) {
        if (this.isRenderChildren(result)) {
          return (
            <SubMenu
              key={_key}
              title={
                <span>
                  {this.renderIcon(icon)}
                  <span>{name}</span> {this.props.debugger ? _key : null}
                </span>
              }
            >
              {this.renderMenu(children, _key)}
            </SubMenu>
          );
        } else {
          return (
            <MenuItem key={_key}>
              {this.renderIcon(icon)}
              <span>{name}</span> {this.props.debugger ? _key : null}
            </MenuItem>
          );
        }
      } else {
        return null;
      }
    });
  }

  render() {
    const { list, itemKeysMap, debugger: d, ...props } = this.props;
    return <Menu {...props}>{this.renderMenu(list)}</Menu>;
  }
}

MenuBar2.propTypes = {
  /**
   * 要展示的menu
   */
  list: PropTypes.array.isRequired,
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
    open: PropTypes.string,
    key: PropTypes.string,
  }),

  /**
   * @ignore
   */
  debugger: PropTypes.bool,
};
MenuBar2.defaultProps = {
  debugger: false,
  itemKeysMap: defaultItemKeysMap,
};
export default withStyles(styles, { name: 'RMMenuBar2' })(MenuBar2);
