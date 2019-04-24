import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Done, HighlightOff } from '@material-ui/icons';
import { red } from '../colors';

const styles = theme => ({
  lineicon: {
    display: 'flex',
    alignItems: 'center',
  },
  lineProgress: {
    flex: 1,
  },
  nubProgress: {
    marginLeft: theme.spacing.unit * 2,
    width: `${35}px`,
    textAlign: 'left',
    fontSize: `${1}em`,
    verticalAlign: 'middle',
    fontAamily: 'tahoma',
  },
  icondiv: {
    width: 50,
  },
  icon: {
    marginLeft: theme.spacing.unit * 2,
    '&:hover': {
      color: red[200],
    },
  },
});

class Progress extends Component {
  constructor() {
    super();
    this.state = {
      completed: 0,
      show: false,
    };
  }

  timer = null;

  componentDidMount() {
    if (this.props.isPromise) {
      this.timer = setInterval(this.progress, 300);
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      !prevState.preProps ||
      (nextProps.isPromise &&
        nextProps !== prevState.preProps &&
        nextProps.isFinish !== prevState.preProps.isFinish)
    ) {
      return {
        show: true,
        completed: nextProps.isFinish ? 100 : 0,
        preProps: nextProps,
      };
    }
    return null;
  }

  componentDidUpdate() {
    if (this.props.isPromise) {
      if (this.state.completed === 100) {
        setTimeout(() => this.setState({ show: false, completed: 0 }), 500);
      } else {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(this.progress, 300);
      }
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  progress = () => {
    const { estimatedTime } = this.props;
    const { completed } = this.state;
    const speed = estimatedTime > 0 ? Math.ceil(estimatedTime) : 4;
    const diff = Math.floor((100 - completed) / speed);
    this.setState({ completed: completed + diff });
  };

  render() {
    const { isPromise, baseProgress, showPercentage, value, error, ...others } = this.props;
    const { completed, show } = this.state;
    const { classes } = this.props;
    if (baseProgress) {
      return <LinearProgress {...this.props} />;
    }
    if (isPromise) {
      return show ? <LinearProgress variant="buffer" value={completed} {...others} /> : null;
    }
    if (!showPercentage) {
      return <LinearProgress variant="determinate" value={value} {...others} />;
    }
    if (showPercentage) {
      const zcomplete = Math.floor(value);
      const finishOrError =
        zcomplete === 100 ? (
          <Done className={classes.icon} color="primary" />
        ) : error ? (
          <HighlightOff className={classes.icon} color="error" />
        ) : (
          <span className={classes.nubProgress}>{`${zcomplete}%`}</span>
        );
      return (
        <div className={classes.lineicon}>
          <div className={classes.lineProgress}>
            <LinearProgress
              variant="determinate"
              color={error ? 'secondary' : 'primary'}
              value={value}
              {...this.props}
            />
          </div>
          <div className={classes.icondiv}>{finishOrError}</div>
        </div>
      );
    }
  }
}
Progress.propTypes = {
  /**
   * If true,progress wrong.
   */
  baseProgress: PropTypes.bool,
  /**
   * If true,simulation progress.
   */
  color: PropTypes.oneOf(['primary', 'secondary']),
  /**
   * If true,progress finish when isPromise is true.
   */
  error: PropTypes.bool,
  /**
   * Estimated time of the progress,when isPromise is true,the units is seconds.
   */
  estimatedTime: PropTypes.number,
  /**
   * If true,it is a normal progress without percentage.
   */
  isFinish: PropTypes.bool,
  /**
   * 	The color of the component. It supports those theme colors that make sense for this component.
   */
  isPromise: PropTypes.bool,
  /**
   * The value for the buffer variant. Value between 0 and 100.
   */
  showPercentage: PropTypes.bool,
  /**
   * The variant of progress indicator. Use indeterminate or query when there is no progress value.
   */
  value: PropTypes.number,
  /**
   *  Progress percentage,only when isPromise is false. Value between 0 and 100.
   */
  valueBuffer: PropTypes.number,
  /**
   * 	 If true,progress with percentage.
   */
  variant: PropTypes.string,
};

Progress.defaultProps = {
  value: 0,
  error: false,
  isFinish: false,
  estimatedTime: 2,
  valueBuffer: 10,
};

export default withStyles(styles, { name: 'RMProgress' })(Progress);
