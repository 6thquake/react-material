import React, { Component } from 'react';
import Dialog from '../Dialog';
import PropTypes from 'prop-types';
import ActionButton from './ActionButton';
import DialogActions from '../DialogActions';
import { withStyles } from '../styles';
import classNames from 'classnames';
import { Fade, Slide, Collapse, Grow, Zoom } from '../transitions';
import { withLocale } from '../LocaleProvider';

const styles = theme => ({
  root: {
    padding: '20px',
  },
  title: {
    color: 'rgba(0,0,0,.85)',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '22px',
    display: 'block',
    overflow: 'auto',
  },
  head: {},
  content: {
    marginLeft: theme.spacing.unit * 4,
    color: 'rgba(0,0,0,.65)',
    fontSize: '14px',
    marginTop: '8px',
  },
  icon: {
    fontSize: '22px',
    float: 'left',
    marginRight: theme.spacing.unit * 2,
  },
  info: {
    color: '#1890ff',
  },
  done: {
    color: '#52c41a',
  },
  cancel: {
    color: '#f5222d',
  },
  error: {
    color: '#faad14',
  },
  warning: {
    color: '#faad14',
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
      <ActionButton
        actionFn={onCancel}
        closeModal={onClose}
        type={cancelType}
        variant={variant}
        size={size}
      >
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
        TransitionComponent={this._transition}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        {...this.props}
      >
        <div className={classes.root}>
          <div className={classes.head}>
            <i className={'material-icons' + ' ' + classes.icon + ' ' + classNameColor}>{type}</i>
            <span className={classes.title}>{title}</span>
            <div className={classes.content}>{content}</div>
          </div>
          <DialogActions>
            {cancelButton}
            <ActionButton
              type={okType}
              actionFn={onOk}
              closeModal={onClose}
              variant={variant}
              size={size}
              autoFocus
            >
              {okText}
            </ActionButton>
          </DialogActions>
        </div>
      </Dialog>
    );
  }
}

export default withStyles(styles, { name: 'RMConfirmDialog' })(
  withLocale({ name: 'Confirm' })(ConfirmDialog),
);
