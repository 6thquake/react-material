import React, { Component } from 'react';
import Dialog from '../Dialog';
import PropTypes from 'prop-types';
import ActionButton from './ActionButton';
import DialogActions from '../DialogActions';
import DialogTitle from '../DialogTitle';
import DialogContent from '../DialogContent';
import { withStyles } from '../styles';
import classNames from 'classnames';
import { Fade, Slide, Collapse, Grow, Zoom } from '../transitions';
import { withLocale } from '../LocaleProvider';
import { Clear } from '@material-ui/icons';

const styles = theme => ({
  title: {
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
  actionsRoot:{
    justifyContent:'center',
  },
  head: {},
  content: {
    marginLeft: theme.spacing.unit * 4,
    color: 'rgba(0,0,0,.65)',
    fontSize: '14px',
    marginTop: '8px',
  },
  info: {
    backgroundColor: '#1890ff',
  },
  done: {
    backgroundColor: '#52c41a',
  },
  cancel: {
    backgroundColor: '#f5222d',
  },
  error: {
    backgroundColor: '#faad14',
  },
  warning: {
    backgroundColor: '#faad14',
  },
});

class ConfirmDialog extends Component {
  static propTypes = {
    /**
     * Decide modal open or close,	If true, the modal is open.
     */
    open: PropTypes.bool.isRequired,
    /**
     * This is  modal title
     */
    title: PropTypes.string,
    /**
     * Cancel button text
     */
    cancelText: PropTypes.string,
    /**
     * Confirm button text
     */
    okText: PropTypes.string,
    /**
     * This is  modal content
     */
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /**
     * This is usually an animation of open or close the modal,include slide、collapse、fade、grow、zoom
     */
    animation: PropTypes.oneOf(['slide', 'collapse', 'fade', 'grow', 'zoom']),
    /**
     * Cancel button callback
     */
    onCancel: PropTypes.func,
    /**
     * Confirm button callback
     */
    onOk: PropTypes.func,
    /**
     *
     */
    okType: PropTypes.string,
    /**
     *
     */
    cancelType: PropTypes.string,
    /**
     *
     */
    variant: PropTypes.string,
    /**
     *
     */
    size: PropTypes.string,
  };

  static defaultProps = {
    open: false,
    title: '',
    animation: 'fade',
    okType: 'success',
    cancelType: 'primary',
    variant: 'raised',
    size: 'small',
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

  render() {
    const {
      onCancel,
      onOk,
      onClose,
      zIndex,
      onExited,
      open,
      keyboard,
      cancelText,
      okText,
      closeText,
      title,
      content,
      type,
      okType,
      cancelType,
      variant,
      size,
      classes,
      ...other
    } = this.props;

    const okCancel = 'okCancel' in this.props ? this.props.okCancel : true;

    const cancelButton = okCancel && (
      <ActionButton actionFn={onCancel} closeModal={onClose} type={cancelType} size={size}>
        {cancelText}
      </ActionButton>
    );
    const classNameColor = classNames({
      [classes.info]: type === 'info',
      [classes.done]: type === 'done',
      [classes.cancel]: type === 'cancel',
      [classes.error]: type === 'error',
      [classes.warning]: type === 'contact_support',
    });

    return (
      <Dialog
        TransitionComponent={this.transition}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        {...this.props}
      >
        <DialogTitle  className={classes.title + ' ' + classNameColor} disableTypography={true}>
          {title}
          <Clear className={classes.icon} onClick={onClose} />
        </DialogTitle>
      
        <DialogContent classes={{ root: classes.contentRoot }}>
        {content}
        </DialogContent>

        <DialogActions classes={{ root: classes.actionsRoot }}>
          {cancelButton}
          <ActionButton
            type={type}
            actionFn={onOk}
            closeModal={onClose}
            variant={variant}
            size={size}
            autoFocus
          >
            {type === 'contact_support' ? okText : closeText}
          </ActionButton>
        </DialogActions>

      </Dialog>
    );
  }
}

export default withStyles(styles, { name: 'RMConfirmDialog' })(
  withLocale({ name: 'Confirm' })(ConfirmDialog),
);
