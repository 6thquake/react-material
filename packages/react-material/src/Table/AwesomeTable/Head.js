import React from 'react';
import Table from '..';
import TableCell from './Cell';
import TableHead from '../../TableHead';
import TableRow from '../../TableRow';
import HeadCell from './HeadCell';
import DragHeadCell from './DragHeadCell';
import withDragAndDrop from '../../DragAndDrop/withDragAndDrop';
import TableSortLabel from '../../TableSortLabel';

// import Resizable from 're-resizable';
import { Resizable } from 'react-resizable';
import { withStyles } from '../../styles';

const throttling = (fn, wait, maxTimelong) => {
  wait = wait || 100;
  maxTimelong = maxTimelong || 300;
  let timeout = null;
  let startTime = Date.now();

  return function(...arg) {
    if (timeout !== null) clearTimeout(timeout);
    const curTime = Date.now();
    if (curTime - startTime >= maxTimelong) {
      fn(...arg);
      startTime = curTime;
    } else {
      timeout = setTimeout(e => {
        fn(...arg);
      }, wait);
    }
  };
};

const styles = theme => ({
  root: {},
  layoutFixed: {
    tableLayout: 'fixed',
  },
  tableCell: {
    position: 'relative',
    '@global .react-resizable-handle': {
      position: 'absolute',
      width: 20,
      height: 20,
      bottom: 0,
      right: 0,
      background:
        "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+')",
      'background-position': 'bottom right',
      padding: '0 3px 3px 0',
      'background-repeat': 'no-repeat',
      'background-origin': 'content-box',
      'box-sizing': 'border-box',
      cursor: 'se-resize',
    },
  },
});
const colStyle = {
  // width: 150,
  minWidth: 100,
};

/**
 * @ignore - internal component.
 */

class Head extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      undragable: false,
    };
  }

  dragIndex = {
    targetIndex: '',
    sourceIndex: '',
  };

  componentDidMount() {
    // this.throttleResize = throttling(this.resize)
  }

  handleResizeStart = () => {
    // this.undragable = true
    this.setState({
      undragable: true,
    });
  };

  handleDragStop = () => {
    this.setState({
      undragable: false,
    });
  };

  handleResize = (...args) => (e, { size }) => {
    const { onResize } = this.props;
    onResize && onResize(...args, size);
    // this.throttleResize(...args,size)
  };

  resize = (...args) => {
    const { onResize } = this.props;
    onResize && onResize(...args);
  };

  handleChangeOrder = (sort, column) => e => {
    const { onSort } = this.props;
    onSort && onSort(sort, column);
  };

  handleDoubleClick = e => {
    e.stopPropagation();
  };

  renderTableHeadCell = (column, index) => {
    const {
      classes,
      onDragStart,
      onDragEnd,
      resizable,
      dragable,
      baseLength,
      onColumnFixChange,
      disableClickToFixColumn,
      TableCellProps,
    } = this.props;
    const { sorts } = this.props;
    const { title, key, sortable } = column;
    let sort = { key, order: '', orderList: ['', 'asc', 'desc'], index: 0 };
    sorts.map(item => {
      if (item.key === column.key) {
        sort = item;
      }
    });
    const content = sortable ? (
      <TableSortLabel
        active={sort.order}
        direction={sort.order}
        onClick={this.handleChangeOrder(sort, column)}
        onDoubleClick={this.handleDoubleClick}
      >
        {title}
      </TableSortLabel>
    ) : (
      title || ''
    );

    const cell = (
      <TableCell
        numeric={column.numeric}
        sortDirection
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        index={index + baseLength}
        onColumnFixChange={onColumnFixChange}
        disableClickToFixColumn={disableClickToFixColumn}
        component={dragable && !this.state.undragable ? DragHeadCell : HeadCell}
        className={classes.tableCell}
        key={column.key || column.title}
        fixed={column.fixed}
        TableCellProps={TableCellProps}
      >
        {content}
      </TableCell>
    );
    const C =
      resizable || column.resizable ? (
        <Resizable
          key={column.key || column.title}
          onResizeStart={this.handleResizeStart}
          onResizeStop={this.handleDragStop}
          width={column.width}
          height={0}
          onResize={this.handleResize(index, column)}
          // axis = {'x'}
          // minConstraints={[50, 500]}
        >
          {cell}
        </Resizable>
      ) : (
        cell
      );
    return C;
  };

  render() {
    const {
      classes,
      columns,
      onDragStart,
      onDragEnd,
      resizable,
      headRef,
      headRowHeight,
      TableRowProps,
    } = this.props;
    const rowStyle = {
      height: headRowHeight,
    };
    return (
      <div className={classes.root}>
        <Table innerRef={headRef} classes={{ root: classes.layoutFixed }} className={classes.table}>
          <colgroup>
            {columns.map(item => {
              return <col key={item.key || item.title} width={item.width} style={colStyle} />;
            })}
          </colgroup>
          <TableHead>
            <TableRow style={rowStyle} {...TableRowProps}>
              {columns.map((column, index) => {
                return this.renderTableHeadCell(column, index);
              })}
            </TableRow>
          </TableHead>
        </Table>
      </div>
    );
  }
}

// export default withDragAndDrop()(AbundantCrossTabulation);
export default withStyles(styles)(withDragAndDrop()(Head));
