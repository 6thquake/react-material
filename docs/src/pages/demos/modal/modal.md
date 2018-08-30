---
components: Modal, Modal2, ModalManager
---

# Modal

[Modal](https://material.io/guidelines/components/dialogs.html) inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks.

Modal contain text and UI controls.
They retain focus until dismissed or a required action has been taken.
Use dialogs sparingly because they are interruptive.

## Simple Modal

Simple Modal can provide additional details or actions about a list item.
For example, they can display avatars, icons, clarifying subtext, or orthogonal actions (such as adding an account).

Touch mechanics:
- Choosing an option immediately commits the option and closes the menu
- Touching outside of the dialog, or pressing Back, cancels the action and closes the dialog

{{"demo": "pages/demos/modal/Modal.js"}}

##  Modal Actions

{{"demo": "pages/demos/modal/ModalActions.js"}}

##  Modal method

Modal method include:
 * Modal.info
 * Modal.success
 * Modal.error
 * Modal.warning
 * Modal.confirm
{{"demo": "pages/demos/modal/Confirm.js"}}
