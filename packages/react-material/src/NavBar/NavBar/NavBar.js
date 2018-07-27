import React from 'react';
import PropTypes from 'prop-types';
import { Divider,ItemGroup } from 'rc-menu';
import SubNavBar from './SubNavBar';
import NavItem from './NavItem';
import OriginNavBar from './OriginNavBar';
import EasyNavBar from './EasyNavBar';

class NavBar extends React.Component{
  render(){
    const {list} = this.props;
    if(list&&list.length!=0){
      return <EasyNavBar {...this.props}/>;
    }else {
      return <OriginNavBar {...this.props}/>;
    }
  }
}

NavBar.propTypes = {
  /**
   * 初始展开的 SubMenu 菜单项 key 数组
   */
  defaultOpenKeys: PropTypes.arrayOf(PropTypes.string),
  /**
   * 初始选中的菜单项 key 数组
   */
  defaultSelectedKeys: PropTypes.arrayOf(PropTypes.string),
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * inline 时菜单是否收起状态
   */
  inlineCollapsed: PropTypes.bool,
  /**
   * list里的每一项数据的key值
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
   * menu展示的数据，如果直接传入list，不需要自己写children
   */
  list: PropTypes.array,
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
NavBar.Divider = Divider;
NavBar.Item = NavItem;
NavBar.SubNavBar = SubNavBar;
NavBar.ItemGroup = ItemGroup;

export { SubNavBar, NavItem, ItemGroup };
export default NavBar ;


