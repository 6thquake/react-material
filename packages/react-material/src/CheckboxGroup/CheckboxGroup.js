import React, {Component} from 'react';
import PropTypes from 'prop-types';
import withStyles from '../styles/withStyles';
import CheckboxGroupStandalone from './CheckboxGroupStandalone';
import FormHelperText from '../FormHelperText';
import { withFormsy, propTypes } from 'formsy-react';
import { compose} from 'recompose';
import withFormItem from '../Form/withFormItem';
import withForm from '../Form/withForm';

const style = theme => ({
  formHelperTextRoot: {
    marginTop: '-8px'
  }
});

class CheckboxGroup extends Component {
  onChange = (event, value) => {
    // setValue() will set the value of the component, which in
    // turn will validate it and the rest of the form
    // Important: Don't skip this step. This pattern is required
    // for Formsy to work.
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
        <CheckboxGroupStandalone
          classes={classes}
          value={getValue()}
          disabled={isDisabled}
          onChange={this.onChange}
          ref={formInputRef}
          {...rest}
        >
          {children}
        </CheckboxGroupStandalone>
        {error && <FormHelperText classes={helpTextClasses} error>{helperText}</FormHelperText>}
      </React.Fragment>
    )
  }

  render() {
    return this.renderFormComponent();
  }
}

CheckboxGroup.displayName = 'CheckboxGroup';

CheckboxGroup.propTypes = {
  classes: PropTypes.object.isRequired,
  ...propTypes
};

CheckboxGroup.defaultProps = {
  formInputRef:React.createRef()
};

const FormComponent = compose(withFormsy, withFormItem, withStyles(style))(CheckboxGroup);

export default compose(withForm)(FormComponent, CheckboxGroupStandalone);
