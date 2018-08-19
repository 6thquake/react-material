import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../styles';

const styles = {
  root: {
    display: 'inline-block',
    '@global svg': {
      verticalAlign: 'middle',
      width: '0.6em',
    },
  },
  icon: {
    padding: '0 3px',
  },
};

class BreadcrumbItem extends React.Component {
  render() {
    const { path, icon, name, notLink, classes, children } = this.props;

    let item = children;

    if (!children) {
      if (!notLink) {
        item = (
          <a href={path}>
            {!!icon ? <i className={classes.icon}>{icon}</i> : null}
            <font>{name}</font>
          </a>
        );
      } else {
        item = (
          <span>
            <i className={classes.icon}>{icon}</i>
            <font>{name}</font>
          </span>
        );
      }
    }

    return (
      <div className={classes.root} key={path}>
        {item}
      </div>
    );
  }
}

BreadcrumbItem.propTypes = {
  path: PropTypes.string,
  icon: PropTypes.element,
  name: PropTypes.string,
  notLink: PropTypes.bool,
};

BreadcrumbItem.defaultProps = {};

export default withStyles(styles, { name: 'RMBreadcrumbItem' })(BreadcrumbItem);
