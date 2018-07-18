import React from 'react';
import ReactDOM from "react-dom";
import {withStyles} from '../styles';
import {DropTarget} from 'react-dnd';
import snapToGrid from './snapToGrid'
import DragSource2 from './DragSource2';
import update from 'immutability-helper';
import PropTypes from 'prop-types';
const styles={
    root:{
        width:'600px',
        border:'1px solid',
        height:'280px',
        position: 'relative',
    },
    custom:{

    }
}

const boxTarget={
    drop(props,monitor,component){
        const delta = monitor.getDifferenceFromInitialOffset()
        const item=monitor.getItem();
       let left = Math.round(item.left + delta.x +document.documentElement.scrollLeft)
       let top = Math.round(item.top + delta.y +document.documentElement.scrollTop)
       if (props.snapToGrid) {
          [left, top] = snapToGrid(left, top)
        }
        if(!item.component){  //内部元素被拖动
            component.hasDroped=true;
            component.moveBox(item.sortFrom, left, top)
        }

        if(item.component){ //外部元素
            component.state.childComponents.push({
                component:item.component,
                left:left,
                top: top,
                dragSourceType: item.dragSourceType,
            });
            component.setState({childComponents:component.state.childComponents});
        }
        // component.setState({
        //   droptTargetLeft:(this.dragBox.getBoundingClientRect().left||0),
        //   droptTargetTop:(this.dragBox.getBoundingClientRect().top||0),
        // })

    }
}

class _OrderDragTarget extends React.Component{
    constructor(props){
        super(props);
        this.state={
            childComponents:[],
            droptTargetTop:0,
            droptTargetLeft:0,
      }
    }


  moveBox(sortFrom, left, top) {
    this.state.childComponents.map((currentV,index)=>{
        this.setState(
        update(this.state,{
          childComponents:{
            [sortFrom]:{$merge: {left, top}}
          }
        })
      
      )

    })
  }

      removeComponent=(index)=>{
        if(!index && index !=0){
          return;
        }
        if(this.hasDroped){
          //说明drop在了panel内部 不作处理
        }else{
          //说明drop在了panle外部 需要删除指定index 
          let _cc = this.state.childComponents; 
          if(!_cc){
            return;
          }
        _cc.splice(index,1);
        this.setState({childComponents:_cc})
        }        
        this.hasDroped = false;  
      }
      componentDidMount(){
        this.setState({
          droptTargetLeft:this.dragBox.getBoundingClientRect().left,
          droptTargetTop:this.dragBox.getBoundingClientRect().top,
        })
      }
    render() {

          const {childComponents,left,top,droptTargetLeft,droptTargetTop}=this.state;
          const {connectDropTarget,classes}=this.props;
          const _childComponents=childComponents.map((currentValue,index)=>{
                return(
                      <DragSource2 type='INNERITEM' dragSourceType={currentValue.dragSourceType} ref={'textss'} remove={this.removeComponent} index={index} id={currentValue.id} left={currentValue.left} top={currentValue.top} droptTargetLeft={droptTargetLeft} droptTargetTop={droptTargetTop}>
                          {currentValue.component}
                      </DragSource2>
                )    
              }           
          );
          return connectDropTarget(
              <div className={classes.root}  ref={(box)=>{this.dragBox = box;}}>
                    {_childComponents}
              </div>
          );
      }
}
let OrderDragTarget=DropTarget((props) => props.accepts, boxTarget,(connect,monitor)=>{
    return {
        connectDropTarget:connect.dropTarget(),
        isOver:monitor.isOver({shallow:true}),
        canDrop:monitor.canDrop(),
        itemType:monitor.getItemType()
    }
})(_OrderDragTarget);
export default withStyles(styles)(OrderDragTarget);