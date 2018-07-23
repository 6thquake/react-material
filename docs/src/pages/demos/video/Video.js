import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import Video from '@6thquake/react-material/Video';
import videojs from 'video.js';
import { loadCSS } from 'fg-loadcss/src/loadCSS';
import 'babel-polyfill';

if (process.browser) {
  loadCSS('/static/video-js.css', document.querySelector('#insertion-point-jss'));
}

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
  }),
});

function video() {
  return (
    <div id="foo">
      <Video source={'http://vjs.zencdn.net/v/oceans.mp4'} />
    </div>
  );
}

export default withStyles(styles)(video);
