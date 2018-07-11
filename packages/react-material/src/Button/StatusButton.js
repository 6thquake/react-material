import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../styles';
import common from '../colors/common';
import { fade } from '../styles/colorManipulator';
import Button from './Button';
import classNames from 'classnames';
import Done from '@material-ui/icons/Done';
import Replay from '@material-ui/icons/Replay';
import CircularProgress from '../CircularProgress';
import addonRmTheme from '../styles/addonRmTheme';

const styles = theme => {
  theme = addonRmTheme(theme);

  const defaultStyle = {
    flat: {
      waring: {
        color: theme.palette.waring.main,
        '&:hover': {
          backgroundColor: fade(theme.palette.waring.main, theme.palette.action.hoverOpacity),
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
      waring: {
        color: theme.palette.waring.contrastText,
        backgroundColor: theme.palette.waring.main,
        '&:hover': {
          backgroundColor: theme.palette.waring.dark,
          '@media (hover: none)': {
            backgroundColor: theme.palette.waring.main,
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
    flatWaring: defaultStyle.flat.waring,
    flatError: defaultStyle.flat.error,
    flatSuccess: defaultStyle.flat.success,
    flatProgress: defaultStyle.flat.progress,

    raisedWaring: defaultStyle.raised.waring,
    raisedError: defaultStyle.raised.error,
    raisedSuccess: defaultStyle.raised.success,
    raisedProgress: defaultStyle.raised.progress,

    icon: {
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing.unit,
    },
  };
};

/**
 * success
 * progress
 * fail
 */
class StatusButton extends Component {
  state = {
    color: this.props.color,
  };

  status = {
    status: '',
    text: '',
    //statusButton: this.props.statusButton,
  };

  getStatusIcon(classes) {
    switch (this.status.status) {
      case 'progress':
        //todo button loading styles
        return (
          <CircularProgress className={classes.icon} size={15} style={{ color: common.white }} />
        );
      case 'success':
        return <Done className={classes.icon} />;
      case 'false':
        return <Replay className={classes.icon} />;
      default:
        return null;
    }
  }
  onHandler = () => {
    const { onHandler, onClick } = this.props;
    let result;
    if (typeof onClick === 'function') {
      onClick.apply(this);
    }
    if (this.status.status === 'progress') {
      return void 0;
    }
    if (typeof onHandler === 'function') {
      result = onHandler.apply(this);
    }
    //if (!this.status.statusButton) return;
    if (result instanceof Promise) {
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
  };

  render() {
    let { children, className: classNamePro, classes, onHandler, ...other } = this.props;
    other.color = this.state.color;
    const { color } = other;
    const customColors = ['waring', 'error', 'success', 'progress'];
    if (customColors.indexOf(color) !== -1) {
      other.color = 'default';
    }
    const flat = this.props.variant === 'flat';

    const className = classNames(
      {
        [classes.raisedProgress]: !flat && color === 'progress',
        [classes.raisedError]: !flat && color === 'error',
        [classes.raisedSuccess]: !flat && color === 'success',
        [classes.raisedWaring]: !flat && color === 'waring',

        [classes.flatProgress]: flat && color === 'progress',
        [classes.flatError]: flat && color === 'error',
        [classes.flatSuccess]: flat && color === 'success',
        [classes.flatWaring]: flat && color === 'waring',
      },
      classNamePro,
    );

    return (
      <Button {...other} className={className} onClick={this.onHandler}>
        {this.getStatusIcon(classes)}
        {children}
      </Button>
    );
  }
}

StatusButton.propTypes = {
  onHandler: PropTypes.func,
};

StatusButton.defaultProps = {
  color: 'default',
  variant: 'flat',
  //statusButton: true
};

export default withStyles(styles)(StatusButton);
