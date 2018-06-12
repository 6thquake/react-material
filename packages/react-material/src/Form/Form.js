import React, {Component} from 'react';
import Formsy, {addValidationRule, validationRules, withFormsy, propTypes} from 'formsy-react';
import PropTypes from 'prop-types';

// required
addValidationRule('isRequired', (values, value) => {
  return !(value === undefined || value === null || value === '');
});

class Form extends Component {
  state = {
    formsyRef: React.createRef()
  };

  // 获取formsy实例
  getFormsyRef() {
    return this.state.formsyRef.current;
  }

  isValid() {
    const formsyRef = this.getFormsyRef();
    return formsyRef.state.isValid;
  }

  submit() {
    const formsyRef = this.getFormsyRef();
    formsyRef.submit();
  }

  render() {
    const {children, ...rest} = this.props;
    const {formsyRef} = this.state;
    return (
      <Formsy {...rest} ref={formsyRef}>{children}</Formsy>
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

export default Form;
