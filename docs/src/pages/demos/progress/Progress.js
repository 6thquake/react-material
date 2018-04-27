import React , {Component} from 'react';
import Progress from 'react-material/Progress';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button'

const styles = {
  root: {
    flexGrow: 1,
  },
};
class ProgressTest extends Component {
  constructor(props){
    super(props);
    this.state={
      error:false,
      completed:0,
      isFinish:false
    };
  }
  componentDidMount (){
    const self = this;
    setTimeout(function () {
      self.setState( {isFinish:true})
    },5000)
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
            if(this.state.completed>50){
              this.setState({ error: true});
            }else{
              this.setState({ completed: Math.min(completed + diff, 100) });
            }

        }
    };
  reStartbase(){
    this.setState({
      error:false,
      completed:0
    });
    this.timer = setInterval(this.progress, 500);
  };
  reStartpromise(){
    // this.setState({
    //   completed:0
    // });
  };
    render() {
      const { classes } = this.props;
        return (
          <div className={classes.root}>
            <Button>base progress</Button>
            <Progress
                baseProgress={true}
            />
            <br/>
            <br/>
            <br/>
            <Button onClick={this.reStartbase.bind(this)}>start progress with percentage</Button>
            <Progress
              completed={this.state.completed}
              error={this.state.error}
              isPromise={false}
              isFinish={false}
            />
            <br/>
            <br/>
            <br/>
            <Button  onClick={this.reStartpromise.bind(this)} >promise progress</Button>
            <Progress
              error={this.state.error}
              isPromise={true}
              isFinish={this.state.isFinish}
              estimatedTime={5}
            />
          </div>
        );
    }
}
export default withStyles(styles)(ProgressTest);
