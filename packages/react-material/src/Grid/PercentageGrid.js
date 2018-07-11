import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import { keys as breakpointKeys } from '../styles/createBreakpoints';
import requirePropFactory from '../utils/requirePropFactory';
import Hidden from '../Hidden';

const GUTTERS = [0, 8, 16, 24, 40];
const GRID_SIZES = [true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const breakpointValues = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

function generateGrid(globalStyles, theme, breakpoint) {
  // For the auto layouting
  const styles = {
    [`grid-${breakpoint}`]: {
      position: 'relative',
      float: 'left',
      width: '100%',
    },
  };

  GRID_SIZES.forEach(size => {
    if (typeof size === 'boolean') {
      // Skip the first one as handle above.
      return;
    }

    // Only keep 6 significant numbers.
    const width = `${Math.round((size / 12) * 10e6) / 10e4}%`;

    /* eslint-disable max-len */
    // Close to the bootstrap implementation:
    // https://github.com/twbs/bootstrap/blob/8fccaa2439e97ec72a4b7dc42ccc1f649790adb0/scss/mixins/_grid.scss#L41
    /* eslint-enable max-len */
    styles[`grid-${breakpoint}-${size}`] = {
      position: 'relative',
      float: 'left',
      minHeight: 1,
      width: width,
    };
    styles[`offset-${breakpoint}-${size}`] = {
      marginLeft: width,
    };
    styles[`push-${breakpoint}-${size}`] = {
      left: width,
    };
    styles[`pull-${breakpoint}-${size}`] = {
      right: width,
    };
  });

  // No need for a media query for the first size.
  if (breakpoint === 'xs') {
    Object.assign(globalStyles, styles);
  } else {
    globalStyles[theme.breakpoints.up(breakpoint)] = styles;
  }
}

function generateGutter(theme, breakpoint) {
  const styles = {};

  GUTTERS.forEach((spacing, index) => {
    if (index === 0) {
      // Skip the default style.
      return;
    }

    styles[`spacing-${breakpoint}-${spacing}`] = {
      margin: -spacing / 2,
      width: `calc(100% + ${spacing}px)`,
      '& > $item': {
        padding: spacing / 2,
      },
    };
  });
  return styles;
}

export const styles = theme => ({
  container: {
    boxSizing: 'border-box',
    marginRight: 'auto',
    marginLeft: 'auto',
    '&:after, &:before': {
      display: 'table',
      content: 'close-quote',
      clear: 'both',
    },
  },
  item: {
    boxSizing: 'border-box',
    margin: '0', // For instance, it's useful when used with a `figure` element.
  },
  ...generateGutter(theme, 'xs'),
  ...breakpointKeys.reduce((accumulator, key) => {
    // Use side effect over immutability for better performance.
    generateGrid(accumulator, theme, key);
    return accumulator;
  }, {}),
});

function Grid(props) {
  const {
    classes,
    className: classNameProp,
    component: Component,
    container,
    hidden,
    item,
    lg,
    md,
    sm,
    spacing,
    xl,
    xs,
    offset,
    pull,
    push,
    ...other
  } = props;
  let sizeClassObj = {};
  breakpointKeys.forEach(size => {
    let sizeProps = {};
    if (typeof props[size] === 'number') {
      sizeProps.span = props[size];
      sizeProps.offset = props.offset;
      sizeProps.push = props.push;
      sizeProps.pull = props.pull;
    } else if (typeof props[size] === 'object') {
      sizeProps = props[size] || {};
    }
    sizeClassObj = {
      ...sizeClassObj,
      [classes[`grid-${size}-${sizeProps.span}`]]: item && sizeProps.span,
      [classes[`offset-${size}-${sizeProps.offset}`]]: item && sizeProps.offset,
      [classes[`push-${size}-${sizeProps.push}`]]: item && sizeProps.push,
      [classes[`pull-${size}-${sizeProps.pull}`]]: item && sizeProps.pull,
    };
  });
  const className = classNames(
    {
      [classes.container]: container,
      [classes.item]: item,
      [classes[`spacing-xs-${String(spacing)}`]]: container && spacing !== 0,
    },
    classNameProp,
    sizeClassObj,
  );
  const gridProps = {
    className,
    ...other,
  };

  if (hidden) {
    return (
      <Hidden {...hidden}>
        <Component {...gridProps} />
      </Hidden>
    );
  }

  return <Component {...gridProps} />;
}

Grid.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /**
   * If `true`, the component will have the flex *container* behavior.
   * You should be wrapping *items* with a *container*.
   */
  container: PropTypes.bool,
  /**
   * If provided, will wrap with [Hidden](/api/hidden) component and given properties.
   */
  hidden: PropTypes.object,
  /**
   * If `true`, the component will have the flex *item* behavior.
   * You should be wrapping *items* with a *container*.
   */
  item: PropTypes.bool,

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `lg` breakpoint and wider screens if not overridden.
   */
  lg: PropTypes.oneOfType([
    PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    PropTypes.object,
  ]),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `md` breakpoint and wider screens if not overridden.
   */
  md: PropTypes.oneOfType([
    PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    PropTypes.object,
  ]),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `sm` breakpoint and wider screens if not overridden.
   */
  // sm: PropTypes.oneOf([false, true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, PropTypes.object]),
  sm: PropTypes.oneOfType([
    PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    PropTypes.object,
  ]),

  /**
   * Defines the space between the type `item` component.
   * It can only be used on a type `container` component.
   */
  spacing: PropTypes.oneOf(GUTTERS),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `xl` breakpoint and wider screens.
   */
  xl: PropTypes.oneOfType([
    PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    PropTypes.object,
  ]),
  /**
   * Defines the number of grids the component is going to use.
   * It's applied for all the screen sizes with the lowest priority.
   */
  xs: PropTypes.oneOfType([
    PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    PropTypes.object,
  ]),
  /**
   * the marginLeft of item
   */
  offset: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  /**
   * the right of item
   */

  pull: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  /**
   * the left of item
   */

  push: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  /**
   * the width of item
   */

  span: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
};

Grid.defaultProps = {
  component: 'div',
  container: false,
  item: false,
  lg: 0,
  md: 0,
  sm: 0,
  spacing: 0,
  xl: 0,
  xs: 0,
};

export default withStyles(styles, {
  name: 'MuiGrid',
})(Grid);
