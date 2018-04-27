---
filename: /packages/material-ui/src/Modal/Backdrop.js
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# Backdrop



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">classes</span> | <span class="prop-type">object |  | Useful to extend the style applied to components. |
| <span class="prop-name">invisible</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If `true`, the backdrop is invisible. It can be used when rendering a popover or a custom select component. |
| <span class="prop-name required">open *</span> | <span class="prop-type">bool |  | If `true`, the backdrop is open. |
| <span class="prop-name">transitionDuration</span> | <span class="prop-type">union:&nbsp;number&nbsp;&#124;<br>&nbsp;{enter?: number, exit?: number}<br> |  | The duration for the transition, in milliseconds. You may specify a single timeout for all transitions, or individually with an object. |

Any other properties supplied will be [spread to the root element](/guides/api#spread).

## CSS API

You can override all the class names injected by React-Material thanks to the `classes` property.
This property accepts the following keys:
- `root`
- `invisible`

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](http://git.dev.sh.ctripcorp.com/sixthquake/react-material/tree/v1-beta/packages/material-ui/src/Modal/Backdrop.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `MuiBackdrop`.

