import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../styles';
import BreadcrumbItem from '../BreadcrumbItem';
import { /* darken, */ fade } from '../styles/colorManipulator';
import classNames from 'classnames';

const styles = theme => ({
  root: {
    '@global a': {
      textDecoration: 'none',
      '&:hover': {
        color: theme.palette.primary.main,
      },
      ...theme.typography.subheading,
    },
    '@global span': {
      color: fade(theme.typography.subheading.color, 0.6),
    },
    ...theme.typography.subheading,
  },
  black: {
    '@global a': {
      '&:hover': {
        color: theme.palette.primary.main,
      },
      color: theme.palette.common.black,
    },
    '@global span': {
      color: fade(theme.palette.common.black, 0.6),
    },
    color: theme.palette.common.black,
  },
  white: {
    '@global a': {
      '&:hover': {
        color: theme.palette.common.white,
      },
      color: fade(theme.palette.common.white, 0.8),
    },
    '@global span': {
      color: fade(theme.palette.common.white, 0.6),
    },
    color: fade(theme.palette.common.white, 0.8),
  },
  separator: {
    padding: '0 0.5em',
    fontStyle: 'normal',
  },
});

class Breadcrumb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: React.Children.toArray(this.props.children).filter(i => i),
    };
  }

  render() {
    const { routes, itemRender, separator, params, color, classes } = this.props;
    const { items } = this.state;

    const className = classNames(classes.root, {
      [classes.white]: color === 'white',
      [classes.black]: color === 'black',
    });

    const sep = <i className={classes.separator}>{separator}</i>;

    const extraBreadcrumbItems =
      routes && routes.length > 0
        ? routes.map((route, index) => {
            const { path, icon, name } = route;
            const last = routes.length == index + 1;
            const paths = [route.path];
            return (
              <React.Fragment>
                <BreadcrumbItem
                  key={path}
                  path={path}
                  icon={icon}
                  name={name}
                  notLink={last}
                  classes={classes}
                >
                  {itemRender ? itemRender(route, params, routes, paths) : ''}
                </BreadcrumbItem>
                {!last ? sep : ''}
              </React.Fragment>
            );
          })
        : items.map((child, index) => {
            const last = items.length == index + 1;
            return (
              <React.Fragment>
                {child}
                {!last ? sep : ''}
              </React.Fragment>
            );
          });

    return <div className={className}>{extraBreadcrumbItems}</div>;
  }
}

Breadcrumb.propTypes = {
  /**
   * Custom separator
   */
  color: PropTypes.oneOf(['default', 'black', 'white']),
  /**
   * Custom item renderer, itemRender(route, params, routes, paths) => ReactNode
   */
  itemRender: PropTypes.func,
  /**
   * Routing parameters
   */
  params: PropTypes.object,
  /**
   * The routing stack information of router
   */
  routes: PropTypes.array,
  /**
   * Custom color of each items
   */
  separator: PropTypes.oneOfType([PropTypes.string]),
};

Breadcrumb.defaultProps = {
  separator: '/',
  color: 'default',
};

export default withStyles(styles, { name: 'RMBreadcrumb', withTheme: true })(Breadcrumb);
