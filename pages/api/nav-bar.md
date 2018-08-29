---
filename: /packages/react-material/src/NavBar/NavBar/NavBar.js
title: NavBar API
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# NavBar

<p class="description">The API documentation of the NavBar React component.</p>



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">defaultOpenKeys</span> | <span class="prop-type">arrayOf |   | 初始展开的 SubMenu 菜单项 key 数组 |
| <span class="prop-name">defaultSelectedKeys</span> | <span class="prop-type">arrayOf |   | 初始选中的菜单项 key 数组 |
| <span class="prop-name">inlineCollapsed</span> | <span class="prop-type">bool |   | inline 时菜单是否收起状态 |
| <span class="prop-name">itemKeysMap</span> | <span class="prop-type">{ name?: string, icon?: string, children?: string, beforeChildren?: string, before?: string, onClick?: string, onHandle?: string, style?: string, className?: string, open?: string, key?: string } |   | list里的每一项数据的key值 |
| <span class="prop-name">list</span> | <span class="prop-type">array |   | menu展示的数据，如果直接传入list，不需要自己写children |
| <span class="prop-name">mode</span> | <span class="prop-type">enum:&nbsp;'vertical'&nbsp;&#124;<br>&nbsp;'horizontal'&nbsp;&#124;<br>&nbsp;'inline'<br> |   | 菜单类型，现在支持垂直、水平、和内嵌模式三种 |
| <span class="prop-name">multiple</span> | <span class="prop-type">bool |   | 是否允许多选 |
| <span class="prop-name">onClick</span> | <span class="prop-type">func |   | 点击 MenuItem 调用此函数 ，参数 ({item, key, keyPath}) |
| <span class="prop-name">onDeselect</span> | <span class="prop-type">func |   | 取消选中时调用，仅在 multiple 生效，参数 ({item, key, selectedKeys}) |
| <span class="prop-name">onOpenChange</span> | <span class="prop-type">func |   | SubMenu 展开/关闭的回调，参数 (openKeys) |
| <span class="prop-name">onSelect</span> | <span class="prop-type">func |   | 被选中时调用，参数 ({item, key, selectedKeys}) |
| <span class="prop-name">openKeys</span> | <span class="prop-type">arrayOf |   | 当前展开的 SubMenu 菜单项 key 数组 |
| <span class="prop-name">selectable</span> | <span class="prop-type">bool |   | 是否允许选中 |
| <span class="prop-name">selectedKeys</span> | <span class="prop-type">arrayOf |   | 当前选中的菜单项 key 数组 |
| <span class="prop-name">theme</span> | <span class="prop-type">enum:&nbsp;'light'&nbsp;&#124;<br>&nbsp;'dark'<br> |   | 主题颜色 |

Any other properties supplied will be spread to the root element (native element).

## Demos

- [Nav Bar](/demos/nav-bar)

