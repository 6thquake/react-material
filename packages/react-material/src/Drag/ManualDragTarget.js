import React from 'react';
import ReactDOM from "react-dom";
import {withStyles} from '../styles';
import {DropTarget} from 'react-dnd';
import DragSource2 from './DragSource2';
import update from 'immutability-helper';
import PropTypes from 'prop-types';
const styles={

}

const boxTarget={
    drop(props,monitor,component){
        if(component.state.acceptSource.indexOf(monitor.getItem().sourceType)===-1){
            return;
        }
        component.state.comp.drop(props,monitor,component)
    }
}

class _OrderDragTarget extends React.Component{
    constructor(props){
        super(props);
        this.state={
            acceptSource:[]
        }
    }

 accept=(items)=>{
      this.setState(preState=>({
        acceptSource:[...preState.acceptSource,items]
      }))
  } //为了拿到子组件的设置的item值

   register = (comp) => {
      this.state.comp = comp
  }

    render() {

        const {connect,monitor,classes,children}=this.props;
        return connect.dropTarget()(
            <div >
                  {React.cloneElement(children,{accept:this.accept, register: this.register.bind(this), connect:connect, monitor:monitor })}
            </div>
        );
      }
}


function collect(connect, monitor) {
  return {
    connect:connect,
    monitor:monitor,
    itemType:monitor.getItemType()
  };
};

let OrderDragTarget=DropTarget('*', boxTarget, collect)(_OrderDragTarget);
export default withStyles(styles)(OrderDragTarget);