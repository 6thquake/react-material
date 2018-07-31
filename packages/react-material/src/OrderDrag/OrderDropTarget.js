import TargetWrapper from './TargetWrapper';
import React from 'react';
import {withStyles} from '../styles';
import GridList from '../GridList';
import GridListTile from '../GridListTile';
import PropTypes from 'prop-types';
//import ManualDragTarget from './ManualDragTarget';
import DandD from './DandD';
import OrderDragSource from './OrderDragSource';
const styles={
    root:{
        minheight:'100px',
    }

}
class OrderDropTarget extends TargetWrapper{
    constructor(props){
        super(props);
        this.state={
            childComponents:props.defaultComponents.map((v,i)=>{
            return {component:v,size:[v.props.cols,v.props.rows]}
         }),
         accept:['DragIcon']         //默认的可以接受的拖动元素
      }
    }
    componentDidMount(){
      this.props.register(this);
      if(this.props.acceptItem){
        this.props.accept([...this.props.acceptItem,...this.state.accept]); //传入可接受的拖动元素
      }else{
        this.props.accept([...this.state.accept]); 
      }
      
    }
    drop=(props,monitor,component)=>{
        console.log('droptarget...');
       // debugger;
        const item=monitor.getItem();
        console.log(item);
        if(!item.component){  //内部元素被拖动
            component.hasDroped=true;
            return;
        }
        if(item.component){
            const componentWidth=item.width;
            const componentHeight=item.height;
            this.state.childComponents.push({
                component:item.component,
                size:[Math.ceil(componentWidth/props.cellSize),Math.ceil(componentWidth/props.cellSize)]
            });
            this.setState({childComponent:component.state.childComponents});
            if(props.add && item.value){props.add(item.value);}
        }
       // debugger;
    }

    sequenceComponent = (from,to,callback)=>{
        //from 是指原数组的第from个位置 to 是指原数组的第to个位置
        let _cc = this.state.childComponents; 
        if(!_cc){
          return;
        }
        let mycom = _cc.splice(from,1);
        _cc.splice(to,0,mycom[0]);
        //this.state();
        this.setState({childComponents:_cc})
        if(!!callback && typeof callback === "function"){
          callback();
        }
        if(this.props.sequence){this.props.sequence(from,to);}

      }
      removeComponent=(index)=>{
        if(!index && index !=0){
          return;
        }
        if(this.hasDroped){
          //说明drop在了panel内部 不作处理
        }else{
          //说明drop在了panle外部 需要删除指定index
          console.log('remove'+index);  
          let _cc = this.state.childComponents; 
          if(!_cc){
            return;
          }
        _cc.splice(index,1);
        this.setState({childComponents:_cc})
        }        
        this.hasDroped = false;  
        if(this.props.remove){this.props.remove(index);}  
      }

    render() {
          const {childComponents}=this.state;
          const {cellSize,colsCount,classes}=this.props;
          const _childComponents=(childComponents||[]).map((value,index)=>{
              if(value && (value.size instanceof Array) && value.size.length == 2){
                return (
                <GridListTile key={index} cols={value.size[0]} rows={value.size[1]}>
                    <DandD>
                        <OrderDragSource type='INNERITEM' sequence={this.sequenceComponent} remove={this.removeComponent} index={index}>
                            {value.component}    
                        </OrderDragSource>
                    </DandD>       
                </GridListTile>
                )                                                        
               }else{
                  return null;
              }           
          });
          return (         
                <GridList spacing={0} cellHeight={cellSize} cols={colsCount} className={classes.root}>               
                        {_childComponents}
                </GridList>      
          );
      }
}
OrderDropTarget.defaultProps={
        cellSize:30,
        colsCount:6,
        defaultComponents:[],
}
OrderDropTarget.propTypes={
        value:PropTypes.array,
        sequence:PropTypes.func,
        remove:PropTypes.func,
        add:PropTypes.func,
        defaultComponents:PropTypes.array,
}
// let OrderDragTarget=DropTarget(['ICON','BUTTON','PAPER','LISTITEM'],boxTarget,(connect,monitor)=>{
//     return {
//         connectDropTarget:connect.dropTarget(),
//         isOver:monitor.isOver({shallow:true}),
//         canDrop:monitor.canDrop(),
//         itemType:monitor.getItemType()
//     }
// })(_OrderDragTarget);
// OrderDragTarget.propTypes={
    
// }
export default withStyles(styles)(OrderDropTarget);