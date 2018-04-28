---
filename: /packages/material-ui/src/Toolbar/Toolbar.js
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# Transfer



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">left</span> | <span class="prop-type">Array of Object |  | eg.[{name:'R1',id:'r1'}], must has name and id |</span>
| <span class="prop-name">right</span> | <span class="prop-type">Array of Object |  | eg.[{name:'R1',id:'r1'}], must has name and id |</span>
| <span class="prop-name">classes</span> | <span class="prop-type">object |  | Useful to extend the style applied to components. |</span>
| <span class="prop-name">onChange</span> | <span class="prop-type">function |  | callback when data changed |</span>

Any other properties supplied will be [spread to the root element](/guides/api#spread).

## CSS API

You can override all the class names injected by React-Material thanks to the `classes` property.
This property accepts the following keys:
- `root`
- `lists`
- `leftlists`
- `rightlists`
- `btngrp`

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](http://git.dev.sh.ctripcorp.com/sixthquake/react-material/tree/develop/packages/material-ui/src/Toolbar/Toolbar.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `MuiToolbar`.

## Demos

- [transfer](/demos/transfer)

