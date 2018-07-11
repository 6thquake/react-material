import React from 'react';
import Formsy, { addValidationRule, validationRules, withFormsy, propTypes } from 'formsy-react';

// required
addValidationRule('isRequired', (values, value) => {
  return !(value === undefined || value === null || value === '');
});

class Form extends Formsy {
  isValid() {
    return super.state.isValid;
  }

  submit() {
    super.submit();
    return this;
  }

  reset() {
    super.reset();
    return this;
  }
}

export { addValidationRule, validationRules, withFormsy, propTypes };

export default Form;
