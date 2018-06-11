import React, {Component} from 'react';
import PropTypes from 'prop-types';
import withStyles from '../styles/withStyles';
import Input from '@material-ui/core/Input';
import FormHelperText from '../FormHelperText';
import {withFormsy, propTypes} from 'formsy-react';
import {compose} from 'recompose';
import FormeItemHOC from '../Forme/FormeItemHOC';
import FormeHOC from '../Forme/FormeHOC';

const style = theme => ({
  formHelperTextRoot: {
    marginTop: 0
  }
});

class FormeInput extends Component {
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

  renderFormeComponent() {
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
      formeInputRef,
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
        <Input
          classes={classes}
          error={error}
          value={getValue()}
          disabled={isDisabled}
          onChange={this.onChange}
          ref={formeInputRef}
          {...rest}
        />
        {error && <FormHelperText classes={helpTextClasses} error>{helperText}</FormHelperText>}
      </React.Fragment>
    )
  }

  render() {
    return this.renderFormeComponent();
  }
}

FormeInput.displayName = 'FormeInput';

FormeInput.propTypes = {
  classes: PropTypes.object.isRequired,
  ...propTypes
};

FormeInput.defaultProps = {
  formeInputRef: React.createRef()
};


const FormeComponent = compose(withFormsy, FormeItemHOC, withStyles(style))(FormeInput);

export default compose(FormeHOC)(FormeComponent, Input);
