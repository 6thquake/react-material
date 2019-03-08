import * as React from 'react';
import { TreeNode } from 'rc-tree';
import PropTypes from 'prop-types';

class RMTreeNode extends React.Component {
  render() {
    <TreeNode {...this.props} />;
  }
}

RMTreeNode.propTypes = {
  /**
   * 禁掉 checkbox
   */
  disableCheckbox: PropTypes.bool,
  /**
   * 禁掉响应
   */
  disabled: PropTypes.bool,
  /**
   * 自定义图标。可接收组件，props 为当前节点 props
   */
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  /**
   * 被树的 (default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys 属性所用。
   * 注意：整个树范围内的所有节点的 key 值不能重复！
   */
  key: PropTypes.string,
  /**
   * 设置节点是否可被选中
   */
  selectable: PropTypes.bool,
  /**
   * 标题
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};
export default RMTreeNode;
