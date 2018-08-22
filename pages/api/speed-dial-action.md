---
filename: /packages/react-material/src/SpeedDialAction/SpeedDialAction.js
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# SpeedDialAction



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">ButtonProps</span> | <span class="prop-type">object |  | Properties applied to the [`Button`](/api/button) component. |
| <span class="prop-name">classes</span> | <span class="prop-type">object |  | Useful to extend the style applied to components. |
| <span class="prop-name">delay</span> | <span class="prop-type">number | <span class="prop-default">0</span> | Adds a transition delay, to allow a series of SpeedDialActions to be animated. |
| <span class="prop-name required">icon *</span> | <span class="prop-type">node |  | The Icon to display in the SpeedDial Floating Action Button. |
| <span class="prop-name">tooltipPlacement</span> | <span class="prop-type">string | <span class="prop-default">'left'</span> | Placement of the tooltip. |
| <span class="prop-name">tooltipTitle</span> | <span class="prop-type">node |  | Label to display in the tooltip. |

Any other properties supplied will be [spread to the root element](/guides/api#spread).

## CSS API

You can override all the class names injected by React-Material thanks to the `classes` property.
This property accepts the following keys:
- `root`
- `button`
- `buttonClosed`

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](https://github.com/6thquake/react-material/tree/develop/packages/react-material/src/SpeedDialAction/SpeedDialAction.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `MuiSpeedDialAction`.

## Demos

- [Speed Dial](/lab/speed-dial)

