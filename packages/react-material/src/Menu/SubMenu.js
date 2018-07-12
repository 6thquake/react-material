import * as React from 'react';
import PropTypes from 'prop-types';
import { SubMenu as RcSubMenu } from 'rc-menu';
import classNames from 'classnames';
import { withStyles, createMuiTheme } from '../styles';
const styles = theme => ({});

class SubMenu extends React.Component {
  static contextTypes = {
    rMMenuTheme: PropTypes.string,
  };
  static subMenu;
  onKeyDown = e => {
    this.subMenu.onKeyDown(e);
  };
  saveSubMenu = subMenu => {
    this.subMenu = subMenu;
  };
  render() {
    const { rootPrefixCls, className } = this.props;
    const { classes, ...props } = this.props;
    const theme = this.context.rMMenuTheme;
    return (
      <RcSubMenu
        {...props}
        ref={this.saveSubMenu}
        popupClassName={classNames(`${rootPrefixCls}-${theme}`, className)}
      />
    );
  }
}
SubMenu.propTypes = {
  /**
   * 是否禁用
   */
  disabled: PropTypes.bool,
  /**
   * 唯一标志
   */
  key: PropTypes.string,
  /**
   * 子菜单项值
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * 点击子菜单标题，参数 ({ key, domEvent })
   */
  onTitleClick: PropTypes.func,
};
SubMenu.defaultProps = {
  disabled: false,
};
SubMenu.isSubMenu = true;

export default withStyles(styles, { name: 'RMSubMenu' })(SubMenu);
