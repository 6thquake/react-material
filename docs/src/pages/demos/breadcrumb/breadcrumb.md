---
title: Breadcrumb React component
components: Breadcrumb, BreadcrumbItem
---

# Breadcrumb

<p class="description">A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy.</p>

## When To Use
* When the system has more than two layers in a hierarchy.

* When you need to inform the user of where they are.

* When the user may need to navigate back to a higher level.

* When the application has multi-layer architecture.


## Examples

### Integration with react-router@4 or other router.
{{"demo": "pages/demos/breadcrumb/Breadcrumb.js"}}

### Configuring the Separator
* The separator can be customized by setting the separator property: separator=">"
{{"demo": "pages/demos/breadcrumb/BreadcrumbItems.js"}}

### With an Icon, change the font color
* The icon should be placed in front of the text.
* There are three colors to choose: default, white, black.
{{"demo": "pages/demos/breadcrumb/Breadcrumb2.js"}}