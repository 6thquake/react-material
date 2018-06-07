import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import {LoadingPanel} from 'react-material/Panel';
import Typography from 'react-material/Typography';
import Button from 'react-material/Button';

const styles={
    root:{
      width:600
    },
  height:{
      height:500
  }
};
class LoadingPanelDemo extends Component {
  constructor(props) {
    super(props);
    this.state={
      isFinish1:false,
      isFinish2:false,
    };
  }
  reStartProgress(){
    this.setState({
      isFinish1:false
    });
    this.progressEst();
  };
  reStartMask(){
    this.setState({
      isFinish2:false
    });
    this.maskEst();
  };
  progressEst=()=>{
    const self = this;
    if(this.timer1){
      clearInterval(this.timer1);
    }
    this.timer1=setTimeout(function () {
      self.setState( {isFinish1:true})
    },5000)
  };
  maskEst=()=>{
    const self = this;
    if(this.timer2){
      clearInterval(this.timer2);
    }
    this.timer2=setTimeout(function () {
      self.setState( {isFinish2:true})
    },5000)
  };
  render() {
    const {classes} =this.props;
    const {isFinish1,isFinish2}=this.state;
     return (
       <div className={classes.root}>
         <Typography gutterBottom>
           progress loading    <Button  onClick={this.reStartProgress.bind(this)} color={'primary'}>restart progress loading</Button>
         </Typography>
         <LoadingPanel type='progress' loaded={isFinish1} estimatedTime={5}>
           <div className={classes.height}></div>
         </LoadingPanel>
         <br/>
         <Typography  gutterBottom>
           mask loading <Button  onClick={this.reStartMask.bind(this)} color={'primary'}>restart mask loading</Button>
         </Typography>
         <LoadingPanel type='mask' loaded={isFinish2}>
           <div className={classes.height}></div>
         </LoadingPanel>
       </div>)
  }
}
export default withStyles(styles)(LoadingPanelDemo)
