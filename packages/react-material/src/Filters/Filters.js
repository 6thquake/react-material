import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '../styles/withStyles';
import Grid from '../Grid';
import Chip from '../Chip';
import isNumber from 'lodash/isNumber';
import isFunction from 'lodash/isFunction';
import classNames from 'classnames';
import { emphasize, fade, darken } from '../styles/colorManipulator';

//颜色需要替换
const style = theme => ({
  root: {
    flexWrap: 'nowrap',
  },
  label: {
    fontSize: '15px',
    color: theme.palette.text.primary,
    textAlign: 'left',
  },
  labelDefault: {
    color: theme.palette.common.white,
  },
  item: {
    color: theme.palette.text.primary,
    backgroundColor: 'transparent',
  },
  colorDefault: {
    color: theme.palette.common.white,
  },
  clickableColorDefault: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark),
    '&:hover, &:focus': {
      backgroundColor: emphasize(theme.palette.primary.dark, 0.08) + ' !important',
    },
    '&:active': {
      backgroundColor: emphasize(theme.palette.primary.dark, 0.12) + ' !important',
    },
  },
  /* Styles applied to the root element if `color="primary"`. */
  colorPrimary: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  /* Styles applied to the root element if `color="secondary"`. */
  colorSecondary: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
  /* Styles applied to the root element if `onClick` is defined or `clickable={true}`. */
  clickable: {
    WebkitTapHighlightColor: 'transparent', // Remove grey highlight
    cursor: 'pointer',
    '&:hover, &:focus': {
      backgroundColor: emphasize(theme.palette.common.white, 0.08),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.common.white, 0.12),
    },
  },
  /**
   * Styles applied to the root element if
   * `onClick` and `color="primary"` is defined or `clickable={true}`.
   */
  clickableColorPrimary: {
    '&:hover, &:focus': {
      backgroundColor: emphasize(theme.palette.primary.main, 0.08),
    },
    '&:active': {
      backgroundColor: emphasize(theme.palette.primary.main, 0.12),
    },
  },
  /**
   * Styles applied to the root element if
   * `onClick` and `color="secondary"` is defined or `clickable={true}`.
   */
  clickableColorSecondary: {
    '&:hover, &:focus': {
      backgroundColor: emphasize(theme.palette.secondary.main, 0.08),
    },
    '&:active': {
      backgroundColor: emphasize(theme.palette.secondary.main, 0.12),
    },
  },
});

class Filters extends Component {
  onClick = selectItem => () => {
    const { multiple, onChange, value, mapper } = this.props;
    const selectVal = selectItem[mapper.value];
    let newVal;

    if (!multiple) {
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
    const { classes, options, label, mapper, spacing, type, labelWidth, color } = this.props;

    let width = labelWidth;
    if (isNumber(labelWidth)) {
      width += 'px';
    }

    const labelCls = classNames(classes.label, {
      [classes.labelDefault]: color == 'default',
    });

    return (
      <Grid
        container
        spacing={0}
        alignItems={'center'}
        direction={'row'}
        justify={'stretch'}
        className={classes.root}
      >
        <Grid item className={labelCls} style={{ width: `${width}` }}>
          {label}
        </Grid>
        <Grid item>
          {options.map(option => {
            const label = isFunction(mapper.label)
              ? mapper.label(option, options)
              : option[mapper.label];
            const value = isFunction(mapper.value)
              ? mapper.value(option, options)
              : option[mapper.value];

            const isSelected = this.isSelected(value);

            const item = classNames(classes.item, {
              [classes.colorDefault]: color == 'default',
              [classes.color]: isSelected,
            });
            const clickable = classNames(classes.clickable, {
              [classes.clickableColorDefault]: color == 'default' && isSelected,
            });
            return (
              <Chip
                key={value}
                color={isSelected ? color : 'default'}
                label={label}
                clickable={true}
                style={{ margin: `${spacing}px` }}
                onClick={this.onClick(option)}
                classes={{
                  root: item,
                  colorPrimary: classes.colorPrimary,
                  colorSecondary: classes.colorSecondary,
                  clickable: clickable,
                  clickableColorPrimary: classes.clickableColorPrimary,
                  clickableColorSecondary: classes.clickableColorSecondary,
                }}
              />
            );
          })}
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
  multiple: PropTypes.bool,
  /**
   * The value of the Filter.
   */
  value: PropTypes.array,
  /**
   * label name of the Filter
   */
  label: PropTypes.string,
  /**
   * option item label and value, when assignment option by options
   */
  mapper: PropTypes.shape({
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  }),
  /**
   * spacing between items
   */
  spacing: PropTypes.number,
  /**
   * label width
   */
  labelWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The color of these items.
   */
  color: PropTypes.oneOf(['default', 'primary', 'secondary']),
};

Filters.defaultProps = {
  options: [],
  value: [],
  multiple: false,
  label: '',
  mapper: {
    label: 'label',
    value: 'value',
  },
  onChange() {},
  spacing: 8,
  labelWidth: 'auto',
  color: 'default',
};

export default withStyles(style, { name: 'RMFilters', withTheme: true })(Filters);
