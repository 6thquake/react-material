---
filename: /packages/react-material/src/Progress/Progress.js
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# Progress



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">error</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If true,progress wrong. |
| <span class="prop-name">isPromise</span> | <span class="prop-type">bool |  | If true,simulation progress. |
| <span class="prop-name">isFinish</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If true,progress finish when isPromise is true. |
| <span class="prop-name">estimatedTime</span> | <span class="prop-type">PropTypes.num | <span class="prop-default">2</span> | Estimated time of the progress,when isPromise is true,the units is seconds. |
| <span class="prop-name">baseProgress</span> | <span class="prop-type">bool |  | If true,it is a normal progress without percentage. |
| <span class="prop-name">color</span> | <span class="prop-type">enum:&nbsp;'primary'&nbsp;&#124;<br>&nbsp;'secondary'<br> |  | The color of the component. It supports those theme colors that make sense for this component. |
| <span class="prop-name">valueBuffer</span> | <span class="prop-type">PropTypes.num | <span class="prop-default">10</span> | The value for the buffer variant. Value between 0 and 100. |
| <span class="prop-name">variant</span> | <span class="prop-type">string |  | The variant of progress indicator. Use indeterminate or query when there is no progress value. |
| <span class="prop-name">value</span> | <span class="prop-type">PropTypes.num | <span class="prop-default">0</span> | Progress percentage,only when isPromise is false. Value between 0 and 100. |
| <span class="prop-name">showPercentage</span> | <span class="prop-type">bool |  | If true,progress with percentage. |

Any other properties supplied will be [spread to the root element](/guides/api#spread).

## Demos

- [Progress](/demos/progress)

