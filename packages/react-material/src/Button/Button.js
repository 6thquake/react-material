/**
 *  属性
 *      状态
 *      外观
 *  行为
 *
 *  button 组，状态, icon, 级别
 *  icon：svg
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import pink from 'material-ui/colors/pink';
import green from 'material-ui/colors/green';
import orange from 'material-ui/colors/orange';
import common from 'material-ui/colors/common';
import {fade} from 'material-ui/styles/colorManipulator';
import Button from 'material-ui/Button';
import classNames from 'classnames';
import Done from '@material-ui/icons/Done';
import Replay from '@material-ui/icons/Replay';
import {CircularProgress} from 'material-ui/Progress';

const styles = theme => {
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
      }
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
      }
    }
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

    radioRaisedPrimary: {
      backgroundColor: theme.palette.primary.dark,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      }
    },
    radioRaisedSecondary: {
      backgroundColor: theme.palette.secondary.dark,
      '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
      }
    },
    radioRaisedWaring: {
      backgroundColor: theme.palette.waring.dark,
      '&:hover': {
        backgroundColor: theme.palette.waring.dark,
      }
    },
    radioRaisedError: {
      backgroundColor: theme.palette.error.dark,
      '&:hover': {
        backgroundColor: theme.palette.error.dark
      }
    },
    radioRaisedSuccess: {
      backgroundColor: theme.palette.success.dark,
      '&:hover': {
        backgroundColor: theme.palette.success.dark
      }
    },
    radioRaisedProgress: {
      backgroundColor: theme.palette.progress.dark,
      '&:hover': {
        backgroundColor: theme.palette.progress.dark
      }
    },
    radioRaisedDefault: {
      backgroundColor: theme.palette.action.hover,
      '&:hover': {
        backgroundColor: theme.palette.action.hover
      }
    },
  }
};

class CreateButton extends Component {
  firstRender = true
  state = {
    color: this.props.color,
  }
  status = {
    status: '',
    text: '',
    statusButton: this.props.statusButton,
    radio: false
  }

  getStatusIcon(classes) {
    switch (this.status.status) {
      case 'progress':
        return <CircularProgress className={classes.icon} size={15} style={{color: common.white}}/>;
      case 'success':
        return <Done className={classes.icon}/>;
      case 'false':
        return <Replay className={classes.icon}/>;
      default:
        return null
    }
  }

  resetActive() {
    this.setState({
      active: false
    });
  }

  radioButton() {
    if (!this.context.resetActive) return;
    this.status.radio = !this.status.radio;
    this.context.resetActive();
  }

  componentWillReceiveProps(nextProps) {
  }

  onHandler = () => {
    const {onHandler, onClick} = this.props;
    let result;
    if (typeof onClick === 'function') {
      onClick.apply(this, arguments);
    }
    this.radioButton();
    if (this.status.status === 'progress') {
      return void 0;
    }
    if (typeof onHandler === 'function') {
      result = onHandler.apply(this, arguments);
    }
    if (!this.status.statusButton) return;
    if (result instanceof Promise) {
      this.status.status = 'progress';
      this.setState({
        color: 'progress'
      });
      result.then((r) => {
        if (r || r === undefined) {
          this.status.status = 'success';
          this.setState({
            color: 'success'
          });
        } else {
          this.status.status = 'false';
          this.setState({
            color: 'waring'
          });
        }
      }).catch(r => {
        this.status.status = 'false';
        this.setState({
          color: 'waring'
        });
      });
    }
  }

  render() {
    let {children, className: classNamePro, classes, radio, onHandler, statusButton, ...other} = this.props;
    other.color = this.state.color;
    const {color} = other;
    const customColors = ['waring', 'error', 'success', 'progress'];
    if (customColors.indexOf(color) !== -1) {
      other.color = 'default';
    }
    if (!this.firstRender) {
      radio = false;
    }
    this.firstRender = false;
    const flat = this.props.variant === 'flat';

    const className = classNames({
      [classes.raisedProgress]: !flat && color === 'progress',
      [classes.raisedError]: !flat && color === 'error',
      [classes.raisedSuccess]: !flat && color === 'success',
      [classes.raisedWaring]: !flat && color === 'waring',

      [classes.flatProgress]: flat && color === 'progress',
      [classes.flatError]: flat && color === 'error',
      [classes.flatSuccess]: flat && color === 'success',
      [classes.flatWaring]: flat && color === 'waring',

      [classes.radioRaisedSecondary]: !flat && color === 'secondary' && (radio || this.status.radio),
      [classes.radioRaisedPrimary]: !flat && color === 'primary' && (radio || this.status.radio),
      [classes.radioRaisedProgress]: !flat && color === 'progress' && (radio || this.status.radio),
      [classes.radioRaisedError]: !flat && color === 'error' && (radio || this.status.radio),
      [classes.radioRaisedSuccess]: !flat && color === 'success' && (radio || this.status.radio),
      [classes.radioRaisedWaring]: !flat && color === 'waring' && (radio || this.status.radio),
      [classes.radioRaisedDefault]: !flat && color === 'default' && (radio || this.status.radio),
      // [classes.radioRaisedSuccess]:this.state.active

    }, classNamePro);

    this.status.radio = false;

    return (
      <Button {...other} className={className} onClick={this.onHandler}>
        {this.getStatusIcon(classes)}{children}
      </Button>
    );
  }
}

CreateButton.propTypes = {
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary', 'error', 'success', 'waring', 'progress']),
  onHandler: PropTypes.func,
  statusButton: PropTypes.bool,
  radio: PropTypes.bool
};
CreateButton.defaultProps = {
  color: 'default',
  variant: 'flat',
  statusButton: true,
  radio: false
};
CreateButton.contextTypes = {
  resetActive: PropTypes.func
};
export default withStyles(styles)(CreateButton);
