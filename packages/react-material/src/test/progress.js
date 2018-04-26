import React , {Component} from 'react';
import RMProgress from '../Progress/RMProgress';

export default class ProgressTest extends Component {
    state={
      error:false,
      completed:0
    };
    componentDidMount() {
        this.timer = setInterval(this.progress, 500);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }
    timer = null;
    progress = () => {
        const { completed } = this.state;
        if (completed === 100) {
            clearInterval(this.timer);
        } else {
            const diff = Math.random() * 10;
            this.setState({ completed: Math.min(completed + diff, 100) });
        }
    };
    render() {
        return (
            <div>
              <br />
              <br />
              <RMProgress
                  completed={this.state.completed}
                  error={this.state.error}
                  isPromise={true}
                  isFinish={true}
              />
            </div>
        );
    }
}
