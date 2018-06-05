import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-material/styles';
import Radio from 'react-material/Radio';
import RadioGroup from 'react-material/RadioGroup';
import FormControlLabel from 'react-material/FormControlLabel';
import Filters from 'react-material/Filters';

const style = theme => ({
  mt: {
    marginTop: theme.spacing.unit * 3
  }
});

function createData(label, value) {
  return {
    label,
    value
  }
}

class FiltersDemo extends Component {
  state = {
    radio: '1',
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
    multi: false,
    value: ['1'],
    mapProps: {
      label: 'label',
      value: 'value'
    }
  };

  onChange = (value) => {
    this.setState({
      value
    })
  };

  handleChange = (event) => {
    const {value} = event.target;
    this.setState({
      radio: value,
      multi: value === '2',
      value: ['1'],
    })
  }

  render() {
    const {classes} = this.props;
    const {label, multi, options, value, radio} = this.state;
    const selected = JSON.stringify(value);
    return (
      <div>
        <RadioGroup
          value={radio}
          onChange={this.handleChange}
        >
          <FormControlLabel value={'1'} control={<Radio/>} label="单选"/>
          <FormControlLabel value={'2'} control={<Radio/>} label="多选"/>
        </RadioGroup>
        <div className={classes.mt}>
          <Filters label={label} multi={multi} options={options} value={value} onChange={this.onChange}/>
        </div>
        <div className={classes.mt}>
          selected values:{selected}
        </div>
      </div>
    )
  }
}

FiltersDemo.propTypes = {
  classes: PropTypes.object.isRequired
};

FiltersDemo.defaultProps = {};

export default withStyles(style)(FiltersDemo);
