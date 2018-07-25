import React,{PureComponent} from 'react';
import {withStyles} from '../styles';
import {DragSource as DragSourceBase,DropTarget as DropTargetBase} from 'react-dnd';
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";
import BoxA from './BoxA'
const styles={
   inner:{
       display:'inline-block',
       position: 'static'
   },
}
const _source={
  beginDrag(props,monitor,component){
    console.log("begin dragggggg")
    // console.log('component.props.children&^^^^')
    // console.log(component.props.children)
    // debugger
    //let onbeginDrag=component.boxRef.onbeginDrag;
    // console.log(onbeginDrag)
    // debugger
    //onbeginDrag(props,monitor.component);
    // debugger
    //console.log(ReactDOM.findDOMNode(component.props.children))
    //let item= ReactDOM.findDOMNode(component.props.children).onbeginDrag(props,monitor,component)
    //let item = component.refs['boxRef'].onbeginDrag(props,monitor,component)
    // console.log(component.boxRef)
    // console.log(component.boxRef.childNodes[0])
    console.log(component.props.children)
    //let item=component.props.children.type.prototype.onbeginDrag(props,monitor,component)
    let item=component.props.children.type.prototype.onbeginDrag.call(component.props.children,props,monitor,component)
    //let item=component.props.children.type.prototype.onbeginDragbak(props,monitor,component)
    //let item= component.boxRef.childNodes[0].onbeginDrag(props,monitor,component)
    //let a = component.refs['boxRef']
    // console.log(item)
    return item
  },
  endDrag(props,monitor,component){
    component.props.children.type.prototype.onendDrag.call(component.props.children,props,monitor,component)
  }
    // beginDrag(props,monitor,component){
    //     const item={};
    //     //外部item，没有Index,拖入时把DragSource里面的东西拖入
    //     console.log(component.myRef.current)
    //     item.left = component.myRef.current.getBoundingClientRect().left;
    //     item.top = component.myRef.current.getBoundingClientRect().top;
    //     if(props.type=='OUTITEM'){
    //         item.component=component.props.children;
    //         item.dragSourceType = props.dragSourceType;
    //     }
    //     else if(props.type=='INNERITEM'){
    //         item.sortFrom=component.props.index||0;         
    //     }
    //     return item
    // },

    // endDrag(props,monitor,component){
    //     const item = monitor.getItem();
    //     if((!!item.sortFrom||item.sortFrom==0) && typeof(component.props.remove)=='function'){
    //         component.props.remove(item.sortFrom);
    //     }
    // }

}

// function getStyles(props,state) {
//   const { left, top, isDragging,droptTargetLeft, droptTargetTop } = props
//   if(left){
//     const transform = `translate3d(${left-droptTargetLeft}px, ${top-droptTargetTop}px, 0)`
//     return {
//       position: 'absolute',
//       transform : transform,
//       opacity: isDragging ? 0: 1,
//     }
//   }else{
//      return {
//       opacity: isDragging ? 0.6 : 1,
//      }
//   }
// }

function _dragCollect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
};

class _DragSource extends PureComponent{
    constructor(props){
        super(props);
        this.state={
            getSource:'',
        }
        // this.myRef = React.createRef();
    }
    // static propTypes={
    //     type:PropTypes.string.isRequired,
    //     dragSourceType:PropTypes.string.isRequired,
    //     remove:PropTypes.func,
    //     index: PropTypes.number,
    //     left: PropTypes.number,
    //     top: PropTypes.number,
    //     droptTargetLeft: PropTypes.number,
    //     droptTargetTop: PropTypes.number,
    // }
 // source=(sourceType)=>{
 //      this.setState({
 //        getSource:sourceType
 //      })
 //  } 
  // ReactDOM.findDOMNode(component)

aaa= {
    bind:function(){}
}
    render(){      
        const {connectDragSource,children,classes,}=this.props;
        //  console.log('children&^^^^')
        // console.log(children)

       return connectDragSource(  <div className={classes.inner}>
                {children}
           </div>
           
        )
    }
    
}

export default withStyles(styles)(DragSourceBase('*' , _source, _dragCollect)(_DragSource))
