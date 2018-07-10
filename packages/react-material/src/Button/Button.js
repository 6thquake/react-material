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
import Button from '@material-ui/core/Button/Button';
import classNames from 'classnames';
import addonRmTheme from '../styles/addonRmTheme';
export const styles = theme => {
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
    root:{},
    label:{},
    flatPrimary:{},
    flatSecondary:{},
    colorInherit:{},
    raised:{},
    raisedPrimary:{},
    raisedSecondary:{},
    focusVisible:{},
    disabled:{},
    fab:{},
    mini:{},
    sizeSmall:{},
    sizeLarge:{},
    fullWidth:{},
    // ...styles(theme),
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
    }
  }
};
class CreateButton extends Component {
  firstRender = true
  state = {
    color: this.props.color,
  }
  status = {
    status: '',
    text: ''
  }

  resetActive() {
    this.setState({
      active: false
    });
  }
  getButtonStyle(){

  }

  render() {
    let {children, className: classNamePro, classes,...props} = this.props;
    let {raisedProgress,raisedError,raisedSuccess,raisedWaring,flatProgress,
      flatError, flatSuccess,flatWaring,icon,
      ...classesPro} = classes;
    props.color = this.state.color;
    const {color} = props;
    const customColors = ['waring', 'error', 'success', 'progress'];
    if (customColors.indexOf(color) !== -1) {
      props.color = 'default';
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
    }, classNamePro);

    return (
      <Button {...props} classes={classesPro} className={className} >
        {children}
      </Button>
    );
  }
}

CreateButton.propTypes = {
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary', 'error', 'success', 'waring', 'progress']),
  variant: PropTypes.oneOf(['text', 'flat', 'outlined', 'contained', 'raised', 'fab']),
};
CreateButton.defaultProps = {
  color: 'default',
  variant: 'flat',
};
CreateButton.contextTypes = {
  resetActive: PropTypes.func
};
export default withStyles(styles, { name: 'RMButton' })(CreateButton);
