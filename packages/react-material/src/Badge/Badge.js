import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import { componentPropType } from '@material-ui/utils';
import { capitalize } from '../utils/helpers';
import Badge from '@material-ui/core/Badge';

export const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    position: 'relative',
    display: 'inline-flex',
    // For correct alignment with the text.
    verticalAlign: 'middle',
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.pxToRem(12),
  },
  /* Styles applied to the badge `span` element. */
  badge: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    boxSizing: 'border-box',
    minWidth: RADIUS * 2,
    padding: '0 4px',
    height: RADIUS * 2,
    borderRadius: RADIUS,
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    zIndex: 1, // Render the badge on top of potential ripples.
    transform: 'scale(1) translate(50%, -50%)',
    transformOrigin: '100% 0%',
    transition: theme.transitions.create('transform', {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
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
  /* Styles applied to the root element if `color="error"`. */
  colorError: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  },
  /* Styles applied to the badge `span` element if `invisible={true}`. */
  invisible: {
    transition: theme.transitions.create('transform', {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.leavingScreen,
    }),
    transform: 'scale(0) translate(50%, -50%)',
    transformOrigin: '100% 0%',
  },
  /* Styles applied to the root element if `variant="dot"`. */
  dot: {
    height: 6,
    minWidth: 6,
    padding: 0,
  },
  mark: {
    position: 'absolute',
    zIndex: 1,
    display: 'inline-block',
    textAlign: 'center',
    top: 0,
    right: theme.spacing.unit,
    padding: '4px 0px 0px 0px',
    width: 24,
    wordBreak: 'break-all',
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    '&:before': {
      content: '""',
      position: 'absolute',
      zIndex: 1,
      bottom: -theme.spacing.unit,
      left: 0,
      right: 0,
      borderLeft: `12px solid ${theme.palette.background.default}`,
      borderRight: `12px solid ${theme.palette.background.default}`,
      borderTop: `4px solid ${theme.palette.background.default}`,
      borderBottom: '4px solid transparent',
    },
  },
  /* Styles applied to the root element if `color="primary" and variant="mark"`. */
  markColorPrimary: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:before': {
      borderLeftColor: theme.palette.primary.main,
      borderRightColor: theme.palette.primary.main,
      borderTopColor: theme.palette.primary.main,
    },
  },
  /* Styles applied to the root element if `color="secondary" and variant="mark"`. */
  markColorSecondary: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    '&:before': {
      borderLeftColor: theme.palette.secondary.main,
      borderRightColor: theme.palette.secondary.main,
      borderTopColor: theme.palette.secondary.main,
    },
  },
  /* Styles applied to the root element if `color="error" and variant="mark"`. */
  markColorError: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
    '&:before': {
      borderLeftColor: theme.palette.error.main,
      borderRightColor: theme.palette.error.main,
      borderTopColor: theme.palette.error.main,
    },
  },
  ribbon: {
    position: 'absolute',
    zIndex: 1,
    width: 'auto',
    height: 'auto',
    top: 0,
    right: 0,
  },
  ribbonWrapper: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  ribbonContent: {
    width: '100%',
    height: '100%',
    backgroundImage: 'none !important',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    whiteSpace: 'nowrap',
    padding: '4px 0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ribbonContentText: {
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    whiteSpace: 'nowrap',
    textAlign: 'center',
    // borderTop: `1px solid ${theme.palette.background.default}`,
    // borderBottom: `1px solid ${theme.palette.background.default}`,
    padding: '0px 32px',
    height: '100%',
  },
});

const RADIUS = 10;

class RMBadge extends React.Component {
  state = {};

  componentDidMount() {
    const { variant } = this.props;
    if (variant === 'ribbon') {
      let res = this.refElem.getBoundingClientRect();

      const { width, height } = res;
      const w = Math.ceil(width);
      const h = Math.ceil(height);
      const top = Math.ceil((Math.sqrt(2) / 2) * h) + 2;
      const right = Math.ceil((1 - 1 / Math.sqrt(2)) * w + h / Math.sqrt(2)) + 2;

      this.setState({
        width: `${w}px`,
        height: `${h}px`,
        top: `-${top}px`,
        right: `-${right}px`,
        transform: 'rotate(45deg)',
        transformOrigin: 'left top',
      });
    }
  }

  render() {
    const {
      badgeContent,
      children,
      classes,
      className,
      color,
      component: ComponentProp,
      invisible: invisibleProp,
      showZero,
      max,
      variant,
      ...other
    } = this.props;

    console.log(this.state);

    let invisible = invisibleProp;

    if (invisibleProp == null && Number(badgeContent) === 0 && !showZero) {
      invisible = true;
    }

    let displayValue = variant === 'standard' && badgeContent > max ? `${max}+` : badgeContent;

    switch (variant) {
      case 'mark':
        return (
          <ComponentProp className={classNames(classes.root, className)} {...other}>
            {children}
            <span
              className={classNames(classes.mark, {
                [classes[`markColor${capitalize(color)}`]]: color !== 'default',
                [classes.invisible]: invisible,
              })}
            >
              {displayValue}
            </span>
          </ComponentProp>
        );

      case 'ribbon':
        const { width, height, top, right, transform, transformOrigin } = this.state;

        const style = {
          width,
          height,
          top,
          right,
          transform,
          transformOrigin,
        };

        return (
          <ComponentProp className={classNames(classes.root, className)} {...other}>
            {children}

            <span className={classes.ribbonWrapper}>
              <span
                className={classNames(classes.ribbon, {
                  [classes[`color${capitalize(color)}`]]: color !== 'default',
                  [classes.invisible]: invisible,
                })}
                style={style}
                ref={node => {
                  this.refElem = node;
                }}
              >
                <span className={classes.ribbonContent}>
                  <span className={classes.ribbonContentText}>{displayValue}</span>
                </span>
              </span>
            </span>
          </ComponentProp>
        );

      case 'text':
      case 'dot':
      case 'standard':
      default:
        return <Badge {...this.props}>{children}</Badge>;
    }
  }
}

RMBadge.propTypes = {
  /**
   * The content rendered within the badge.
   */
  badgeContent: PropTypes.node,
  /**
   * The badge will be added relative to this node.
   */
  children: PropTypes.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['default', 'primary', 'secondary', 'error']),
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: componentPropType,
  /**
   * If `true`, the badge will be invisible.
   */
  invisible: PropTypes.bool,
  /**
   * Max count to show.
   */
  max: PropTypes.number,
  /**
   * Controls whether the badge is hidden when `badgeContent` is zero.
   */
  showZero: PropTypes.bool,
  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['standard', 'dot', 'text', 'ribbon', 'mark']),
};

RMBadge.defaultProps = {
  color: 'default',
  component: 'span',
  max: 99,
  showZero: false,
  variant: 'standard',
};

export default withStyles(styles)(RMBadge);
