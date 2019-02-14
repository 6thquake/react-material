---
filename: /packages/react-material/src/Modal/ModalBase.js
title: ModalBase API
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# ModalBase

<p class="description">The API documentation of the ModalBase React component.</p>



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">open</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | Decide modal open or close,	If true, the modal is open. |
| <span class="prop-name">label</span> | <span class="prop-type">string | <span class="prop-default">''</span> |  |
| <span class="prop-name">title</span> | <span class="prop-type">string | <span class="prop-default">''</span> | This is the modal's title |
| <span class="prop-name">animation</span> | <span class="prop-type">enum:&nbsp;'slide', 'collapse', 'fade', 'grow', 'zoom'<br> | <span class="prop-default">'zoom'</span> | This is usually an animation of open or close the modal,include slide、collapse、fade、grow、zoom |
| <span class="prop-name">onClose</span> | <span class="prop-type">func | <span class="prop-default">() => {}</span> | onClose callback function |
| <span class="prop-name">scroll</span> | <span class="prop-type">enum:&nbsp;'paper'&nbsp;&#124;<br>&nbsp;'body'<br> | <span class="prop-default">'paper'</span> | scroll type |
| <span class="prop-name">actions</span> | <span class="prop-type">array | <span class="prop-default">[]</span> | actions button array |

Any other properties supplied will be spread to the root element (native element).

