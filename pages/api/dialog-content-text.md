---
filename: /packages/material-ui/core/src/DialogContentText/DialogContentText.js
title: DialogContentText API
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# DialogContentText

<p class="description">The API documentation of the DialogContentText React component.</p>



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">children</span> | <span class="prop-type">node |   | The content of the component. |
| <span class="prop-name">classes</span> | <span class="prop-type">object |   | Override or extend the styles applied to the component. See [CSS API](#css-api) below for more details. |

Any other properties supplied will be spread to the root element ([Typography](/api/typography)).

## CSS API

You can override all the class names injected by React-Material thanks to the `classes` property.
This property accepts the following keys:


| Name | Description |
|:-----|:------------|
| <span class="prop-name">root</span> | Styles applied to the root element.

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](https://github.com/6thquake/react-material/tree/develop/packages/material-ui/core/src/DialogContentText/DialogContentText.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `MuiDialogContentText`.

## Inheritance

The properties of the [Typography](/api/typography) component are also available.
You can take advantage of this behavior to [target nested components](/guides/api#spread).

## Demos

- [Dialogs](/demos/dialogs)

