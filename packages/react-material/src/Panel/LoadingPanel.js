import React , { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../styles';
import Progress from '../Progress';
import CircularProgress from '../CircularProgress';

const styles = theme => ({
  root:{
    width:'100%',
    backgroundColor:'white',
    position: 'relative',
  },
  mask:{
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflow: 'hidden',
    outline: 0,
    backgroundColor: 'rgb(0, 0, 0)',
    filter: 'alpha(opacity=30)',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 9999,
  },
  loading:{
    position:'absolute',
    marginLeft: -40,
    marginTop: -40,
    top:'50%',
    left:'50%',
}
});
class LoadingPanel extends Component {
  static propTypes = {
    /**
     * loading 类型，progress为无遮罩层的loading，mask为有遮罩层的loading
     */
    type : PropTypes.string,
    /**
     * loading 是否完成
     */
    loaded : PropTypes.bool,
    /**
     * loading 预估时间
     */
    estimatedTime : PropTypes.number,
  };

  static defaultProps = {
    type: 'progress',
    loaded:false,
    estimatedTime:1
  };
  constructor(props){
    super(props);
  }
  render() {
    const {classes,children,type,loaded,estimatedTime} =this.props;
    return (
            <div className={classes.root}>
              {type==='progress'?<Progress isPromise={true} isFinish={loaded} estimatedTime={estimatedTime}/>:null}
              {type==='mask'&&!loaded? <div className={classes.mask}><div className={classes.loading}><CircularProgress  size={80}/></div></div>:null}
              {children}
            </div>
          )
  }
}
export default withStyles(styles)(LoadingPanel);
