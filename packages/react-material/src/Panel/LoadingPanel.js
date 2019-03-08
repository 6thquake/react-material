import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../styles';
import Progress from '../Progress';

const styles = theme => ({
  root1: {
    width: '100%',
    backgroundColor: 'white',
    position: 'relative',
  },
  progress: {
    position: 'relative',
    top: 0,
    zIndex: 99999,
  },
  mask: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflow: 'hidden',
    outline: 0,
    backgroundColor: 'rgb(0, 0, 0)',
    filter: 'alpha(opacity=30)',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 9999,
  },
  loading: {
    position: 'absolute',
    marginLeft: -40,
    marginTop: -20,
    top: '50%',
    left: '50%',
    width: 80,
    height: 40,
    margin: '0 auto',
    '@global span': {
      display: 'inline-block',
      width: 8,
      height: '100%',
      borderRadius: 4,
      marginLeft: 6,
      background: 'lightgreen',
      animation: 'load 1s ease infinite',
      '&:nth-child(2)': {
        animationDelay: '0.2s',
      },
      '&:nth-child(3)': {
        animationDelay: '0.4s',
      },
      '&:nth-child(4)': {
        animationDelay: '0.6s',
      },
      '&:nth-child(5)': {
        animationDelay: '0.8s',
      },
    },
  },

  '@keyframes load': {
    '0%,100%': {
      height: 40,
      background: 'lightgreen',
    },
    '50%': {
      height: 70,
      margin: '-15px 0',
      background: 'lightblue',
    },
  },
});
class LoadingPanel extends Component {
  constructor(props) {
    super(props);
  }

  loading() {
    const { classes } = this.props;
    return (
      <div className={classes.mask}>
        <div className={classes.loading}>
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    );
  }

  render() {
    const { children, type, loaded, estimatedTime, ...others } = this.props;
    const { classes } = this.props;
    return (
      <div className={classes.root1}>
        {type === 'progress' ? (
          <div className={classes.progress}>
            <Progress isPromise isFinish={loaded} estimatedTime={estimatedTime} {...others} />
          </div>
        ) : null}
        {type === 'mask' && !loaded ? this.loading() : null}
        {children}
      </div>
    );
  }
}
LoadingPanel.propTypes = {
  /**
   * Loading type;if progress,loading without mask，if mask,loading with mask
   */
  estimatedTime: PropTypes.number,
  /**
   * If true,loading is finish.
   */
  loaded: PropTypes.bool,
  /**
   * Loading estimated time
   */
  type: PropTypes.string,
};

LoadingPanel.defaultProps = {
  type: 'progress',
  loaded: false,
  estimatedTime: 1,
};
export default withStyles(styles, { name: 'RMLoadingPanel' })(LoadingPanel);
