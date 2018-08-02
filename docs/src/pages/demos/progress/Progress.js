import React, { Component } from 'react';
import Progress from '@6thquake/react-material/Progress';
import { withStyles } from '@6thquake/react-material/styles';
import Button from '@6thquake/react-material/Button';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = {
  root: {
    flexGrow: 1,
  },
  barColorPrimary: {
    color: 'red',
    background: 'red',
  },
  he: {
    height: 1,
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      error: false,
      completed: 0,
      isFinish: false,
      value: 50,
    };
  }

  timer1 = null;

  componentDidMount() {
    this.promiseEst();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  promiseEst = () => {
    if (this.timer1) {
      clearInterval(this.timer);
    }
    this.timer1 = setTimeout(() => {
      this.setState({ isFinish: true });
    }, 3000);
  };

  timer = null;

  progress = () => {
    const { completed } = this.state;
    if (completed === 100) {
      clearInterval(this.timer);
    } else {
      const diff = Math.random() * 10;
      if (this.state.completed > 50) {
        this.setState({ error: true });
      } else {
        this.setState({ completed: Math.min(completed + diff, 100) });
      }
    }
  };

  reStartControl() {
    this.setState(
      {
        error: false,
        completed: 0,
      },
      () => (this.timer = setInterval(this.progress, 500)),
    );
  }

  reStartpromise() {
    this.setState(
      {
        isFinish: false,
      },
      () => this.promiseEst(),
    );
  }
  setvalue() {
    this.setState({
      value: 0,
    });
  }
  render() {
    const { classes } = this.props;
    const { completed, error, isFinish, value } = this.state;
    return (
      <div className={classes.root}>
        <Button onClick={this.setvalue.bind(this)}>setvalue</Button>
        <br />
        <LinearProgress variant="buffer" value={value} />
        <br />
        <br />
        <br />
        <Button>base progress</Button>
        <Progress baseProgress />
        <br />
        <br />
        <br />
        <Button onClick={this.reStartControl.bind(this)}>
          start controlled progress with percentage
        </Button>
        <Progress showPercentage value={completed} error={error} />
        <br />
        <br />
        <Button>controlled progress</Button>
        <Progress value={completed} />
        <br />
        <br />
        <br />
        <Button onClick={this.reStartpromise.bind(this)}>restart promise progress</Button>
        <br />
        <Progress isPromise isFinish={isFinish} estimatedTime={5} variant="query" />
        <br />
        <Progress
          isPromise
          classes={{
            root: classes.he,
          }}
          isFinish={isFinish}
          estimatedTime={10}
        />
      </div>
    );
  }
}
export default withStyles(styles)(App);
