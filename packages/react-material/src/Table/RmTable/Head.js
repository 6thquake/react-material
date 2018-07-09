import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import Table from '../../Table';
import TableBody from '../../TableBody';
import TableCell from '../../TableCell';
import TableHead from '../../TableHead';
import TableRow from '../../TableRow';
import HeadCell from './HeadCell'
import withDragAndDrop from '../../DragAndDrop/withDragAndDrop'

import {
  DropTarget,
  DropSource
} from 'react-dnd';

// import Resizable from 're-resizable';
import {
  Resizable,
} from 'react-resizable';

import {
  withStyles
} from 'react-material/styles';

const styles = (theme)=> ({
  root: {

  },
  layoutFixed: {
    tableLayout: 'fixed'
  },
  tableCell: {
    position: 'relative',
    '@global span': {
      'position': 'absolute',
      'width': 20,
      'height': 20,
      'bottom': 0,
      'right': 0,
      'background': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+')",
      'background-position': 'bottom right',
      'padding': '0 3px 3px 0',
      'background-repeat': 'no-repeat',
      'background-origin': 'content-box',
      'box-sizing': 'border-box',
      'cursor': 'se-resize',
    }
  }
})
const colStyle = {
  // width: 150,
  minWidth: 100
}
class Head extends React.Component {
  constructor(props) {
    super(props);
  }
  dragIndex = {
    targetIndex: '',
    sourceIndex: '',
  }
  handleResize =(...args) =>(e, {size})=> {
    const {
      onResize
    } = this.props
    onResize && onResize(...args, size)
  }
  dragSatrt = (index)=> {
    console.log('start index',index)
    this.dragIndex.sourceIndex = index
  }
  dragEnd =(index) => {
    console.log('end index', index)
    const { onColDrag } = this.props 
    this.dragIndex.targetIndex = index
    onColDrag && onColDrag(this.dragIndex)
  }
  render() {
    const {
      classes,
      data,
      columns,
      onDragStart,
      onDragEnd
    } = this.props
    return (
      <div className={classes.root}>
        <Table 
          classes={{root:classes.layoutFixed}} 
          className={classes.table}>
          <colgroup>
            {
              columns.map((item) => {
                return <col key={item.title} width={item.width} style={colStyle}></col>
              })
            }
          </colgroup>
          <TableHead>
            <TableRow>
              {columns.map((column, index) => {
                return (
                  <Resizable
                    width={column.width} 
                    height={0}
                    onResize={this.handleResize(index, column)}
                  >
                    <TableCell className={classes.tableCell}>
                      <HeadCell onDragStart={onDragStart} onDragEnd={onDragEnd} index={index}>
                        {column.title || ''}
                      </HeadCell>
                    </TableCell>
                  </Resizable>
                )
              })}
            </TableRow>
          </TableHead>
        </Table>
      </div>
    );
  }
}

// export default withDragAndDrop()(AbundantCrossTable);
export default withStyles(styles)(withDragAndDrop()(Head));