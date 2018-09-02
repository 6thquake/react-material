import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import Table from '../../Table';
import TableBody from '../../TableBody';
import TableCell from './Cell';
import TableHead from '../../TableHead';
import TableRow from '../../TableRow';
import Scrollbar from '../../Scrollbar';
import { withStyles } from '../../styles';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

// import AddIcon from '../../Icon/Add';

const styles = theme => ({
  root: {
    overflowY: 'auto',
    overflowX: 'hidden',
    width: 'fit-content',
    // width:100%
  },
  layoutFixed: {
    tableLayout: 'fixed',
  },
  cell:{
    display: 'flex',
    alignItems: 'center',
  },
  exIcon: {
    // margin: 5,
    fontSize: '0.8125rem'
  },
  exIconBox: {
    border: '1px solid black',
    width: 13,
    height: 13,
    display: 'flex',
    marginLeft: theme.spacing.unit ,
    marginRight: theme.spacing.unit,
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  }

});
const colStyle = {
  // width: 150,
  minWidth: 100,
};
/**
 * @ignore - internal component.
 */
class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // rows[]
    };
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState){
    // if(prevProps)
  }

  handleRowClick = (entry, index) => e => {
    const { onRowClick } = this.props;
    onRowClick && onRowClick(entry, index);
  };

  rows = []
  rowStyle = {}
  handleExIconClick=(entry)=>(e)=>{
    e.stopPropagation()
    console.log('entry=:', entry)
  }

  depth = (key, data) => {

  }

  // function preOrder(tree, parent) {
  //   if (tree && tree.length > 0) {
  //     for (let i = 0, len = tree.length; i < len; i++) {
  //       let node = tree[i];

  //       node.parent = parent;
  //       node.isLeaf = !node.children || node.children.length <= 0;
  //       node.deep = parent ? parent.deep + 1 : 0;

  //       console.log(`节点：${node.name}， 是否叶子节点：${node.isLeaf}， 层级：${node.deep}`);

  //       preOrder(node.children, node);
  //     }
  //   }
  // }
  renderRows = (tree, parent)=> {
    const {
      classes,
      columns,
      TableCellProps,
      TableRowProps,
    } = this.props;
    if (tree && tree.length > 0){
      for (let index = 0; index < tree.length; index++) {
        let node = tree[index]
        node.parent = parent
        node.isLeaf = !node.children || node.children.length <= 0
        node.deep = parent ? parent.deep + 1 : 0
        console.log(`节点：${node.name}， 是否叶子节点：${node.isLeaf}， 层级：${node.deep}`)
        this.rows.push(this.renderOneRow(node, index))
        this.renderRows(node.children, node)
      }
    }
    return this.rows
  }

  renderOneRow= (entry, index)=> {
    const {
      classes,
      columns,
      TableCellProps,
      TableRowProps,
    } = this.props;
    let rowStyle = this.rowStyle    
    let indent = (entry.deep || 0) * 50
    let row = (
      <TableRow
        onClick={this.handleRowClick(entry, index)}
        style={rowStyle}
        key={entry.key}
        {...TableRowProps}
      >
        {columns.map((column, index) => {
          let hasIcon = entry.children && entry.children.length > 0 && index === 0
          let indentStyle = index === 0? {
            paddingLeft: indent
          } : {}
          return (
            <TableCell
              numeric={column.numeric}
              TableCellProps={TableCellProps}
              key={column.key || Date.now()}
            >
              <div className={classes.cell}>
                <span style={indentStyle}></span>
                {hasIcon && <span className={classes.exIconBox} onClick={this.handleExIconClick(entry)}>{<RemoveIcon className={classes.exIcon}/>}</span>}
                <span>{column.render ? column.render(entry) : entry[column.dataIndex]}</span>
              </div>
            </TableCell>
          );
        })}
      </TableRow>
    )
    return row
  }
  render() {
    const {
      classes,
      data,
      columns,
      type,
      scroll,
      tableRef,
      bodyRef,
      bodyHeight,
      height,
      noData,
      TableCellProps,
      TableRowProps,
    } = this.props;

    let mainAndNoData = data.length === 0 && type === 'main';
    this.rows = []
    const tableStyle = mainAndNoData
      ? {
          height: '100%',
        }
      : {};
    let bodyRowHeight = 0
    if(this.rows.length > 0){
      bodyRowHeight = bodyHeight / this.rows.length
    }
    this.rowStyle = {
      height: bodyRowHeight,
    };
    return (
      <div
        ref={tableRef}
        onScroll={e => {
          scroll(e, type);
        }}
        style={{
          height: height,
        }}
        className={classes.root}
      >
        {
          <Table
            innerRef={bodyRef}
            classes={{ root: classes.layoutFixed }}
            className={classes.table}
            style={tableStyle}
          >
            <colgroup>
              {columns.map(item => {
                return <col key={item.title} style={colStyle} width={item.width} />;
              })}
            </colgroup>
            <TableBody>
              {mainAndNoData ? (
                <TableRow
                  style={{
                    height: '100%',
                  }}
                  {...TableRowProps}
                >
                  <TableCell
                    TableCellProps={TableCellProps}
                    colSpan={columns.length}
                    style={{ height: '100%' }}
                  >
                    {noData}
                  </TableCell>
                </TableRow>
              ) : this.renderRows(data)}
            </TableBody>
          </Table>
        }
      </div>
    );
  }
}

Body.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  classes: PropTypes.object.isRequired,
};
Body.defaultProps = {
  height: 'auto',
};

export default withStyles(styles)(Body);
