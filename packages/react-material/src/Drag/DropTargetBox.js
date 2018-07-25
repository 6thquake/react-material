import React,{Component}  from 'react';
import DragSource2 from './DragSource2'
const rootstyles={
        width:'600px',
        border:'1px solid',
        height:'280px',
        position: 'relative',
}


class DropTargetBox extends Component {
  constructor(props){
      super(props);
      this.state={
          childComponents:[],
          droptTargetTop:0,
          droptTargetLeft:0,
    }
  }

onDrop(props,monitor,component,item){

  const delta = monitor.getDifferenceFromInitialOffset()
   let left = Math.round(item.left + delta.x +document.documentElement.scrollLeft)
   let top = Math.round(item.top + delta.y +document.documentElement.scrollTop)
   console.log(left,top)
   if (props.snapToGrid) {
      [left, top] = snapToGrid(left, top)
    }

    if(!item.component){  //内部元素被拖动
        component.hasDroped=true;
       this.moveBox(item.sortFrom, left, top)

    }

    if(item.component){ //外部元素
      console.log('item.component ininin')
      const temp = this.state.childComponents;
      temp.push({
            component:item.component,
            left:left,
            top: top,
            //dragSourceType: item.dragSourceType,
        });
        this.setState({childComponents:temp});
        console.log("&&&&&&&&&&&&&&&&&&&")
        console.log(this.state.childComponents)
    }
    
}
  moveBox=(sortFrom, left, top)=>{
    
    this.state.childComponents.map((currentV,index)=>{
        this.setState(
        update(this.state,{
          childComponents:{
            [sortFrom]:{$merge: {left, top}}
          }
        })
      
      )

    })
    // console.log(this.state.childComponents)
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
    console.log('reffffff')
    console.log(this.dragBox.getBoundingClientRect().left)
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
      console.log('childComponents')
      console.log(childComponents)
      let _childComponents = null;
      if(childComponents.length>0){
        let tempChild = childComponents.map((o, i)=>{
                  // o.component.props.type = 'INNERITEM';
                  // o.component.props.dragSourceType = o.dragSourceType;
                  // o.component.props.remove = this.removeComponent;
                  // o.component.props.index = i;
                  // o.component.props.left= o.left;
                  // o.component.props.top = o.top;
                  // o.component.props.droptTargetLeft = droptTargetLeft;
                  // o.component.props.droptTargetTop = droptTargetTop;
                  return React.cloneElement(o.component,{type:'INNERITEM',remove:this.removeComponent,index:i,left:o.left,top:o.top,droptTargetLeft:droptTargetLeft,droptTargetTop:droptTargetTop})
                  
              });

        // console.log("are you sure")
        // console.log(tempChild)
        console.log('tempChild_____________')
        console.log(tempChild)
        _childComponents=tempChild.map((currentValue,index)=>{
              return(
                    <DragSource2>
                        {currentValue.component}
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