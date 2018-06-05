import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'react-material/styles';
import { StatusButton } from 'react-material/Button';
import { StepperPane, StepPane } from 'react-material/Stepper';

const styles = {
  pane:{},
  step:{}
};

function getSteps() {
  return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`;
    case 1:
      return 'An ad group contains one or more ads which target a shared set of keywords.';
    case 2:
      return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
    default:
      return 'Unknown step';
  }
}

class App extends React.Component {
  state = {
    activeStep: 0,
  };

  handle = () => {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        Math.random() > .5 ? reject('err') : resolve('ok');
      }, 1000);
    }).then(function (r) {
      return true;
    });
  }

  render() {
    const { classes, theme } = this.props;

    const steps = getSteps();

    return (
      <StepperPane className={classes.pane} unmountAfterBack={false} finishButton={
        <StatusButton size="small" color="primary" variant="raised" onHandler={this.handle}>
        SAVE
        </StatusButton>
      }>
        {
          steps.map((label, index) => {
            return (
              <StepPane key={label} className={classes.step}>
                {getStepContent(index)}
              </StepPane>
            )
          })
        }
      </StepperPane>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);
