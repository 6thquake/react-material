import React , {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import green from 'material-ui/colors/green';
import { LinearProgress} from 'material-ui/Progress';
import {Done,HighlightOff} from '@material-ui/icons';

const styles = theme => ({
    lineProgress: {
        display:'inline-block',
        width: '90%'
    },
    nubProgress:{
        marginLeft:10+'px',
        width: 35+'px',
        textAlign: 'left',
        fontSize: 1+'em',
        verticalAlign: 'middle',
        fontAamily: 'tahoma'
    },
    icon: {
        marginLeft: theme.spacing.unit * 2,
        '&:hover': {
            color: green[200],
        },
    }
});
class RMProgress  extends Component {
    constructor(props){
        super(props);
        this.state={
            completed:this.props.completed
        }
    }

    componentDidMount() {
        if(this.props.isPromise){
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
        const { completed } = this.state;
        if(this.props.isFinish){
            clearInterval(this.timer);
            this.setState({ completed: 100});
        }else {
            const diff = (100-completed)/4;
            this.setState({ completed: completed + diff});
        }
    };
    render() {
        if(this.props.isPromise){
            const {classes} = this.props;
            const {completed}=this.state;
            return this.props.isFinish?null:(
                <div>
                    <div>
                        <LinearProgress className={classes.progress} variant="buffer"  value={completed} valueBuffer={10}/>
                    </div>
                </div>
            );
        }else {
            const {completed,classes,error} = this.props;
            const finishOrError=(
                    (completed===100?<Done className={classes.icon} color="primary"/>:
                            (error?<HighlightOff className={classes.icon} color="error"/>:
                                    <span className={classes.nubProgress}>{completed+'%'}</span>
                            )
                    )
            );
            return (
                <div>
                    <div className={classes.lineProgress}>
                        <LinearProgress className={classes.progress} variant="determinate"  value={completed}/>
                    </div>
                    {finishOrError}
                </div>
            );
        }

    }
}
RMProgress.propTypes = {
    classes: PropTypes.object.isRequired,
};
RMProgress.defaultProps={
        completed:0,//进度百分比,当isPromise为false时props取
        error:false,//进度是否出错
        isPromise:false,//是否是根据promise模拟进度
        isFinish:false//当isPromise为true时，父组件传回完成，则progress完成
    };
export default withStyles(styles)(RMProgress);