---
filename: /packages/react-material/src/ListItemText/ListItemText.js
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# ListItemText



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">children</span> | <span class="prop-type">node |  | Alias for the `primary` property. |
| <span class="prop-name">classes</span> | <span class="prop-type">object |  | Override or extend the styles applied to the component. See [CSS API](#css-api) below for more details. |
| <span class="prop-name">disableTypography</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If `true`, the children won't be wrapped by a Typography component. This can be useful to render an alternative Typography variant by wrapping the `children` (or `primary`) text, and optional `secondary` text with the Typography component. |
| <span class="prop-name">inset</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If `true`, the children will be indented. This should be used if there is no left avatar or left icon. |
| <span class="prop-name">primary</span> | <span class="prop-type">node |  | The main content element. |
| <span class="prop-name">primaryTypographyProps</span> | <span class="prop-type">object |  | These props will be forwarded to the primary typography component (as long as disableTypography is not `true`). |
| <span class="prop-name">secondary</span> | <span class="prop-type">node |  | The secondary content element. |
| <span class="prop-name">secondaryTypographyProps</span> | <span class="prop-type">object |  | These props will be forwarded to the secondary typography component (as long as disableTypography is not `true`). |

Any other properties supplied will be [spread to the root element](/guides/api#spread).

## CSS API

You can override all the class names injected by React-Material thanks to the `classes` property.
This property accepts the following keys:
- `root`
- `inset`
- `dense`
- `primary`
- `secondary`
- `textDense`

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](https://github.com/6thquake/react-material/tree/develop/packages/react-material/src/ListItemText/ListItemText.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `MuiListItemText`.

## Demos

- [Lists](/demos/lists)

