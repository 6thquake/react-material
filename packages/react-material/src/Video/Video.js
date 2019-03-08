import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, withStyles } from '../styles';
import videojs from 'video.js';

if (process.browser) {
  const videocss = require('!style-loader!css-loader!video.js/dist/video-js.css');
  const styleNode = document.createElement('style');
  if (document.head) {
    document.head.appendChild(styleNode);
    styleNode.textContent = videocss;
  }
}

const styles = theme => ({
  root: {},
});

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.ended = this.ended.bind(this);
    this.pause = this.pause.bind(this);
  }

  componentDidMount() {
    // instantiate Video.js
    this.player = videojs(
      this.videoNode,
      {
        techOrder: ['html5', 'flash', 'other supported tech'],
        width: '100%',
        height: '100%',
        ...this.props,
      },
      this.props.onReady,
    );
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  ended() {
    if (this.props.onEnded) {
      this.props.onEnded();
    }
  }

  play() {
    this.videoNode.play();
  }

  pause() {
    this.videoNode.pause();
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    const { classes } = this.props;
    return (
      <div data-vjs-player style={{ width: '100%', height: '100%' }}>
        <video
          ref={node => (this.videoNode = node)}
          className="video-js vjs-default-skin vjs-big-play-centered"
          onEnded={this.ended}
        >
          <p className="vjs-no-js">
            To view this video please enable JavaScript, and consider upgrading to a web browser
            that supports HTML5 video.
          </p>
        </video>
      </div>
    );
  }
}

Video.propTypes = {
  /**
   * whether the video should autoplay or not.
   */
  aspectRatio: PropTypes.string,
  /**
   * Determines whether or not the player has controls that the user can interact with. Without controls the only way to start the video playing is with the autoplay attribute or through the Player API.
   */
  autoplay: PropTypes.bool,
  /**
   * Causes the video to start over as soon as it ends.
   */
  controls: PropTypes.bool,
  /**
   * Causes the video to start over as soon as it ends.
   */
  fluid: PropTypes.bool,
  /**
   * A URL to an image that displays before the video begins playing. This is often a frame of the video or a custom title screen. As soon as the user hits "play" the image will go away.
   */
  inactivityTimeout: PropTypes.number,
  /**
   * Suggests to the browser whether or not the video data should begin downloading as soon as the <video> element is loaded. Supported values are:
   *
   * 'auto'
   * Start loading the video immediately (if the browser supports it). Some mobile devices will not preload the video in order to protect their users' bandwidth/data usage. This is why the value is called 'auto' and not something more conclusive like 'true'.
   *
   * This tends to be the most common and recommended value as it allows the browser to choose the best behavior.
   *
   * 'metadata'
   * Load only the meta data of the video, which includes information like the duration and dimensions of the video. Sometimes, the meta data will be loaded by downloading a few frames of video.
   *
   * 'none'
   * Don't preload any data. The browser will wait until the user hits "play" to begin downloading.
   */
  language: PropTypes.string,
  /**
   * The source URL to a video source to embed.
   */
  loop: PropTypes.bool,
  /**
   * Puts the player in fluid mode and the value is used when calculating the dynamic size of the player. The value should represent a ratio - two numbers separated by a colon (e.g. "16:9" or "4:3").
   */
  muted: PropTypes.bool,
  /**
   * When true, the Video.js player will have a fluid size. In other words, it will scale to fit its container.
   */
  onEnded: PropTypes.func,
  /**
   * The inactivityTimeout determines how many milliseconds of inactivity is required before declaring the user inactive. A value of 0 indicates that there is no inactivityTimeout and the user will never be considered inactive.
   */
  onReady: PropTypes.func,
  /**
   * This sets the initial language for a player, but it can always be changed.
   */
  poster: PropTypes.string,
  /**
   * This handler will execute when the video is ready.
   */
  preload: PropTypes.oneOf(['auto', 'metadata', 'none']),
  /**
   * When the video is played over, this function will be executed
   */
  sources: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      type: PropTypes.oneOf([
        'video/mp4',
        'video/webm',
        'video/ogg',
        'application/x-mpegURL',
        'rtmp/mp4',
        'rtmp/flv',
      ]),
    }),
  ),
  /**
   * An array of objects that mirror the native <video> element's capability to have a series of child <source> elements. This should be an array of objects with the src and type properties. the property of type has these options: ['video/mp4', 'video/webm', 'video/ogg'].
   */
  src: PropTypes.string,
};

Video.defaultProps = {
  autoplay: false,
  controls: true,
  loop: false,
  muted: false,
  preload: 'auto',
  fluid: false,
  inactivityTimeout: 0,
};
export default withStyles(styles, { name: 'RMVideo' })(Video);
