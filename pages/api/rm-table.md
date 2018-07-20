---
filename: /packages/react-material/src/Table/RmTable/RmTable.js
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# RmTable



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">classes</span> | <span class="prop-type">object |  | Override or extend the styles applied to the component. See [CSS API](#css-api) below for more details. |
| <span class="prop-name required">columns *</span> | <span class="prop-type">array |  | Columns of table |
| <span class="prop-name required">data *</span> | <span class="prop-type">array |  | Data record array to be displayed |
| <span class="prop-name">paginationProps</span> | <span class="prop-type">object | <span class="prop-default">{  rowsPerPage: 10,  page: 0,}</span> | Properties applied to the TablePagination Component |
| <span class="prop-name">exportProps</span> | <span class="prop-type">{type?: enum:&nbsp;'csv'<br>} |  | export config |
| <span class="prop-name">searchProps</span> | <span class="prop-type">object | <span class="prop-default">{  isDark: true,}</span> | Properties applied to the Search Component |
| <span class="prop-name">paginatable</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | if true, it will be a paginatable table |
| <span class="prop-name">searchable</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | if true, it will be a searchable table |
| <span class="prop-name">resizable</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | if true, all the columns is resizable |
| <span class="prop-name">dragable</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | if true, all the columns is dragable |
| <span class="prop-name">width</span> | <span class="prop-type">union:&nbsp;number&nbsp;&#124;<br>&nbsp;number<br> | <span class="prop-default">'auto'</span> | table width |
| <span class="prop-name">height</span> | <span class="prop-type">union:&nbsp;number&nbsp;&#124;<br>&nbsp;number<br> | <span class="prop-default">'auto'</span> | table height |
| <span class="prop-name">onColDrag</span> | <span class="prop-type">func |  | Callback fired when you drag the column |

Any other properties supplied will be [spread to the root element](/guides/api#spread).

## Demos

- [Tables](/demos/tables)

