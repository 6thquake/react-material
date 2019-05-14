import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '../styles/withStyles';
import Grid from '../Grid';
import Chip from '../Chip';
import isFunction from 'lodash/isFunction';
import classNames from 'classnames';
import { emphasize } from '../styles/colorManipulator';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import IconButton from '../IconButton';
import Collapse from '../Collapse';
import { withLocale } from '../LocaleProvider';

// 颜色需要替换
const style = theme => {
  const transition = {
    duration: theme.transitions.duration.shortest,
  };
  return {
    root: {
      flexWrap: 'nowrap',
      padding: theme.spacing.unit,
    },
    label: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.primary,
      textAlign: 'left',
      lineHeight: '48px',
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
      backgroundColor: theme.palette.primary.dark,
    },
    clickableColorDefault: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.getContrastText(theme.palette.primary.dark),
      '&:hover, &:focus': {
        backgroundColor: `${emphasize(theme.palette.primary.dark, 0.08)} !important`,
      },
      '&:active': {
        backgroundColor: `${emphasize(theme.palette.primary.dark, 0.12)} !important`,
      },
    },
    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.contrastText,
    },
    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      backgroundColor: theme.palette.secondary.dark,
      color: theme.palette.primary.contrastText,
    },
    clickable: {
      WebkitTapHighlightColor: 'transparent', // Remove grey highlight
      cursor: 'pointer',
      '&:hover, &:focus': {
        // backgroundColor: emphasize(theme.palette.common.white, 0.08),
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
        backgroundColor: emphasize(theme.palette.primary.dark, 0.08),
      },
      '&:active': {
        // backgroundColor: emphasize(theme.palette.primary.main, 0.12),
        backgroundColor: emphasize(theme.palette.primary.main, 0.08),
      },
    },
    /**
     * Styles applied to the root element if
     * `onClick` and `color="secondary"` is defined or `clickable={true}`.
     */
    clickableColorSecondary: {
      '&:hover, &:focus': {
        backgroundColor: emphasize(theme.palette.secondary.dark, 0.08),
      },
      '&:active': {
        backgroundColor: emphasize(theme.palette.secondary.main, 0.12),
      },
    },
    /* Styles applied to the `IconButton` component when `expandIcon` is supplied. */
    expandIcon: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.primary,
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', transition),
      '&:hover': {
        // Disable the hover effect for the IconButton,
        // because a hover effect should apply to the entire Expand button and
        // not only to the IconButton.
        backgroundColor: 'transparent',
      },
      '&$expanded': {
        transform: 'rotate(180deg)',
      },
    },
    more: {
      display: 'flex',
    },
    expandIconLabel: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(13),
      color: theme.palette.text.primary,
      whiteSpace: 'nowrap',
      // textAlign: 'right',
      // lineHeight: '48px',
    },

    /* Styles applied to the root element if `expanded={true}`. */
    expanded: {},
  };
};

class Filters extends Component {
  state = {
    expanded: false,
  };

  onClick = selectItem => () => {
    const { multiple, onChange, value, mapper, options } = this.props;
    const selectVal = isFunction(mapper.value)
      ? mapper.value(selectItem, options)
      : selectItem[mapper.value];
    let newVal;
    if (!multiple) {
      if (this.isSelected(selectVal)) {
        newVal = [];
      } else {
        newVal = [selectVal];
      }
    } else if (this.isSelected(selectVal)) {
      newVal = value.filter(v => v !== selectVal);
    } else {
      newVal = [...value, selectVal];
    }
    onChange(newVal);
  };

  handleClear = () => {
    const { onChange } = this.props;
    onChange([]);
  };

  handleToggle = () => {
    const { expanded } = this.state;
    this.setState({
      expanded: !expanded,
    });
  };

  isSelected = value => this.props.value.includes(value);

  render() {
    const {
      classes,
      options,
      label,
      mapper,
      spacing,
      labelWidth,
      color,
      expandable,
      row,
      selectedColor,
      theme,
      more,
      less,
    } = this.props;
    const { expanded } = this.state;
    const collapsedHeight = `${48 * row}px`;
    const labelCls = classNames(classes.label);
    const textColor = theme.palette[color]
      ? theme.palette[color].contrastText
      : theme.palette.text.primary;
    const backgroundColor = theme.palette[color] ? theme.palette[color].main : 'transparent';
    const IconComponent = expanded ? ExpandLessIcon : ExpandMoreIcon;
    return (
      <Grid
        container
        spacing={0}
        direction={'row'}
        justify={'stretch'}
        className={classes.root}
        style={{ backgroundColor }}
      >
        <Grid item className={labelCls} style={{ width: labelWidth }}>
          <div style={{ color: textColor, cursor: 'pointer' }} onClick={this.handleClear}>
            {label}
          </div>
        </Grid>
        <Collapse in={!expandable || expanded} collapsedHeight={collapsedHeight}>
          <Grid item>
            {options.map(option => {
              const chipLabel = isFunction(mapper.label)
                ? mapper.label(option, options)
                : option[mapper.label];
              const value = isFunction(mapper.value)
                ? mapper.value(option, options)
                : option[mapper.value];

              const isSelected = this.isSelected(value);

              const item = classNames(classes.item, {
                [classes.colorDefault]: selectedColor === 'default' && isSelected,
              });

              const chipTextColor = isSelected ? theme.palette.common.white : textColor;
              return (
                <Chip
                  key={value}
                  color={isSelected ? selectedColor : 'default'}
                  label={chipLabel}
                  clickable
                  style={{ margin: `8px ${spacing}px`, color: chipTextColor }}
                  onClick={this.onClick(option)}
                  classes={{
                    root: item,
                    colorPrimary: classes.colorPrimary,
                    colorSecondary: classes.colorSecondary,
                    clickableColorPrimary: classes.clickableColorPrimary,
                    clickableColorSecondary: classes.clickableColorSecondary,
                  }}
                />
              );
            })}
          </Grid>
        </Collapse>
        <Grid item>
          <div className={classes.more}>
            {expandable && (
              <IconButton
                className={classNames(classes.expandIcon, {
                  // [classes.expanded]: expanded,
                })}
                component="div"
                onClick={this.handleToggle}
              >
                {<IconComponent style={{ color: textColor }} />}
                <span className={classes.expandIconLabel} style={{ color: textColor }}>
                  {expanded ? less : more}
                </span>
              </IconButton>
            )}
          </div>
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
   * background color.
   */
  color: PropTypes.oneOf(['default', 'primary', 'secondary']),
  /**
   * if true , Filter is expandable
   */
  expandable: PropTypes.bool,

  /**
   * label name of the Filter
   */
  label: PropTypes.string,

  /**
   * label width
   */
  labelWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * @ignore
   */
  less: PropTypes.string,
  /**
   * option item label and value, when assignment option by options
   */
  mapper: PropTypes.shape({
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  }),

  /**
   * @ignore
   */

  more: PropTypes.string,
  /**
   * a multiple select filter or single select filter
   */
  multiple: PropTypes.bool,

  /**
   * callback to parent component when select option
   */
  onChange: PropTypes.func,
  /**
   * data options.
   */
  options: PropTypes.array,
  /**
   * when expandable is true, row is the default lines the Filters will display
   */
  row: PropTypes.number,
  /**
   * the color of active items
   */
  selectedColor: PropTypes.oneOf(['default', 'primary', 'secondary']),
  /**
   * spacing between items
   */
  spacing: PropTypes.number,
  /**
   * @ignore
   */
  theme: PropTypes.object,
  /**
   * The value of the Filter.
   */
  value: PropTypes.array,
};

Filters.defaultProps = {
  color: 'default',
  selectedColor: 'primary',
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
  expandable: false,
  row: 1,
};

const LocaleFilters = withLocale({ name: 'Filters' })(Filters);

export default withStyles(style, { name: 'RMFilters', withTheme: true })(LocaleFilters);
