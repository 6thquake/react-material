---
filename: /packages/material-ui/core/src/Tabs/Tabs.js
title: Tabs API
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# Tabs

<p class="description">The API documentation of the Tabs React component.</p>



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">action</span> | <span class="prop-type">func |   | Callback fired when the component mounts. This is useful when you want to trigger an action programmatically. It currently only supports `updateIndicator()` action.<br><br>**Signature:**<br>`function(actions: object) => void`<br>*actions:* This object contains all possible actions that can be triggered programmatically. |
| <span class="prop-name">centered</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If `true`, the tabs will be centered. This property is intended for large views. |
| <span class="prop-name">children</span> | <span class="prop-type">node |   | The content of the component. |
| <span class="prop-name">classes</span> | <span class="prop-type">object |   | Override or extend the styles applied to the component. See [CSS API](#css-api) below for more details. |
| <span class="prop-name">component</span> | <span class="prop-type">componentPropType | <span class="prop-default">'div'</span> | The component used for the root node. Either a string to use a DOM element or a component. |
| <span class="prop-name">fullWidth</span> | <span class="prop-type">deprecatedPropType(PropTypes.bool, 'Instead, use the `variant="fullWidth"` property.') |   | If `true`, the tabs will grow to use all the available space. This property is intended for small views, like on mobile. |
| <span class="prop-name">indicatorColor</span> | <span class="prop-type">enum:&nbsp;'secondary'&nbsp;&#124;<br>&nbsp;'primary'<br> | <span class="prop-default">'secondary'</span> | Determines the color of the indicator. |
| <span class="prop-name">onChange</span> | <span class="prop-type">func |   | Callback fired when the value changes.<br><br>**Signature:**<br>`function(event: object, value: number) => void`<br>*event:* The event source of the callback<br>*value:* We default to the index of the child |
| <span class="prop-name">scrollable</span> | <span class="prop-type">deprecatedPropType(
  PropTypes.bool,
  'Instead, use the `variant="scrollable"` property.',
) |   | If `true`, it will invoke scrolling properties and allow for horizontally scrolling (or swiping) of the tab bar. |
| <span class="prop-name">ScrollButtonComponent</span> | <span class="prop-type">componentPropType | <span class="prop-default">TabScrollButton</span> | The component used to render the scroll buttons. |
| <span class="prop-name">scrollButtons</span> | <span class="prop-type">enum:&nbsp;'auto'&nbsp;&#124;<br>&nbsp;'on'&nbsp;&#124;<br>&nbsp;'off'<br> | <span class="prop-default">'auto'</span> | Determine behavior of scroll buttons when tabs are set to scroll `auto` will only present them on medium and larger viewports `on` will always present them `off` will never present them |
| <span class="prop-name">TabIndicatorProps</span> | <span class="prop-type">object |   | Properties applied to the `TabIndicator` element. |
| <span class="prop-name">textColor</span> | <span class="prop-type">enum:&nbsp;'secondary'&nbsp;&#124;<br>&nbsp;'primary'&nbsp;&#124;<br>&nbsp;'inherit'<br> | <span class="prop-default">'inherit'</span> | Determines the color of the `Tab`. |
| <span class="prop-name">value</span> | <span class="prop-type">any |   | The value of the currently selected `Tab`. If you don't want any selected `Tab`, you can set this property to `false`. |
| <span class="prop-name">variant</span> | <span class="prop-type">enum:&nbsp;'standard'&nbsp;&#124;<br>&nbsp;'scrollable'&nbsp;&#124;<br>&nbsp;'fullWidth'<br> | <span class="prop-default">'standard'</span> | Determines additional display behavior of the tabs:  - `scrollable` will invoke scrolling properties and allow for horizontally  scrolling (or swiping) of the tab bar.  -`fullWidth` will make the tabs grow to use all the available space,  which should be used for small views, like on mobile.  - `standard` will render the default state. |

Any other properties supplied will be spread to the root element (native element).

## CSS API

You can override all the class names injected by React-Material thanks to the `classes` property.
This property accepts the following keys:


| Name | Description |
|:-----|:------------|
| <span class="prop-name">root</span> | Styles applied to the root element.
| <span class="prop-name">flexContainer</span> | Styles applied to the flex container element.
| <span class="prop-name">centered</span> | Styles applied to the flex container element if `centered={true}` & `!variant="scrollable"`.
| <span class="prop-name">scroller</span> | Styles applied to the tablist element.
| <span class="prop-name">fixed</span> | Styles applied to the tablist element if `!variant="scrollable"`.
| <span class="prop-name">scrollable</span> | Styles applied to the tablist element if `variant="scrollable"`.
| <span class="prop-name">scrollButtons</span> | Styles applied to the `ScrollButtonComponent` component.
| <span class="prop-name">scrollButtonsAuto</span> | Styles applied to the `ScrollButtonComponent` component if `scrollButtons="auto"`.
| <span class="prop-name">indicator</span> | Styles applied to the `TabIndicator` component.

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](https://github.com/6thquake/react-material/tree/develop/packages/material-ui/core/src/Tabs/Tabs.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `MuiTabs`.

## Demos

- [Tabs](/demos/tabs)

