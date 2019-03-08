import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '../styles';
import Popover from '../Popover';
import PopoverContent from './content';
import { withLocale } from '../LocaleProvider';

export const styles = theme => ({
  box: {
    display: 'inline-block',
  },
  anchorElementBox: {
    // padding: theme.spacing.unit,
    boxSizing: 'border-box',
    display: 'inline-block',
  },
  contentBox: {},
});

class Popconfirm extends React.Component {
  state = {
    open: false,
    anchorReference: 'anchorEl',
  };

  anchorEl = null;

  anchorRef = React.createRef();

  componentDidMount() {
    const el = ReactDOM.findDOMNode(this.anchorRef.current);
    this.setState({
      anchorEl: el,
    });
  }

  handleClick = e => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  confirm = () => {
    this.props.onConfirm && this.props.onConfirm();
    this.setState({
      open: false,
    });
  };

  cancel = () => {
    this.props.onCancel && this.props.onCancel();
    this.setState({
      open: false,
    });
  };

  render() {
    const {
      color,
      variant,
      type,
      size,
      classes,
      children,
      cancelText,
      okText,
      content,
      ...other
    } = this.props;
    const { open, positionTop, positionLeft, anchorReference, anchorEl } = this.state;

    return (
      <div>
        <div className={classes.box} ref={this.anchorRef} onClick={this.handleClick}>
          <div />
          <div className={classes.anchorElementBox}>{children}</div>
          <div />
        </div>

        <Popover
          {...other}
          open={open}
          anchorEl={anchorEl}
          anchorReferencecode={anchorReference}
          anchorPosition={{ top: positionTop, left: positionLeft }}
          onClose={this.handleClose}
          anchorOrigin={this.props.anchorOrigin}
          transformOrigin={this.props.transformOrigin}
        >
          <div className={classes.contentBox}>
            <PopoverContent
              onCancel={this.cancel}
              onConfirm={this.confirm}
              cancelText={cancelText}
              okText={okText}
              content={content}
              color={color}
              variant={variant}
              type={type}
              size={size}
            />
          </div>
        </Popover>
      </div>
    );
  }
}
Popconfirm.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  anchorOrigin: PropTypes.shape({
    horizontal: PropTypes.oneOf(['left', 'center', 'right']),
    vertical: PropTypes.oneOf(['top', 'center', 'bottom']),
  }),

  cancelText: PropTypes.string,
  /**
   * This is the point on the popconfirm where the popconfirm's children will attach to.
   */
  children: PropTypes.node,
  /**
   * This is the point on the popconfirm which will attach to the children
   */

  classes: PropTypes.object.isRequired,
  /**
   * The color of the confirm button,
   */
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
  /**
   * The size of buttons
   */
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.func]),
  /**
   * The type of the confirm button.
   */
  okText: PropTypes.string,
  /**
   * @ignore will be spread to the confirm button
   */
  onCancel: PropTypes.func,
  /**
   * The name of the confirm button
   */
  onConfirm: PropTypes.func,
  /**
   * The name of the cancel button
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * The content of popconfirm
   */
  transformOrigin: PropTypes.shape({
    horizontal: PropTypes.oneOf(['left', 'center', 'right']),
    vertical: PropTypes.oneOf(['top', 'center', 'bottom']),
  }),
  /**
   * Callback fired when confirmed
   */
  type: PropTypes.string,
  /**
   * Callback fired when canceled
   */
  variant: PropTypes.oneOf([
    'text',
    'flat',
    'outlined',
    'contained',
    'raised',
    'fab',
    'extendedFab',
  ]),
};

Popconfirm.defaultProps = {
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'center',
  },
  transformOrigin: {
    vertical: 'bottom',
    horizontal: 'center',
  },
  color: 'primary',
  size: 'small',
  variant: 'text',
};

export default withStyles(styles, {
  name: 'RMPopconfirm',
})(Popconfirm);
