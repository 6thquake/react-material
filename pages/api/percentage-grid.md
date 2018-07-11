---
filename: /packages/react-material/src/Grid/PercentageGrid.js
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# PercentageGrid



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">children</span> | <span class="prop-type">node |  | The content of the component. |
| <span class="prop-name">classes</span> | <span class="prop-type">object |  | Override or extend the styles applied to the component. See [CSS API](#css-api) below for more details. |
| <span class="prop-name">component</span> | <span class="prop-type">union:&nbsp;string&nbsp;&#124;<br>&nbsp;func<br> | <span class="prop-default">'div'</span> | The component used for the root node. Either a string to use a DOM element or a component. |
| <span class="prop-name">container</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If `true`, the component will have the flex *container* behavior. You should be wrapping *items* with a *container*. |
| <span class="prop-name">hidden</span> | <span class="prop-type">object |  | If provided, will wrap with [Hidden](/api/hidden) component and given properties. |
| <span class="prop-name">item</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | If `true`, the component will have the flex *item* behavior. You should be wrapping *items* with a *container*. |
| <span class="prop-name">lg</span> | <span class="prop-type">union:&nbsp;enum:&nbsp;0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12<br>&nbsp;&#124;<br>&nbsp;object<br> | <span class="prop-default">0</span> | Defines the number of grids the component is going to use. It's applied for the `lg` breakpoint and wider screens if not overridden. |
| <span class="prop-name">md</span> | <span class="prop-type">union:&nbsp;enum:&nbsp;0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12<br>&nbsp;&#124;<br>&nbsp;object<br> | <span class="prop-default">0</span> | Defines the number of grids the component is going to use. It's applied for the `md` breakpoint and wider screens if not overridden. |
| <span class="prop-name">sm</span> | <span class="prop-type">union:&nbsp;enum:&nbsp;0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12<br>&nbsp;&#124;<br>&nbsp;object<br> | <span class="prop-default">0</span> | Defines the number of grids the component is going to use. It's applied for the `sm` breakpoint and wider screens if not overridden. |
| <span class="prop-name">spacing</span> | <span class="prop-type">enum:&nbsp;0, 8, 16, 24, 40<br> | <span class="prop-default">0</span> | Defines the space between the type `item` component. It can only be used on a type `container` component. |
| <span class="prop-name">xl</span> | <span class="prop-type">union:&nbsp;enum:&nbsp;0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12<br>&nbsp;&#124;<br>&nbsp;object<br> | <span class="prop-default">0</span> | Defines the number of grids the component is going to use. It's applied for the `xl` breakpoint and wider screens. |
| <span class="prop-name">xs</span> | <span class="prop-type">union:&nbsp;enum:&nbsp;0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12<br>&nbsp;&#124;<br>&nbsp;object<br> | <span class="prop-default">0</span> | Defines the number of grids the component is going to use. It's applied for all the screen sizes with the lowest priority. |
| <span class="prop-name">offset</span> | <span class="prop-type">enum:&nbsp;1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12<br> |  | The number of cells to offset Col from the left |
| <span class="prop-name">pull</span> | <span class="prop-type">enum:&nbsp;1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12<br> |  | The number of cells that raster is moved to the left |
| <span class="prop-name">push</span> | <span class="prop-type">enum:&nbsp;1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12<br> |  | The number of cells that raster is moved to the right |
| <span class="prop-name">span</span> | <span class="prop-type">enum:&nbsp;1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12<br> |  | Raster number of cells to occupy |

Any other properties supplied will be [spread to the root element](/guides/api#spread).

## CSS API

You can override all the class names injected by React-Material thanks to the `classes` property.
This property accepts the following keys:
- `container`
- `item`
- `spacing-xs-8`
- `spacing-xs-16`
- `spacing-xs-24`
- `spacing-xs-40`
- `grid-xs`
- `grid-xs-1`
- `offset-xs-1`
- `push-xs-1`
- `pull-xs-1`
- `grid-xs-2`
- `offset-xs-2`
- `push-xs-2`
- `pull-xs-2`
- `grid-xs-3`
- `offset-xs-3`
- `push-xs-3`
- `pull-xs-3`
- `grid-xs-4`
- `offset-xs-4`
- `push-xs-4`
- `pull-xs-4`
- `grid-xs-5`
- `offset-xs-5`
- `push-xs-5`
- `pull-xs-5`
- `grid-xs-6`
- `offset-xs-6`
- `push-xs-6`
- `pull-xs-6`
- `grid-xs-7`
- `offset-xs-7`
- `push-xs-7`
- `pull-xs-7`
- `grid-xs-8`
- `offset-xs-8`
- `push-xs-8`
- `pull-xs-8`
- `grid-xs-9`
- `offset-xs-9`
- `push-xs-9`
- `pull-xs-9`
- `grid-xs-10`
- `offset-xs-10`
- `push-xs-10`
- `pull-xs-10`
- `grid-xs-11`
- `offset-xs-11`
- `push-xs-11`
- `pull-xs-11`
- `grid-xs-12`
- `offset-xs-12`
- `push-xs-12`
- `pull-xs-12`

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](http://git.dev.sh.ctripcorp.com/sixthquake/react-material/tree/develop/packages/react-material/src/Grid/PercentageGrid.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `RMGrid`.

## Demos

- [Grid](/layout/grid)

