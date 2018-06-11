import React from 'react';
import Formsy, {addValidationRule, validationRules, withFormsy, propTypes} from 'formsy-react';
import PropTypes from 'prop-types';
import withStyles from '../styles/withStyles';

const style = theme => ({});

class Forme extends React.Component {
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

Forme.propTypes = {
  classes: PropTypes.object.isRequired,
  ...Formsy.propTypes
};

Forme.defaultProps = {
  ...Formsy.defaultProps
};

export {
  addValidationRule,
  validationRules,
  withFormsy,
  propTypes
}

export default withStyles(style)(Forme);
