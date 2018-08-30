import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import Table from '../../Table';
import TableBody from '../../TableBody';
import TableCell from '../../TableCell';
import TableHead from '../../TableHead';
import TableRow from '../../TableRow';
import Scrollbar from '../../Scrollbar';
import { withStyles } from '../../styles';

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
  tablePadding: {
    padding: '4px 8px',
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
    this.state = {};
  }

  componentDidMount() {}
  handleRowClick = (entry, index) => e => {
    const { onRowClick } = this.props;
    onRowClick && onRowClick(entry, index);
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
      bodyRowHeight,
      height,
      noData,
    } = this.props;

    let mainAndNoData = data.length === 0 && type === 'main';
    const tableStyle = mainAndNoData
      ? {
          height: '100%',
        }
      : {};

    const rowStyle = {
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
                >
                  <TableCell classes={{root: classes.tablePadding}} colSpan={columns.length} style={{ height: '100%' }}>
                    {noData}
                  </TableCell>
                </TableRow>
              ) : (
                data.map((entry, index) => {
                  return (
                    <TableRow
                      onClick={this.handleRowClick(entry, index)}
                      style={rowStyle}
                      key={entry.key}
                    >
                      {columns.map(column => {
                        return (
                          <TableCell classes={{root: classes.tablePadding}} key={column.key || Date.now()}>
                            {column.render ? column.render(entry) : entry[column.dataIndex]}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })
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
