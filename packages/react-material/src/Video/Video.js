import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, withStyles } from '../styles';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const styles = {};

class Video extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <video
        className="video-js vjs-default-skin vjs-big-play-centered"
        controls
        preload="auto"
        width="1000"
        height="600"
        poster="http://video-js.zencoder.com/oceans-clip.png"
        data-setup="{}"
      >
        <source src={this.props.source} type="video/mp4" />
        <source src={this.props.source} type="video/webm" />
        <source src={this.props.source} type="video/ogg" />
        <track kind="captions" src="demo.captions.vtt" srcLang="en" label="English" />

        <track kind="subtitles" src="demo.captions.vtt" srcLang="en" label="English" />
      </video>
    );
  }
}

Video.propTypes = {
  /**
   * Source is a link to video
   */
  source: PropTypes.string,
};
export default withStyles(styles, { name: 'RMVideo' })(Video);
