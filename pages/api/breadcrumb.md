---
filename: /packages/material-ui/src/breadcrumb/breadcrumb.js
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# breadcrumb



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">nameMap</span> | <span class="prop-type">Array of Object |  | {'/': {name:'home',icon:(<Home/>)},'/apps': {name:'Application List',icon:(<Home/>)}} |</span>
| <span class="prop-name">currUrl</span> | <span class="prop-type">string |  | '/app/32/detail' |</span>
| <span class="prop-name">showIcon</span> | <span class="prop-type">bool | false | showIcon or not |</span>
| <span class="prop-name">separator</span> | <span class="prop-type">string | / | the separator of breadcrumb |</span>

Any other properties supplied will be [spread to the root element](/guides/api#spread).

## CSS API

You can override all the class names injected by Material-UI thanks to the `classes` property.
This property accepts the following keys:
- `root`
- `item`
- `icon`
- `separator`

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](https://github.com/mui-org/material-ui/tree/v1-beta/packages/material-ui/src/Toolbar/Toolbar.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `MuiToolbar`.

## Demos

- [breadcrumb](/demos/breadcrumb)

