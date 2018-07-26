---
filename: /packages/react-material/src/ButtonBase/TouchRipple.js
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# TouchRipple



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">center</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If `true`, the ripple starts at the center of the component rather than at the point of interaction. |
| <span class="prop-name">classes</span> | <span class="prop-type">object |  | Override or extend the styles applied to the component. See [CSS API](#css-api) below for more details. |

Any other properties supplied will be [spread to the root element](/guides/api#spread).

## CSS API

You can override all the class names injected by React-Material thanks to the `classes` property.
This property accepts the following keys:
- `root`
- `ripple`
- `rippleVisible`
- `ripplePulsate`
- `child`
- `childLeaving`
- `childPulsate`

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](https://github.com/6thquake/react-material/tree/develop/packages/react-material/src/ButtonBase/TouchRipple.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `MuiTouchRipple`.

