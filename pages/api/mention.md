---
filename: /packages/react-material/src/Mention/Mention.js
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# Mention



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name required">inputChangeCb *</span> | <span class="prop-type">func | <span class="prop-default">function() {  console.log('need cb function');}</span> | 输入变化时用来从父组件获取显示的选项 |
| <span class="prop-name required">onChange *</span> | <span class="prop-type">func | <span class="prop-default">function() {  console.log('need cb function');}</span> | 输入变化时用来传递给父组件当前输入值 |
| <span class="prop-name">pageConfig</span> | <span class="prop-type">object | <span class="prop-default">{  currentPage: 1,  pageSize: 5,  total: 0,}</span> | 分页的参数 |
| <span class="prop-name">placeHold</span> | <span class="prop-type">string | <span class="prop-default">'please input something'</span> | 提示值 |
| <span class="prop-name required">onSelect *</span> | <span class="prop-type">func | <span class="prop-default">function() {  console.log('need cb function');}</span> | 当选中某个选项时传递给父组件 |
| <span class="prop-name">value</span> | <span class="prop-type">string | <span class="prop-default">''</span> | 默认值 |
| <span class="prop-name">disabled</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | 是否禁用 |
| <span class="prop-name">triggerOptions</span> | <span class="prop-type">union:&nbsp;string&nbsp;&#124;<br>&nbsp;array<br> | <span class="prop-default">['@']</span> | 用于设置触发符号 |
| <span class="prop-name">dataSource</span> | <span class="prop-type">union:&nbsp;object&nbsp;&#124;<br>&nbsp;array<br> |  | 用于设置可选项目 |
| <span class="prop-name">showError</span> | <span class="prop-type">bool |  | 外部传入数据是否出错 |
| <span class="prop-name">selected</span> | <span class="prop-type">array | <span class="prop-default">[]</span> | 初始的选中值 |
| <span class="prop-name">readOnly</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | 是否只读 |

Any other properties supplied will be [spread to the root element](/guides/api#spread).

## Demos

- [Mention](/demos/mention)

