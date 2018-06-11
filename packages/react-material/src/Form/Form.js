import React, { Component } from 'react';
import Formsy, {addValidationRule, validationRules, withFormsy, propTypes} from 'formsy-react';
import PropTypes from 'prop-types';
import withStyles from '../styles/withStyles';

// required
addValidationRule('isRequired', (values, value) => {
  return !(value === undefined || value === null || value === '');
});

const style = theme => ({});

class Form extends React.Component {
  state = {
    instance: null
  };

  isValid() {
    return this.instance.state.isValid;
  }

  render() {
    const {children, ...rest} = this.props;
    return (
      <Formsy {...rest} ref={r => {
        this.instance = r;
      }}>{children}</Formsy>
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired,
  ...Formsy.propTypes
};

Form.defaultProps = {
  ...Formsy.defaultProps
};

export {
  addValidationRule,
  validationRules,
  withFormsy,
  propTypes
}

export default withStyles(style)(Form);
