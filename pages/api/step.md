---
filename: /packages/material-ui/core/src/Step/Step.js
title: Step API
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# Step

<p class="description">The API documentation of the Step React component.</p>



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">active</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | Sets the step as active. Is passed to child components. |
| <span class="prop-name">children</span> | <span class="prop-type">node |   | Should be `Step` sub-components such as `StepLabel`, `StepContent`. |
| <span class="prop-name">classes</span> | <span class="prop-type">object |   | Override or extend the styles applied to the component. See [CSS API](#css-api) below for more details. |
| <span class="prop-name">completed</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | Mark the step as completed. Is passed to child components. |
| <span class="prop-name">disabled</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | Mark the step as disabled, will also disable the button if `StepButton` is a child of `Step`. Is passed to child components. |

Any other properties supplied will be spread to the root element (native element).

## CSS API

You can override all the class names injected by React-Material thanks to the `classes` property.
This property accepts the following keys:


| Name | Description |
|:-----|:------------|
| <span class="prop-name">root</span> | Styles applied to the root element.
| <span class="prop-name">horizontal</span> | Styles applied to the root element if `orientation="horizontal"`.
| <span class="prop-name">vertical</span> | Styles applied to the root element if `orientation="vertical"`.
| <span class="prop-name">alternativeLabel</span> | Styles applied to the root element if `alternativeLabel={true}`.
| <span class="prop-name">completed</span> | Styles applied to the root element if `completed={true}`.

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](https://github.com/6thquake/react-material/tree/develop/packages/material-ui/core/src/Step/Step.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `MuiStep`.

## Demos

- [Steppers](/demos/steppers)

