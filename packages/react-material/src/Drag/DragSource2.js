import React,{PureComponent} from 'react';
import {withStyles} from '../styles';
import {DragSource as DragSourceBase,DropTarget as DropTargetBase} from 'react-dnd';
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";
const styles={
   inner:{
       display:'inline-block',
   },
}
const _source={
    beginDrag(props,monitor,component){
        const item={};
        //外部item，没有Index,拖入时把DragSource里面的东西拖入
        item.left = component.refs["text"].getBoundingClientRect().left;
        item.top = component.refs["text"].getBoundingClientRect().top;
        if(props.type=='OUTITEM'){
            item.component=component.props.children;
            item.dragSourceType = props.dragSourceType;
        }
        else if(props.type=='INNERITEM'){
            item.sortFrom=component.props.index||0;         
        }
        return item
    },
    endDrag(props,monitor,component){
        const item = monitor.getItem();
        if((!!item.sortFrom||item.sortFrom==0) && typeof(component.props.remove)=='function'){
            component.props.remove(item.sortFrom);
        }
    }

}

function getStyles(props,state) {
  const { left, top, isDragging,droptTargetLeft, droptTargetTop } = props
  if(left){
    const transform = `translate3d(${left-droptTargetLeft}px, ${top-droptTargetTop}px, 0)`
    return {
      position: 'absolute',
      transform : transform,
      opacity: isDragging ? 0: 1,
    }
  }else{
     return {
      opacity: isDragging ? 0.6 : 1,
     }
  }
}

function _dragCollect(connect, monitor) {
    return {
      // Call this function inside render()
      // to let React DnD handle the drag events:
      connectDragSource: connect.dragSource(),
      // You can ask the monitor about the current drag state:
      isDragging: monitor.isDragging()
    };
  };
  function _dropCollect(connect,monitor){
      return {
          connectDropTarget: connect.dropTarget(),
          isOver: monitor.isOver({ shallow: true }),
          canDrop: monitor.canDrop(),
          itemType: monitor.getItemType()
      }
  };
class _DragSource extends PureComponent{
    constructor(props){
        super(props);
    }
    static propTypes={
        // remove:propTypes.func
    }
    render(){
        const {connectDragSource,connectDropTarget,children,classes,type}=this.props;
       return connectDragSource(
           <div className={classes.inner}>
                <div ref={'text'} style={getStyles(this.props,this.state)}>
                    {children}
                </div>
           </div>
           
    )
    }
    
}

export default withStyles(styles)(DragSourceBase((props) => props.dragSourceType , _source, _dragCollect)(_DragSource))
