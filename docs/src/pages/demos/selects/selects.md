---
title: Select React component
components: Select, NativeSelect, Chip, AsyncSelect, CascadeSelect
---

# Selects

<p class="description">Select components are used for collecting user provided information from a list of options.</p>

## Simple Select

Menus are positioned over their emitting elements such that the currently selected menu item appears on top of the emitting element.

{{"demo": "pages/demos/selects/SimpleSelect.js"}}

## Native Select

As the user experience can be improved on mobile using the native select of the platform,
we allow such pattern.

{{"demo": "pages/demos/selects/NativeSelects.js"}}

## Multiple Select

The `Select` component can handle multiple selections.
It's enabled with the `multiple` property.

Like with the single selection, you can pull out the new value by accessing `event.target.value` in the `onChange` callback. It's always an array.

{{"demo": "pages/demos/selects/MultipleSelect.js"}}

# AsyncSelect
Asynchronous select with pagination and filter

{{"demo": "pages/demos/selects/AsyncSelect.js"}}

# PaginationSelect
Synchronize select with pagination and filter

{{"demo": "pages/demos/selects/FilterSelect.js"}}

## CascadeSelect

Select items by Cascading

{{"demo": "pages/demos/selects/CascadeSelect.js"}}

## With a Dialog

While it's discouraged by the Material Design specification, you can use a select inside a dialog.

{{"demo": "pages/demos/selects/DialogSelect.js"}}

## Text Fields

The `TextField` wrapper component is a complete form control including a label, input and help text. You can find an example with the select mode [in this section](/demos/text-fields#textfield).

## Controlled open Select

{{"demo": "pages/demos/selects/ControlledOpenSelect.js"}}
