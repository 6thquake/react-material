---
filename: /packages/material-ui/core/src/Link/Link.js
title: Link API
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# Link

<p class="description">The API documentation of the Link React component.</p>



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">block</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | Controls whether the link is inline or not. When `block` is true the link is not inline  when `block` is false it is. |
| <span class="prop-name required">children *</span> | <span class="prop-type">node |   | The content of the link. |
| <span class="prop-name">classes</span> | <span class="prop-type">object |   | Override or extend the styles applied to the component. See [CSS API](#css-api) below for more details. |
| <span class="prop-name">color</span> | <span class="prop-type">enum:&nbsp;'error', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary'<br> | <span class="prop-default">'primary'</span> | The color of the link. |
| <span class="prop-name">component</span> | <span class="prop-type">componentPropType | <span class="prop-default">'a'</span> | The component used for the root node. Either a string to use a DOM element or a component. |
| <span class="prop-name">TypographyClasses</span> | <span class="prop-type">object |   | `classes` property applied to the [`Typography`](/api/typography/) element. |
| <span class="prop-name">underline</span> | <span class="prop-type">enum:&nbsp;'none'&nbsp;&#124;<br>&nbsp;'hover'&nbsp;&#124;<br>&nbsp;'always'<br> | <span class="prop-default">'hover'</span> | Controls when the link should have an underline. |
| <span class="prop-name">variant</span> | <span class="prop-type">string | <span class="prop-default">'inherit'</span> | Applies the theme typography styles. |

Any other properties supplied will be spread to the root element ([Typography](/api/typography)).

## CSS API

You can override all the class names injected by React-Material thanks to the `classes` property.
This property accepts the following keys:


| Name | Description |
|:-----|:------------|
| <span class="prop-name">root</span> | Styles applied to the root element.
| <span class="prop-name">underlineNone</span> | Styles applied to the root element if `underline="none"`.
| <span class="prop-name">underlineHover</span> | Styles applied to the root element if `underline="hover"`.
| <span class="prop-name">underlineAlways</span> | Styles applied to the root element if `underline="always"`.
| <span class="prop-name">button</span> | Styles applied to the root element if `component="button"`.

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](https://github.com/6thquake/react-material/tree/develop/packages/material-ui/core/src/Link/Link.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `MuiLink`.

## Inheritance

The properties of the [Typography](/api/typography) component are also available.
You can take advantage of this behavior to [target nested components](/guides/api#spread).

