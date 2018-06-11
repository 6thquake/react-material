import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '../styles/withStyles';
import TextFieldStandalone from '@material-ui/core/TextField';
import { withFormsy, propTypes } from 'formsy-react';
import { compose } from 'recompose';
import withFormItem from '../Form/withFormItem';
import withForm from '../Form/withForm';

const style = theme => ({});

class TextField extends Component {
  onChange = (event) => {
    // setValue() will set the value of the component, which in
    // turn will validate it and the rest of the form
    // Important: Don't skip this step. This pattern is required
    // for Formsy to work.
    const value = event.target.value;
    this.props.setValue(value);

    const {onChange} = this.props;
    onChange && onChange(event, value);
  };

  renderFormComponent() {
    const {
      getErrorMessage,
      getErrorMessages,
      getValue,
      hasValue,
      isFormDisabled,
      isValid,
      isPristine,
      isFormSubmitted,
      isRequired,
      isValidValue,
      resetValue,
      setValidations,
      setValue,
      showRequired,
      showError,
      validationError,
      validationErrors,
      validations,
      innerRef,
      value,
      colon,
      required,
      onChange,
      label,
      ...rest
    } = this.props;

    let error = false;
    let helperText = null;
    const isDisabled = isFormDisabled();
    if (!isDisabled) {
      if (!isPristine()) {
        helperText = getErrorMessage();
        error = !isValid();
      }
    }

    return (
      <React.Fragment>
        <TextFieldStandalone
          error={error}
          value={getValue()}
          helperText={helperText}
          disabled={isDisabled}
          onChange={this.onChange}
          {...rest}
        />
      </React.Fragment>
    )
  }

  render() {
    return this.renderFormComponent();
  }
}

TextField.displayName = 'TextField';

TextField.propTypes = {
  classes: PropTypes.object.isRequired,
  ...propTypes
};

TextField.defaultProps = {};

const FormComponent = compose(withFormsy, withFormItem, withStyles(style))(TextField);

export default compose(withForm)(FormComponent, TextFieldStandalone);
