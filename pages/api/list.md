---
filename: /packages/material-ui/core/src/List/List.js
title: List API
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# List

<p class="description">The API documentation of the List React component.</p>



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">children</span> | <span class="prop-type">node |   | The content of the component. |
| <span class="prop-name">classes</span> | <span class="prop-type">object |   | Override or extend the styles applied to the component. See [CSS API](#css-api) below for more details. |
| <span class="prop-name">component</span> | <span class="prop-type">union:&nbsp;string&nbsp;&#124;<br>&nbsp;func&nbsp;&#124;<br>&nbsp;object<br> | <span class="prop-default">'ul'</span> | The component used for the root node. Either a string to use a DOM element or a component. |
| <span class="prop-name">dense</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If `true`, compact vertical padding designed for keyboard and mouse input will be used for the list and list items. The property is available to descendant components as the `dense` context. |
| <span class="prop-name">disablePadding</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If `true`, vertical padding will be removed from the list. |
| <span class="prop-name">subheader</span> | <span class="prop-type">node |   | The content of the subheader, normally `ListSubheader`. |

Any other properties supplied will be spread to the root element (native element).

## CSS API

You can override all the class names injected by React-Material thanks to the `classes` property.
This property accepts the following keys:


| Name | Description |
|:-----|:------------|
| <span class="prop-name">root</span> | Styles applied to the root element.
| <span class="prop-name">padding</span> | Styles applied to the root element if `disablePadding={false}`.
| <span class="prop-name">dense</span> | Styles applied to the root element if `dense={true}` & `disablePadding={false}`.
| <span class="prop-name">subheader</span> | Styles applied to the root element if a `subheader` is provided.

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](https://github.com/6thquake/react-material/tree/develop/packages/material-ui/core/src/List/List.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `MuiList`.

## Demos

- [Lists](/demos/lists)

