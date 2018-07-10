---
filename: /packages/react-material/src/Progress/Progress.js
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# Progress



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">completed</span> | <span class="prop-type">PropTypes.num | <span class="prop-default">0</span> | 进度百分比,当isPromise为false时props取 |
| <span class="prop-name">error</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | 进度是否出错 |
| <span class="prop-name">isPromise</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | 是否是根据promise模拟进度 |
| <span class="prop-name">isFinish</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | 当isPromise为true时，父组件传回完成，则progress完成 |
| <span class="prop-name">estimatedTime</span> | <span class="prop-type">PropTypes.num | <span class="prop-default">2</span> | 当isPromise为true时，预估几秒完成，设定合适的进度速度,单位为秒 |
| <span class="prop-name">baseProgress</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | 当baseProgress为true时，为普通的progress，不带百分比。 |
| <span class="prop-name">color</span> | <span class="prop-type">enum:&nbsp;'primary'&nbsp;&#124;<br>&nbsp;'secondary'<br> |  | The color of the component. It supports those theme colors that make sense for this component. |
| <span class="prop-name">valueBuffer</span> | <span class="prop-type">PropTypes.num | <span class="prop-default">10</span> | The value for the buffer variant. Value between 0 and 100. |
| <span class="prop-name">variant</span> | <span class="prop-type">string |  | The variant of progress indicator. Use indeterminate or query when there is no progress value. |
| <span class="prop-name">value</span> | <span class="prop-type">PropTypes.num |  | The value of the progress indicator for the determinate and buffer variants. Value between 0 and 100. |

Any other properties supplied will be [spread to the root element](/guides/api#spread).

## Demos

- [Progress](/demos/progress)

