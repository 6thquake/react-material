import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import Head from './Head';
import Body from './Body';
import Toolbar from './TableToolbar';
import Pagination from './Pagination';
import filter from '../../utils/filter';
import NoData from '../../NoData';
import { withStyles } from '../../styles';
import { darken, fade, lighten } from '../../styles/colorManipulator';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
  spacer: {
    flex: 1,
  },
  tbodyRoot: {
    position: 'relative',
    // height: `calc(100% - 120px)`,
    overflowY: 'hidden',
  },
  main: {
    overflowX: 'auto',
    width: '100%',
  },
  left: {
    position: 'absolute',
    left: 0,
    top: 0,
    background: '#fff',
  },
  leftShadow: {
    'box-shadow': '6px 0 6px -4px rgba(0,0,0,.2)',
  },
  right: {
    position: 'absolute',
    right: 0,
    top: 0,
    background: '#fff',
  },
  rightShadow: {
    'box-shadow': '-6px 0 6px -4px rgba(0,0,0,.2)',
  },
  footer: {
    display: 'flex',
    borderTop: `1px solid
    ${
      theme.palette.type === 'light'
        ? lighten(fade(theme.palette.divider, 1), 0.88)
        : darken(fade(theme.palette.divider, 1), 0.8)
    }`,
  },
  footerLeft: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    borderBottom: `1px solid
    ${
      theme.palette.type === 'light'
        ? lighten(fade(theme.palette.divider, 1), 0.88)
        : darken(fade(theme.palette.divider, 1), 0.8)
    }`,
    paddingLeft: theme.spacing.unit * 2,
  },
  pagination: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

class AwesomeTable extends React.Component {
  constructor(props) {
    super(props);
    const columns = this.normalizeColumns(props.columns);
    this.state = {
      bodyHeight: 0,
      hasLeft: false,
      hasRight: true,
      columns: columns,
      search: '',
      page: props.TablePaginationProps.page,
      rowsPerPage: props.TablePaginationProps.rowsPerPage,
      data: props.data,
      sorts: this.getSortConfig(props).sorts,
    };
  }
  searchedData = {
    data: this.props.data,
  };

  getSortConfig = props => {
    const { columns } = props;
    // this.sortsBy = new Set()
    let sorts = [];
    columns.map(col => {
      if (col.sortable && col.order !== undefined) {
        if (col.order === 'asc') {
          sorts.push({
            index: 0,
            key: col.key,
            order: col.order,
            orderList: ['asc', 'desc', ''],
          });
        }
        if (col.order === 'desc') {
          sorts.push({
            index: 0,
            key: col.key,
            order: col.order,
            orderList: ['desc', 'asc', ''],
          });
        } else {
          sorts.push({
            index: 0,
            key: col.key,
            order: col.order,
            orderList: ['', 'asc', 'desc'],
          });
        }

        // this.sortsBy.add(key)
      }
    });
    return {
      sorts,
    };
  };

  sortArray = ['asc', 'desc', ''];

  tableRefs = {
    root: React.createRef('root'),
    left: React.createRef('left'),
    main: React.createRef('main'),
    right: React.createRef('right'),
    head: React.createRef('head'),
    body: React.createRef('body'),
    toolbar: React.createRef('toolbar'),
    pagination: React.createRef('pagination'),
  };
  dragIndex = {
    targetIndex: '',
    sourceIndex: '',
  };
  propsCached = {};
  componentDidMount() {
    this.setTableShadow();
    this.syncTableRowHeight();
    this.handlePaginteData();
  }

  componentDidUpdate() {
    const { data, paginatable, searchable } = this.props;
    if (data !== this.propsCached.data) {
      this.propsCached.data = data;
      this.filteredData();
      this.syncTableRowHeight(true);
    }

    if (searchable !== this.propsCached.searchable) {
      this.propsCached.searchable = searchable;
      this.filteredData();
    }

    if (paginatable !== this.propsCached.paginatable) {
      this.propsCached.paginatable = paginatable;
      this.filteredData();
    }
  }

  normalizeColumns = columns => {
    const leftColumns = columns.filter(item => item.fixed === 'left');
    const rightColumns = columns.filter(item => item.fixed === 'right');
    const unfixed = columns.filter(item => !item.fixed);
    return [...leftColumns, ...unfixed, ...rightColumns];
  };

  syncTableRowHeight = isResize => {
    let head = this.tableRefs.head.current;
    let body = this.tableRefs.body.current;

    if (!head || !body) {
      return;
    }

    let headDom = ReactDOM.findDOMNode(head);
    let headHeight = headDom.getBoundingClientRect().height;

    let bodyDom = ReactDOM.findDOMNode(body);
    let bodyHeight = bodyDom.getBoundingClientRect().height;
    if (isResize) {
      // todo : Resizable only axis=x
      this.setState({
        bodyRowHeight: bodyHeight / this.state.data.length,
      });
      return;
    }
    this.setState({
      bodyHeight,
      bodyRowHeight: bodyHeight / this.state.data.length,
      headRowHeight: headHeight,
    });
  };

  handleColDrag = config => {
    let { targetIndex, sourceIndex } = config;
    let { columns } = this.state;
    let sourceColumn = columns[sourceIndex];
    let targetColumn = columns[targetIndex];
    let fixed = targetColumn.fixed;
    sourceColumn.fixed = fixed;
    this.setState(
      update(this.state, {
        columns: {
          $splice: [[sourceIndex, 1], [targetIndex, 0, sourceColumn]],
        },
      }),
    );
  };

  handleSort = (sort, column) => {
    let { order, index, key } = sort;
    const { OrderProps } = this.props;
    let { sorts } = this.state;
    const { onChangeOrder, multiple } = OrderProps;
    index = (index + 1) % sort.orderList.length;
    order = sort.orderList[index];
    let flag = true;
    if (multiple) {
      for (let s of sorts) {
        if (s.key === key) {
          s.order = order;
          s.index = index;
          flag = false;
          break;
        }
      }
      flag &&
        sorts.push({
          key,
          order,
          index,
          orderList: sort.orderList,
        });
    } else {
      sorts = [
        {
          key,
          order,
          index,
          orderList: sort.orderList,
        },
      ];
    }
    this.setState({
      sorts,
    });
    let data = sorts.map(item => {
      return {
        key: item.key,
        order: item.order,
      };
    });
    onChangeOrder && onChangeOrder(data);
  };

  handleResize = (index, colomn, size) => {
    this.setState(
      ({ columns }) => {
        const nextColumns = [...columns];
        nextColumns[index] = {
          ...nextColumns[index],
          width: size.width,
        };
        return { columns: nextColumns };
      },
      () => {
        this.syncTableRowHeight(true);
      },
    );
  };

  onSearch = text => {
    this.setState(
      {
        search: text,
      },
      () => {
        this.filteredData();
      },
    );
  };
  dragSatrt = index => {
    this.dragIndex.sourceIndex = index;
  };

  dragEnd = index => {
    // todo ： 每次拖拽执行了两次， 多执行了一次。而且返回值不对
    // 这里先用类型过滤掉多余的一次
    if (typeof index === 'object') {
      return;
    }
    const { onColDrag } = this.props;
    this.dragIndex.targetIndex = index;
    onColDrag && onColDrag(this.dragIndex);
    this.handleColDrag(this.dragIndex);
  };
  filteredData = () => {
    const { data, sync } = this.props;
    const { search } = this.state;
    let searchData = data;
    if (search && sync) {
      searchData = filter(data, search);
    }

    this.searchedData.data = searchData;
    const result = this.handlePaginteData();
    return result;
  };
  handlePaginteData = () => {
    let data = this.searchedData.data;
    const { paginatable, sync } = this.props;
    if (!sync) {
      this.setState({
        data,
      });
      return;
    }
    const { page, rowsPerPage } = this.state;
    if (paginatable) {
      data = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    } else {
      return data;
    }
    this.setState({
      data,
    });
  };
  handleTreeChange = () => {
    this.syncTableRowHeight();
  };
  createCsv = () => {
    let head = this.state.columns.reduce((pre, cur) => {
      if (cur.render || !cur.title) {
        return pre;
      } else {
        return pre + ',' + cur.title;
      }
    }, '');
    let csv = head.slice(1) + '\r\n';
    let columns = this.state.columns;
    let data = this.searchedData.data;
    data.map(entry => {
      let row = '';
      columns.map(column => {
        row += (entry[column.dataIndex] || ' ') + ',';
      });
      csv += row + '\r\n';
    });
    return csv;
  };

  download = (fileName = 'table') => {
    let CSV = this.createCsv();
    let link = document.createElement('a');
    let csvData = new Blob(['\uFEFF' + CSV], {
      type: 'text/csv',
    });
    let csvUrl = URL.createObjectURL(csvData);
    link.href = csvUrl;
    link.style = 'visibility:hidden';
    link.download = fileName + '.csv';

    //this part will append the anchor tag and remove it after automatic click
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  renderMainTable = () => {
    let { columns } = this.state;
    let result = this.renderTable(columns, 'main');
    return result;
  };

  renderLeftTable = () => {
    let columns = this.state.columns.filter(column => {
      return column.fixed === 'left';
    });
    return this.renderTable(columns, 'left');
  };
  renderRightTable = () => {
    let columns = this.state.columns.filter(column => {
      return column.fixed === 'right';
    });
    let baseLength = this.state.columns.length - columns.length;
    return this.renderTable(columns, 'right', baseLength);
  };
  renderTable = (columns, type, baseLength = 0) => {
    const {
      classes,
      resizable,
      dragable,
      onRowClick,
      noData,
      disableClickToFixColumn,
      OrderProps,
      TableCellProps,
      TableRowProps,
    } = this.props;
    const {
      bodyHeight,
      bodyRowHeight,
      headRowHeight,
      hasLeft,
      hasRight,
      data: bodyData,
      sorts,
    } = this.state;
    let width =
      type === 'main'
        ? ''
        : columns.reduce((pre, cur) => {
            return pre + cur.width;
          }, 0);
    let style = {
      height: '100%',
      overflowY: 'hidden',
      width,
    };
    const head = (
      <Head
        OrderProps={OrderProps}
        onSort={this.handleSort}
        sorts={sorts}
        baseLength={baseLength}
        headRef={type === 'main' ? this.tableRefs.head : ''}
        columns={columns}
        onResize={this.handleResize}
        resizable={resizable}
        dragable={dragable}
        onDragStart={this.dragSatrt}
        onDragEnd={this.dragEnd}
        headRowHeight={headRowHeight}
        onColumnFixChange={this.handleColumnFixSwitch}
        disableClickToFixColumn={disableClickToFixColumn}
        TableCellProps={TableCellProps}
        TableRowProps={TableRowProps}
      />
    );
    const body = (
      <Body
        onTreeChange={this.handleTreeChange}
        bodyRef={type === 'main' ? this.tableRefs.body : ''}
        data={bodyData}
        columns={columns}
        type={type}
        height={`calc(100% - ${headRowHeight}px)`}
        scroll={this.handlScrollY}
        tableRef={this.tableRefs[type]}
        bodyRowHeight={bodyRowHeight}
        bodyHeight={bodyHeight}
        onRowClick={onRowClick}
        noData={noData}
        TableCellProps={TableCellProps}
        TableRowProps={TableRowProps}
      />
    );
    const table = [head, body];
    const className = classNames(
      classes[type],
      { [classes.leftShadow]: type === 'left' && hasLeft },
      { [classes.rightShadow]: type === 'right' && hasRight },
    );
    const result = (
      <div style={style} ref={type === 'main' ? this.tableRefs.root : null} className={className}>
        {table}
      </div>
    );
    return result;
  };
  handleColumnFixSwitch = (index, fixed) => {
    let { columns } = this.state;
    columns[index].fixed = fixed;
    this.setState({
      columns: this.normalizeColumns(columns),
    });
  };
  handlScrollY = (e, t) => {
    let scrollTop = e.target.scrollTop;
    t !== 'left' && (this.tableRefs.left.current.scrollTop = scrollTop);
    t !== 'right' && (this.tableRefs.right.current.scrollTop = scrollTop);
    t !== 'main' && (this.tableRefs.main.current.scrollTop = scrollTop);
  };

  handleScrollX = e => {
    let scrollLeft = e.target.scrollLeft;
    if (e.target !== this.tableRefs.root.current) {
      return;
    }
    this.setTableShadow(scrollLeft);
  };
  handleChangePage = (event, page) => {
    const { TablePaginationProps } = this.props;
    const onChangePage = TablePaginationProps.onChangePage;
    this.setState(
      {
        page,
      },
      () => {
        this.handlePaginteData();
      },
    );
    onChangePage && onChangePage(event, page);
  };

  handleChangeRowsPerPage = event => {
    const { TablePaginationProps } = this.props;
    const onChangeRowsPerPage = TablePaginationProps.onChangeRowsPerPage;
    this.setState(
      {
        rowsPerPage: event.target.value,
      },
      () => {
        this.handlePaginteData();
      },
    );
    onChangeRowsPerPage && onChangeRowsPerPage(event);
  };

  setTableShadow = left => {
    let { scrollLeft, clientWidth } = this.tableRefs.root.current;
    scrollLeft = left || scrollLeft;
    let hasLeft = scrollLeft > 0;
    let hasRight = this.tableRefs.main.current.clientWidth - clientWidth - scrollLeft > 0;
    this.setState({
      hasLeft,
      hasRight,
    });
  };
  render() {
    const {
      classes,
      width,
      paginatable,
      searchable,
      exportProps,
      SearchProps,
      sync,
      title,
      total,
    } = this.props;
    const { page, rowsPerPage } = this.state;
    let h = 0;
    if (this.tableRefs.toolbar.current) {
      h = h + this.tableRefs.toolbar.current.clientHeight;
    }
    if (this.tableRefs.pagination.current) {
      h = h + this.tableRefs.pagination.current.clientHeight;
    }
    const tbodyStyle = {
      height: `calc(100% - ${h}px)`,
      width,
    };
    return (
      <div className={classes.root}>
        <div ref={this.tableRefs.toolbar}>
          <Toolbar
            title={title}
            onSearch={this.onSearch}
            headRef={this.tableRefs.head}
            bodyRef={this.tableRefs.body}
            download={this.download}
            searchable={searchable}
            exportProps={exportProps}
            SearchProps={SearchProps}
            width={width}
          />
        </div>
        <div style={tbodyStyle} className={classes.tbodyRoot} onScroll={this.handleScrollX}>
          {[this.renderMainTable(), this.renderLeftTable(), this.renderRightTable()]}
        </div>
        {/* <div className={classes.spacer}></div> */}
        <div className={classes.footer} style={{ width }}>
          <div className={classes.footerLeft}>{total}</div>
          {paginatable && (
            <div ref={this.tableRefs.pagination} className={classes.pagination}>
              {!sync ? (
                <Pagination {...this.props.TablePaginationProps} />
              ) : (
                <Pagination
                  {...this.props.TablePaginationProps}
                  page={page}
                  rowsPerPage={rowsPerPage}
                  count={this.searchedData.data.length}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

AwesomeTable.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * Columns of table
   */
  columns: PropTypes.shape({
    title: PropTypes.node,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    dataIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    fixed: PropTypes.oneOf(['left', 'right']),
    sortable: PropTypes.bool,
    order: PropTypes.string,
    resizable: PropTypes.bool,
    render: PropTypes.func,
  }),
  /**
   * Data record array to be displayed
   */
  data: PropTypes.array.isRequired,
  /**
   * Properties applied to the TablePagination Component
   */
  TablePaginationProps: PropTypes.object,
  /**
   * export config
   */
  exportProps: PropTypes.shape({
    type: PropTypes.oneOf(['csv']),
  }),
  /**
   * Properties applied to the Search Component
   */
  SearchProps: PropTypes.object,
  /**
   *  if true, it will be a paginatable table
   */
  paginatable: PropTypes.bool,
  /**
   *  if true, it will be a searchable table
   */
  searchable: PropTypes.bool,
  /**
   *  if true, all the columns is resizable
   */
  resizable: PropTypes.bool,
  /**
   *  if true, all the columns is dragable
   */
  dragable: PropTypes.bool,
  /**
   * table width
   * @ignore
   */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.number]),
  /**
   * table height
   * @ignore
   */

  height: PropTypes.oneOfType([PropTypes.number, PropTypes.number]),

  /**
   * Callback fired when you drag the column
   */
  onColDrag: PropTypes.func,
  /**
   * Callback fired when you click the table row
   */
  onRowClick: PropTypes.func,
  /**
   * if sync is true, pagination and search will be automatical.
   * you needn't to do these things by yourself
   */
  sync: PropTypes.bool,
  /**
   * The title of table
   */
  title: PropTypes.node,
  /**
   * render when data length is 0
   */
  noData: PropTypes.element,
  /**
   *  @ignore
   */
  disableClickToFixColumn: PropTypes.bool,
  /**
   * Properties applied to the Order
   */
  OrderProps: PropTypes.shape({
    onChangeOrder: PropTypes.func,
    multiple: PropTypes.bool,
  }),
  /**
   * total
   */

  total: PropTypes.element,
  /**
   * Properties applied to the TableCell element.
   */
  TableCellProps: PropTypes.object,
  /**
   * Properties applied to the TableRow element.
   */
  TableRowProps: PropTypes.object,
};
AwesomeTable.defaultProps = {
  TablePaginationProps: {
    rowsPerPage: 10,
    page: 0,
  },
  data: [],
  width: '100%',
  // height: 'auto',
  SearchProps: {
    isDark: true,
    floatRight: true,
  },
  paginatable: false,
  searchable: false,
  resizable: false,
  dragable: false,
  sync: false,
  noData: <NoData />,
  disableClickToFixColumn: true,
  OrderProps: {
    multiple: false,
    onChangeOrder: (...arg) => console.log(arg),
  },
};
export default withStyles(styles, { withTheme: true })(AwesomeTable);
