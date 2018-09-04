import React from 'react';
import PropTypes from 'prop-types';
import Table from '../../Table';
import TableBody from '../../TableBody';
import TableCell from './Cell';
import TableRow from '../../TableRow';
import { withStyles } from '../../styles';
import ExSwitch from './ExSwitch';
import _ from 'lodash';

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
  cell: {
    display: 'flex',
    alignItems: 'center',
  },
  exIcon: {
    // margin: 5,
    fontSize: '0.8125rem',
  },
  exIconBox: {
    border: '1px solid ' + theme.palette.divider,
    width: 13,
    height: 13,
    display: 'flex',
    // marginLeft: theme.spacing.unit ,
    marginRight: theme.spacing.unit,
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
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
      rows: [],
    };
  }

  componentDidMount() {
    const { data } = this.props;
    this.renderRows(data);
    this.setState({
      rows: this.rowsState,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (!_.isEqual(this.cachedProps.data, this.props.data)) {
      this.cachedProps.data = _.cloneDeep(this.props.data);
      const { data } = this.props;
      this.rowsState = [];
      this.renderRows(data);
      this.setState({
        rows: this.rowsState,
      });
    }
  }

  cachedProps = {};

  handleRowClick = (entry, index) => e => {
    const { onRowClick } = this.props;
    onRowClick && onRowClick(entry, index);
  };

  rowsState = [];
  rowStyle = {};

  handleExIconChange = res => {
    const { close, data: entry } = res;
    const { rows } = this.state;
    const { syncTableRowHeight } = this.props;
    let { key } = entry;

    rows.map((item, index) => {
      if (item.parent && item.parent.key === key) {
        item.show = !close;
      }
    });
    let length = this.state.rows.filter(item => item.show).length;
    this.setState(
      {
        rows,
      },
      () => {
        syncTableRowHeight && syncTableRowHeight(false, length);
      },
    );
  };

  renderRows = (tree, parent) => {
    if (tree && tree.length > 0) {
      for (let index = 0; index < tree.length; index++) {
        let node = tree[index];
        if (parent === undefined) {
          node.show = true;
        }
        node.key = node.key || Date.now();
        node.parent = parent;
        node.index = index;
        node.isLeaf = !node.children || node.children.length <= 0;
        node.deep = parent ? parent.deep + 1 : 0;
        // this.rows.push(this.renderOneRow(node, index))
        this.rowsState.push(node);
        this.renderRows(node.children, node);
      }
    }
    // return this.rows
  };

  renderOneRow = (entry, index) => {
    const { classes, columns, TableCellProps, TableRowProps, type, bodyRowHeight } = this.props;
    let rowStyle = {
      height: bodyRowHeight,
    };
    let indent = (entry.deep || 0) * 50;
    if (!entry.show) {
      return null;
    }

    let show = entry.show;
    let node = entry;
    while (node.parent) {
      node = node.parent;
      show = show && node.show;
    }
    if (!show) {
      return;
    }
    let row = (
      <TableRow
        onClick={this.handleRowClick(entry, index)}
        style={rowStyle}
        key={entry.key}
        {...TableRowProps}
      >
        {columns.map((column, index) => {
          let hasIcon =
            type !== 'right' && entry.children && entry.children.length > 0 && index === 0;
          let indentStyle =
            type !== 'right' && index === 0
              ? {
                  paddingLeft: indent,
                }
              : {};
          return (
            <TableCell
              numeric={column.numeric}
              TableCellProps={TableCellProps}
              key={column.key || Date.now()}
            >
              <div className={classes.cell}>
                <span style={indentStyle} />
                {/* {hasIcon && <span className={classes.exIconBox} onClick={this.handleExIconClick(entry)}>{<RemoveIcon className={classes.exIcon}/>}</span>} */}
                {hasIcon && <ExSwitch onChange={this.handleExIconChange} data={entry} />}
                <span>{column.render ? column.render(entry) : entry[column.dataIndex]}</span>
              </div>
            </TableCell>
          );
        })}
      </TableRow>
    );
    return row;
  };
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
    const { rows } = this.state;
    let mainAndNoData = data.length === 0 && type === 'main';
    // this.rowsState = []
    const tableStyle = mainAndNoData
      ? {
          height: '100%',
        }
      : {};
    let bodyRowHeight = 0;
    if (rows.length > 0) {
      bodyRowHeight = bodyHeight / rows.filter(item => item.show).length;
    }
    this.rowStyle = {
      height: bodyRowHeight,
    };

    let Rows = rows.map((item, index) => {
      return this.renderOneRow(item, index);
    });
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
              ) : (
                Rows
              )}
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
