import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '../styles/withStyles';
import RadioGroupStandalone from '@material-ui/core/RadioGroup';
import FormHelperText from '../FormHelperText';
import { withFormsy, propTypes } from 'formsy-react';
import { compose } from 'recompose';
import withFormItem from '../Form/withFormItem';
import withForm from '../Form/withForm';
import omit from '../utils/omit';

const style = theme => ({
  formHelpTextContainer: {
    marginTop: '-8px',
    minHeight: '12px',
  },
  formHelperTextRoot: {
    marginTop: 0,
  },
});

class RadioGroup extends Component {
  onChange = event => {
    // setValue() will set the value of the component, which in
    // turn will validate it and the rest of the form
    // Important: Don't skip this step. This pattern is required
    // for Formsy to work.
    const value = event.target.value;
    this.props.setValue(value);

    const { onChange } = this.props;
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
      root: classes.formHelperTextRoot,
    };

    const restClasses = omit(classes, ['formHelpTextContainer', 'formHelperTextRoot']);

    return (
      <React.Fragment>
        <RadioGroupStandalone
          classes={restClasses}
          value={getValue()}
          disabled={isDisabled}
          onChange={this.onChange}
          ref={formInputRef}
          {...rest}
        >
          {children}
        </RadioGroupStandalone>
        <div className={classes.formHelpTextContainer}>
          {error && (
            <FormHelperText classes={helpTextClasses} error>
              {helperText}
            </FormHelperText>
          )}
        </div>
      </React.Fragment>
    );
  }

  render() {
    return this.renderFormComponent();
  }
}

RadioGroup.displayName = 'RadioGroup';

RadioGroup.propTypes = {
  classes: PropTypes.object.isRequired,
  ...propTypes,
};

RadioGroup.defaultProps = {
  formInputRef: React.createRef(),
};

const FormComponent = compose(
  withFormsy,
  withFormItem,
  withStyles(style, { name: 'RMRadioGroup' }),
)(RadioGroup);

class C extends Component {
  getChildContext() {
    const { row, size, circular, classes } = this.props;
    return {
      row,
      size,
      circular,
      classes,
    };
  }

  render() {
    let { circular, size, classes, ...props } = this.props;
    classes = classes || {};
    const { checked, ...classesPro } = classes;
    return <RadioGroupStandalone {...props} classes={classesPro} />;
  }
}

C.childContextTypes = {
  row: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  circular: PropTypes.bool,
  classes: PropTypes.object,
};

C.propTypes = {
  /**
   *  大小，只对按钮样式生效
   */
  children: PropTypes.node,
  /**
   *  是否圆角，只对按钮样式生效
   */
  circular: PropTypes.bool,
  /**
   * The content of the component.
   */
  name: PropTypes.string,
  /**
   * The name used to reference the value of the control.
   */
  onBlur: PropTypes.func,
  /**
   * @ignore
   */
  onChange: PropTypes.func,
  /**
   * Callback fired when a radio button is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   * @param {string} value The `value` of the selected radio button
   */
  onKeyDown: PropTypes.func,
  /**
   * @ignore
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Value of the selected radio button.
   */
  value: PropTypes.string,
};

C.defaultProps = {
  size: 'medium',
  circular: false,
};

export default compose(withForm)(FormComponent, C);
