import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import PropTypes from 'prop-types';
import yellow from '../colors/yellow';
import { withStyles } from '../styles';

const style = theme => ({
  root: {},
  label: {
    color: theme.palette.grey[300],
    '&$labelForcus': {
      // color: `${theme.palette.common.white}`
      color: `${yellow[500]}`,
    },
  },
  labelForcus: {},
});

class InputLabelWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { isDark, classes, ...others } = this.props;
    let labelClasses = isDark
      ? {
          root: classes.label,
          focused: classes.labelForcus,
        }
      : {};
    return <InputLabel FormLabelClasses={labelClasses} {...others} />;
  }
}

InputLabelWrapper.propTypes = {
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
InputLabelWrapper.defaultProps = {
  isDark: false,
};
export default withStyles(style)(InputLabelWrapper);
