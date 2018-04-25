---
components: Dialog, DialogTitle, DialogContent, DialogActions, Slide
---

# Dialogs

[Dialogs](https://material.io/guidelines/components/dialogs.html) inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks.

Dialogs contain text and UI controls.
They retain focus until dismissed or a required action has been taken.
Use dialogs sparingly because they are interruptive.

## Simple Dialogs

Simple dialogs can provide additional details or actions about a list item.
For example, they can display avatars, icons, clarifying subtext, or orthogonal actions (such as adding an account).

Touch mechanics:
- Choosing an option immediately commits the option and closes the menu
- Touching outside of the dialog, or pressing Back, cancels the action and closes the dialog

{{"demo": "pages/demos/dialogs/SimpleDialog.js"}}

## Alerts

Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.

Most alerts don't need titles.
They summarize a decision in a sentence or two by either:
- Asking a question (e.g. "Delete this conversation?")
- Making a statement related to the action buttons

Use title bar alerts only for high-risk situations, such as the potential loss of connectivity.
Users should be able to understand the choices based on the title and button text alone.

If a title is required:

- Use a clear question or statement with an explanation in the content area, such as "Erase USB storage?".
- Avoid apologies, ambiguity, or questions, such as “Warning!” or “Are you sure?”

{{"demo": "pages/demos/dialogs/AlertDialog.js"}}

You can also swap out the transition, the next example uses `Slide`.

{{"demo": "pages/demos/dialogs/AlertDialogSlide.js"}}

## Confirmation dialogs

Confirmation dialogs require users to explicitly confirm their choice before an option is committed.
For example, users can listen to multiple ringtones but only make a final selection upon touching “OK.”

Touching “Cancel” in a confirmation dialog, or pressing Back, cancels the action, discards any changes, and closes the dialog.

{{"demo": "pages/demos/dialogs/ConfirmationDialog.js"}}

## Full-screen dialogs

{{"demo": "pages/demos/dialogs/FullScreenDialog.js"}}

## Form dialogs

Form dialogs allow users to fill out form fields within a dialog.
For example, if your site prompts for potential subscribers to fill in their email address, they can fill out the email field and touch 'Submit'

{{"demo": "pages/demos/dialogs/FormDialog.js"}}

## Responsive full-screen

You may make a `Dialog` responsively full screen the dialog using `withMobileDialog`. By default, `withMobileDialog()(Dialog)` responsively full screens *at or below* the `sm` [screen size](/layout/basics).

{{"demo": "pages/demos/dialogs/ResponsiveDialog.js"}}

## Accessibility

Be sure to add `aria-labelledby="id..."`, referencing the modal title, to the `Dialog`. Additionally, you may give a description of your modal dialog with the `aria-describedby="id..."` property on the `Dialog`.
