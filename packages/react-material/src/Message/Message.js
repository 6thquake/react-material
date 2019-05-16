import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '../styles/withStyles';
import Snackbar from '../Snackbar';
import { Fade, Slide, Collapse, Grow, Zoom } from '../transitions';

const styles = theme => ({
  snackbar: {
    margin: theme.spacing.unit,
  },
});
class Message extends Component {
  _transition = props => {
    switch (this.props.animation) {
      case 'fade':
        return <Fade {...props} />;
        break;
      case 'slide':
        return <Slide direction="up" {...props} />;
        break;
      case 'collapse':
        return <Collapse {...props} />;
        break;
      case 'grow':
        return <Grow {...props} />;
        break;
      case 'zoom':
        return <Zoom {...props} />;
        break;
      default:
        return <Fade {...props} />;
    }
  };

  render() {
    const { open, action, onClose, anchorOrigin, classes } = this.props;
    return (
      <Snackbar
        {...classes}
        TransitionComponent={this._transition}
        open={open}
        anchorOrigin={anchorOrigin}
        onClose={onClose}
        message={this.props.children}
        action={action}
      />
    );
  }
}
Message.propTypes = {
  /**
   * This is usually about message open or close
   */
  action: PropTypes.element,
  /**
   * This is usually an animation of open or close the message,include slide、collapse、fade、grow、zoom
   */
  anchorOrigin: PropTypes.object,
  /**
   * This is usually about message action
   */
  animation: PropTypes.string,
  /**
   * The anchor of the Message.
   */
  open: PropTypes.bool.isRequired,
};
Message.defaultProps = {
  open: false,
  animation: 'fade',
  action: null,
  anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
};
export default withStyles(styles, { name: 'RMMessage' })(Message);
