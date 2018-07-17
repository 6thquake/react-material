import React,{Component} from 'react';
import {withStyles} from '../styles';
import {DragSource as DragSourceBase,DropTarget as DropTargetBase} from 'react-dnd';
import PropTypes from 'prop-types';
const styles={
    inner:{
        display:'inline-block',
        padding:'6px'
    },
}
const _source={
    beginDrag(props,monitor,component){
        console.log('start drag......')
        const item={};
        //外部item，没有Index,拖入时把DragSource里面的东西拖入
       // console.log(component.decoratedComponentInstance.refs["text"]);
        // let _ripple = component.decoratedComponentInstance.refs.text.querySelectorAll('span[class^="MuiTouchRipple"]');
        // if(_ripple.length>0){
    	//     _ripple.forEach((element, index, array)=>{
    	// 	    element.style.display = 'none'
    	//     })
        // }
        item.height=component.decoratedComponentInstance.refs["text"].childNodes[0].offsetHeight;
        item.width=component.decoratedComponentInstance.refs["text"].childNodes[0].offsetWidth;
        item.value=component.props.value;
        if(props.type=='OUTITEM'){
            item.component=component.props.children;
        }else if(props.type=='INNERITEM'){
            item.sortFrom=component.props.index||0;           
        }
        return item;
    },
    endDrag(props,monitor,component){
        const item=monitor.getItem();
        //内部元素拖到外面，target要减掉一个元素
        console.log(item.sortFrom);
        console.log(component.props.remove);
        if((!!item.sortFrom||item.sortFrom==0) && typeof(component.props.remove)=='function'){
            component.props.remove(item.sortFrom);
            // item.component=component.props.children; //内部元素结束拖动之后给component,是为了实现拖出去可以拖到其它组件里面
        }
        console.log('end drag ......');
    }

}
const _target={
    hover(props,monitor,component){
        let gi = monitor.getItem(),from;
		if(gi){
			from = gi.sortFrom;
		}
		if(!from && from !=0){
			return;
		}
		const to = props.index || 0;
		if(from != to && (typeof props.sequence =='function')){
			console.log('################# from '+from+' to '+to+' #################');
			//const hovered = component.refs.dndwrap.parentElement.getBoundingClientRect();
			props.sequence(parseInt(from),parseInt(to),()=>{
					component.hasChanged = true;
					monitor.getItem().sortFrom = to
			});	
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
          //isOverCurrent: monitor.isOver({ shallow: false }),
          canDrop: monitor.canDrop(),
          itemType: monitor.getItemType()
      }
  };
class _DragSource extends Component{
    constructor(props){
        super(props);
    }
    static propTypes={
        // sequence:propTypes.func,
        // remove:propTypes.func
        dragType:PropTypes.string
    }
    render(){
        const {connectDragSource,connectDropTarget,children,classes,type}=this.props;
       return connectDropTarget(connectDragSource(
           <div className={classes.inner}>
                <div ref={'text'} className={classes.inner}>
                    {children}
                </div>
           </div>
           
    )) 
    }
    
}
const _mc=DropTargetBase('BUTTON',_target,_dropCollect)(_DragSource);
const DragSource=DragSourceBase('BUTTON',_source,_dragCollect)(_mc);
export default withStyles(styles)(DragSource);