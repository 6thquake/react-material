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
import Paper from '@6thquake/react-material/Paper';
import Divider from '@6thquake/react-material/Divider';

const style = theme => ({
  paper: {
    width: 600,
    height: 400,
  },
  mt: {
    // marginTop: theme.spacing.unit * 3,
    // padding: theme.spacing.unit,
  },
  p: {
    padding: theme.spacing.unit * 2,
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
      createData('绿色', '8'),
      createData('蓝色', '9'),
      createData('粉色', '10'),
      createData('紫色', '11'),
      createData('粉色', '12'),
      createData('紫色', '17'),
      createData('绿色', '18'),
      createData('蓝色', '19'),
      createData('粉色', '110'),
      createData('紫色', '111'),
    ],
    label: '颜色选择：',
    multiple: '1',
    color: 'primary',
    backgroundColor: 'primary',
    value: ['1'],
    expandable: '1',
    mapper: {
      label: 'label',
      value: 'value',
    },

    spacing: 8,
  };

  handleFilterChange = value => {
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

  handleSelectChange = event => {
    this.setState({
      spacing: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const {
      label,
      multiple,
      options,
      value,
      color,
      spacing,
      mapper,
      backgroundColor,
      expandable,
    } = this.state;
    return (
      <div>
        <FormControl>
          <InputLabel htmlFor="spacing">spacing</InputLabel>
          <Select
            value={spacing}
            onChange={this.handleSelectChange}
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
        <h4>background color</h4>
        <RadioGroup row value={backgroundColor} onChange={this.handleChange('backgroundColor')}>
          <FormControlLabel value={'default'} control={<Radio />} label="default" />
          <FormControlLabel value={'primary'} control={<Radio />} label="primary" />
          <FormControlLabel value={'secondary'} control={<Radio />} label="secondary" />
        </RadioGroup>
        <h4>selected color</h4>
        <RadioGroup row value={color} onChange={this.handleChange('color')}>
          <FormControlLabel value={'default'} control={<Radio />} label="default" />
          <FormControlLabel value={'primary'} control={<Radio />} label="primary" />
          <FormControlLabel value={'secondary'} control={<Radio />} label="secondary" />
        </RadioGroup>
        <h4>expandable</h4>
        <RadioGroup row value={expandable} onChange={this.handleChange('expandable')}>
          <FormControlLabel value={'1'} control={<Radio />} label="true" />
          <FormControlLabel value={'0'} control={<Radio />} label="false" />
        </RadioGroup>
        <Paper className={classes.paper}>
          <div className={classes.mt} style={{ background: '' }}>
            <Filters
              expandable={expandable == '1'}
              label={label}
              multiple={multiple == 1}
              options={options}
              spacing={spacing}
              value={value}
              onChange={this.handleFilterChange}
              color={backgroundColor}
              selectedColor={color}
              mapper={mapper}
              labelWidth={200}
              // row={2}
            />
          </div>
          <Divider />
          <p className={classes.p}>选中：{JSON.stringify(value)}</p>
        </Paper>
      </div>
    );
  }
}

FiltersDemo.propTypes = {
  classes: PropTypes.object.isRequired,
};

FiltersDemo.defaultProps = {};

export default withStyles(style)(FiltersDemo);
