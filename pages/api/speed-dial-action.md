---
filename: /packages/material-ui/lab/src/SpeedDialAction/SpeedDialAction.js
title: SpeedDialAction API
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# SpeedDialAction

<p class="description">The API documentation of the SpeedDialAction React component.</p>



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">ButtonProps</span> | <span class="prop-type">object |   | Properties applied to the [`Button`](/api/button/) component. |
| <span class="prop-name">classes</span> | <span class="prop-type">object |   | Override or extend the styles applied to the component. See [CSS API](#css-api) below for more details. |
| <span class="prop-name">delay</span> | <span class="prop-type">number | <span class="prop-default">0</span> | Adds a transition delay, to allow a series of SpeedDialActions to be animated. |
| <span class="prop-name required">icon *</span> | <span class="prop-type">node |   | The Icon to display in the SpeedDial Floating Action Button. |
| <span class="prop-name">TooltipClasses</span> | <span class="prop-type">object |   | Classes applied to the [`Tooltip`](/api/tooltip/) element. |
| <span class="prop-name">tooltipOpen</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | Make the tooltip always visible when the SpeedDial is open. |
| <span class="prop-name">tooltipPlacement</span> | <span class="prop-type">enum:&nbsp;'bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top'<br> | <span class="prop-default">'left'</span> | Placement of the tooltip. |
| <span class="prop-name required">tooltipTitle *</span> | <span class="prop-type">node |   | Label to display in the tooltip. |

Any other properties supplied will be spread to the root element ([Tooltip](/api/tooltip)).

## CSS API

You can override all the class names injected by React-Material thanks to the `classes` property.
This property accepts the following keys:


| Name | Description |
|:-----|:------------|
| <span class="prop-name">button</span> | Styles applied to the `Button` component.
| <span class="prop-name">buttonClosed</span> | Styles applied to the `Button` component if `open={false}`.

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](https://github.com/6thquake/react-material/tree/develop/packages/material-ui/lab/src/SpeedDialAction/SpeedDialAction.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `MuiSpeedDialAction`.

## Inheritance

The properties of the [Tooltip](/api/tooltip) component are also available.
You can take advantage of this behavior to [target nested components](/guides/api#spread).

## Demos

- [Speed Dial](/lab/speed-dial)

