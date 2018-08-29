---
filename: /packages/react-material/src/Tree/Tree.js
title: Tree API
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# Tree

<p class="description">The API documentation of the Tree React component.</p>



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">autoExpandParent</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | 是否自动展开父节点 |
| <span class="prop-name">checkable</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | 节点前添加 Checkbox 复选框 |
| <span class="prop-name">checkedKeys</span> | <span class="prop-type">union:&nbsp;arrayOf&nbsp;&#124;<br>&nbsp;{ checked?: arrayOf, halfChecked?: arrayOf }<br> |   | （受控）选中复选框的树节点 （注意：父子节点有关联，如果传入父节点key，则子节点自动选中；相应当子节点key都传入，父节点也自动选中。当设置checkable和checkStrictly，它是一个有checked和halfChecked属性的对象，并且父子节点的选中与否不再关联 |
| <span class="prop-name">checkStrictly</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | checkable状态下节点选择完全受控（父子节点选中状态不再关联） |
| <span class="prop-name">defaultCheckedKeys</span> | <span class="prop-type">arrayOf | <span class="prop-default">[]</span> | 默认选中复选框的树节点 |
| <span class="prop-name">defaultExpandAll</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | 默认展开所有树节点 |
| <span class="prop-name">defaultExpandedKeys</span> | <span class="prop-type">arrayOf | <span class="prop-default">[]</span> | 默认展开指定的树节点 |
| <span class="prop-name">defaultExpandParent</span> | <span class="prop-type">bool | <span class="prop-default">true</span> | 默认展开父节点 |
| <span class="prop-name">defaultSelectedKeys</span> | <span class="prop-type">arrayOf | <span class="prop-default">[]</span> | 默认选中的树节点 |
| <span class="prop-name">disabled</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | 将树禁用 |
| <span class="prop-name">draggable</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | 设置节点可拖拽（IE>8） |
| <span class="prop-name">expandedKeys</span> | <span class="prop-type">arrayOf |   | （受控）展开指定的树节点 |
| <span class="prop-name">multiple</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | 支持点选多个节点（节点本身） |
| <span class="prop-name">selectedKeys</span> | <span class="prop-type">arrayOf |   | （受控）设置选中的树节点 |
| <span class="prop-name">showIcon</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | 是否展示 TreeNode title 前的图标，没有默认样式，如设置为 true，需要自行定义图标相关样式 |
| <span class="prop-name">showLine</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | 是否展示连接线 |
| <span class="prop-name">onCheck</span> | <span class="prop-type">(checkedKeys, e) => null |   | 点击复选框触发 |
| <span class="prop-name">onDragEnter</span> | <span class="prop-type">options => null |   | dragenter 触发时调用 |
| <span class="prop-name">onDragLeave</span> | <span class="prop-type">options => null |   | dragleave 触发时调用 |
| <span class="prop-name">onDragOver</span> | <span class="prop-type">options => null |   | dragover 触发时调用 |
| <span class="prop-name">onDragStart</span> | <span class="prop-type">options => null |   | 开始拖拽时调用 |
| <span class="prop-name">onDrop</span> | <span class="prop-type">options => null |   | drop 触发时调用 |
| <span class="prop-name">onExpand</span> | <span class="prop-type">(expandedKeys, info) => null |   | 展开/收起节点时触发 |
| <span class="prop-name">onSelect</span> | <span class="prop-type">(selectedKeys, e) => null |   | 点击树节点触发 |
| <span class="prop-name">onRightClick</span> | <span class="prop-type">options => null |   | 响应右键点击 |

Any other properties supplied will be spread to the root element (native element).

## Demos

- [Tree](/demos/tree)

