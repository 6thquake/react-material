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
import {withStyles} from '../styles';
import {fade} from '../styles/colorManipulator';
import Button,{styles} from '@material-ui/core/Button/Button';
import classNames from 'classnames';
import addonRmTheme from '../styles/addonRmTheme';
export const _styles = theme => {
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
    //todo remove
    ...styles(theme),

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

  onClick=()=>{
    const {onClick} = this.props;
    this.radioButton();
    if (typeof onClick === 'function') {
      onClick.apply(this, arguments);
    }
  }
  render() {
    let {children, className: classNamePro, radio,classes,onClick, ...props} = this.props;
    // let classes = props.classes;
    props.color = this.state.color;
    const {color} = props;
    const customColors = ['waring', 'error', 'success', 'progress'];
    if (customColors.indexOf(color) !== -1) {
      props.color = 'default';
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
      <Button {...props} className={className} onClick={this.onClick}>
        {children}
      </Button>
    );
  }
}

CreateButton.propTypes = {
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary', 'error', 'success', 'waring', 'progress']),
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
export default withStyles(_styles)(CreateButton);
