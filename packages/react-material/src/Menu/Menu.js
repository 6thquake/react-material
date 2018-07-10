import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme } from '../styles';
import { findDOMNode } from 'react-dom';
import RcMenu, { Divider, ItemGroup } from 'rc-menu';
import classNames from 'classnames';
import SubMenu from './SubMenu';
import Item from './MenuItem';
import styles from './styles';

const menuPrefixCls = 'rm-menu';
const effect = {
  animationDuration: .3,
  animationFillMode: 'both',
  transformOrigin: '0 0'
};
function leave(node,done){
  done();
}

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.inlineOpenKeys = [];
    this.handleClick = (e) => {
      this.handleOpenChange([]);
      const {onClick} = this.props;
      if (onClick) {
        onClick(e);
      }
    };
    this.handleOpenChange = (openKeys) => {
      this.setOpenKeys(openKeys);
      const {onOpenChange} = this.props;
      if (onOpenChange) {
        onOpenChange(openKeys);
      }
    };
    let openKeys;
    if ('defaultOpenKeys' in props) {
      openKeys = props.defaultOpenKeys;
    }
    else if ('openKeys' in props) {
      openKeys = props.openKeys;
    }
    this.state = {
      openKeys: openKeys || [],
    };
  }

  getChildContext() {
    return {
      inlineCollapsed: this.getInlineCollapsed(),
      rMMenuTheme: this.props.theme,
    };
  }
//  todo remove unsafe life
  componentWillReceiveProps(nextProps, nextContext) {
  // componentWillReceiveProps(nextProps, nextContext) {
    const {prefixCls} = this.props;
    if (this.props.mode === 'inline' &&
      nextProps.mode !== 'inline') {
      this.switchModeFromInline = true;
    }
    if ('openKeys' in nextProps) {
      this.setState({openKeys: nextProps.openKeys});
      return;
    }
    if ((nextProps.inlineCollapsed && !this.props.inlineCollapsed) ||
      (nextContext.siderCollapsed && !this.context.siderCollapsed)) {
      const menuNode = findDOMNode(this);
      this.switchModeFromInline =
        !!this.state.openKeys.length && !!menuNode.querySelectorAll(`.${prefixCls}-submenu-open`).length;
      this.inlineOpenKeys = this.state.openKeys;
      this.setState({openKeys: []});
    }
    if ((!nextProps.inlineCollapsed && this.props.inlineCollapsed) ||
      (!nextContext.siderCollapsed && this.context.siderCollapsed)) {
      this.setState({openKeys: this.inlineOpenKeys});
      this.inlineOpenKeys = [];
    }
  }

  setOpenKeys(openKeys) {
    if (!('openKeys' in this.props)) {
      this.setState({openKeys});
    }
  }

  getRealMenuMode() {
    const inlineCollapsed = this.getInlineCollapsed();
    if (this.switchModeFromInline && inlineCollapsed) {
      return 'inline';
    }
    const {mode} = this.props;
    return inlineCollapsed ? 'vertical' : mode;
  }

  getInlineCollapsed() {
    const {inlineCollapsed} = this.props;
    if (this.context.siderCollapsed !== undefined) {
      return this.context.siderCollapsed;
    }
    return inlineCollapsed;
  }

  getMenuOpenAnimation(menuMode) {
    const {openAnimation, openTransitionName} = this.props;
    let menuOpenAnimation = openAnimation || openTransitionName;
    if (openAnimation === undefined && openTransitionName === undefined) {
      switch (menuMode) {
        case 'horizontal':
          menuOpenAnimation = 'slide-up';
          break;
        case 'vertical':
        case 'vertical-left':
        case 'vertical-right':
          // When mode switch from inline
          // submenu should hide without animation
          if (this.switchModeFromInline) {
            menuOpenAnimation = '';
            this.switchModeFromInline = false;
          }
          else {
            menuOpenAnimation = 'zoom-big';
          }
          break;
        case 'inline':
          menuOpenAnimation = {
            // leave: (node, done) => {
            //   this.switchModeFromInline = false;
            //   this.setState({});
            //   if (this.getRealMenuMode() === 'vertical') {
            //     return;
            //   }
            //   done();
            // }
          };
          this.switchModeFromInline = false;
          break;
        default:
      }
    }
    return menuOpenAnimation;
  }

  render() {
    const {prefixCls, className, theme} = this.props;
    const {classes,...props} = this.props;
    const menuMode = this.getRealMenuMode();
    const menuOpenAnimation = this.getMenuOpenAnimation(menuMode);
    const menuClassName = classNames(className, `${prefixCls}-${theme}`, {
      [`${prefixCls}-inline-collapsed`]: this.getInlineCollapsed(),
    });
    const menuProps = {
      openKeys: this.state.openKeys,
      onOpenChange: this.handleOpenChange,
      className: menuClassName,
      mode: menuMode,
    };
    if (menuMode !== 'inline') {
      // closing vertical popup submenu after click it
      menuProps.onClick = this.handleClick;
      menuProps.openTransitionName = menuOpenAnimation;
    }
    else {
      menuProps.openAnimation = menuOpenAnimation;
    }
    const {collapsedWidth} = this.context;
    if (this.getInlineCollapsed() &&
      (collapsedWidth === 0 || collapsedWidth === '0' || collapsedWidth === '0px')) {
      return null;
    }
    return <RcMenu {...props} {...menuProps}/>;
  }
}

Menu.Divider = Divider;
Menu.Item = Item;
Menu.SubMenu = SubMenu;
Menu.ItemGroup = ItemGroup;
Menu.propTypes = {
  /**
   *
   */
  prefixCls: PropTypes.string,
  /**
   *
   */
  className: PropTypes.string,
  /**
   *
   */
  theme: PropTypes.oneOf(['light', 'dark'])
};
Menu.defaultProps = {
  prefixCls: menuPrefixCls,
  className: '',
  theme: 'light',
};
Menu.childContextTypes = {
  inlineCollapsed: PropTypes.bool,
  rMMenuTheme: PropTypes.string,
};
Menu.contextTypes = {
  siderCollapsed: PropTypes.bool,
  collapsedWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export {
  SubMenu, Item, ItemGroup
}
export default withStyles(styles, { name: 'RMMenu' })(Menu);
//前缀

