---
filename: /packages/react-material/src/Table/AwesomeTable/AwesomeTable.js
title: AwesomeTable API
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# AwesomeTable

<p class="description">The API documentation of the AwesomeTable React component.</p>



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">classes</span> | <span class="prop-type">object |   | Override or extend the styles applied to the component. See [CSS API](#css-api) below for more details. |
| <span class="prop-name">columns</span> | <span class="prop-type">{ title?: node, width?: union:&nbsp;string&nbsp;&#124;<br>&nbsp;number<br>, dataIndex?: union:&nbsp;string&nbsp;&#124;<br>&nbsp;number<br>, key: union:&nbsp;string&nbsp;&#124;<br>&nbsp;number<br>, fixed?: enum:&nbsp;'left'&nbsp;&#124;<br>&nbsp;'right'<br>, sortable?: bool, order?: string, resizable?: bool, render?: func } |   | Columns of table |
| <span class="prop-name">data</span> | <span class="prop-type">array | <span class="prop-default">[]</span> | Data record array to be displayed |
| <span class="prop-name">TablePaginationProps</span> | <span class="prop-type">object | <span class="prop-default">{  rowsPerPage: 10,  page: 0,}</span> | Properties applied to the TablePagination Component |
| <span class="prop-name">exportProps</span> | <span class="prop-type">{ type?: enum:&nbsp;'csv'<br> } |   | export config |
| <span class="prop-name">SearchProps</span> | <span class="prop-type">object | <span class="prop-default">{  isDark: true,  floatRight: true,}</span> | Properties applied to the Search Component |
| <span class="prop-name">paginatable</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | if true, it will be a paginatable table |
| <span class="prop-name">searchable</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | if true, it will be a searchable table |
| <span class="prop-name">resizable</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | if true, all the columns is resizable |
| <span class="prop-name">dragable</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | if true, all the columns is dragable |
| <span class="prop-name">onColDrag</span> | <span class="prop-type">func |   | Callback fired when you drag the column |
| <span class="prop-name">onRowClick</span> | <span class="prop-type">func |   | Callback fired when you click the table row |
| <span class="prop-name">sync</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | if sync is true, pagination and search will be automatical. you needn't to do these things by yourself |
| <span class="prop-name">title</span> | <span class="prop-type">node |   | The title of table |
| <span class="prop-name">noData</span> | <span class="prop-type">element | <span class="prop-default">&lt;NoData /></span> | render when data length is 0 |
<<<<<<< HEAD
| <span class="prop-name">OrderProps</span> | <span class="prop-type">{ onChangeOrder?: func, multiple?: bool } | <span class="prop-default">{  multiple: false,  onChangeOrder: (...arg) => console.log(arg),}</span> | Props for Order |
| <span class="prop-name">total</span> | <span class="prop-type">element |   | total |
=======
| <span class="prop-name">OrderProps</span> | <span class="prop-type">{onChangeOrder?: func, multiple?: bool} | <span class="prop-default">{  multiple: false,  onChangeOrder: (...arg) => console.log(arg),}</span> | Properties applied to the Order |
| <span class="prop-name">total</span> | <span class="prop-type">element |  | total |
| <span class="prop-name">TableCellProps</span> | <span class="prop-type">object |  | Properties applied to the TableCell element. |
| <span class="prop-name">TableRowProps</span> | <span class="prop-type">object |  | Properties applied to the TableRow element. |
>>>>>>> origin/feature/table-update

Any other properties supplied will be spread to the root element (native element).

## Demos

- [Tables](/demos/tables)

