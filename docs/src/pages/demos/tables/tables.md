---
components: Table, TableBody, TableCell, TableFooter, TableHead, TablePagination, TableRow, TableSortLabel
---

# Tables

[Data tables](https://material.io/guidelines/components/data-tables.html) display sets of raw data.
They usually appear in desktop enterprise products.

## Structure

A data table contains a header row at the top that lists column names, followed by rows for data.

Checkboxes should accompany each row if the user needs to select or manipulate data.

## Simple Table

A simple example with no frills.

{{"demo": "pages/demos/tables/SimpleTable.js"}}

## Sorting & Selecting

This example demonstrates the use of `Checkbox` and clickable rows for selection, with a custom `Toolbar`. It uses the `TableSortLabel` component to help style column headings.

The Table has been given a fixed width to demonstrate horizontal scrolling. In order to prevent the pagination controls from scrolling, the TablePagination component is used outside of the Table. (The ['Custom Table Pagination Action' example](#custom-table-pagination-action) below shows the pagination within the TableFooter.)

{{"demo": "pages/demos/tables/EnhancedTable.js"}}

## Custom Table Pagination Action

The `Action` property of the `TablePagination` component allows the implementation of
custom actions.

{{"demo": "pages/demos/tables/CustomPaginationActionsTable.js"}}

## Customized tables

You can customize the look and feel of the table by overriding the styles of the `TableCell` component.

{{"demo": "pages/demos/tables/CustomizedTable.js"}}

## Advanced use cases

For more advanced use cases you might be able to take advantage of [dx-react-grid-material-ui](https://devexpress.github.io/devextreme-reactive/react/grid/). It's a data grid for Material-UI with paging, sorting, filtering, grouping and editing features.
