import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../styles';
import FormGroup from '../FormGroup';

const style = theme => ({});

class CheckboxGroupStandalone extends Component {
  checkboxs = [];

  onChange = (event, checked) => {
    const value = event.target.value;
    const v = this.props.value;
    let values = v ? v.split(',') : [];

    if (checked) {
      values.push(value);
    } else {
      values = values.filter(v => v !== value);
    }

    this.props.onChange(event, values.join(','));
  };

  render() {
    const {
      classes,
      value,
      name,
      children,
      onChange,
      ...rest
    } = this.props;

    this.checkboxs = [];
    return (
      <FormGroup {...rest}>
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) {
            return null;
          }

          const v = value ? value.split(',') : [];
          return React.cloneElement(child, {
            key: index,
            name,
            inputRef: node => {
              if (node) {
                this.checkboxs.push(node);
              }
            },
            checked: v.includes(child.props.value),
            onChange: this.onChange
          });
        })}
      </FormGroup>
    )
  }
}

CheckboxGroupStandalone.propTypes = {
  classes: PropTypes.object.isRequired
};

CheckboxGroupStandalone.defaultProps = {};

export default withStyles(style)(CheckboxGroupStandalone)
