import React, { Component } from 'react';
import { withStyles } from '../styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const styles = theme => ({
  root: {
    fontSize: 12,
    lineHeight: '24px',
    marginBottom: '4px',
    color: '#c3c5c6',
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  lightRoot: {
    color: '#333',
  },
  active: {
    color: theme.palette.primary.main,
  },
});

class NavBarItem extends Component {
  onClick = e => {
    const { onClick, hiddenSubContainer } = this.context;
    const { eventKey, keyPath } = this.props;
    if (onClick) {
      onClick(
        {
          key: eventKey,
          keyPath: [...keyPath, eventKey],
        },
        this,
        e,
      );
    }
    hiddenSubContainer();
    this.props.onClick(e);
  };

  render() {
    const { children, eventKey, classes, keyPath } = this.props;
    const { theme } = this.context;
    const className = classNames(
      {
        [classes.lightRoot]: theme === 'light',
        [classes.active]: this.context.selectedKeys.indexOf(eventKey) !== -1,
      },
      classes.root,
    );
    return (
      <li key={eventKey} className={className} onClick={e => this.onClick(e)}>
        {children}
      </li>
    );
  }
}

NavBarItem.propTypes = {
  /**
   * 唯一标志
   */
  key: PropTypes.string,
  /**
   * 点击 NavBarItem的回掉函数
   */
  onClick: PropTypes.func,
  /**
   * @ignore
   */
  selectedKeys: PropTypes.array,
};
NavBarItem.defaultProps = {
  onClick: e => {},
};
NavBarItem.contextTypes = {
  onClick: PropTypes.func,
  hiddenSubContainer: PropTypes.func,
  theme: PropTypes.string,
  selectedKeys: PropTypes.array,
};

export default withStyles(styles)(NavBarItem);
