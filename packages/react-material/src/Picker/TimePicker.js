import React, { Component } from 'react';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import withStyles from '../styles/withStyles';
import yellow from '../colors/yellow';
import { TimePicker } from 'material-ui-pickers';
import { withLocale } from '../LocaleProvider';

const style = theme => ({
  root: {},
  // input: {}
  label: {
    color: theme.palette.grey[300],
    '&$labelForcus': {
      // color: `${theme.palette.common.white}`
      color: `${yellow[500]}`,
    },
  },
  labelForcus: {
    color: `${yellow[500]} !important`,
  },
  inputText: {
    color: theme.palette.common.white,
    '&$disabled': {
      color: theme.palette.grey[200],
    },
  },
  underline: {
    '&:after': {
      borderBottomColor: yellow[500],
    },
    '&:before': {
      borderBottomColor: theme.palette.grey[300],
    },
    // '&$disabled:before': {
    //   borderBottomColor: theme.palette.grey[200],
    // },
    // '&:hover:not($disabled):not($focused):not($error):before': {
    //   borderBottomColor: 'red',
    // },
  },
});

/**
 * @ignore - do not document.
 */

class TimePickerWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes, isDark, ...others } = this.props;
    const inputProps = isDark
      ? {
          InputProps: {
            classes: {
              root: classes.inputText,
              underline: classes.underline,
            },
          },
          InputLabelProps: {
            classes: {
              root: classes.label,
              focused: classes.labelForcus,
            },
          },
        }
      : {};
    return <TimePicker {...inputProps} {...others} />;
  }
}

TimePickerWrapper.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * background is dark
   */
  isDark: PropTypes.bool,
};

TimePickerWrapper.defaultProps = {
  isDark: false,
};

export default compose(
  withLocale({
    name: 'TimePicker',
  }),
  withStyles(style),
)(TimePickerWrapper);
