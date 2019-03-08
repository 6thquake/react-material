import * as React from 'react';
import RcTree, { TreeNode } from 'rc-tree';
import PropTypes from 'prop-types';
import { withStyles } from '../styles';
import styles from './styles';
import cssAnimation from 'css-animation';

const STYLE = `
.collapse {
  overflow: hidden;
  display: block;
}

.collapse-active {
  transition: height 0.2s ease-out;
}
`;

function animate(node, show, done) {
  let height = node.offsetHeight;
  return cssAnimation(node, 'collapse', {
    start() {
      if (!show) {
        node.style.height = `${node.offsetHeight}px`;
      } else {
        height = node.offsetHeight;
        node.style.height = 0;
      }
    },
    active() {
      node.style.height = `${show ? height : 0}px`;
    },
    end() {
      node.style.height = '';
      done();
    },
  });
}

const animation = {
  enter(node, done) {
    return animate(node, true, done);
  },
  leave(node, done) {
    return animate(node, false, done);
  },
  appear(node, done) {
    return animate(node, true, done);
  },
};

class Tree extends React.Component {
  static TreeNode = TreeNode;

  static defaultProps = {
    showLine: false,
    showIcon: false,
    multiple: false,
    checkable: false,
    disabled: false,
    checkStrictly: false,
    draggable: false,
    defaultExpandParent: true,
    autoExpandParent: false,
    defaultExpandAll: false,
    defaultExpandedKeys: [],
    defaultCheckedKeys: [],
    defaultSelectedKeys: [],
    prefixCls: 'rm-tree',
  };

  render() {
    const props = this.props;
    const { prefixCls, className } = props;
    const checkable = props.checkable;
    return (
      <RcTree
        {...props}
        className={className}
        checkable={checkable ? <span className={`${prefixCls}-checkbox-inner`} /> : checkable}
      >
        {/* <style dangerouslySetInnerHTML={{ __html: STYLE }}/> */}
        {this.props.children}
      </RcTree>
    );
  }
}
Tree.propTypes = {
  /**
   * @ignore
   */
  autoExpandParent: PropTypes.bool,
  /**
   * 是否自动展开父节点
   */
  checkable: PropTypes.bool,
  /**
   * 节点前添加 Checkbox 复选框
   */
  checkedKeys: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.shape({
      checked: PropTypes.arrayOf(PropTypes.string),
      halfChecked: PropTypes.arrayOf(PropTypes.string),
    }),
  ]),
  /**
   * （受控）选中复选框的树节点
   * （注意：父子节点有关联，如果传入父节点key，则子节点自动选中；相应当子节点key都传入，父节点也自动选中。当设置checkable和checkStrictly，它是一个有checked和halfChecked属性的对象，并且父子节点的选中与否不再关联
   */
  checkStrictly: PropTypes.bool,
  /**
   * checkable状态下节点选择完全受控（父子节点选中状态不再关联）
   */
  defaultCheckedKeys: PropTypes.arrayOf(PropTypes.string),
  /**
   * 默认选中复选框的树节点
   */
  defaultExpandAll: PropTypes.bool,
  /**
   * 默认展开所有树节点
   */
  defaultExpandedKeys: PropTypes.arrayOf(PropTypes.string),
  /**
   * 默认展开指定的树节点
   */
  defaultExpandParent: PropTypes.bool,
  /**
   * 默认展开父节点
   */
  defaultSelectedKeys: PropTypes.arrayOf(PropTypes.string),
  /**
   * 默认选中的树节点
   */
  disabled: PropTypes.bool,
  /**
   * 将树禁用
   */
  draggable: PropTypes.bool,
  /**
   * 设置节点可拖拽（IE>8）
   */
  expandedKeys: PropTypes.arrayOf(PropTypes.string),
  /**
   * （受控）展开指定的树节点
   */
  multiple: PropTypes.bool,
  /**
   * 支持点选多个节点（节点本身）
   */
  onCheck: (checkedKeys, e) => null,
  /**
   * （受控）设置选中的树节点
   */
  onDragEnter: options => null,
  /**
   * 是否展示 TreeNode title 前的图标，没有默认样式，如设置为 true，需要自行定义图标相关样式
   */
  onDragLeave: options => null,
  /**
   * 是否展示连接线
   */
  onDragOver: options => null,
  /**
   * 点击复选框触发
   */
  onDragStart: options => null,
  /**
   * dragenter 触发时调用
   */
  onDrop: options => null,
  /**
   * dragleave 触发时调用
   */
  onExpand: (expandedKeys, info) => null,
  /**
   * dragover 触发时调用
   */
  onRightClick: options => null,
  /**
   * 开始拖拽时调用
   */
  onSelect: (selectedKeys, e) => null,
  /** drop 触发时调用 */
  prefixCls: PropTypes.string,
  /**
   * 展开/收起节点时触发
   */
  selectedKeys: PropTypes.arrayOf(PropTypes.string),
  /**
   * 点击树节点触发
   */
  showIcon: PropTypes.bool,
  /**
   * 响应右键点击
   */
  showLine: PropTypes.bool,
};
export default withStyles(styles, { name: 'RMTree' })(Tree);
