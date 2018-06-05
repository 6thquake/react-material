import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Select from '../../Select';
import FormControl from '../../FormControl';
import FormHelperText from '../../FormHelperText';
import MenuItem from '../../MenuItem';
import Input from '../../Input';
import InputLabel from '../../InputLabel';


class CrossTableAttribute extends React.PureComponent {
  handleChange = event => {
    this.props.setValue(event.target.value);
  }

  render() {
    let id = `select-${new Date().getTime()}${Math.floor(Math.random()*1000)}`;
    return (
      <FormControl>
        <InputLabel htmlFor={id}>{this.props.label}</InputLabel>
        <Select
          value={this.props.current}
          onChange={this.handleChange}
          inputProps={{
            name: id,
            id: id,
          }}
        >
          {this.props.values.map(r => (
            <MenuItem value={r}>
              <em>{r}</em>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
}

export default CrossTableAttribute;