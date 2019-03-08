import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import Button from '../Button';
import MobileStepper from '../MobileStepper';
import Paper from '../Paper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { withLocale } from '../LocaleProvider';

const styles = theme => ({
  root: {
    overflowX: 'hidden',
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  mobileStepper: {},
});

class StepperPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: this.props.activeStep || 0,
      allowToNext: false,
      direction: 'next',
    };
  }

  allowToNext = (index, allow) => {
    if (this.state.activeStep === index) {
      this.setState({
        activeStep: index,
        allowToNext: !!allow,
      });
    }
  };

  handleNext = () => {
    const { activeStep } = this.state;

    this.setState({
      activeStep: activeStep + 1,
      direction: 'next',
    });
  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1,
      direction: 'prev',
    });
  };

  render() {
    const { activeStep, allowToNext, direction } = this.state;

    const {
      alternativeLabel,
      children,
      classes,
      className: classNameProp,
      theme,
      unmountAfterBack,
      finishButton,
      next,
      back,
      finish,
      ...other
    } = this.props;

    const className = classNames(classes.root, classNameProp);

    const childrenArray = React.Children.toArray(children);
    const steps = childrenArray.map((step, index) => {
      const controlProps = {
        index,
        active: false,
        completed: false,
        disabled: false,
        last: index + 1 === childrenArray.length,
        alternativeLabel,
        direction,
        unmountAfterBack,
        allowToNext: this.allowToNext.bind(this),
      };

      if (activeStep === index) {
        controlProps.active = true;
      } else if (activeStep > index) {
        controlProps.completed = true;
      } else if (activeStep < index) {
        controlProps.disabled = true;
      }

      return [React.cloneElement(step, { ...controlProps, ...step.props })];
    });

    return (
      <Paper square elevation={0} className={className} {...other}>
        {steps}
        <MobileStepper
          variant="text"
          steps={steps.length}
          position="static"
          activeStep={this.state.activeStep}
          className={classes.mobileStepper}
          nextButton={
            this.state.activeStep === steps.length - 1 ? (
              finishButton || (
                <Button size="small" disabled={this.state.allowToNext} onClick={this.props.finish}>
                  {finish}
                  {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </Button>
              )
            ) : (
              <Button size="small" onClick={this.handleNext} disabled={this.state.allowToNext}>
                {next}
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
            )
          }
          backButton={
            this.state.activeStep === 0 ? (
              <span />
            ) : (
              <Button size="small" onClick={this.handleBack}>
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                {back}
              </Button>
            )
          }
        />
      </Paper>
    );
  }
}

StepperPane.propTypes = {
  /**
   * Set the active step (zero based index).
   */
  activeStep: PropTypes.number,
  /**
   * If set to 'true' and orientation is horizontal,
   * then the step label will be positioned under the icon.
   */
  alternativeLabel: PropTypes.bool,
  /**
   * Two or more `<Step />` components.
   */
  children: PropTypes.node.isRequired,
  /**
   * Useful to extend the style applied to components.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,

  finish: PropTypes.func,

  finishButton: PropTypes.node,

  unmountAfterBack: PropTypes.bool,
};

StepperPane.defaultProps = {
  activeStep: 0,
  alternativeLabel: false,
};

export default withStyles(styles, { withTheme: true, name: 'RMStepperPane' })(
  withLocale({ name: 'StepperPane' })(StepperPane),
);
