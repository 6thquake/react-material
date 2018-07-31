import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import Video from '@6thquake/react-material/Video';

const styles = theme => ({
  root: theme.mixins.gutters({
    padding: 0,
    width: '100%',
    height: 600,
  }),
});

class App extends React.Component {
  ended() {
    console.log('finshed');
  }

  pause() {
    this.refs.videopause.pause();
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Video
          autoplay={true}
          sources={[{ src: 'https://vjs.zencdn.net/v/oceans.mp4', type: 'video/mp4' }]}
          onEnded={this.ended}
          ref="videopause"
        />
      </div>
    );
  }
}

export default withStyles(styles)(App);
