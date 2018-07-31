---
filename: /packages/react-material/src/Pagination/Pagination.js
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# Pagination



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">backIconButtonProps</span> | <span class="prop-type">object |  | Properties applied to the back arrow `IconButton` component. |
| <span class="prop-name">classes</span> | <span class="prop-type">object |  | Override or extend the styles applied to the component. See [CSS API](#css-api) below for more details. |
| <span class="prop-name">nextIconButtonProps</span> | <span class="prop-type">object |  | Properties applied to the next arrow `IconButton` element. |
| <span class="prop-name">page</span> | <span class="prop-type">number | <span class="prop-default">0</span> | The zero-based index of the current page. |
| <span class="prop-name">rowsPerPage</span> | <span class="prop-type">number | <span class="prop-default">5</span> | This is page size of pagination |
| <span class="prop-name">labelDisplayedRows</span> | <span class="prop-type">func | <span class="prop-default">({ from, to, count }) => `${from}-${to} of ${count}`</span> | Customize the displayed rows label. |
| <span class="prop-name">count</span> | <span class="prop-type">number | <span class="prop-default">0</span> | This is total count of pagination |
| <span class="prop-name required">onChangePage *</span> | <span class="prop-type">func |  | This is call current page back to parent component |
| <span class="prop-name">onChangeRowsPerPage</span> | <span class="prop-type">func |  | Callback fired when the number of rows per page is changed. |
| <span class="prop-name">labelRowsPerPage</span> | <span class="prop-type">node | <span class="prop-default">'Rows per page:'</span> | Useful to customize the rows per page label. Invoked with a { from, to, count, page } object. |
| <span class="prop-name">rowsPerPageOptions</span> | <span class="prop-type">array | <span class="prop-default">[5, 10, 25]</span> | Customizes the options of the rows per page select field. If less than two options are available, no select field will be displayed. |
| <span class="prop-name">showSizeChanger</span> | <span class="prop-type">bool |  | show page size option. |
| <span class="prop-name">showQuickJumper</span> | <span class="prop-type">bool |  | show quick jumper ,jump to xx page. |
| <span class="prop-name">showTwoEnds</span> | <span class="prop-type">bool |  | show jump to first and last page button. |
| <span class="prop-name">noIcon</span> | <span class="prop-type">bool |  | Use text alternative icon for next page、pre page、last page and first page |

Any other properties supplied will be [spread to the root element](/guides/api#spread).

## Demos

- [Pagination](/demos/pagination)

