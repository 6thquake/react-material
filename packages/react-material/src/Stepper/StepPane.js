import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import Slide from '../transitions/Slide';

const styles = theme => ({
  root: {
    width: '100%',
  },
  show: {
    position: 'relative',
  },
  hide: {
    position: 'absolute',
    top: '0px',
    left: '0px',
  },
});

const negative = direction => {
  if (direction == 'left') {
    return 'right';
  }
  return 'left';
};

class StepPane extends React.Component {
  render() {
    const {
      active,
      alternativeLabel,
      children,
      classes,
      className: classNameProp,
      completed,
      disabled,
      index,
      last,
      direction,
      allowToNext,
      theme,
      unmountAfterBack,
      ...other
    } = this.props;

    const { ...mount } = {
      mountOnEnter: true,
      unmountOnExit: unmountAfterBack,
    };

    const className = classNames(classes.root, classNameProp, active ? classes.show : classes.hide);

    let _direction;
    if (direction === 'prev') {
      _direction = theme.direction === 'rtl' ? 'left' : 'right';
    } else {
      _direction = theme.direction === 'rtl' ? 'right' : 'left';
    }

    return (
      <Slide direction={active ? _direction : negative(_direction)} in={active} {...mount}>
        <div className={className} {...other}>
          {children}
        </div>
      </Slide>
    );
  }
}
//
StepPane.propTypes = {
  /**
   * Sets the step as active. Is passed to child components.
   */
  active: PropTypes.bool,
  /**
   * @ignore
   * Set internally by Stepper when it's supplied with the alternativeLabel property.
   */
  allowToNext: PropTypes.func,
  /**
   * Useful to extend the style applied to components.
   */
  alternativeLabel: PropTypes.bool,
  /**
   * @ignore
   */
  classes: PropTypes.object.isRequired,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  className: PropTypes.string,

  /**
   * Mark the step as disabled, will also disable the button if
   * `StepButton` is a child of `Step`. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * @ignore
   * Used internally for numbering.
   */
  direction: PropTypes.oneOf(['next', 'prev']),
  /**
   * @ignore
   */
  disabled: PropTypes.bool,

  index: PropTypes.number,

  last: PropTypes.bool,

  unmountAfterBack: PropTypes.bool,
};

StepPane.defaultProps = {
  active: false,
  completed: false,
  disabled: false,
};

export default withStyles(styles, { withTheme: true, name: 'RMStepPane' })(StepPane);
