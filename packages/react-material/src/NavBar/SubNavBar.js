import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '../styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const styles = theme => {
  return {
    root: {
      float: 'left',
    },
    title: {
      textAlign: 'center',
      display: 'inline-block',
      lineHeight: '60px',
      height: '100%',
      padding: '0 16px',
      color: '#fff',
      cursor: 'pointer',
      fontSize: '14px',
      '&:hover': {
        color: theme.palette.primary.main,
      },
    },
    dropDown: {
      padding: '20px',
      display: 'none',
    },
    dropDownList: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      overflow: 'hidden',
    },
    lightTitle: {
      color: '#333',
    },
    titleActive: {
      color: theme.palette.primary.main,
    },
  };
};

class SubNavBar extends Component {
  renderNavItem(child, i) {
    const { eventKey } = this.props;
    let props = {
      index: i,
      eventKey: child.key || `${eventKey}-group-${i}`,
      keyPath: [eventKey],
    };
    return React.cloneElement(child, props);
  }

  getAnimation() {
    const { hover } = this.props;
    return {
      display: hover && 'block',
    };
  }

  componentDidMount() {
    const topNav = this.props.topNav;
    if (!this.topNav) {
      this.setState({}, () => {
        this.topNav = ReactDOM.findDOMNode(topNav);
      });
    }
  }

  renderDropDown() {
    const { classes, children, topNav } = this.props;
    return ReactDOM.createPortal(
      <div ref={e => (this.dropDown = e)} className={classes.dropDown} style={this.getAnimation()}>
        <ul className={classes.dropDownList}>
          {React.Children.map(children, (c, i) => this.renderNavItem(c, i))}
        </ul>
      </div>,
      topNav.subContainer,
    );
  }

  render() {
    const { title, classes, children, eventKey, active, onClick } = this.props;
    const { theme } = this.context;
    const classTitle = classNames(
      {
        [classes.lightTitle]: theme === 'light',
        [classes.titleActive]: theme === 'light' && active,
      },
      classes.title,
    );
    return (
      <li className={classes.root}>
        <span className={classTitle} onClick={onClick} top-nav-title="true" event-key={eventKey}>
          {title}
        </span>
        {this.topNav && children && this.renderDropDown()}
      </li>
    );
  }
}

SubNavBar.propTypes = {
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
SubNavBar.contextTypes = {
  subNavOpen: PropTypes.bool,
  theme: PropTypes.string,
};

export default withStyles(styles)(SubNavBar);
