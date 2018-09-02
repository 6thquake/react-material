# layout
<p class="description">Handling the overall layout of a page.</p>

## Specification

### Size
The first level navigation is inclined left near a logo, and the secondary menu is inclined right.

* Top Navigation (almost systems): the height of the first level navigation 64px, the second level navigation 48px.
* Top Navigation(contents page): the height of the first level navigation 80px, the second level navigation 56px.
* Calculation formula of a top navigation: 48+8n.
* Calculation formula of an aside navigation: 200+8n.

### Interaction rules
* The first level navigation and the last level navigation should be distincted by visualization;
* The current item should have the highest priority of visualization;
* When the current navigation item is collapsed, the stlye of the current navigation item will be applied to its parent level;
* The left side navigation bar has support for both the accordion and expanding styles, you can choose the one that fits your case best.

### Visualization rules
Style of a navigation should conform to its level.

* Emphasis by colorblock

When background color is a deep color, you can use this pattern for the parent level navigation item of current page.

* The highlight match stick

When background color is a light color, you can use this pattern for the current page navigation item, we recommed using it for the last item of the navigation path.

* Hightlighted font

From the visualization aspect, hightlighted font is stronger than colorblock, this pattern is often used for the parent level of the current item.

* Enlarge the size of the font

12px、14px is a standard font size of navigations，14px is used for the first and the second level of the navigation. You can choose a appropriate font size in terms of the level of your navigation.

* Component Overview#
* Layout: The layout wrapper, in which Header Sider Content Footer or Layout itself can be nested, and can be placed in any parent container.
* Header: The top layout with default style, in which any element can be nested, and must be placed in Layout.
* Sider: The sidebar with default style and basic functions, in which any element can be nested, and must be placed in Layout.
* Content: The content layout with default style, in which any element can be nested, and must be placed in Layout.
* Footer: The bottom layout with default style, in which any element can be nested, and must be placed in Layout.

> Based on flex layout, please pay attention to the compatibility.

## Header-Content-Footer

The most basic "header-content-footer" layout.

Generally, the mainnav is placed at the top of the page, and includes the logo, the first level navigation, and the secondary menu (users, settings, notifications) from left to right in it. We always put contents in a fixed size navigation (eg: 1200px), the layout of the whole page is stable, it's not affected by viewing area.

Top-bottom structure is conform with the top-bottom viewing habit, it's a classical navigation pattern of websites. This pattern demonstrates efficiency in the main workarea, while using some vertical space. And because the horizontal space of the navigation is limited, this pattern is not suitable for cases when the first level navigation contains many elements or links

{{"demo": "pages/layout/pro/Top.js"}}

## Fixed Header

Fixed Header is generally used to fix the top navigation to facilitate page switching.

{{"demo": "pages/layout/pro/Fixed.js"}}

## Sider

Two-columns layout. The sider menu can be collapsed when horizontal space is limited.

Generally, the mainnav is placed on the left side of the page, and the secondary menu is placed on the top of the working area. Contents will adapt the layout to the viewing area to improve the horizontal space usage, while the layout of the whole page is not stable.

The level of the aside navigation is scalable. The first, second, and third level navigations could be present more fluently and relevantly, and aside navigation can be fixed, allowing the user to quickly switch and spot the current position, improving the user experience. However, this navigation occupies some horizontal space of the contents
{{"demo": "pages/layout/pro/Side.js"}}

## Fixed Sider

When dealing with long content, a fixed sider can provide a better user experience.

{{"demo": "pages/layout/pro/FixedSide.js"}}




