---
components: StarVote
---

# StarVote

The [StarVote] 对评价进行展示。
对事物进行快速的评级操作。

{{"demo": "pages/demos/star-vote/StarVote.js"}}

## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">count</span> | <span class="prop-type">func |5 | total count of star |
| <span class="prop-name">value</span> | <span class="prop-type">value | <span class="prop-default"></span> |  current value，controlled value |
| <span class="prop-name">defaultValue</span> | <span class="prop-type">Number |0 | Tdefault value |
| <span class="prop-name">onChange(value: Number)</span> | <span class="prop-type">Function </span>|<span class="prop-default"></span>|callback|
| <span class="prop-name">allowHalf</span> | <span class="prop-type">Boolean </span> | false | if allowed half|
| <span class="prop-name">disabled</span> | <span class="prop-type">Boolean </span> | false | read only,can not  interact|