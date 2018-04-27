---
filename: /packages/material-ui/src/Dialog/Dialog.js
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# Dialog

Dialogs are overlaid modal paper based components with a backdrop.

## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name required">children *</span> | <span class="prop-type">node |  | Dialog children, usually the included sub-components. |
| <span class="prop-name">classes</span> | <span class="prop-type">object |  | Useful to extend the style applied to components. |
| <span class="prop-name">disableBackdropClick</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If `true`, clicking the backdrop will not fire the `onClose` callback. |
| <span class="prop-name">disableEscapeKeyDown</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If `true`, hitting escape will not fire the `onClose` callback. |
| <span class="prop-name">fullScreen</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If `true`, the dialog will be full-screen |
| <span class="prop-name">fullWidth</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If `true`, the dialog stretches to `maxWidth`. |
| <span class="prop-name">maxWidth</span> | <span class="prop-type">enum:&nbsp;'xs'&nbsp;&#124;<br>&nbsp;'sm'&nbsp;&#124;<br>&nbsp;'md'&nbsp;&#124;<br>&nbsp;false<br> | <span class="prop-default">'sm'</span> | Determine the max width of the dialog. The dialog width grows with the size of the screen, this property is useful on the desktop where you might need some coherent different width size across your application. Set to `false` to disable `maxWidth`. |
| <span class="prop-name">onBackdropClick</span> | <span class="prop-type">func |  | Callback fired when the backdrop is clicked. |
| <span class="prop-name">onClose</span> | <span class="prop-type">func |  | Callback fired when the component requests to be closed.<br><br>**Signature:**<br>`function(event: object) => void`<br>*event:* The event source of the callback |
| <span class="prop-name">onEnter</span> | <span class="prop-type">func |  | Callback fired before the dialog enters. |
| <span class="prop-name">onEntered</span> | <span class="prop-type">func |  | Callback fired when the dialog has entered. |
| <span class="prop-name">onEntering</span> | <span class="prop-type">func |  | Callback fired when the dialog is entering. |
| <span class="prop-name">onEscapeKeyDown</span> | <span class="prop-type">func |  | Callback fired when the escape key is pressed, `disableKeyboard` is false and the modal is in focus. |
| <span class="prop-name">onExit</span> | <span class="prop-type">func |  | Callback fired before the dialog exits. |
| <span class="prop-name">onExited</span> | <span class="prop-type">func |  | Callback fired when the dialog has exited. |
| <span class="prop-name">onExiting</span> | <span class="prop-type">func |  | Callback fired when the dialog is exiting. |
| <span class="prop-name required">open *</span> | <span class="prop-type">bool |  | If `true`, the Dialog is open. |
| <span class="prop-name">PaperProps</span> | <span class="prop-type">object |  | Properties applied to the `Paper` element. |
| <span class="prop-name">transition</span> | <span class="prop-type">union:&nbsp;string&nbsp;&#124;<br>&nbsp;func<br> | <span class="prop-default">Fade</span> | Transition component. |
| <span class="prop-name">transitionDuration</span> | <span class="prop-type">union:&nbsp;number&nbsp;&#124;<br>&nbsp;{enter?: number, exit?: number}<br> | <span class="prop-default">{ enter: duration.enteringScreen, exit: duration.leavingScreen }</span> | The duration for the transition, in milliseconds. You may specify a single timeout for all transitions, or individually with an object. |

Any other properties supplied will be [spread to the root element](/guides/api#spread).

## CSS API

You can override all the class names injected by React-Material thanks to the `classes` property.
This property accepts the following keys:
- `root`
- `paper`
- `paperWidthXs`
- `paperWidthSm`
- `paperWidthMd`
- `paperFullWidth`
- `paperFullScreen`

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](http://git.dev.sh.ctripcorp.com/sixthquake/react-material/tree/v1-beta/packages/material-ui/src/Dialog/Dialog.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `MuiDialog`.

## Inheritance

The properties of the [Modal](/api/modal) component are also available.

## Demos

- [Dialogs](/demos/dialogs)

