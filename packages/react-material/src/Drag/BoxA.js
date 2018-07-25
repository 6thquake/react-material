import React,{Component}  from 'react';

const boxstyles = {
    border: '1px dashed gray',
    padding: '0.5rem 1rem',
    cursor: 'move',
    backgroundColor:'white',
    display: 'inline-block',
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
    componentDidMount(){
        // console.log('this.props.getSource')
        // console.log(this.props.getSource)

        //this.props.getSource(this.props.type)
    }
    onbeginDrag=(props,monitor,component)=>{
        const item={};
        //外部item，没有Index,拖入时把DragSource里面的东西拖入
        //item.sourceType = component.props.sourceType;
        //console.log(component)
        // console.log(monitor)
        // console.log(props)
        // console.log(component.myRef)
        item.sourceType = "BoxA"
        item.left = this.dragSourceBox.getBoundingClientRect().left;
        item.top = this.dragSourceBox.getBoundingClientRect().top;
        //console.log(component.dragSourceBox.getBoundingClientRect().top)
        // item.left = 300;
        // item.top = 200;
        if(this.props.type=='OUTITEM'){
            console.log("say what outitem????")

            item.component=component.props.children;
            // console.log('item.component')
            // console.log(item.component)
            //item.dragSourceType = props.dragSourceType;
        }
        else if(this.props.type=='INNERITEM'){
            console.log("say what interitem????")
            item.sortFrom=component.props.index||0;         
        }
        return item
    }
    onendDrag=(props,monitor,component)=>{
        const item = monitor.getItem();
        if((!!item.sortFrom||item.sortFrom==0) && typeof(component.props.remove)=='function'){
            component.props.remove(item.sortFrom);
        }
    }
    getStyles() {
      const { left, top, isDragging,droptTargetLeft, droptTargetTop } = this.props
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
// <div ref={(myRef)=>{this.myRef=myRef}} style={getStyles(this.props,this.state)}>
    render() {
        return(
            <div ref={(box)=>{this.dragSourceBox = box;}} style={this.getStyles()}>
            
                <div style={boxstyles}>I am boxA</div>
            </div>        
        ) 
    }
}
export default BoxA