import React, { Component } from 'react';
import { withStyles } from '../../styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    float: 'left',
    marginRight: '20px',
    minWidth: '240px',
  },
  title: {
    fontSize: 14,
    fontWeight: 600,
    height: '24px',
    lineHeight: '24px',
    marginBottom: 12,
  },
  group: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
});

class TopNavItemGrop extends Component {
  renderNavItem(child, i) {
    const { eventKey, keyPath } = this.props;
    let props = {
      index: i,
      eventKey: child.key || `${eventKey}-item-${i}`,
      keyPath: [...keyPath, eventKey],
    };
    return React.cloneElement(child, props);
  }

  render() {
    const { title, children, classes, onClick } = this.props;
    return (
      <li className={classes.root}>
        {title ? (
          <div className={classes.title} onClick={onClick}>
            {title}
          </div>
        ) : null}
        <ul className={classes.group}>
          {React.Children.map(children, (c, i) => this.renderNavItem(c, i))}
        </ul>
      </li>
    );
  }
}

TopNavItemGrop.propTypes = {
  /**
   * 唯一标志
   */
  key: PropTypes.string,
  /**
   * 点击标题的回掉函数
   */
  onClick: PropTypes.func,
  /**
   * @ignore
   */
  selectedKeys: PropTypes.array,
  /**
   * 标题
   */
  title: PropTypes.node,
};

export default withStyles(styles)(TopNavItemGrop);
