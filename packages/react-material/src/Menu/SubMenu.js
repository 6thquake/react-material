import * as React from 'react';
import PropTypes from 'prop-types';
import {SubMenu as RcSubMenu} from 'rc-menu';
import classNames from 'classnames';
import {withStyles, createMuiTheme} from '../styles';
const styles = theme => ({});

class SubMenu extends React.Component{
  static contextTypes = {
    rMMenuTheme: PropTypes.string,
  };
  static subMenu;
  onKeyDown = (e) => {
    this.subMenu.onKeyDown(e);
  }
  saveSubMenu = (subMenu) => {
    this.subMenu = subMenu;
  }
  render() {
    const { rootPrefixCls, className } = this.props;
    const theme = this.context.rMMenuTheme;
    return (
      <RcSubMenu
        {...this.props}
        ref={this.saveSubMenu}
        popupClassName={classNames(`${rootPrefixCls}-${theme}`, className)}
      />
    );
  }
}
SubMenu.isSubMenu = true;

export default withStyles(styles,{ withTheme: true })(SubMenu);

