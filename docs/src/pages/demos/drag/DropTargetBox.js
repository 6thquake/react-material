import React,{Component}  from 'react';
// import DragSource2 from './DragSource2'
import {DragSource2} from 'react-material/Drag';
import update from 'immutability-helper';



// export default function snapToGrid(x, y) {
//   const snappedX = Math.round(x / 32) * 32
//   const snappedY = Math.round(y / 32) * 32

//   return [snappedX, snappedY]
// }

const rootstyles={
        width:'600px',
        border:'1px solid',
        height:'280px',
        position: 'relative',
}

let _this;
let mykey=0
function keyMaker(){
  mykey++;
  return mykey;

}
class DropTargetBox extends Component {
  constructor(props){
      super(props);
      this.state={
          childComponents:[],
          droptTargetTop:0,
          droptTargetLeft:0,
    }
    //debugger;
    _this = this;
  }

onDrop(props,monitor,component,item){
  //debugger;
  // console.log("drag left not fing")
  // console.log(item)
  const delta = monitor.getDifferenceFromInitialOffset()
  console.log('onDrop333333',item.left,item.top)

   let left = Math.round(item.left + delta.x)
   let top = Math.round(item.top + delta.y)
   console.log('delta*****'+delta.x+','+delta.y);
   console.log('item*****'+item.left+','+item.top);
   console.log('*****************')
   if (props.snapToGrid) {
      [left, top] = snapToGrid(left, top)
    }
    //console.log('document.documentElement.scrollTop',document.documentElement.scrollTop)
    //console.log('onDrop4444444',left,top)

    if(!item.component){  //内部元素被拖动
      //debugger;
        _this.hasDroped=true;
        // console.log('droptTarget------item.sortFrom')
        // console.log(item.sortFrom)
       _this.moveBox(item.sortFrom, left, top)
       //debugger;

    }


    if(item.component){ //外部元素
      // console.log('item.component ininin')
      // console.log(this.state)
      // console.log("**************")
      // console.log(self)
      // console.log(this)

      const temp = _this.state.childComponents;
      temp.push({
            component:item.component,
            left:left,
            top: top,
            //dragSourceType: item.dragSourceType,
        });
      _this.setState({childComponents:temp});      
      //debugger
    }
    //debugger;
    
}
// 
  moveBox(sortFrom, left, top){
    //console.log('movebox')
    //console.log(_this.state.childComponents)
    _this.state.childComponents.map((currentV,index)=>{
        _this.setState(
        update(_this.state,{
          childComponents:{
            [sortFrom]:{$merge: {left, top}}
          }
        })
      
      )

    })
    // console.log("**************")
    // console.log(self)
    // console.log(this.state.childComponents)
  }
  removeComponent=(index)=>{
    // if(!index && index !=0){
    //   return;
    // }
    // console.log('this.hasDroped')
    // console.log(this.hasDroped)
    // if(this.hasDroped){
    //   //说明drop在了panel内部 不作处理
    // }else{
    //   //说明drop在了panle外部 需要删除指定index 
    //   let _cc = this.state.childComponents; 
    //   if(!_cc){
    //     return;
    //   }
    // _cc.splice(index,1);
    // console.log('childComponents-----afterRemove')
    // console.log(_cc)
    // this.setState({childComponents:_cc})
    // }        
    // this.hasDroped = false;  
  }
  componentDidMount(){
    // console.log('reffffff')
    // console.log(this.dragBox.getBoundingClientRect().left)
    this.setState({
      droptTargetLeft:this.dragBox.getBoundingClientRect().left,
      droptTargetTop:this.dragBox.getBoundingClientRect().top,
    })
    this.props.accept(this.props.acceptItem) //给DropTartget传递自己的acceptItem
  }
    render() {

      const {childComponents,droptTargetLeft,droptTargetTop}=this.state;
      // console.log("are you sure---11111111")
      // console.log(childComponents)
      //console.log('childComponents')
      //console.log(childComponents)
      let _childComponents = null;
      if(childComponents.length>0){
        console.log(childComponents);
        let tempChild = childComponents.map((o, i)=>{
                  // o.component.props.type = 'INNERITEM';
                  // o.component.props.dragSourceType = o.dragSourceType;
                  // o.component.props.remove = this.removeComponent;
                  // o.component.props.index = i;
                  // o.component.props.left= o.left;
                  // o.component.props.top = o.top;
                  // o.component.props.droptTargetLeft = droptTargetLeft;
                  // o.component.props.droptTargetTop = droptTargetTop;
                  return React.cloneElement(o.component,{key:Math.random(), type:'INNERITEM',left:o.left,top:o.top,droptTargetLeft:droptTargetLeft,droptTargetTop:droptTargetTop})
                  
              });

        // console.log("are you sure")
        // console.log(tempChild)
        // console.log('tempChild_____________')
        // console.log(tempChild)
        _childComponents = tempChild.map((currentValue,index)=>{

          // console.log('currentValue!!!!!!!!!!props.index')
          //   console.log(currentValue)
              return(
                    <DragSource2 index={index} remove={this.removeComponent} >
                        {currentValue}
                    </DragSource2>
              )    
            }           
        );
      }
      // console.log(' _childComponents')
      // console.log(_childComponents)
      return (
          <div style={rootstyles}  ref={(box)=>{this.dragBox = box;}}>
                {_childComponents}
          </div>
      );
    }
}
export default DropTargetBox;