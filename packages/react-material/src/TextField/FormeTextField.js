import React, {Component} from 'react';
import PropTypes from 'prop-types';
import withStyles from '../styles/withStyles';
import TextField from '@material-ui/core/TextField';
import {withFormsy, propTypes} from 'formsy-react';
import {compose} from 'recompose';
import FormeItemHOC from '../Forme/FormeItemHOC';
import FormeHOC from '../Forme/FormeHOC';

const style = theme => ({});

class FormeTextField extends Component {
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
        <TextField
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
    return this.renderFormeComponent();
  }
}

FormeTextField.displayName = 'FormeTextField';

FormeTextField.propTypes = {
  classes: PropTypes.object.isRequired,
  ...propTypes
};

FormeTextField.defaultProps = {};


const FormeComponent = compose(withFormsy, FormeItemHOC, withStyles(style))(FormeTextField);

export default compose(FormeHOC)(FormeComponent, TextField);
