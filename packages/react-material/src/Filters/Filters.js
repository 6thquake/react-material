import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '../styles/withStyles';
import Grid from '../Grid';
import Button from '../Button';
import Tag from '../Tag';
import classnames from 'classnames';

//颜色需要替换
const style = theme => ({
  normalTagLight: {
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    cursor: 'pointer',
    color: 'rgba(255,255,255,0.8)',
    background: 'none',
    '&:hover': {
      background: 'rgba(0,0,0,0.05)',
    },
    '&:focus': {
      background: 'rgba(0,0,0,0.05)',
    },
  },
  normalTagDark: {
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    cursor: 'pointer',
    color: 'rgba(0,0,0,0.7)',
    background: 'none',
    '&:hover': {
      background: 'rgba(0,0,0,0.05)',
    },
    '&:focus': {
      background: 'rgba(0,0,0,0.05)',
    },
  },
  activedTagLight: {
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    cursor: 'pointer',
    color: 'rgba(255,255,255,0.8)',
    background: 'rgba(0,0,0,0.1) !important',
    '&:hover': {
      background: 'rgba(0,0,0,0.15)',
    },
    '&:focus': {
      background: 'rgba(0,0,0,0.15)',
    },
  },

  activedTagDark: {
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    cursor: 'pointer',
    color: 'rgba(0,0,0,0.7)',
    background: 'rgba(0,0,0,0.2) !important',
    '&:hover': {
      background: 'rgba(0,0,0,0.15)',
    },
    '&:focus': {
      background: 'rgba(0,0,0,0.15)',
    },
  },

  label: {
    fontSize: '13px',
    display: 'inline-block',
    width: '7em',
    color: 'rgba(255,255,255,0.7)',
    lineHeight: '2.6em',
    textAlign: 'left',
  },
  labelDark: {
    color: 'rgba(0,0,0,0.7) !important',
  },
  content: {
    flex: 1,
  },
  btn: {
    padding: '0',

    // background: 'none',
    boxShadow: 'none',
    borderRadius: '1.3em',

    '&:hover': {
      background: 'none',
    },
  },
  btnDark: {
    color: 'rgba(0,0,0,0.7)',
  },
  active: {
    background: 'rgba(0,0,0,0.2)',
    '&:hover': {
      background: 'rgba(0,0,0,0.15)',
    },
  },
  activeDark: {},
});

class Filters extends Component {
  onClick = selectItem => () => {
    const { multi, onChange, value, mapProps } = this.props;
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
    const { classes, options, label, mapProps, spacing, type } = this.props;

    return (
      <Grid container spacing={8}>
        <Grid item className={(type === 'dark' ? classes.labelDark : '') + ' ' + classes.label}>
          {label}
        </Grid>

        <Grid item className={classes.content}>
          <Grid container spacing={spacing}>
            {options.map(s => {
              const label =
                typeof mapProps.label === 'function'
                  ? mapProps.label(s, options)
                  : s[mapProps.label];
              const value =
                typeof mapProps.value === 'function'
                  ? mapProps.value(s, options)
                  : s[mapProps.value];

              const isSelected = this.isSelected(value);

              let className = '';
              if (!isSelected && type !== 'dark') {
                className = 'normalTagLight';
              }
              if (!isSelected && type === 'dark') {
                className = 'normalTagDark';
              }
              if (isSelected && type === 'dark') {
                className = 'activedTagDark';
              }
              if (isSelected && type !== 'dark') {
                className = 'activedTagLight';
              }

              return (
                // <Grid item key={value} onClick={this.onClick(s)}>
                //   <Tag label={label} classes={{ primaryMainmedium: classes[className] }} />
                // </Grid>

                <Button
                  key={value}
                  classes={{
                    root: classes.btn,
                  }}
                  onClick={this.onClick(s)}
                >
                  <Tag label={label} classes={{ primaryMainmedium: classes[className] }} />
                </Button>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

Filters.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
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
   * label name for Filter
   */
  label: PropTypes.string,
  /**
   * map data options struct
   */
  mapProps: PropTypes.shape({
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.func]),
  }),
  /**
   * spacing between items
   */
  spacing: PropTypes.number,
};

Filters.defaultProps = {
  options: [],
  value: [],
  multi: false,
  label: '',
  mapProps: {
    label: 'label',
    value: 'value',
  },
  onChange() {
    console.log('请添加回调函数');
  },
  spacing: 8,
};

export default withStyles(style, { name: 'RMFilters' })(Filters);
