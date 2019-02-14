---
filename: /packages/material-ui/core/src/MenuItem/MenuItem.js
title: MenuItem API
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# MenuItem

<p class="description">The API documentation of the MenuItem React component.</p>



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">children</span> | <span class="prop-type">node |   | Menu item contents. |
| <span class="prop-name">classes</span> | <span class="prop-type">object |   | Override or extend the styles applied to the component. See [CSS API](#css-api) below for more details. |
| <span class="prop-name">component</span> | <span class="prop-type">componentPropType | <span class="prop-default">'li'</span> | The component used for the root node. Either a string to use a DOM element or a component. |
| <span class="prop-name">disableGutters</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If `true`, the left and right padding is removed. |

Any other properties supplied will be spread to the root element ([ListItem](/api/list-item)).

## CSS API

You can override all the class names injected by React-Material thanks to the `classes` property.
This property accepts the following keys:


| Name | Description |
|:-----|:------------|
| <span class="prop-name">root</span> | Styles applied to the root element.
| <span class="prop-name">gutters</span> | Styles applied to the root element if `disableGutters={false}`.
| <span class="prop-name">selected</span> | Styles applied to the root element if `selected={true}`.

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](https://github.com/6thquake/react-material/tree/develop/packages/material-ui/core/src/MenuItem/MenuItem.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `MuiMenuItem`.

## Inheritance

The properties of the [ListItem](/api/list-item) component are also available.
You can take advantage of this behavior to [target nested components](/guides/api#spread).

## Demos

- [Autocomplete](/demos/autocomplete)
- [Menus](/demos/menus)

