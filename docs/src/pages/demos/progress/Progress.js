import React , {Component} from 'react';
import Progress from 'react-material/Progress';

export default class ProgressTest extends Component {
  constructor(props){
    super(props);
    this.state={
      error:false,
      completed:0
    };
  }

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
            <Progress
                completed={this.state.completed}
                error={this.state.error}
                isPromise={true}
                isFinish={false}
            />
        );
    }
}
