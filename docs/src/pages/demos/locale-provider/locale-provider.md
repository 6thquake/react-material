---
components: LocaleProvider, Popconfirm, Button, ButtonGroup
---

# LocalProvider
LocaleProvider provides a uniform localization support for built-in text of components.
LocaleProvider takes use of context, a feature of React, to accomplish global effectiveness by wrapping the app only once.


#### Examples

{{"demo": "pages/demos/locale-provider/LocaleProvider.js"}}

# withLocale & LocaleConsumer
#### `withLocale = ( [ name: example ] ) => ( Component ) => {}`
Link a locale config with a component. It does not modify the component passed to it; instead, it returns a new component with some additional properties(The locale and value we provided at LocaleProvider). 
LocaleConsumer has the same function, but different ways to use. 
### Examples
{{"demo": "pages/demos/locale-provider/withLocale.js"}}


