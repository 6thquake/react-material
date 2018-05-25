import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import {Home,Grade,Lock} from '@material-ui/icons';
import HTML5Backend from 'react-dnd-html5-backend';
import {DragSource as DragSourceBase,DropTarget as DropTargetBase } from 'react-dnd';
/*type:
position 对于panel中已存在的source 拖拽时会重新定位它的位置 当拖出panel以外时会删除
dragin 从panel外部拖入，源source不变，复制一份
style
*/

const styles={

	position:{
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width:'100%',
		height:'100%',
	},
	dragin:{
		display:'inline-block',
		padding:'6px'
	}
};
const _source = {
  beginDrag(props, monitor, component) {
  	console.log('start drag.......')
    // Return the data describing the dragged item
    /*
	开始drag时，
	如果type==dragin 就会生成新的position source传给dropTarget
	如果type == position 就需要传回当前xy定位；
    */
    //每次begin时 如果有span的class中有MuiTouchRipple 则display none
    let _ripple = component.decoratedComponentInstance.refs.mytttest.querySelectorAll('span[class^="MuiTouchRipple"]');
    if(_ripple.length>0){
    	_ripple.forEach((element, index, array)=>{
    		element.style.display = 'none'
    	})
    }
    
    const item = {};
    if(props.type =='POSITION'){
    	//拿到当前node的index
    	const _from = props.index || 0;
    	item.sortFrom = _from;
    }else if(props.type =='DRAGIN'){
    	item.component = component.props.children;
    }
    
    return item;
  },
  endDrag(props, monitor, component){
  	const item = monitor.getItem();
  	if((!!item.sortFrom || item.sortFrom ==0)&& typeof props.remove =='function' ){
  		props.remove(item.sortFrom);
  	}
  	console.log('end drag.......')
  }
};
const _target = {
	
	hover(props, monitor,component) {
		//当hover的时候改变原数组的排列顺序
		let gi = monitor.getItem(),from;
		if(gi){
			from = gi.sortFrom;
		}
		const to = props.index || 0;
		if(from != to && (typeof props.sequence =='function')){
			props.sequence(parseInt(from),parseInt(to));
			monitor.getItem().sortFrom = to
		}
		

		//console.log('!!!!!!!!!!')
	},
};
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

class DragSouce extends Component {
	constructor(props) {
		super(props)
	}



	render() {
		const {connectDragSource,connectDropTarget,children,isDragging,type,classes} = this.props;
		let _style ={};

		 
		if( type =='POSITION' && !!isDragging){
			//return null;
		}
		return connectDropTarget(connectDragSource(	
			<div className={type=='POSITION'?classes.position:classes.dragin} >
			<div ><div ref = {'mytttest'}>
			{children}
			</div></div>
			</div>
		))
	}
}

const _mc = DropTargetBase('DRAGANDDROP', _target, _dropCollect)(DragSouce);
const _mcm = DragSourceBase('DRAGANDDROP', _source, _dragCollect)(_mc);
export default withStyles(styles)(_mcm);
