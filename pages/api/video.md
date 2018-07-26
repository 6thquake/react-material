---
filename: /packages/react-material/src/Video/Video.js
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# Video



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">autoplay</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | whether the video should autoplay or not. |
| <span class="prop-name">controls</span> | <span class="prop-type">bool | <span class="prop-default">true</span> | Determines whether or not the player has controls that the user can interact with. Without controls the only way to start the video playing is with the autoplay attribute or through the Player API. |
| <span class="prop-name">loop</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | Causes the video to start over as soon as it ends. |
| <span class="prop-name">muted</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | Causes the video to start over as soon as it ends. |
| <span class="prop-name">poster</span> | <span class="prop-type">string |  | A URL to an image that displays before the video begins playing. This is often a frame of the video or a custom title screen. As soon as the user hits "play" the image will go away. |
| <span class="prop-name">preload</span> | <span class="prop-type">enum:&nbsp;'auto'&nbsp;&#124;<br>&nbsp;'metadata'&nbsp;&#124;<br>&nbsp;'none'<br> | <span class="prop-default">'auto'</span> | Suggests to the browser whether or not the video data should begin downloading as soon as the &lt;video> element is loaded. Supported values are:<br>'auto' Start loading the video immediately (if the browser supports it). Some mobile devices will not preload the video in order to protect their users' bandwidth/data usage. This is why the value is called 'auto' and not something more conclusive like 'true'.<br>This tends to be the most common and recommended value as it allows the browser to choose the best behavior.<br>'metadata' Load only the meta data of the video, which includes information like the duration and dimensions of the video. Sometimes, the meta data will be loaded by downloading a few frames of video.<br>'none' Don't preload any data. The browser will wait until the user hits "play" to begin downloading. |
| <span class="prop-name">src</span> | <span class="prop-type">string |  | The source URL to a video source to embed. |
| <span class="prop-name">aspectRatio</span> | <span class="prop-type">string |  | Puts the player in fluid mode and the value is used when calculating the dynamic size of the player. The value should represent a ratio - two numbers separated by a colon (e.g. "16:9" or "4:3"). |
| <span class="prop-name">fluid</span> | <span class="prop-type">bool | <span class="prop-default">false</span> | When true, the Video.js player will have a fluid size. In other words, it will scale to fit its container. |
| <span class="prop-name">inactivityTimeout</span> | <span class="prop-type">number | <span class="prop-default">0</span> | The inactivityTimeout determines how many milliseconds of inactivity is required before declaring the user inactive. A value of 0 indicates that there is no inactivityTimeout and the user will never be considered inactive. |
| <span class="prop-name">language</span> | <span class="prop-type">string |  | This sets the initial language for a player, but it can always be changed. |
| <span class="prop-name">onReady</span> | <span class="prop-type">func |  | This handler will execute when the video is ready. |
| <span class="prop-name">sources</span> | <span class="prop-type">arrayOf |  | An array of objects that mirror the native &lt;video> element's capability to have a series of child &lt;source> elements. This should be an array of objects with the src and type properties. the property of type has these options: ['video/mp4', 'video/webm', 'video/ogg']. |

Any other properties supplied will be [spread to the root element](/guides/api#spread).

## Demos

- [Video](/demos/video)

