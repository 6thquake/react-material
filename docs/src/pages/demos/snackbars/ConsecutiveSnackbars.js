import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import Button from '@6thquake/react-material/Button';
import Snackbar from '@6thquake/react-material/Snackbar';
import IconButton from '@6thquake/react-material/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
});

class ConsecutiveSnackbars extends React.Component {
  queue = [];

  state = {
    open: false,
    messageInfo: {},
  };

  handleClick = message => () => {
    this.queue.push({
      message,
      key: new Date().getTime(),
    });

    if (this.state.open) {
      // immediately begin dismissing current message
      // to start showing new one
      this.setState({ open: false });
    } else {
      this.processQueue();
    }
  };

  processQueue = () => {
    if (this.queue.length > 0) {
      this.setState({
        messageInfo: this.queue.shift(),
        open: true,
      });
    }
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };

  handleExited = () => {
    this.processQueue();
  };

  render() {
    const { classes } = this.props;
    const { message, key } = this.state.messageInfo;
    return (
      <div>
        <Button onClick={this.handleClick('message a')}>Show message A</Button>
        <Button onClick={this.handleClick('message b')}>Show message B</Button>
        <Snackbar
          key={key}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          onExited={this.handleExited}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{message}</span>}
          action={[
            <Button key="undo" color="secondary" size="small" onClick={this.handleClose}>
              UNDO
            </Button>,
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}

ConsecutiveSnackbars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ConsecutiveSnackbars);
