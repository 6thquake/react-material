---
filename: /packages/react-material/src/Select/AsyncSelect.js
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# AsyncSelect



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name required">onOpen *</span> | <span class="prop-type">func |  | callback to parent component when select open |
| <span class="prop-name required">onChange *</span> | <span class="prop-type">func |  | callback to parent component when select option |
| <span class="prop-name">value</span> | <span class="prop-type">union:&nbsp;string&nbsp;&#124;<br>&nbsp;number&nbsp;&#124;<br>&nbsp;object&nbsp;&#124;<br>&nbsp;arrayOf<br> |  | select value, |
| <span class="prop-name">options</span> | <span class="prop-type">arrayOf |  | select option, |
| <span class="prop-name">paginationProps</span> | <span class="prop-type">object | <span class="prop-default">{ page: 0, rowsPerPage: 5, count: 0 }</span> | pagination component config |
| <span class="prop-name">placeholder</span> | <span class="prop-type">string | <span class="prop-default">'please input something'</span> | placeholder of filter box |
| <span class="prop-name">multiple</span> | <span class="prop-type">bool |  | decided multiple select |
| <span class="prop-name">onChangePage</span> | <span class="prop-type">func |  | callback to parent component when current page change |
| <span class="prop-name">onChangeFilter</span> | <span class="prop-type">func |  | callback to parent component when  filter change |
| <span class="prop-name">disabled</span> | <span class="prop-type">bool |  | decided select is disabled |
| <span class="prop-name">readonly</span> | <span class="prop-type">bool |  | decided select is readonly |
| <span class="prop-name">filter</span> | <span class="prop-type">PropTypes.fun |  | filter function |
| <span class="prop-name">mapper</span> | <span class="prop-type">{label?: union:&nbsp;string&nbsp;&#124;<br>&nbsp;func<br>, value?: union:&nbsp;string&nbsp;&#124;<br>&nbsp;func<br>} | <span class="prop-default">{ label: 'label', value: 'value' }</span> | option item label and value,when assignment option by options |
| <span class="prop-name">comparison</span> | <span class="prop-type">func | <span class="prop-default">(select, option) => {  return select === option;}</span> | compare the  value of selected with option value,return Boolen,对于简单值比较可以不传. |
| <span class="prop-name">renderValue</span> | <span class="prop-type">func |  | Render the selected value,Signature: `function(value: any) => ReactElement` value: The value provided to the component.. |

Any other properties supplied will be [spread to the root element](/guides/api#spread).

## Demos

- [Selects](/demos/selects)

