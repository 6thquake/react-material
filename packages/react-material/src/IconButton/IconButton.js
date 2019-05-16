import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '../styles/withStyles';
import classNames from 'classnames';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => {
  return {
    root: {},
    colorInherit: {},
    colorPrimary: {},
    colorSecondary: {},
    disabled: {},
    label: {},
    fish: {
      transform: 'scale3d(1,1,1)',
      '-ms-transform': 'scale3d(1,1,1)' /* IE 9 */,
      '-moz-transform': 'scale3d(1,1,1)' /* Firefox */,
      '-webkit-transform': 'scale3d(1,1,1)' /* Safari 和 Chrome */,
      '-o-transform': 'scale3d(1,1,1)',
      transition: 'all 86ms ease-out',
      '&:hover': {
        transform: 'scale3d(1.2, 1.2, 1.2)',
        '-ms-transform': 'scale3d(1.2, 1.2, 1.2)' /* IE 9 */,
        '-moz-transform': 'scale3d(1.2, 1.2, 1.2)' /* Firefox */,
        '-webkit-transform': 'scale3d(1.2, 1.2, 1.2)' /* Safari 和 Chrome */,
        '-o-transform': 'scale3d(1.2, 1.2, 1.2)',
      },
    },
  };
};

class RMIconButton extends Component {
  render() {
    const { className: classNamePro, classes } = this.props;
    const className = classNames(
      {
        [classes.fish]: this.props.fish,
      },
      classNamePro,
    );
    const { fish, ...classesPro } = classes;
    const { fish: f, ...props } = this.props;
    return <IconButton {...props} classes={classesPro} className={className} />;
  }
}

RMIconButton.propTypes = {
  /**
   * The icon element.
   */
  children: PropTypes.node,
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
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the ripple will be disabled.
   */
  disableRipple: PropTypes.bool,
  /**
   *  是否是鱼眼button
   */
  fish: PropTypes.bool,
};

RMIconButton.defaultProps = {
  color: 'default',
  disabled: false,
  fish: false,
};

RMIconButton.contextTypes = {
  resetActive: PropTypes.func,
};

export default withStyles(styles, { name: 'RMIconButton' })(RMIconButton);
