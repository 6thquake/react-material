import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '../styles/withStyles';
import SelectStandalone from '@material-ui/core/Select';
import FormHelperText from '../FormHelperText';
import { withFormsy, propTypes } from 'formsy-react';
import { compose } from 'recompose';
import withFormItem from '../Form/withFormItem';
import withForm from '../Form/withForm';

const style = theme => ({
  formHelperTextRoot: {
    marginTop: 0
  }
});

class Select extends Component {
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
      classes,
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
      children,
      formInputRef,
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

    const helpTextClasses = {
      root: classes.formHelperTextRoot
    };

    return (
      <React.Fragment>
        <SelectStandalone
          classes={classes}
          error={error}
          value={getValue()}
          disabled={isDisabled}
          onChange={this.onChange}
          ref={formInputRef}
          {...rest}
        >
          {children}
        </SelectStandalone>
        {error && <FormHelperText classes={helpTextClasses} error>{helperText}</FormHelperText>}
      </React.Fragment>
    )
  }

  render() {
    return this.renderFormComponent();
  }
}

Select.displayName = 'Select';

Select.propTypes = {
  classes: PropTypes.object.isRequired,
  ...propTypes
};

Select.defaultProps = {
  formInputRef:React.createRef()
};


const FormComponent = compose(withFormsy, withFormItem, withStyles(style))(Select);

export default compose(withForm)(FormComponent, SelectStandalone);
