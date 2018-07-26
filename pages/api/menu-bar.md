---
filename: /packages/react-material/src/MenuBar/MenuBar.js
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# MenuBar



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">defaultOpenKeys</span> | <span class="prop-type">arrayOf |  | 初始展开的 SubMenu 菜单项 key 数组 |
| <span class="prop-name">defaultSelectedKeys</span> | <span class="prop-type">arrayOf |  | 初始选中的菜单项 key 数组 |
| <span class="prop-name">inlineCollapsed</span> | <span class="prop-type">bool |  | inline 时菜单是否收起状态 |
| <span class="prop-name">mode</span> | <span class="prop-type">enum:&nbsp;'vertical'&nbsp;&#124;<br>&nbsp;'horizontal'&nbsp;&#124;<br>&nbsp;'inline'<br> |  | 菜单类型，现在支持垂直、水平、和内嵌模式三种 |
| <span class="prop-name">multiple</span> | <span class="prop-type">bool |  | 是否允许多选 |
| <span class="prop-name">onClick</span> | <span class="prop-type">func |  | 点击 MenuItem 调用此函数 ，参数 ({item, key, keyPath}) |
| <span class="prop-name">onDeselect</span> | <span class="prop-type">func |  | 取消选中时调用，仅在 multiple 生效，参数 ({item, key, selectedKeys}) |
| <span class="prop-name">onOpenChange</span> | <span class="prop-type">func |  | SubMenu 展开/关闭的回调，参数 (openKeys) |
| <span class="prop-name">onSelect</span> | <span class="prop-type">func |  | 被选中时调用，参数 ({item, key, selectedKeys}) |
| <span class="prop-name">openKeys</span> | <span class="prop-type">arrayOf |  | 当前展开的 SubMenu 菜单项 key 数组 |
| <span class="prop-name">selectable</span> | <span class="prop-type">bool |  | 是否允许选中 |
| <span class="prop-name">selectedKeys</span> | <span class="prop-type">arrayOf |  | 当前选中的菜单项 key 数组 |
| <span class="prop-name">theme</span> | <span class="prop-type">enum:&nbsp;'light'&nbsp;&#124;<br>&nbsp;'dark'<br> | <span class="prop-default">'light'</span> | 主题颜色 |

Any other properties supplied will be [spread to the root element](/guides/api#spread).

## Demos

- [Menu Bar](/demos/menu-bar)

