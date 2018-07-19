import React,{Component}  from 'react';
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

onDrop(props,monitor,component, item){
    const delta = monitor.getDifferenceFromInitialOffset()
   let left = Math.round(item.left + delta.x +document.documentElement.scrollLeft)
   let top = Math.round(item.top + delta.y +document.documentElement.scrollTop)
   if (props.snapToGrid) {
      [left, top] = snapToGrid(left, top)
    }
    if(!item.component){  //内部元素被拖动
        component.hasDroped=true;
       component.moveBox(item.sortFrom, left, top)

    }

    if(item.component){ //外部元素
        component.state.childComponents.push({
            component:item.component,
            left:left,
            top: top,
            dragSourceType: item.dragSourceType,
        });
        component.setState({childComponents:component.state.childComponents});
    }
}
  moveBox(sortFrom, left, top) {
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
    this.setState({
      droptTargetLeft:this.dragBox.getBoundingClientRect().left,
      droptTargetTop:this.dragBox.getBoundingClientRect().top,
    })
  }
    render() {
      const {childComponents,droptTargetLeft,droptTargetTop}=this.state;
      const _childComponents=childComponents.map((currentValue,index)=>{
            return(
                  <DragSource2 type='INNERITEM' dragSourceType={currentValue.dragSourceType} remove={this.removeComponent} index={index} left={currentValue.left} top={currentValue.top} droptTargetLeft={droptTargetLeft} droptTargetTop={droptTargetTop}>
                      {currentValue.component}
                  </DragSource2>
            )    
          }           
      );
      return (
          <div style={rootstyles}  ref={(box)=>{this.dragBox = box;}}>
                {_childComponents}
          </div>
      );
    }
}
export default DropTargetBox;