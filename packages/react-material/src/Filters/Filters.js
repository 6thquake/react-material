import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '../styles/withStyles';
import Grid from '../Grid';
import Button from '../Button';

const style = theme => ({
  label: {
    width: '120px',
    textAlign: 'right',
    lineHeight: 2,
  },
  content: {
    flex: 1
  },
});

class Filters extends Component {
  onClick = selectItem => () => {
    const {multi, onChange, value, mapProps} = this.props;
    const selectVal = selectItem[mapProps.value];
    let newVal;

    if (!multi) {
      if (this.isSelected(selectVal)) {
        newVal = [];
      } else {
        newVal = [selectVal];
      }
    } else {
      if (this.isSelected(selectVal)) {
        newVal = value.filter(v => v !== selectVal);
      } else {
        newVal = [...value, selectVal];
      }
    }
    onChange(newVal);
  };

  isSelected = value => this.props.value.includes(value);

  render() {
    const {classes, options, label, mapProps, spacing} = this.props;
    return (
      <Grid container spacing={8}>
        <Grid item className={classes.label}>{label}</Grid>
        <Grid item className={classes.content}>
          <Grid container spacing={spacing}>
            {options.map(s => {
              const value = s[mapProps.value];
              const isSelected = this.isSelected(value);
              return (
                <Grid item>
                  <Button
                    variant={isSelected ? 'raised' : 'flat'}
                    key={value}
                    color={isSelected ? 'primary' : 'default'}
                    onClick={this.onClick(s)}
                  >
                    {s[mapProps.label]}
                  </Button>
                </Grid>
              )
            })
            }
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

Filters.propTypes = {
  /**
   * Useful to extend the style applied to components.
   */
  classes: PropTypes.object.isRequired,
  /**
   * callback to parent component when select option
   */
  onChange: PropTypes.func,
  /**
   * data options.
   */
  options: PropTypes.array,
  /**
   * singleSelect or multiSelect default is singleSelect.
   */
  multi: PropTypes.bool,
  value: PropTypes.array,
  /**
   * label name
   */
  label: PropTypes.string,
  /**
   * map data options struct
   */
  mapProps: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }),
  spacing: PropTypes.number
};

Filters.defaultProps = {
  options: [],
  value: [],
  multi: false,
  label: '',
  mapProps: {
    label: 'label',
    value: 'value'
  },
  onChange() {
    console.log('请添加回调函数');
  },
  spacing: 8
};

export default withStyles(style)(Filters);
