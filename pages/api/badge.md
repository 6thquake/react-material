---
filename: /packages/material-ui/core/src/Badge/Badge.js
title: Badge API
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# Badge

<p class="description">The API documentation of the Badge React component.</p>



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">badgeContent</span> | <span class="prop-type">node |   | The content rendered within the badge. |
| <span class="prop-name required">children *</span> | <span class="prop-type">node |   | The badge will be added relative to this node. |
| <span class="prop-name">classes</span> | <span class="prop-type">object |   | Override or extend the styles applied to the component. See [CSS API](#css-api) below for more details. |
| <span class="prop-name">color</span> | <span class="prop-type">enum:&nbsp;'default'&nbsp;&#124;<br>&nbsp;'primary'&nbsp;&#124;<br>&nbsp;'secondary'&nbsp;&#124;<br>&nbsp;'error'<br> | <span class="prop-default">'default'</span> | The color of the component. It supports those theme colors that make sense for this component. |
| <span class="prop-name">component</span> | <span class="prop-type">componentPropType | <span class="prop-default">'span'</span> | The component used for the root node. Either a string to use a DOM element or a component. |
| <span class="prop-name">invisible</span> | <span class="prop-type">bool |   | If `true`, the badge will be invisible. |
| <span class="prop-name">max</span> | <span class="prop-type">number | <span class="prop-default">99</span> | Max count to show. |
| <span class="prop-name">showZero</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | Controls whether the badge is hidden when `badgeContent` is zero. |
| <span class="prop-name">variant</span> | <span class="prop-type">enum:&nbsp;'standard'&nbsp;&#124;<br>&nbsp;'dot'<br> | <span class="prop-default">'standard'</span> | The variant to use. |

Any other properties supplied will be spread to the root element (native element).

## CSS API

You can override all the class names injected by React-Material thanks to the `classes` property.
This property accepts the following keys:


| Name | Description |
|:-----|:------------|
| <span class="prop-name">root</span> | Styles applied to the root element.
| <span class="prop-name">badge</span> | Styles applied to the badge `span` element.
| <span class="prop-name">colorPrimary</span> | Styles applied to the root element if `color="primary"`.
| <span class="prop-name">colorSecondary</span> | Styles applied to the root element if `color="secondary"`.
| <span class="prop-name">colorError</span> | Styles applied to the root element if `color="error"`.
| <span class="prop-name">invisible</span> | Styles applied to the badge `span` element if `invisible={true}`.
| <span class="prop-name">dot</span> | Styles applied to the root element if `variant="dot"`.

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](https://github.com/6thquake/react-material/tree/develop/packages/material-ui/core/src/Badge/Badge.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `MuiBadge`.

## Demos

- [Badges](/demos/badges)

