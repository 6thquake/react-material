import React , { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Done, HighlightOff } from '@material-ui/icons';
import { red } from '../colors';

const styles = theme => ({
  lineicon:{
    display:'flex',
    alignItems: 'center',
  },
  lineProgress: {
    flex:1
  },
  nubProgress:{
    marginLeft:theme.spacing.unit * 2,
    width: 35+'px',
    textAlign: 'left',
    fontSize: 1+'em',
    verticalAlign: 'middle',
    fontAamily: 'tahoma'
  },
  icondiv:{
    width:50
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
     * Progress percentage,only when isPromise is false.
     */
    completed : PropTypes.num,
    /**
     * If true,progress wrong.
     */
    error: PropTypes.bool,
    /**
     * If true,simulation progress.
     */
    isPromise: PropTypes.bool,
    /**
     * If true,progress finish when isPromise is true.
     */
    isFinish: PropTypes.bool,
    /**
     * Estimated time of the progress,when isPromise is true,the units is seconds.
     */
    estimatedTime: PropTypes.num,
    /**
     * If true,it is a normal progress without percentage.
     */
    baseProgress: PropTypes.bool,
    /**
     * 	The color of the component. It supports those theme colors that make sense for this component.
     */
    color: PropTypes.oneOf(['primary', 'secondary']),
    /**
     * The value for the buffer variant. Value between 0 and 100.
     */
    valueBuffer: PropTypes.num,
    /**
     * The variant of progress indicator. Use indeterminate or query when there is no progress value.
     */
    variant: PropTypes.string,
    /**
     * 	The value of the progress indicator for the determinate and buffer variants. Value between 0 and 100.
     */
    value: PropTypes.num,
  };

  static defaultProps = {
    completed: 0,
    error:false,
    isPromise:false,
    isFinish:false,
    estimatedTime:2,
    baseProgress:false,
    // color:'primary',
    valueBuffer:10,
    //variant:'buffer'
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
    if(!nextProps.isFinish && nextProps.isPromise&&nextProps!==prevState.preProps){
      return {
        completed: 0,
        preProps:nextProps
      }
    }
    return null;
  }
  componentDidUpdate(){
    if(this.props.isPromise){
      if(this.timer){
        clearInterval(this.timer);
      }
      this.timer = setInterval(this.progress,300);
    }
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
      return (<LinearProgress  {...this.props}/>);
    } else {
      if(this.props.isPromise){
        const {classes} = this.props;
        const {completed}=this.state;
        return this.props.isFinish?null:<LinearProgress  variant="buffer"  value={completed} valueBuffer={10} {...this.props}/>
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
          <div className={classes.lineicon}>
            <div className={classes.lineProgress}>
              <LinearProgress  variant="determinate" color={error?'secondary':'primary'}  value={completed} {...this.props}/>
            </div>
            <div className={classes.icondiv}>
              {finishOrError}
            </div>
          </div>
        );
      }
    }
  }
}
export default withStyles(styles, { name: 'RMProgress' })(Progress);
