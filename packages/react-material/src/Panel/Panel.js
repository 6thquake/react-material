import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { ChevronRight, ChevronLeft, LastPage, FirstPage } from '@material-ui/icons';
import { DropTarget } from 'react-dnd';
import GridList, { GridListTile, GridListTileBar } from 'react-material/GridList';
import {DragSource as Source} from 'react-material/DragAndDrop';
import Resizable from 're-resizable';

/*
需要get到penal的clientOffset xy
*/
/*
flex布局 分为12份 
将总宽度 eg 1000px/12 得到每一栅格的宽度 perflex
将组件宽度Math.round(300px/perflex) 得到所占的栅格数 flexCount
得到组件新的宽度 flexCount/12

cellSize int //每个网格的宽度


*/

const styles={
  root:{
    minWidth:'100px',
    minHeight:'100px',
    border:'1px solid red',
    position:'relative',
  },
  resize:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'solid 1px #ddd',
    background: '#f0f0f0'
  },
  resizeInnerWrap:{
    height:'100%',
    width:'100%'
  },
  gridListTile:{
    "@global div":{overflow:'visible'}
  },
  dragsourceResizeable:{
    "&:hover":{
      border:'1px solid red'
    }
  }

};
const boxTarget = {
  drop(props, monitor, component) {
    const item = monitor.getItem();
    console.log(item);

    //取到drop时的xy坐标，
    //计算出栅格的坐标值,
    if(!component.state.childComponents){
      component.state.childComponents= [];
    }
    component.state.childComponents.push({
      component:item.component,
      size:[item.component.props.cols,item.component.props.rows]
    });
    component.setState({childComponents:component.state.childComponents});

  },
  hover(props, monitor, component) {
    console.log('now hover');
  },
  //canDrop(props, monitor){}
}
class Panel extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      //childComponents:props.defaultChildren,
      cellSize:50
    };
    this.state.childComponents = props.defaultChildren.map((v,i)=>{
      return {component:v,size:[v.props.cols,v.props.rows]}
    })
  }
  sequenceComponent = (from,to)=>{
    //from 是指原数组的第from个位置 to 是指原数组的第to个位置
    let _cc = this.state.childComponents; 
    if(!_cc){
      return;
    }
    let mycom = _cc.splice(from,1);
    _cc.splice(to,0,mycom[0]);
    //this.state();
    this.setState({childComponents:_cc})
  };
  removeComponent=()=>{
    console.log('**********************');
  };
  dragSourceResize=(event,direction,refToElement,delta)=>{
    const mc = this.state.childComponents;
    const cs = parseInt(this.state.cellSize|| 0);
    //当source被resize时，
    //_i 当先对象的index 123
    const _i = refToElement.getAttribute('datakey');
    if(!_i && _i!=0){
      return;
    }
    //原始宽高
    let _h = refToElement.offsetHeight,
      _w = refToElement.offsetWidth;
    //改变的宽高
    let _dw = delta.width,
      _dh = delta.height;
    let _col = Math.round((_w+_dw)/cs),
    _row = Math.round((_h+_dh)/cs);
    mc[_i].size=[_col,_row];
    console.log('*********',mc[_i].size);
    //用state更新size of <Resizable>
    this.setState({childComponents:mc})
    //从而得到新的宽高 
    // 通过新的宽高 得到新的row和cols
    //console.log(direction,delta)
  };
  componentDidMount(){
    console.log('****************has mount')
    //
    //const a = this.refs['panelwrap'].getBoundingClientRect();
    //this.worldCoordinate = [a.x,a.y]
  }

  render() {
    const self =this;
    const {childComponents,cellSize} = this.state;
    const {classes,connectDropTarget} = this.props;
    const _childComponents =(childComponents||[]).map((value,index)=>{
      if(value && (value.size instanceof Array) && value.size.length == 2){
        return (<GridListTile className={classes.gridListTile} key={index} cols={value.size[0]} rows={value.size[1]}>
          <Resizable size={{width:value.size[0]*cellSize,height:value.size[1]*cellSize}} minWidth={10} minHeight={10} datakey={index} onResize={this.dragSourceResize} className={classes.dragsourceResizeable} bounds={'window'}>

          <Source type={'POSITION'} sequence={this.sequenceComponent} index={index}>{value.component}</Source></Resizable>
          </GridListTile>);
      }else{
        return null;
      }
      
    });
    return connectDropTarget(
      <div className={classes.root} >
      <Resizable className={classes.resize} defaultSize = {{ 
    width :650,
     height :600
  }} minWidth={100} minHeight={100} grid={[10,10]} bounds={'window'}>
    <div className={classes.resizeInnerWrap}>
        <GridList cellHeight={cellSize} cols={12}>
            {_childComponents}
        </GridList>
        </div>
      </Resizable>
      </div>
    );
  }
}
let C = DropTarget(['test'], boxTarget, (connect,monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver({ shallow: true }),
    //isOverCurrent: monitor.isOver({ shallow: false }),
    canDrop: monitor.canDrop(),
    itemType: monitor.getItemType()
}})(Panel);

export default withStyles(styles)(C);