---
filename: /packages/material-ui/lab/src/SpeedDial/SpeedDial.js
title: SpeedDial API
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# SpeedDial

<p class="description">The API documentation of the SpeedDial React component.</p>



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name required">ariaLabel *</span> | <span class="prop-type">string |   | The aria-label of the `Button` element. Also used to provide the `id` for the `SpeedDial` element and its children. |
| <span class="prop-name">ButtonProps</span> | <span class="prop-type">object |   | Properties applied to the [`Button`](/api/button/) element. |
| <span class="prop-name required">children *</span> | <span class="prop-type">node |   | SpeedDialActions to display when the SpeedDial is `open`. |
| <span class="prop-name">classes</span> | <span class="prop-type">object |   | Override or extend the styles applied to the component. See [CSS API](#css-api) below for more details. |
| <span class="prop-name">direction</span> | <span class="prop-type">enum:&nbsp;'up'&nbsp;&#124;<br>&nbsp;'down'&nbsp;&#124;<br>&nbsp;'left'&nbsp;&#124;<br>&nbsp;'right'<br> | <span class="prop-default">'up'</span> | The direction the actions open relative to the floating action button. |
| <span class="prop-name">hidden</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If `true`, the SpeedDial will be hidden. |
| <span class="prop-name required">icon *</span> | <span class="prop-type">element |   | The icon to display in the SpeedDial Floating Action Button. The `SpeedDialIcon` component provides a default Icon with animation. |
| <span class="prop-name">onClose</span> | <span class="prop-type">func |   | Callback fired when the component requests to be closed.<br><br>**Signature:**<br>`function(event: object, key: string) => void`<br>*event:* The event source of the callback<br>*key:* The key pressed |
| <span class="prop-name required">open *</span> | <span class="prop-type">bool |   | If `true`, the SpeedDial is open. |
| <span class="prop-name">openIcon</span> | <span class="prop-type">node |   | The icon to display in the SpeedDial Floating Action Button when the SpeedDial is open. |
| <span class="prop-name">TransitionComponent</span> | <span class="prop-type">componentPropType | <span class="prop-default">Zoom</span> | The component used for the transition. |
| <span class="prop-name">transitionDuration</span> | <span class="prop-type">union:&nbsp;number&nbsp;&#124;<br>&nbsp;{ enter?: number, exit?: number }<br> | <span class="prop-default">{  enter: duration.enteringScreen,  exit: duration.leavingScreen,}</span> | The duration for the transition, in milliseconds. You may specify a single timeout for all transitions, or individually with an object. |
| <span class="prop-name">TransitionProps</span> | <span class="prop-type">object |   | Properties applied to the `Transition` element. |

Any other properties supplied will be spread to the root element (native element).

## CSS API

You can override all the class names injected by React-Material thanks to the `classes` property.
This property accepts the following keys:


| Name | Description |
|:-----|:------------|
| <span class="prop-name">root</span> | Styles applied to the root element.
| <span class="prop-name">fab</span> | Styles applied to the Button component.
| <span class="prop-name">directionUp</span> | Styles applied to the root and action container elements when direction="up"
| <span class="prop-name">directionDown</span> | Styles applied to the root and action container elements when direction="down"
| <span class="prop-name">directionLeft</span> | Styles applied to the root and action container elements when direction="left"
| <span class="prop-name">directionRight</span> | Styles applied to the root and action container elements when direction="right"
| <span class="prop-name">actions</span> | Styles applied to the actions (`children` wrapper) element.
| <span class="prop-name">actionsClosed</span> | Styles applied to the actions (`children` wrapper) element if `open={false}`.

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](https://github.com/6thquake/react-material/tree/develop/packages/material-ui/lab/src/SpeedDial/SpeedDial.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `MuiSpeedDial`.

## Demos

- [Speed Dial](/lab/speed-dial)

