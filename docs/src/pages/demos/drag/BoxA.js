import React,{Component}  from 'react';
import ReactDOM from 'react-dom';
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
//

let _this=null;
class BoxA extends Component {

    constructor(props){
        super(props);
        //this.myRef = React.createRef();
        // this.onbeginDrag = this.onbeginDrag.bind(this)
        _this = this;
    }
    componentDidMount(){

        debugger;
        this.props.register(this);

        // if(this.props.type==='OUTITEM'){
        //     _this = this;
        // }

        // if(this.props.type==='INNERITEM'){
        //     _this = this;
        // }
        // console.log('this.props.getSource')
        // console.log(this.props.getSource)
        // console.log('componentDidMount------------------')
        // console.log(this)
        //this.props.getSource(this.props.type)
    }
    // componentDidUpdate(){
    //     _this = this;
    // }
    onbeginDrag(props,monitor,component){
        // debugger;
        const item={};
        //外部item，没有Index,拖入时把DragSource里面的东西拖入
        //item.sourceType = component.props.sourceType;
        //con÷sole.log(component)
        // console.log(monitor)
        // console.log(props)
        // console.log(component.myRef)
        item.sourceType = "BoxA"
        // console.log('onbeginDrag------------------')
        // console.log(this)
        // console.log(this.refs['dragSourceBox'])
        //debugger

        // console.log('onbeginDrag-myRef')
        // console.log(_this.refs["myRef"])

        item.left = _this.refs["myRef"].getBoundingClientRect().left;
        item.top = _this.refs["myRef"].getBoundingClientRect().top;
        //console.log('onbeginDrag111111',item.left,item.top)
        if(this.props.type=='OUTITEM'){
            //console.log("say what outitem????")

            item.component=component.props.children;
            // console.log('item.component')
            // console.log(item.component)
            //item.dragSourceType = props.dragSourceType;
            //debugger;
        }
        else if(this.props.type=='INNERITEM'){
            // console.log("say what interitem????component.props.index")
            // console.log(component.props.index)
            item.sortFrom=component.props.index||0;   
        }
        return item
    }
    // (function(_this){
    //     function onbeginDrag(props,monitor,component) {
    //         const item={};
    //         item.sourceType = "BoxA"
    //         console.log('onbeginDrag------------------')
    //         console.log(_this)
    //         console.log(_this.refs['dragSourceBox'])
    //         item.left =_this.refs['dragSourceBox'].getBoundingClientRect().left;
    //         console.log(item.left)
    //         if(_this.props.type=='OUTITEM'){
    //             console.log("say what outitem????")
    //             item.component=component.props.children;
    //         }
    //         else if(_this.props.type=='INNERITEM'){
    //             console.log("say what interitem????")
    //             item.sortFrom=component.props.index||0;         
    //         }
    //         return item
    //     }
    //     return onbeginDrag;
    // })(this)


    onendDrag(props,monitor,component){
        const item = monitor.getItem();
       // console.log('component.props.remove')
      //  console.log(component.props.remove)
      //debugger;
        if((!!item.sortFrom||item.sortFrom==0) && typeof(component.props.remove)=='function'){
            //console.log('onendDrag----sortFrom')
            //console.log(item.sortFrom)
            component.props.remove(item.sortFrom);
        }
       // debugger
    }
    getStyles() {
      const { left, top, isDragging,droptTargetLeft, droptTargetTop } = this.props;
      //console.log('***', left,'***', top,'***',  isDragging,'***', droptTargetLeft,'***',  droptTargetTop);
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
    //{(box)=>{this.dragSourceBox = box;}}
// <div ref={(myRef)=>{this.myRef=myRef}} style={getStyles(this.props,this.state)}>
    render() {
        //let _this = this;
        return(
            <div style={this.getStyles()} ref={"myRef"}>
            
                <div style={boxstyles}>I am boxA</div>
            </div>        
        ) 
    }
}
export default BoxA