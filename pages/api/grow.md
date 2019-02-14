---
filename: /packages/material-ui/core/src/Grow/Grow.js
title: Grow API
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# Grow

<p class="description">The API documentation of the Grow React component.</p>

The Grow transition is used by the [Tooltip](/demos/tooltips/) and
[Popover](/utils/popover/) components.
It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.

## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">children</span> | <span class="prop-type">union:&nbsp;element&nbsp;&#124;<br>&nbsp;func<br> |   | A single child content element. |
| <span class="prop-name">in</span> | <span class="prop-type">bool |   | If `true`, show the component; triggers the enter or exit animation. |
| <span class="prop-name">timeout</span> | <span class="prop-type">union:&nbsp;number&nbsp;&#124;<br>&nbsp;{ enter?: number, exit?: number }&nbsp;&#124;<br>&nbsp;enum:&nbsp;'auto'<br><br> | <span class="prop-default">'auto'</span> | The duration for the transition, in milliseconds. You may specify a single timeout for all transitions, or individually with an object.<br>Set to 'auto' to automatically calculate transition time based on height. |

Any other properties supplied will be spread to the root element ([Transition](https://reactcommunity.org/react-transition-group/#Transition)).

## Inheritance

The properties of the [Transition](https://reactcommunity.org/react-transition-group/#Transition) component, from react-transition-group, are also available.
You can take advantage of this behavior to [target nested components](/guides/api#spread).

## Demos

- [Popover](/utils/popover)
- [Popovers](/utils/popovers)
- [Transitions](/utils/transitions)

