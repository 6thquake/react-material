/**
 * @ignore - do not document.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../../styles';
import { findDOMNode } from 'react-dom';
import RcMenu, { Divider } from 'rc-menu';
import classNames from 'classnames';
import SubNavBar from './SubNavBar';
import NavItem from './NavItem';
import NavItemGroup from './NavItemGroup';
import styles from './styles';

const menuPrefixCls = 'rm-menu';
const effect = {
  animationDuration: 0.3,
  animationFillMode: 'both',
  transformOrigin: '0 0',
};

function leave(node, done) {
  done();
}

class OriginNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.inlineOpenKeys = [];
    this.handleClick = e => {
      this.handleOpenChange([]);
      const { onClick } = this.props;
      if (onClick) {
        onClick(e);
      }
    };
    this.handleOpenChange = openKeys => {
      this.setOpenKeys(openKeys);
      const { onOpenChange } = this.props;
      if (onOpenChange) {
        onOpenChange(openKeys);
      }
    };
    let openKeys;
    if ('defaultOpenKeys' in props) {
      openKeys = props.defaultOpenKeys;
    } else if ('openKeys' in props) {
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
    const { prefixCls } = this.props;
    if (this.props.mode === 'inline' && nextProps.mode !== 'inline') {
      this.switchModeFromInline = true;
    }
    if ('openKeys' in nextProps) {
      this.setState({ openKeys: nextProps.openKeys });
      return;
    }
    if (
      (nextProps.inlineCollapsed && !this.props.inlineCollapsed) ||
      (nextContext.siderCollapsed && !this.context.siderCollapsed)
    ) {
      const menuNode = findDOMNode(this);
      this.switchModeFromInline =
        !!this.state.openKeys.length &&
        !!menuNode.querySelectorAll(`.${prefixCls}-submenu-open`).length;
      this.inlineOpenKeys = this.state.openKeys;
      this.setState({ openKeys: [] });
    }
    if (
      (!nextProps.inlineCollapsed && this.props.inlineCollapsed) ||
      (!nextContext.siderCollapsed && this.context.siderCollapsed)
    ) {
      this.setState({ openKeys: this.inlineOpenKeys });
      this.inlineOpenKeys = [];
    }
  }

  setOpenKeys(openKeys) {
    if (!('openKeys' in this.props)) {
      this.setState({ openKeys });
    }
  }

  getRealMenuMode() {
    const inlineCollapsed = this.getInlineCollapsed();
    if (this.switchModeFromInline && inlineCollapsed) {
      return 'inline';
    }
    const { mode } = this.props;
    return inlineCollapsed ? 'vertical' : mode;
  }

  getInlineCollapsed() {
    const { inlineCollapsed } = this.props;
    if (this.context.siderCollapsed !== undefined) {
      return this.context.siderCollapsed;
    }
    return inlineCollapsed;
  }

  getMenuOpenAnimation(menuMode) {
    const { openAnimation, openTransitionName } = this.props;
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
          } else {
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
    const { prefixCls, className, theme } = this.props;
    const { classes, ...props } = this.props;
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
    } else {
      menuProps.openAnimation = menuOpenAnimation;
    }
    const { collapsedWidth } = this.context;
    if (
      this.getInlineCollapsed() &&
      (collapsedWidth === 0 || collapsedWidth === '0' || collapsedWidth === '0px')
    ) {
      return null;
    }
    return <RcMenu {...props} {...menuProps} />;
  }
}

OriginNavBar.Divider = Divider;
OriginNavBar.Item = NavItem;
OriginNavBar.SubMenu = SubNavBar;
OriginNavBar.ItemGroup = NavItemGroup;
OriginNavBar.propTypes = {
  /**
   * 初始展开的 SubMenu 菜单项 key 数组
   */
  className: PropTypes.string,
  /**
   * 初始选中的菜单项 key 数组
   */
  defaultOpenKeys: PropTypes.arrayOf(PropTypes.string),
  /**
   * @ignore
   */
  defaultSelectedKeys: PropTypes.arrayOf(PropTypes.string),
  /**
   * inline 时菜单是否收起状态
   */
  inlineCollapsed: PropTypes.bool,
  /**
   * 菜单类型，现在支持垂直、水平、和内嵌模式三种
   */
  mode: PropTypes.oneOf(['vertical', 'horizontal', 'inline']),
  /**
   * 是否允许多选
   */
  multiple: PropTypes.bool,
  /**
   * 点击 MenuItem 调用此函数 ，参数 ({item, key, keyPath})
   */
  onClick: PropTypes.func,
  /**
   * 取消选中时调用，仅在 multiple 生效，参数 ({item, key, selectedKeys})
   */
  onDeselect: PropTypes.func,
  /**
   * SubMenu 展开/关闭的回调，参数 (openKeys)
   */
  onOpenChange: PropTypes.func,
  /**
   * 被选中时调用，参数 ({item, key, selectedKeys})
   */
  onSelect: PropTypes.func,
  /**
   * 当前展开的 SubMenu 菜单项 key 数组
   */
  openKeys: PropTypes.arrayOf(PropTypes.string),
  /**
   * @ignore
   */
  prefixCls: PropTypes.string,
  /**
   * 是否允许选中
   */
  selectable: PropTypes.bool,
  /**
   * 当前选中的菜单项 key 数组
   */
  selectedKeys: PropTypes.arrayOf(PropTypes.string),
  /**
   * 主题颜色
   */
  theme: PropTypes.oneOf(['light', 'dark']),
};
OriginNavBar.defaultProps = {
  prefixCls: menuPrefixCls,
  className: '',
  theme: 'light',
};
OriginNavBar.childContextTypes = {
  inlineCollapsed: PropTypes.bool,
  rMMenuTheme: PropTypes.string,
};
OriginNavBar.contextTypes = {
  siderCollapsed: PropTypes.bool,
  collapsedWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export { SubNavBar, NavItem, NavItemGroup };

export default withStyles(styles, { name: 'RMOriginNavBar' })(OriginNavBar);
