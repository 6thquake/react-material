---
filename: /packages/material-ui/core/src/ClickAwayListener/ClickAwayListener.js
title: ClickAwayListener API
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# ClickAwayListener

<p class="description">The API documentation of the ClickAwayListener React component.</p>

Listen for click events that occur somewhere in the document, outside of the element itself.
For instance, if you need to hide a menu when people click anywhere else on your page.

## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name required">children *</span> | <span class="prop-type">element |   | The wrapped element. |
| <span class="prop-name">mouseEvent</span> | <span class="prop-type">enum:&nbsp;'onClick'&nbsp;&#124;<br>&nbsp;'onMouseDown'&nbsp;&#124;<br>&nbsp;'onMouseUp'&nbsp;&#124;<br>&nbsp;false<br> | <span class="prop-default">'onMouseUp'</span> | The mouse event to listen to. You can disable the listener by providing `false`. |
| <span class="prop-name required">onClickAway *</span> | <span class="prop-type">func |   | Callback fired when a "click away" event is detected. |
| <span class="prop-name">touchEvent</span> | <span class="prop-type">enum:&nbsp;'onTouchStart'&nbsp;&#124;<br>&nbsp;'onTouchEnd'&nbsp;&#124;<br>&nbsp;false<br> | <span class="prop-default">'onTouchEnd'</span> | The touch event to listen to. You can disable the listener by providing `false`. |

Any other properties supplied will be spread to the root element ([EventListener](https://github.com/oliviertassinari/react-event-listener)).

## Inheritance

The properties of the [EventListener](https://github.com/oliviertassinari/react-event-listener) component, from react-event-listener, are also available.
You can take advantage of this behavior to [target nested components](/guides/api#spread).

## Demos

- [Menus](/demos/menus)
- [Click Away Listener](/utils/click-away-listener)

