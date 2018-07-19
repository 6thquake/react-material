import React,{Component}  from 'react';

const boxstyles = {
    border: '1px dashed gray',
    padding: '0.5rem 1rem',
    cursor: 'move',
    backgroundColor:'white',
    display: 'inline-block',
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

// function _dragCollect(connect, monitor) {
//   return {
//     connectDragSource: connect.dragSource(),
//     isDragging: monitor.isDragging()
//   };
// };

class BoxA extends Component {
    constructor(props){
        super(props);
        //this.myRef = React.createRef();

    }
    onbeginDrag(props,monitor,component){
        const item={};
        //外部item，没有Index,拖入时把DragSource里面的东西拖入
        //item.sourceType = component.props.sourceType;
        console.log(component)
        console.log(monitor)
        console.log(props)
        // console.log(component.myRef)
        // item.left = component.decoratedComponentInstance.refs["text"].getBoundingClientRect().left;
        // item.top = component.decoratedComponentInstance.refs["text"].getBoundingClientRect().top;
        item.left = 300;
        item.top = 200;
        if(props.type=='OUTITEM'){
            item.component=component.props.children;
            item.dragSourceType = props.dragSourceType;
        }
        else if(props.type=='INNERITEM'){
            item.sortFrom=component.props.index||0;         
        }
        return item
    }
    onendDrag(props,monitor,component){
        const item = monitor.getItem();
        if((!!item.sortFrom||item.sortFrom==0) && typeof(component.props.remove)=='function'){
            component.props.remove(item.sortFrom);
        }
    }
// <div ref={(myRef)=>{this.myRef=myRef}} style={getStyles(this.props,this.state)}>
    render() {
        return(
            <div ref={'text'} style={getStyles(this.props,this.state)}>
            
                <div style={boxstyles}>I am boxA</div>
            </div>        
        ) 
    }
}
export default BoxA