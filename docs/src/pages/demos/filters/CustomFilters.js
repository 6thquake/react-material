import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import Filters from '@6thquake/react-material/Filters';

const style = theme => ({
  mt: {
    marginTop: theme.spacing.unit * 3,
  },
  btn: {
    borderRadius: '20px',
  },
  active: {
    backgroundColor: '#2196f3',
    '&:hover': {
      backgroundColor: '#419ae0',
    },
  },
});

function createData(label, value) {
  return {
    label,
    value,
  };
}

class CustomFiltersDemo extends Component {
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
    multi: true,
    value: ['1'],
    mapProps: {
      label: 'label',
      value: 'value',
    },
  };

  onChange = value => {
    this.setState({
      value,
    });
  };

  render() {
    const { classes } = this.props;
    const { label, multi, options, value } = this.state;
    const selected = JSON.stringify(value);
    return (
      <div>
        <div className={classes.mt}>
          <Filters
            type={'dark'}
            label={label}
            multi={multi}
            options={options}
            value={value}
            onChange={this.onChange}
            classes={{
              btn: classes.btn,
              active: classes.active,
            }}
          />
        </div>
        <div className={classes.mt}>selected values:{selected}</div>
      </div>
    );
  }
}

CustomFiltersDemo.propTypes = {
  classes: PropTypes.object.isRequired,
};

CustomFiltersDemo.defaultProps = {};

export default withStyles(style)(CustomFiltersDemo);
