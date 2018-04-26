---
filename: /packages/material-ui/src/AppBar/AppBar.js
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# Popconfirm



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name required">children *</span> | <span class="prop-type">node |  | The anchor of the component. |
| <span class="prop-name">onCancel</span> | <span class="prop-type">func |  | Callback fired when the component requests to be closed.<br><br>**Signature:**<br>`function(event: object) => void`<br>*event:* The event source of the callback |
| <span class="prop-name">onConfirm</span> | <span class="prop-type">func |  | Callback fired when the component requests to be closed.<br><br>**Signature:**<br>`function(event: object) => void`<br>*event:* The event source of the callback |
| <span class="prop-name ">cancelText *</span> | <span class="prop-type">String |  <span class="prop-default">cancel | The text of the cancel button. 
| <span class="prop-name ">confirmText *</span> | <span class="prop-type">String  | <span class="prop-default">ok | The text of the confirm button. |
| <span class="prop-name required">content *</span> | <span class="prop-type">String |  | tips text|
| <span class="prop-name">anchorOrigin</span> | <span class="prop-type">{horizontal?: union:&nbsp;number&nbsp;&#124;<br>&nbsp;enum:&nbsp;'left'&nbsp;&#124;<br>&nbsp;'center'&nbsp;&#124;<br>&nbsp;'right'<br><br>, vertical?: union:&nbsp;number&nbsp;&#124;<br>&nbsp;enum:&nbsp;'top'&nbsp;&#124;<br>&nbsp;'center'&nbsp;&#124;<br>&nbsp;'bottom'<br><br>} | <span class="prop-default">{  vertical: 'top',  horizontal: 'center',}</span> | This is the point on the anchor where the popconfirm's `anchorEl` will attach to. <br>Options: vertical: [top, center, bottom]; horizontal: [left, center, right]. |
| <span class="prop-name">transformOrigin</span> | <span class="prop-type">{horizontal?: union:&nbsp;number&nbsp;&#124;<br>&nbsp;enum:&nbsp;'left'&nbsp;&#124;<br>&nbsp;'center'&nbsp;&#124;<br>&nbsp;'right'<br><br>, vertical?: union:&nbsp;number&nbsp;&#124;<br>&nbsp;enum:&nbsp;'top'&nbsp;&#124;<br>&nbsp;'center'&nbsp;&#124;<br>&nbsp;'bottom'<br><br>} | <span class="prop-default">{  vertical: 'bottom',  horizontal: 'center',}</span> | This is the point on the popconfirm which will attach to the anchor's origin.<br>Options: vertical: [top, center, bottom, x(px)]; horizontal: [left, center, right, x(px)]. |


Any other properties supplied will be [spread to the root element](/guides/api#spread).

## Inheritance

The properties of the [Popover](/api/Popover) component are also available.

## Demos

- [Popconfirm](/demos/popconfirm)

