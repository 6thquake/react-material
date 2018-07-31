import React from 'react';
import PropTypes from 'prop-types';
import { ItemGroup } from 'rc-menu';

class NavItemGroup extends React.Component {
  render() {
    return <ItemGroup {...this.props} />;
  }
}

NavItemGroup.propTypes = {
  /**
   * 分组的菜单项
   */
  children: PropTypes.func,
  /**
   * 分组标题
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default NavItemGroup;
