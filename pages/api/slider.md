---
filename: /packages/material-ui/lab/src/Slider/Slider.js
title: Slider API
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# Slider

<p class="description">The API documentation of the Slider React component.</p>



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">classes</span> | <span class="prop-type">object |   | Override or extend the styles applied to the component. See [CSS API](#css-api) below for more details. |
| <span class="prop-name">component</span> | <span class="prop-type">componentPropType | <span class="prop-default">'div'</span> | The component used for the root node. Either a string to use a DOM element or a component. |
| <span class="prop-name">disabled</span> | <span class="prop-type">bool |   | If `true`, the slider will be disabled. |
| <span class="prop-name">max</span> | <span class="prop-type">number | <span class="prop-default">100</span> | The maximum allowed value of the slider. Should not be equal to min. |
| <span class="prop-name">min</span> | <span class="prop-type">number | <span class="prop-default">0</span> | The minimum allowed value of the slider. Should not be equal to max. |
| <span class="prop-name">onChange</span> | <span class="prop-type">func |   | Callback function that is fired when the slider's value changed. |
| <span class="prop-name">onDragEnd</span> | <span class="prop-type">func |   | Callback function that is fired when the slide has stopped moving. |
| <span class="prop-name">onDragStart</span> | <span class="prop-type">func |   | Callback function that is fired when the slider has begun to move. |
| <span class="prop-name">step</span> | <span class="prop-type">number |   | The granularity the slider can step through values. |
| <span class="prop-name">thumb</span> | <span class="prop-type">element |   | The component used for the slider icon. This is optional, if provided should be a react element. |
| <span class="prop-name required">value *</span> | <span class="prop-type">number |   | The value of the slider. |
| <span class="prop-name">valueReducer</span> | <span class="prop-type">func | <span class="prop-default">function defaultValueReducer(rawValue, props) {  const { disabled, step } = props;  if (disabled) {    return null;  }  if (step) {    return roundToStep(rawValue, step);  }  return Number(rawValue.toFixed(3));}</span> | the reducer used to process the value emitted from the slider. If `null` or the same value is returned no change is emitted.<br><br>**Signature:**<br>`function(rawValue: number, props: SliderProps, event: Event) => void`<br>*rawValue:* value in [min, max]<br>*props:* current props of the Slider<br>*event:* the event the change was triggered from |
| <span class="prop-name">vertical</span> | <span class="prop-type">bool |   | If `true`, the slider will be vertical. |

Any other properties supplied will be spread to the root element (native element).

## CSS API

You can override all the class names injected by React-Material thanks to the `classes` property.
This property accepts the following keys:


| Name | Description |
|:-----|:------------|
| <span class="prop-name">root</span> | Styles applied to the root element.
| <span class="prop-name">container</span> | Styles applied to the container element.
| <span class="prop-name">track</span> | Styles applied to the track elements.
| <span class="prop-name">trackBefore</span> | Styles applied to the track element before the thumb.
| <span class="prop-name">trackAfter</span> | Styles applied to the track element after the thumb.
| <span class="prop-name">thumbWrapper</span> | Styles applied to the thumb wrapper element.
| <span class="prop-name">thumb</span> | Styles applied to the thumb element.
| <span class="prop-name">thumbIconWrapper</span> | Class applied to the thumb element if custom thumb icon provided.
| <span class="prop-name">thumbIcon</span> | 
| <span class="prop-name">disabled</span> | Class applied to the track and thumb elements to trigger JSS nested styles if `disabled`.
| <span class="prop-name">jumped</span> | Class applied to the track and thumb elements to trigger JSS nested styles if `jumped`.
| <span class="prop-name">focused</span> | Class applied to the track and thumb elements to trigger JSS nested styles if `focused`.
| <span class="prop-name">activated</span> | Class applied to the track and thumb elements to trigger JSS nested styles if `activated`.
| <span class="prop-name">vertical</span> | Class applied to the root, track and container to trigger JSS nested styles if `vertical`.

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](https://github.com/6thquake/react-material/tree/develop/packages/material-ui/lab/src/Slider/Slider.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `MuiSlider`.

## Demos

- [Slider](/lab/slider)

