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
    prefixCls: 'rm-tree',
    checkable: false,
    showIcon: false,
    // openAnimation: animation
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
// Tree.propTypes = {
//   showLine: PropTypes.boolean,
//   className: PropTypes.string,
//   /** 是否支持多选 */
//   multiple: PropTypes.boolean,
//   /** 是否自动展开父节点 */
//   autoExpandParent: PropTypes.boolean,
//   /** checkable状态下节点选择完全受控（父子节点选中状态不再关联）*/
//   checkStrictly: PropTypes.boolean,
//   /** 是否支持选中 */
//   checkable: PropTypes.boolean,
//   /** 默认展开所有树节点 */
//   defaultExpandAll: PropTypes.boolean,
//   /** 默认展开指定的树节点 */
//   defaultExpandedKeys: PropTypes.arrayOf(PropTypes.string),
//   /** （受控）展开指定的树节点 */
//   expandedKeys: PropTypes.arrayOf(PropTypes.string),
//   /** （受控）选中复选框的树节点 */
// //todo
// // checkedKeys?: string[] | { checked: string[]; halfChecked: string[] };
//   /** 默认选中复选框的树节点 */
//   defaultCheckedKeys: PropTypes.arrayOf(PropTypes.string),
//   /** （受控）设置选中的树节点 */
//   selectedKeys: PropTypes.arrayOf(PropTypes.string),
//   /** 默认选中的树节点 */
//   defaultSelectedKeys: PropTypes.arrayOf(PropTypes.string),
//   /** 展开/收起节点时触发 */
//   onExpand: (expandedKeys, info) => null,
//   /** 点击复选框触发 */
//   onCheck: (checkedKeys, e) => null,
//   /** 点击树节点触发 */
//   onSelect: (selectedKeys, e) => null,
//   /** filter some AntTreeNodes as you need. it should return true */
//   filterAntTreeNode: (node) => null,
//   /** 异步加载数据 */
//   loadData: (node) => null,
//   /** 响应右键点击 */
//   onRightClick: (options) => null,
//   /** 设置节点可拖拽（IE>8）*/
//   draggable: PropTypes.boolean,
//   /** 开始拖拽时调用 */
//   onDragStart: (options) => null,
//   /** dragenter 触发时调用 */
//   onDragEnter: (options) => null,
//   /** dragover 触发时调用 */
//   onDragOver: (options) => null,
//   /** dragleave 触发时调用 */
//   onDragLeave: (options) => null,
//   /** drop 触发时调用 */
//   onDrop: (options) => null,
//   style: PropTypes.string,
//   showIcon: PropTypes.boolean,
//   prefixCls: PropTypes.string,
//   filterTreeNode: (node) => false
// };
// console.log(styles)
// export default withStyles(styles)(Tree);

export { default } from './Tree';
export { default as TreeNode } from './TreeNode';
