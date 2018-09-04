import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../styles';
import Dialog from '../Dialog';
import DialogTitle from '../DialogTitle';
import DialogActions from '../DialogActions';
import DialogContent from '../DialogContent';
import { Clear } from '@material-ui/icons';
import { Fade, Slide, Collapse, Grow, Zoom } from '../transitions';
import Button from '../Button';
import Typography from '../Typography';
import { fade } from '../styles/colorManipulator';
import Grid from '../Grid';
import Scrollbar from '../Scrollbar';

const styles = theme => ({
  title: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  close: {
    color: fade(theme.palette.primary.contrastText, 0.68),
    '&:hover': {
      color: theme.palette.primary.contrastText,
    },
  },
  contentRoot: {
    padding: `0px 0px`,
  },
  actionRoot: {
    margin: 0,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px ${theme.spacing.unit *
      2}px ${theme.spacing.unit * 2}px`,
  },
  actionRootBtn: {
    margin: `0 ${theme.spacing.unit}px 0 ${theme.spacing.unit}px`,
  },
  justifyActions: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
});

class Modal extends Component {
  handleOK() {
    this.props.onClose;
  }
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

  renderActions() {
    const { actions, onClose, classes } = this.props;

    if (actions === Modal.defaultProps.actions) {
      //没传actions
      return actions.map(Button =>
        React.cloneElement(Button, {
          onClick: onClose,
          classes: { root: classes.actionRootBtn },
        }),
      );
    } else if (actions.indexOf('-') == -1) {
      return actions;
    } else {
      return this.renderJustifyActions();
    }
  }

  renderJustifyActions() {
    const { actions, classes } = this.props;
    let index = actions.indexOf('-');
    let left = actions.slice(0, index);
    let right = actions.slice(index + 1);
    return (
      <div className={classes.justifyActions}>
        <div className={classes.left}>{left}</div>
        <div className={classes.right}>{right}</div>
      </div>
    );
  }

  render() {
    const { classes, label, onClose, height, actions, ...other } = this.props;

    let scrollProps = {};
    if (height) {
      scrollProps.autoHeightMin = height;
      scrollProps.autoHeightMax = height;
    }

    return (
      <Dialog
        TransitionComponent={this.transition}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        {...this.props}
      >
        <DialogTitle className={classes.title} disableTypography={true}>
          <Grid container direction="row" justify="space-between" alignItems="center">
            <Grid item>
              <Typography variant="title" color="inherit">
                {label}
              </Typography>
            </Grid>
            <Grid item>
              <Clear className={classes.close} onClick={onClose} />
            </Grid>
          </Grid>
        </DialogTitle>

        <DialogContent classes={{ root: classes.contentRoot }}>
          <Scrollbar autoHeight {...scrollProps}>
            {this.props.children}
          </Scrollbar>
        </DialogContent>
        <DialogActions classes={{ root: classes.actionRoot }}>{this.renderActions()}</DialogActions>
      </Dialog>
    );
  }
}

Modal.propTypes = {
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
  onClose: PropTypes.func.isRequired,
  /**
   * content height
   */
  height: PropTypes.number,
  /**
   * actions button array
   */
  actions: PropTypes.array,
};

Modal.defaultProps = {
  open: false,
  label: '',
  animation: 'fade',
  onClose: () => {},
  actions: [],
};

export default withStyles(styles, { name: 'RMModal' })(Modal);
