import React , { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Done, HighlightOff } from '@material-ui/icons';
import { red } from '../colors';

const styles = theme => ({
  lineProgress: {
    display:'inline-block',
    width: '90%'
  },
  nubProgress:{
    marginLeft:theme.spacing.unit * 2,
    width: 35+'px',
    textAlign: 'left',
    fontSize: 1+'em',
    verticalAlign: 'middle',
    fontAamily: 'tahoma'
  },
  icon: {
    marginLeft: theme.spacing.unit * 2,
    '&:hover': {
        color: red[200],
    },
  },
});

class Progress extends Component {
  static propTypes = {
    /**
     * 进度百分比,当isPromise为false时props取
     */
    completed : PropTypes.num,
    /**
     * 进度是否出错
     */
    error: PropTypes.bool,
    /**
     * 是否是根据promise模拟进度
     */
    isPromise: PropTypes.bool,
    /**
     * 当isPromise为true时，父组件传回完成，则progress完成
     */
    isFinish: PropTypes.bool,
    /**
     * 当isPromise为true时，预估几秒完成，设定合适的进度速度,单位为秒
     */
    estimatedTime: PropTypes.num,
    /**
     * 当baseProgress为true时，为普通的progress，不带百分比。
     */
    baseProgress: PropTypes.bool
  };

  static defaultProps = {
    completed: 0,
    error:false,
    isPromise:false,
    isFinish:false,
    estimatedTime:2,
    baseProgress:false
  };
  
  constructor(){
    super();
    this.state={
        completed:0
    }
  }

  componentDidMount() {
    if(this.props.isPromise){
      this.timer = setInterval(this.progress,300);
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(!nextProps.isFinish && nextProps.isPromise){
      return {
        completed: 0
      }
    }
    return null;
  }

  componentWillUnmount() {
    if(this.timer){
        clearInterval(this.timer);
    }
  }

  timer = null;

  progress = () => {
    const speed = this.props.estimatedTime>0?Math.ceil(this.props.estimatedTime):4;
      const { completed } = this.state;
      if(this.props.isFinish){
          clearInterval(this.timer);
          this.setState({ completed: 100});
      }else {
        const diff = Math.floor((100-completed)/speed);
        this.setState({ completed: completed + diff});
      }
  };

  render() {
    if(this.props.baseProgress) {
      return (
        <LinearProgress  {...this.props}/>
      );
    } else {
      if(this.props.isPromise){
        const {classes} = this.props;
        const {completed}=this.state;
        return this.props.isFinish?null:(
            <div>
                <div>
                    <LinearProgress  variant="buffer"  value={completed} valueBuffer={10} {...this.props}/>
                </div>
            </div>
        );
      }else {
        const {completed,classes,error} = this.props;
        const zcomplete = Math.floor(completed);
        const finishOrError=(
                (zcomplete===100?<Done className={classes.icon} color="primary"/>:
                        (error?<HighlightOff className={classes.icon} color="error"/>:
                                <span className={classes.nubProgress}>{zcomplete+'%'}</span>
                        )
                )
        );
        return (
            <div>
                <div className={classes.lineProgress}>
                    <LinearProgress  variant="determinate" color={error?'secondary':'primary'}  value={completed} {...this.props}/>
                </div>
                {finishOrError}
            </div>
        );
      }
    }
  }
}
export default withStyles(styles)(Progress);
