import React from 'react';
import Formsy, { addValidationRule, validationRules, withFormsy, propTypes } from 'formsy-react';
import './validationRules';

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

/**
 * @ignore - do not document.
 */
