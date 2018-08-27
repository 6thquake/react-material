---
title: Portal React component
components: Portal
---

# Portal

<p class="description">The portal component renders its children into a new "subtree" outside of current component hierarchy.</p>

The children of the portal component will be appended to the `container` specified.

The component is used internally by the [`Modal`](/utils/modal) and [`Popper`](/utils/popper) components.
On the server, the content won't be rendered.
You have to wait for the client side reconciliation to see the children.

## Simple Portal

{{"demo": "pages/utils/portal/SimplePortal.js"}}
