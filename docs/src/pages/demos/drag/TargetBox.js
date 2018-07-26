import React,{Component}  from 'react';
import {DragSource2} from '@6thquake/react-material/Drag';
import update from 'immutability-helper';
import {TargetWrapper} from '@6thquake/react-material/Drag';

const rootstyles={
        width:'600px',
        border:'1px solid',
        height:'280px',
        position: 'relative',
}


let mykey=0
function keyMaker(){
  mykey++;
  return mykey;

}
class TargetBox extends TargetWrapper {
  constructor(props){
      super(props);
      this.state={
          childComponents:[],
          droptTargetTop:0,
          droptTargetLeft:0,
    }
  }

drop=(props,monitor,component)=>{
  const item=monitor.getItem();

  const delta = monitor.getDifferenceFromInitialOffset()
  console.log('onDrop333333',item.left,item.top)

   let left = Math.round(item.left + delta.x)
   let top = Math.round(item.top + delta.y)
   console.log('delta*****'+delta.x+','+delta.y);
   console.log('item*****'+item.left+','+item.top);
   console.log('*****************')
   if (this.props.snapToGrid) {
    console.log("this.props.snapToGrid")

      [left, top] = this.snapToGrid(left, top)
    }

    if(!item.component){  //内部元素被拖动
        this.hasDroped=true;
       this.moveBox(item.sortFrom, left, top)

    }


    if(item.component){ //外部元素
      const temp = this.state.childComponents;
      temp.push({
            component:item.component,
            left:left,
            top: top,
        });
      this.setState({childComponents:temp});      
    }
    
}
  moveBox(sortFrom, left, top){
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
  snapToGrid(x, y) {
    const snappedX = Math.round(x / 32) * 32
    const snappedY = Math.round(y / 32) * 32

    return [snappedX, snappedY]
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
    console.log('childComponents-----afterRemove')
    console.log(_cc)
    this.setState({childComponents:_cc})
    }        
    this.hasDroped = false;  
  }
  componentDidMount(){
    this.props.register(this);
    this.setState({
      droptTargetLeft:this.dragBox.getBoundingClientRect().left,
      droptTargetTop:this.dragBox.getBoundingClientRect().top,
    })
    this.props.accept(this.props.acceptItem) //给DropTartget传递自己的acceptItem
  }
    render() {

      const {childComponents,droptTargetLeft,droptTargetTop}=this.state;
      let _childComponents = null;
      if(childComponents.length>0){
        let tempChild = childComponents.map((o, i)=>{
                  return React.cloneElement(o.component,{key:Math.random(), type:'INNERITEM',left:o.left,top:o.top,droptTargetLeft:droptTargetLeft,droptTargetTop:droptTargetTop})
                  
              });

        _childComponents = tempChild.map((currentValue,index)=>{
              return(
                    <DragSource2 index={index} remove={this.removeComponent} >
                        {currentValue}
                    </DragSource2>
              )    
            }           
        );
      }
      return (
          <div style={rootstyles}  ref={(box)=>{this.dragBox = box;}}>
                {_childComponents}
          </div>
      );
    }
}
export default TargetBox;