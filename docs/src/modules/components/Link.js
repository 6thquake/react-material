/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import compose from 'recompose/compose';
import { withRouter } from 'next/router';
import NextLink from 'next/link';
import { withStyles } from '@6thquake/react-material/styles';

const styles = theme => ({
  root: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  default: {
    color: 'inherit',
  },
  primary: {
    color: theme.palette.primary.main,
  },
  secondary: {
    color: theme.palette.secondary.main,
  },
  button: {
    '&:hover': {
      textDecoration: 'inherit',
    },
  },
});

function Link(props) {
  const {
    activeClassName,
    children: childrenProp,
    classes,
    className: classNameProp,
    component: ComponentProp,
    href,
    onClick,
    prefetch,
    router,
    variant,
    ...other
  } = props;

  let ComponentRoot;
  const className = classNames(
    classes.root,
    {
      [classes[variant]]: variant !== 'inherit',
    },
    classNameProp,
  );
  let RootProps;
  let children = childrenProp;

  if (ComponentProp) {
    ComponentRoot = ComponentProp;
    RootProps = {
      ...other,
      className,
    };
  } else if (href) {
    ComponentRoot = NextLink;
    RootProps = {
      href,
      prefetch,
      passHref: true,
    };
    children = (
      <a
        className={classNames(className, {
          [activeClassName]: router.pathname === href && activeClassName,
        })}
        onClick={onClick}
        {...other}
      >
        {children}
      </a>
    );
  } else {
    ComponentRoot = 'a';
    RootProps = {
      ...other,
      className,
    };
  }

  return <ComponentRoot {...RootProps}>{children}</ComponentRoot>;
}

Link.defaultProps = {
  variant: 'default',
  activeClassName: 'active',
};

Link.propTypes = {
  activeClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  component: PropTypes.any,
  href: PropTypes.string,
  onClick: PropTypes.func,
  prefetch: PropTypes.bool,
  router: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'button', 'inherit']),
};

export default compose(
  withRouter,
  withStyles(styles),
)(Link);
