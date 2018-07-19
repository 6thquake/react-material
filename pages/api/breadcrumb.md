

<!--- This documentation is automatically generated, do not try to edit it. -->

# Breadcrumb



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name required">nameMap *</span> | <span class="prop-type">object |  | The map of all websites, eg. {       '/': {name:'home',icon:(&lt;Home/>)},       '/apps': {name:'Application List',icon:(&lt;Home/>)},       '/apps/1': {name:'Application1',icon:(&lt;Grade/>)},       '/apps/2': {name:'Application2',icon:(&lt;Lock/>)},       '/apps/1/detail': {name:'Detail',icon:''},       '/apps/2/detail': {name:'Detail',icon:''},     } |
| <span class="prop-name">currUrl</span> | <span class="prop-type">string |  | the Url of current Page,one of the keys of nameMap; Not required. when leaveout it will get window.location.url |
| <span class="prop-name">separator</span> | <span class="prop-type">string | <span class="prop-default">'/'</span> | the separator of breadcrumb |

Any other properties supplied will be [spread to the root element](/guides/api#spread).

## Demos

- [Breadcrumb](/demos/breadcrumb)

