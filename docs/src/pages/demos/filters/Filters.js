import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import Radio from '@6thquake/react-material/Radio';
import RadioGroup from '@6thquake/react-material/RadioGroup';
import FormControlLabel from '@6thquake/react-material/FormControlLabel';
import FormControl from '@6thquake/react-material/FormControl';
import MenuItem from '@6thquake/react-material/MenuItem';
import Select from '@6thquake/react-material/Select';
import InputLabel from '@6thquake/react-material/InputLabel';
import Filters from '@6thquake/react-material/Filters';

const style = theme => ({
  mt: {
    marginTop: theme.spacing.unit * 3,
  },
});

function createData(label, value) {
  return {
    label,
    value,
  };
}

class FiltersDemo extends Component {
  state = {
    options: [
      createData('红色', '1'),
      createData('橙色', '2'),
      createData('黄色', '3'),
      createData('绿色', '4'),
      createData('蓝色', '5'),
      createData('粉色', '6'),
      createData('紫色', '7'),
    ],
    label: '颜色选择：',
    multiple: '0',
    color: 'primary',
    value: ['1'],
    mapper: {
      label: 'label',
      value: 'value',
    },
    spacing: 8,
  };

  onChange = value => {
    this.setState({
      value,
    });
  };

  handleChange = type => event => {
    const { value } = event.target;
    this.setState({
      [type]: value,
    });
  };

  selectChange = event => {
    this.setState({
      spacing: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { label, multiple, options, value, color, spacing, mapper } = this.state;
    const selected = JSON.stringify(value);
    return (
      <div>
        <FormControl>
          <InputLabel htmlFor="spacing">spacing</InputLabel>
          <Select
            value={spacing}
            onChange={this.selectChange}
            inputProps={{
              name: 'spacing',
              id: 'spacing',
            }}
          >
            <MenuItem value={0}>0</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={16}>16</MenuItem>
            <MenuItem value={24}>24</MenuItem>
          </Select>
        </FormControl>
        <RadioGroup row value={multiple} onChange={this.handleChange('multiple')}>
          <FormControlLabel value={'0'} control={<Radio />} label="单选" />
          <FormControlLabel value={'1'} control={<Radio />} label="多选" />
        </RadioGroup>
        <RadioGroup row value={color} onChange={this.handleChange('color')}>
          <FormControlLabel value={'default'} control={<Radio />} label="default" />
          <FormControlLabel value={'primary'} control={<Radio />} label="primary" />
          <FormControlLabel value={'secondary'} control={<Radio />} label="secondary" />
        </RadioGroup>
        <div className={classes.mt}>
          <Filters
            type={'dark'}
            label={label}
            multiple={multiple == '1'}
            options={options}
            spacing={spacing}
            value={value}
            onChange={this.onChange}
            color={color}
            mapper={mapper}
          />
        </div>
        <div className={classes.mt} style={{ background: '#3fa4f6' }}>
          <Filters
            label={label}
            multiple={multiple == '1'}
            options={options}
            spacing={spacing}
            value={value}
            onChange={this.onChange}
            color={color}
            mapper={mapper}
          />
        </div>
        <div className={classes.mt}>
          selected values:
          {selected}
        </div>
      </div>
    );
  }
}

FiltersDemo.propTypes = {
  classes: PropTypes.object.isRequired,
};

FiltersDemo.defaultProps = {};

export default withStyles(style)(FiltersDemo);
