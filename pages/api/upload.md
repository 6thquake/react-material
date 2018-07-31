---
filename: /packages/react-material/src/Upload/Upload.js
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# Upload



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name required">type *</span> | <span class="prop-type">string |  | 上传方式,'manual','basic','img','drag'可选 |
| <span class="prop-name">acceptType</span> | <span class="prop-type">string | <span class="prop-default">'*'</span> | 接受上传的文件类型 |
| <span class="prop-name">actionFunc</span> | <span class="prop-type">func |  | 点击status button 触发的函数，返回一个promise实例 |
| <span class="prop-name">uploadFunc</span> | <span class="prop-type">func |  | 点击上传触发的函数 |
| <span class="prop-name">deleteFile</span> | <span class="prop-type">func |  | 点击删除某个文件时触发的函数 |
| <span class="prop-name">multiple</span> | <span class="prop-type">bool | <span class="prop-default">true</span> | 可选参数, 是否允许同时上传多个文件 |
| <span class="prop-name">disabled</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | 可选参数, 是否禁用 |
| <span class="prop-name">beforeDragMention</span> | <span class="prop-type">string | <span class="prop-default">''</span> | 可选参数, 拖拽上传前的文字提示 |
| <span class="prop-name">onDragMention</span> | <span class="prop-type">string | <span class="prop-default">''</span> | 可选参数, 拖拽文件至可拖拽区域上方时的文字提示 |

Any other properties supplied will be [spread to the root element](/guides/api#spread).

## Demos

- [Upload](/demos/upload)

