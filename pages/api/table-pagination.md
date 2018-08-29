---
filename: /packages/material-ui/core/src/TablePagination/TablePagination.js
title: TablePagination API
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# TablePagination

<p class="description">The API documentation of the TablePagination React component.</p>

A `TableCell` based component for placing inside `TableFooter` for pagination.

## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">ActionsComponent</span> | <span class="prop-type">union:&nbsp;string&nbsp;&#124;<br>&nbsp;func&nbsp;&#124;<br>&nbsp;object<br> | <span class="prop-default">TablePaginationActions</span> | The component used for displaying the actions. Either a string to use a DOM element or a component. |
| <span class="prop-name">backIconButtonProps</span> | <span class="prop-type">object |   | Properties applied to the back arrow [`IconButton`](/api/icon-button) component. |
| <span class="prop-name">classes</span> | <span class="prop-type">object |   | Override or extend the styles applied to the component. See [CSS API](#css-api) below for more details. |
| <span class="prop-name">component</span> | <span class="prop-type">union:&nbsp;string&nbsp;&#124;<br>&nbsp;func&nbsp;&#124;<br>&nbsp;object<br> | <span class="prop-default">TableCell</span> | The component used for the root node. Either a string to use a DOM element or a component. |
| <span class="prop-name required">count *</span> | <span class="prop-type">number |   | The total number of rows. |
| <span class="prop-name">labelDisplayedRows</span> | <span class="prop-type">func | <span class="prop-default">({ from, to, count }) => `${from}-${to} of ${count}`</span> | Customize the displayed rows label. |
| <span class="prop-name">labelRowsPerPage</span> | <span class="prop-type">node | <span class="prop-default">'Rows per page:'</span> | Customize the rows per page label. Invoked with a `{ from, to, count, page }` object. |
| <span class="prop-name">nextIconButtonProps</span> | <span class="prop-type">object |   | Properties applied to the next arrow [`IconButton`](/api/icon-button) element. |
| <span class="prop-name required">onChangePage *</span> | <span class="prop-type">func |   | Callback fired when the page is changed.<br><br>**Signature:**<br>`function(event: object, page: number) => void`<br>*event:* The event source of the callback<br>*page:* The page selected |
| <span class="prop-name">onChangeRowsPerPage</span> | <span class="prop-type">func |   | Callback fired when the number of rows per page is changed.<br><br>**Signature:**<br>`function(event: object) => void`<br>*event:* The event source of the callback |
| <span class="prop-name required">page *</span> | <span class="prop-type">number |   | The zero-based index of the current page. |
| <span class="prop-name required">rowsPerPage *</span> | <span class="prop-type">number |   | The number of rows per page. |
| <span class="prop-name">rowsPerPageOptions</span> | <span class="prop-type">array | <span class="prop-default">[5, 10, 25]</span> | Customizes the options of the rows per page select field. If less than two options are available, no select field will be displayed. |
| <span class="prop-name">SelectProps</span> | <span class="prop-type">object |   | Properties applied to the rows per page [`Select`](/api/select) element. |

Any other properties supplied will be spread to the root element ([TableCell](/api/table-cell)).

## CSS API

You can override all the class names injected by React-Material thanks to the `classes` property.
This property accepts the following keys:


| Name | Description |
|:-----|:------------|
| <span class="prop-name">root</span> | Styles applied to the root element.
| <span class="prop-name">toolbar</span> | Styles applied to the Toolbar component.
| <span class="prop-name">spacer</span> | Styles applied to the spacer element.
| <span class="prop-name">caption</span> | Styles applied to the caption Typography components if `variant="caption"`.
| <span class="prop-name">selectRoot</span> | Styles applied to the Select component `root` class.
| <span class="prop-name">select</span> | Styles applied to the Select component `select` class.
| <span class="prop-name">selectIcon</span> | Styles applied to the Select component `icon` class.
| <span class="prop-name">input</span> | Styles applied to the Input component.
| <span class="prop-name">menuItem</span> | Styles applied to the MenuItem component.
| <span class="prop-name">actions</span> | Styles applied to the internal `TablePaginationActions` component.

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](https://github.com/6thquake/react-material/tree/develop/packages/material-ui/core/src/TablePagination/TablePagination.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `MuiTablePagination`.

## Inheritance

The properties of the [TableCell](/api/table-cell) component are also available.
You can take advantage of this behavior to [target nested components](/guides/api#spread).

## Demos

- [Tables](/demos/tables)

