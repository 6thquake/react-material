import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../styles';
import Dialog from '../Dialog';
import DialogTitle from '../DialogTitle';
import Button from '../Button';
import DialogActions from '../DialogActions';
import DialogContent from '../DialogContent';
import DialogContentText from '../DialogContentText';

import { Clear } from '@material-ui/icons';
import { Fade, Slide, Collapse, Grow, Zoom } from '../transitions';

const styles = theme => ({
  title: {
    backgroundColor: 'rgb(16,108,200)',
    color: 'white',
    fontSize: '1rem',
    fontWeight: '700',
  },
  icon: {
    color: 'white',
    float: 'right',
    '&:hover': {
      opacity: 0.5,
    },
  },
  contentRoot: {
    paddingTop: theme.spacing.unit * 3,
  },
  actionRoot: {
    margin: 0,
    padding: `${theme.spacing.unit}px  ${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px 0`,
  },
  actionRootBtn: {
    margin: `0 0 0 ${theme.spacing.unit}px`,
  },
});

class Modal extends Component {
  static propTypes = {
    /**
     * Decide modal open or close,	If true, the modal is open.
     */
    open: PropTypes.bool.isRequired,
    /**
     * This is  modal title
     */
    label: PropTypes.string,
    /**
     * This is usually an animation of open or close the modal,include slide、collapse、fade、grow、zoom
     */
    animation: PropTypes.oneOf(['slide', 'collapse', 'fade', 'grow', 'zoom']),
    /**
     * onClose callback function
     */
    onClose: PropTypes.func,
    /**
     * max content height
     */
    maxHeight: PropTypes.number,
  };

  static defaultProps = {
    maxHeight: 500,
    open: false,
    label: '',
    animation: 'fade',
  };

  transition = props => {
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

  handleCancel() {
    this.props.onClose('cancel');
  }

  handleOK() {
    this.props.onClose('ok');
  }

  render() {
    const { classes, label, onClose, maxHeight,actions, ...other} = this.props;

    return (
      <Dialog
        TransitionComponent={this.transition}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        {...this.props}
      >
        <DialogTitle className={classes.title} disableTypography={true}>
          {label}
          <Clear className={classes.icon} onClick={onClose} />
        </DialogTitle>

        <DialogContent
          style={{ maxHeight: `${maxHeight}px` }}
          classes={{ root: classes.contentRoot }}
        >
          {this.props.children}
        </DialogContent>

        <DialogActions classes={{ root: classes.actionRoot }}>
         {actions.map(actionBtn => {
           return actionBtn
         })}
        </DialogActions>
      </Dialog>
    );
  }
}
export default withStyles(styles, { name: 'RMModal' })(Modal);
