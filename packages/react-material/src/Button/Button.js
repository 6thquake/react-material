import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../styles';
import { fade } from '../styles/colorManipulator';
import Button from '@material-ui/core/Button/Button';
import classNames from 'classnames';
import addonRmTheme from '../styles/addonRmTheme';
import Done from '@material-ui/icons/Done';
import Replay from '@material-ui/icons/Replay';
import CircularProgress from '../CircularProgress';
import common from '../colors/common';

const styles = theme => {
  theme = addonRmTheme(theme);
  const defaultStyle = {
    flat: {
      warning: {
        color: theme.palette.warning.main,
        '&:hover': {
          backgroundColor: fade(theme.palette.warning.main, theme.palette.action.hoverOpacity),
          '@media (hover: none)': {
            backgroundColor: 'transparent',
          },
        },
      },
      error: {
        color: theme.palette.error.main,
        '&:hover': {
          backgroundColor: fade(theme.palette.error.main, theme.palette.action.hoverOpacity),
          '@media (hover: none)': {
            backgroundColor: 'transparent',
          },
        },
      },
      success: {
        color: theme.palette.success.main,
        '&:hover': {
          backgroundColor: fade(theme.palette.success.main, theme.palette.action.hoverOpacity),
          '@media (hover: none)': {
            backgroundColor: 'transparent',
          },
        },
      },
      progress: {
        color: theme.palette.progress.main,
        '&:hover': {
          backgroundColor: fade(theme.palette.progress.main, theme.palette.action.hoverOpacity),
          '@media (hover: none)': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    raised: {
      warning: {
        color: theme.palette.warning.contrastText,
        backgroundColor: theme.palette.warning.main,
        '&:hover': {
          backgroundColor: theme.palette.warning.dark,
          '@media (hover: none)': {
            backgroundColor: theme.palette.warning.main,
          },
        },
      },
      success: {
        color: theme.palette.success.contrastText,
        backgroundColor: theme.palette.success.main,
        '&:hover': {
          backgroundColor: theme.palette.success.dark,
          '@media (hover: none)': {
            backgroundColor: theme.palette.success.main,
          },
        },
      },
      error: {
        color: theme.palette.error.contrastText,
        backgroundColor: theme.palette.error.main,
        '&:hover': {
          backgroundColor: theme.palette.error.dark,
          '@media (hover: none)': {
            backgroundColor: theme.palette.error.main,
          },
        },
      },
      progress: {
        color: theme.palette.progress.contrastText,
        backgroundColor: theme.palette.progress.main,
        '&:hover': {
          backgroundColor: theme.palette.progress.dark,
          '@media (hover: none)': {
            backgroundColor: theme.palette.progress.main,
          },
        },
      },
    },
  };
  return {
    //todo remove
    root: {},
    label: {},
    flatPrimary: {},
    flatSecondary: {},
    colorInherit: {},
    raised: {},
    raisedPrimary: {},
    raisedSecondary: {},
    focusVisible: {},
    disabled: {},
    fab: {},
    mini: {},
    sizeSmall: {},
    sizeLarge: {},
    fullWidth: {},
    // ...styles(theme),
    flatWaring: defaultStyle.flat.warning,
    flatError: defaultStyle.flat.error,
    flatSuccess: defaultStyle.flat.success,
    flatProgress: defaultStyle.flat.progress,

    raisedWaring: defaultStyle.raised.warning,
    raisedError: defaultStyle.raised.error,
    raisedSuccess: defaultStyle.raised.success,
    raisedProgress: defaultStyle.raised.progress,

    icon: {
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing.unit,
    },
    fabStatus: {
      fontSize: theme.typography.pxToRem(24),
    },
    progress: {
      color: common.white,
    },
    fish: {
      transform: 'scale3d(1,1,1)',
      '-ms-transform': 'scale3d(1,1,1)' /* IE 9 */,
      '-moz-transform': 'scale3d(1,1,1)' /* Firefox */,
      '-webkit-transform': 'scale3d(1,1,1)' /* Safari 和 Chrome */,
      '-o-transform': 'scale3d(1,1,1)',
      transition: 'all 86ms ease-out',
      '&:hover': {
        transform: 'scale3d(1.2, 1.2, 1.2)',
        '-ms-transform': 'scale3d(1.2, 1.2, 1.2)' /* IE 9 */,
        '-moz-transform': 'scale3d(1.2, 1.2, 1.2)' /* Firefox */,
        '-webkit-transform': 'scale3d(1.2, 1.2, 1.2)' /* Safari 和 Chrome */,
        '-o-transform': 'scale3d(1.2, 1.2, 1.2)',
      },
    },
  };
};

class RMButton extends Component {
  firstRender = true;
  state = {
    color: this.props.color,
  };
  status = {
    status: '',
    text: '',
  };

  getStatusIcon(classes) {
    const { variant } = this.props;
    const className = classNames({
      [classes.icon]: variant !== 'fab',
      [classes.fabStatus]: variant === 'fab',
    });
    switch (this.status.status) {
      case 'progress':
        //todo button loading styles
        return this.renderProgress(className);
      case 'success':
        return <Done className={className} />;
      case 'false':
        return <Replay className={className} />;
      default:
        return null;
    }
  }

  renderProgress(className) {
    const { variant, classes } = this.props;
    let size = variant === 'fab' ? 24 : 15;
    const classesPro = classNames(
      {
        [classes.progress]: variant !== 'flat' && variant !== 'outlined',
        [classes.flatProgress]: variant === 'flat' || variant === 'outlined',
      },
      className,
    );
    return <CircularProgress className={classesPro} size={size} />;
  }

  onHandler = (...args) => {
    const { onClick } = this.props;
    let result;
    if (this.status.status === 'progress') {
      return void 0;
    }
    if (typeof onClick === 'function') {
      result = onClick.apply(this, args);
    }
    if (result) {
      if (result instanceof Promise || typeof result.then === 'function') {
        this.status.status = 'progress';
        this.setState({
          color: 'progress',
        });
        result
          .then(r => {
            this.status.status = 'success';
            this.setState({
              color: 'success',
            });
          })
          .catch(r => {
            this.status.status = 'false';
            this.setState({
              color: 'error',
            });
          });
      }
    }
  };

  resetActive() {
    this.setState({
      active: false,
    });
  }

  renderChildren() {
    const { children, variant } = this.props;
    if (variant === 'fab') {
      if (this.status.status !== '') {
        return null;
      }
    }
    return children;
  }

  render() {
    let { children, className: classNamePro, classes, onClick, ...props } = this.props;
    let {
      raisedProgress,
      raisedError,
      raisedSuccess,
      raisedWaring,
      flatProgress,
      flatError,
      flatSuccess,
      flatWaring,
      icon,
      fabStatus,
      progress,
      fish,
      ...classesPro
    } = classes;
    props.color = this.state.color;
    const { color } = props;
    const customColors = ['warning', 'error', 'success', 'progress'];
    if (customColors.indexOf(color) !== -1) {
      props.color = 'default';
    }
    this.firstRender = false;
    const flat = this.props.variant === 'flat';
    const className = classNames(
      {
        [classes.raisedProgress]: !flat && color === 'progress',
        [classes.raisedError]: !flat && color === 'error',
        [classes.raisedSuccess]: !flat && color === 'success',
        [classes.raisedWaring]: !flat && color === 'warning',
        [classes.flatProgress]: flat && color === 'progress',
        [classes.flatError]: flat && color === 'error',
        [classes.flatSuccess]: flat && color === 'success',
        [classes.flatWaring]: flat && color === 'warning',
        [classes.fish]: props.variant === 'fish',
      },
      classNamePro,
    );
    if (props.variant === 'fish') {
      props.variant = 'fab';
    }
    return (
      <Button {...props} classes={classesPro} className={className} onClick={this.onHandler}>
        {this.getStatusIcon(classes)}
        {this.renderChildren()}
      </Button>
    );
  }
}

RMButton.propTypes = {
  /**
   * The content of the button.
   */
  children: PropTypes.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf([
    'default',
    'inherit',
    'primary',
    'secondary',
    'error',
    'success',
    'warning',
    'progress',
  ]),
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   * `disableRipple` must also be true.
   */
  disableFocusRipple: PropTypes.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: PropTypes.bool,
  /**
   * @ignore
   */
  focusVisibleClassName: PropTypes.string,
  /**
   * If `true`, the button will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: PropTypes.string,
  /**
   * If `true`, and `variant` is `'fab'`, will use mini floating action button styling.
   */
  mini: PropTypes.bool,
  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * @ignore
   */
  type: PropTypes.string,
  /**
   * The type of button.
   */
  variant: PropTypes.oneOf([
    'text',
    'flat',
    'outlined',
    'contained',
    'raised',
    'fab',
    'extendedFab',
    'fish',
  ]),
  /**
   * Button 的回掉函数，函数的返回值如果是Promise，Button变为带反馈的样子。
   */
  onClick: PropTypes.func,
};

RMButton.defaultProps = {
  color: 'default',
  component: 'button',
  disabled: false,
  disableFocusRipple: false,
  fullWidth: false,
  mini: false,
  size: 'medium',
  type: 'button',
  variant: 'flat',
};

RMButton.contextTypes = {
  resetActive: PropTypes.func,
};

export default withStyles(styles, { name: 'RMButton' })(RMButton);
