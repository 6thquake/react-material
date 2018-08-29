---
title: Table React component
components: Table, TableBody, TableCell, TableFooter, TableHead, TablePagination, TableRow, TableSortLabel, AbundantCrossTabulation, CrossTabulation, AwesomeTable
---

# Tables

<p class="description">Data tables display sets of data. They can be fully customized.</p>

[Data tables](https://material.io/design/components/data-tables.html) display information in a way that’s easy to scan, so that users can look for patterns and insights. They can be embedded in primary content, such as cards.

Data tables can include:
- A corresponding visualization
- Navigation
- Tools to query and manipulate data

When including tools, they should be placed directly above or below the table.

## Structure

A data table contains a header row at the top that lists column names, followed by rows for data.

Checkboxes should accompany each row if the user needs to select or manipulate data.

For accessibility, the first column is set to be a `<th>` element, with a `scope` of `"row"`. This enables screen readers to identify a cell's value by it's row and column name.

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

## Customized Tables

You can customize the look and feel of the table by overriding the styles of the `TableCell` component.

{{"demo": "pages/demos/tables/CustomizedTable.js"}}

## Awesome Table

* Drag to change each columns' width
* Lock columns when scrolling the horizontal scroll bar
* Drag to change position among columns
* Download the table data into a csv file
* Fuzzy matching data

{{"demo": "pages/demos/tables/AwesomeTable.js"}}

## No Data Table

Show "No data is available" or someting else you specified when table have no data. 

{{"demo": "pages/demos/tables/NoDataTable.js"}}

## Cross Table

Cross tabulation is a method to quantitatively analyze the relationship between multiple variables.

#### When you can use cross tabulation
Cross tabulation is usually performed on categorical data — data that can be divided into mutually exclusive groups.

An example of categorical data is the region of sales for a product. Typically, region can be divided into categories such as geographic area (North, South, Northeast, West, etc) or state (Andhra Pradesh, Rajasthan, Bihar, etc). The important thing to remember about categorical data is that a categorical data point cannot belong to more than one category.

Cross tabulations are used to examine relationships within data that may not be readily apparent. Cross tabulation is especially useful for studying market research or survey responses. Cross tabulation of categorical data can be done with through tools such as SPSS, SAS, and Microsoft Excel.

{{"demo": "pages/demos/tables/CrossTabulation.js"}}

## Advanced use cases

For more advanced use cases you might be able to take advantage of [dx-react-grid-material](https://devexpress.github.io/devextreme-reactive/react/grid/). It's a data grid for React-Material with paging, sorting, filtering, grouping and editing features.
