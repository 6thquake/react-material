import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../styles';
import BreadcrumbItem from '../BreadcrumbItem';

const styles = {
  root: {
    color: 'rgba(0,0,0,.45)',
    '@global a': {
      textDecoration: 'none',
      color: 'rgba(0,0,0,.45)',
      '&:hover': {
        color: 'rgba(0,0,0,.65)',
      },
    },
  },
  separator: {
    padding: '0 0.5em',
    fontStyle: 'normal',
  },
};

class Breadcrumb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: React.Children.toArray(this.props.children).filter(i => i),
    };
  }

  render() {
    const { routes, itemRender, separator, params, classes } = this.props;
    const { items } = this.state;

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

    return <div className={classes.root}>{extraBreadcrumbItems}</div>;
  }
}

Breadcrumb.propTypes = {
  /**
   * Custom separator
   */
  separator: PropTypes.oneOfType([PropTypes.string /*PropTypes.element*/]),
  /**
   * Custom item renderer, itemRender(route, params, routes, paths) => ReactNode
   */
  itemRender: PropTypes.func,
  /**
   * Routing parameters  object
   */
  params: PropTypes.object,
  /**
   * The routing stack information of router object[]
   */
  routes: PropTypes.array,
};

Breadcrumb.defaultProps = {
  separator: '/',
};

export default withStyles(styles, { name: 'RMBreadcrumb' })(Breadcrumb);
