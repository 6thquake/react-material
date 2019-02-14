---
filename: /packages/react-material/src/Upload/Upload.js
title: Upload API
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# Upload

<p class="description">The API documentation of the Upload React component.</p>



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">acceptType</span> | <span class="prop-type">string | <span class="prop-default">'*/*'</span> | 上传方式,'manual','basic','img','drag'可选 |
| <span class="prop-name">beforeDragMention</span> | <span class="prop-type">string | <span class="prop-default">''</span> | 接受上传的文件类型 |
| <span class="prop-name">disabled</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | 点击status button 触发的函数，返回一个promise实例 |
| <span class="prop-name">files</span> | <span class="prop-type">array | <span class="prop-default">[]</span> | 点击上传触发的函数 |
| <span class="prop-name">label</span> | <span class="prop-type">string | <span class="prop-default">'upload'</span> | 点击删除某个文件时触发的函数 |
| <span class="prop-name">multiple</span> | <span class="prop-type">bool | <span class="prop-default">true</span> | 可选参数, 是否允许同时上传多个文件 |
| <span class="prop-name">onChange</span> | <span class="prop-type">func | <span class="prop-default">files => {}</span> | 可选参数, 是否禁用 |
| <span class="prop-name">onDelete</span> | <span class="prop-type">func | <span class="prop-default">file => {}</span> | 可选参数, 拖拽上传前的文字提示 |
| <span class="prop-name">onDragMention</span> | <span class="prop-type">string | <span class="prop-default">''</span> | 可选参数, 拖拽文件至可拖拽区域上方时的文字提示 |
| <span class="prop-name required">type *</span> | <span class="prop-type">enum:&nbsp;'manual'&nbsp;&#124;<br>&nbsp;'basic'&nbsp;&#124;<br>&nbsp;'img'&nbsp;&#124;<br>&nbsp;'drag'<br> |   | 可选参数, 组件包含的所有文件 |
| <span class="prop-name">upload</span> | <span class="prop-type">func | <span class="prop-default">files => {}</span> | 按钮描述文字 |

Any other properties supplied will be spread to the root element (native element).

## Demos

- [Upload](/demos/upload)

