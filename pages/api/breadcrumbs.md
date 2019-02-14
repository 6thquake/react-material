---
filename: /packages/material-ui/lab/src/Breadcrumbs/Breadcrumbs.js
title: Breadcrumbs API
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# Breadcrumbs

<p class="description">The API documentation of the Breadcrumbs React component.</p>



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name required">children *</span> | <span class="prop-type">node |   | The breadcrumb children. |
| <span class="prop-name">classes</span> | <span class="prop-type">object |   | Override or extend the styles applied to the component. See [CSS API](#css-api) below for more details. |
| <span class="prop-name">component</span> | <span class="prop-type">componentPropType | <span class="prop-default">'nav'</span> | The component used for the root node. Either a string to use a DOM element or a component. By default, it maps the variant to a good default headline component. |
| <span class="prop-name">itemsAfterCollapse</span> | <span class="prop-type">number | <span class="prop-default">1</span> | If max items is exceeded, the number of items to show after the ellipsis. |
| <span class="prop-name">itemsBeforeCollapse</span> | <span class="prop-type">number | <span class="prop-default">1</span> | If max items is exceeded, the number of items to show before the ellipsis. |
| <span class="prop-name">maxItems</span> | <span class="prop-type">number | <span class="prop-default">8</span> | Specifies the maximum number of breadcrumbs to display. When there are more than the maximum number, only the first and last will be shown, with an ellipsis in between. |
| <span class="prop-name">separator</span> | <span class="prop-type">node | <span class="prop-default">'/'</span> | Custom separator node. |

Any other properties supplied will be spread to the root element (native element).

