/**
 * @ignore - do not document.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../styles';
import { ChevronRight, ChevronLeft, LastPage, FirstPage } from '@material-ui/icons';
import { DropTarget } from 'react-dnd';
import GridList from '../GridList';
import GridListTile from '../GridListTile';
import GridListTileBar from '../GridListTileBar';
import { DragSource as Source } from '../DragAndDrop';
import Resizable from 're-resizable';
import withDragAndDrop from '../DragAndDrop/withDragAndDrop';

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
let myCellSize = 50;
let defaultColsCount = 12;
let defaultPanelSize = {
  width: 650,
  height: 600,
};

const styles = {
  root: {
    minWidth: '100px',
    minHeight: '100px',

    position: 'relative',
    backgroundImage:
      'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAAEH5aXCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTQzODRDNjY1OTEyMTFFODkwMDFEODY0QTdDMDVBRTMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTQzODRDNjU1OTEyMTFFODkwMDFEODY0QTdDMDVBRTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MzJDMUZEQTU3NzYxMUU4OTEwMkY1OEVDQkZDMUIzNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2MzJDMUZEQjU3NzYxMUU4OTEwMkY1OEVDQkZDMUIzNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpaCGOAAAAFLSURBVHjaYpDXMJT6//8/AymYiYEMMKppVBMVNAEEECMoAdLUllENoxpwAIAAYiCntKRL6UqXvDdqyaglo5YMUUsAAojkinM0TkYtGbVk1JJRS0YtGbVk1JJRSwavJQAB2K9jEwBgEAiATaawSps2+w8nWeLBcILfn18ZeUwTm7nWN7WDgICAgICAgICAgICAgICATJ/1Yp9b0yEtALt2TAMAAIAwzL9rNOwlxUEPHoKBTkdAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBSbh50E6C9O7QBAIQBIAgJ+4+GxaKYg1TUdoDmXlVzqWvCjAu6GO7Zb8iKCAgQAQEiIEAEBIiACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiAAPEEQFS0cmjxn2mDPp5bn+8Ii2+BAAAAAElFTkSuQmCC")',
    backgroundSize: myCellSize + 'px ' + myCellSize + 'px',
  },
  resize: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTop: '1px solid rgba(0,0,0,0.1)',
    borderRight: '1px solid rgba(0,0,0,0.1)',
    borderBottom: '1px solid rgba(0,0,0,0.1)',
    //border: 'solid 1px #ddd',
    //background: '#f0f0f0',
  },
  resizeInnerWrap: {
    height: '100%',
    width: '100%',

    overflow: 'visible',
    '&> ul': {
      overflow: 'visible',
      //backgroundImage:'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAAEH5aXCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA0xpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjMyQzFGREI1Nzc2MTFFODkxMDJGNThFQ0JGQzFCMzQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjMyQzFGREE1Nzc2MTFFODkxMDJGNThFQ0JGQzFCMzQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmRkNzZhNTk4LTllZWYtMTE3Yi1hNWRmLWM5MWVjYTRjYTk3ZCIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmRkNzZhNTk4LTllZWYtMTE3Yi1hNWRmLWM5MWVjYTRjYTk3ZCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhWNmR8AAAE6SURBVHjaYmRkZGQgFTAxkAFGNY1qooImgABiJDXBMtHcWaMaRooGgABiJKe0pEu2GLVk1JJRS0YtwQ0AAogeZZf8aJyMWjJqyaglo5aMWjJqyaglo5bQxxKAAOzXQQkAAAgDwI897N9SUwyUGyzA4cdFhmkgmQfyzdlBQEBAQEBAQEBAQEBAQEBAzqe2/QEyArBrxzQAAAAIw/y7RsNeUhz04CEY6HQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQk5eZBNwHauWMaAIAQCILFI+D9qyWhxQC5zFoYygsVsqBLaA7qATnTBwJEQIAICBABASIgQIAAERAgAgJEQIAICBAgQAQEiIAAERAgAgJEQAQEiIAAERAgAgJEQAQEiIAAERAgAgJEQLRAYj6xpdSuGwYph8fsCgAAAABJRU5ErkJggg==")',
      //backgroundSize: myCellSize+'px '+myCellSize+'px',
      //overflow: 'visible'
    },
  },
  gridListTile: {
    '@global div': { overflow: 'visible' },
    transition: 'all 0.5s cubic-bezier(.23,.66,.37,.8)',
  },
  dragsourceResizeable: {
    background: 'rgba(0,0,0,0.1)',
    margin: '1px',
    '&:hover': {
      border: '1px dashed rgba(0,0,0,0.1)',
      borderRedius: '3px',
    },
  },
};
const boxTarget = {
  drop(props, monitor, component) {
    console.log('drop.......');
    const item = monitor.getItem();
    console.log(item);
    if (!item.component) {
      //当comp不是从panel外部拉入
      component.hasDroped = true;
    }
    if (!item.component) {
      //如果没有component 说明不是从外部拖进来的 不予处理
      return;
    }
    //取到drop时的xy坐标，
    //计算出栅格的坐标值,
    if (!component.state.childComponents) {
      component.state.childComponents = [];
    }
    component.state.childComponents.push({
      component: item.component,
      size: [item.component.props.cols, item.component.props.rows],
    });
    component.setState({ childComponents: component.state.childComponents });
  },
  hover(props, monitor, component) {
    //console.log('now hover');
  },
  //canDrop(props, monitor){}
};
class _Panel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //childComponents:props.defaultChildren,
      cellSize: myCellSize,
      spacing: [0, 0],
      panelSize: defaultPanelSize,
      colsCount: defaultColsCount,
    };
    this.state.childComponents = props.defaultChildren.map((v, i) => {
      return { component: v, size: [v.props.cols, v.props.rows] };
    });
  }
  sequenceComponent = (from, to, callback) => {
    //from 是指原数组的第from个位置 to 是指原数组的第to个位置
    let _cc = this.state.childComponents;
    if (!_cc) {
      return;
    }
    let mycom = _cc.splice(from, 1);
    _cc.splice(to, 0, mycom[0]);
    //this.state();
    this.setState({ childComponents: _cc });
    if (!!callback && typeof callback === 'function') {
      callback();
    }
  };
  removeComponent = index => {
    if (!index && index != 0) {
      return;
    }
    if (this.hasDroped) {
      //说明drop在了panel内部 不作处理
    } else {
      //说明drop在了panle外部 需要删除指定index
      console.log('remove' + index);
      let _cc = this.state.childComponents;
      if (!_cc) {
        return;
      }
      _cc.splice(index, 1);
      this.setState({ childComponents: _cc });
    }

    this.hasDroped = false;
  };
  dragSourceResize = (event, direction, refToElement, delta) => {
    const mc = this.state.childComponents;
    const cs = parseInt(this.state.cellSize || 0);
    //当source被resize时，
    //_i 当先对象的index 123
    const _i = refToElement.getAttribute('datakey');
    if (!_i && _i != 0) {
      return;
    }
    //原始宽高
    let _h = refToElement.offsetHeight,
      _w = refToElement.offsetWidth;
    //改变的宽高
    let _dw = delta.width,
      _dh = delta.height;
    let _col = Math.round(_w / cs),
      _row = Math.round(_h / cs);
    mc[_i].size = [_col, _row];
    //用state更新size of <Resizable>
    this.setState({ childComponents: mc });
    //从而得到新的宽高
    // 通过新的宽高 得到新的row和cols
    //console.log(direction,delta)
  };
  componentDidMount() {
    // this.
    //
    //const a = this.refs['panelwrap'].getBoundingClientRect();
    //this.worldCoordinate = [a.x,a.y]
  }
  resizePanel = (event, direction, refToElement, delta) => {
    this.refCallBack(refToElement);
  };
  //改变cellSize的方法

  //当外部risizeable改变尺寸的时候
  refCallBack = node => {
    console.log('**************', 'refcallback');
    if (node && node.offsetWidth) {
      const _offsetWidth = node.offsetWidth;
      const _colsCount = this.state.colsCount || defaultColsCount;
      const _cellSize = Math.round(_offsetWidth / _colsCount);
      if (_cellSize != this.state.cellSize) {
        //const ul = node.querySelector('ul[class^="MuiGridList"]');
        const coreWidth = _colsCount * _cellSize;
        const myPadding = _offsetWidth - coreWidth;
        if (!!this.state.panelSize) {
          this.state.panelSize.width = coreWidth;
        }

        let _paddingLeft = 0,
          _paddingRight = 0;
        if (myPadding >= 1) {
          _paddingLeft = Math.floor(myPadding / 2);
          _paddingRight = Math.ceil(myPadding / 2);
        }

        this.setState({
          cellSize: _cellSize,
          spacing: [_paddingLeft, _paddingRight],
          panelSize: this.state.panelSize,
        });
      }
    }
  };

  render() {
    const self = this;
    const { childComponents, cellSize, colsCount, spacing, panelSize } = this.state;
    const { classes, connectDropTarget } = this.props;
    const _childComponents = (childComponents || []).map((value, index) => {
      if (value && value.size instanceof Array && value.size.length == 2) {
        return (
          <GridListTile
            className={classes.gridListTile}
            key={index}
            cols={value.size[0]}
            rows={value.size[1]}
          >
            <Resizable
              size={{ width: value.size[0] * cellSize - 4, height: value.size[1] * cellSize - 4 }}
              minWidth={10}
              minHeight={10}
              datakey={index}
              onResizeStop={this.dragSourceResize}
              className={classes.dragsourceResizeable}
              bounds={'window'}
            >
              <Source
                type={'POSITION'}
                sequence={this.sequenceComponent}
                remove={this.removeComponent}
                index={index}
              >
                {value.component}
              </Source>
            </Resizable>
          </GridListTile>
        );
      } else {
        return null;
      }
    });
    return connectDropTarget(
      <div
        className={classes.root}
        ref={this.refCallBack}
        style={{
          backgroundSize: cellSize + 'px ' + cellSize + 'px',
          marginRight: spacing[1] + 'px',
          marginLeft: spacing[0] + 'px',
        }}
      >
        <Resizable
          className={classes.resize}
          defaultSize={panelSize}
          size={panelSize}
          minWidth={100}
          minHeight={100}
          bounds={'window'}
          onResizeStop={this.resizePanel}
        >
          <div className={classes.resizeInnerWrap}>
            <GridList spacing={0} cellHeight={cellSize} cols={colsCount}>
              {_childComponents}
            </GridList>
          </div>
        </Resizable>
      </div>,
    );
  }
}
let Panel = DropTarget(['DRAGANDDROP'], boxTarget, (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver({ shallow: true }),
    //isOverCurrent: monitor.isOver({ shallow: false }),
    canDrop: monitor.canDrop(),
    itemType: monitor.getItemType(),
  };
})(_Panel);

Panel.propTypes = {
  /**
  *Array of Jsx，it will be render in this panel eg.
  *[(<div cols={4} rows={2}>
        <StatusButton color="primary">默认的button</StatusButton>
      </div>),
      (<div cols={5} rows={2}>
        <div>默认的div1</div>
      </div>)]
  */
  defaultChildren: PropTypes.array.isRequired,
};
export default withStyles(styles, { name: 'RMPanel' })(withDragAndDrop()(Panel));
