import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import Divider from '@6thquake/react-material/Divider';
import TableBody from '@6thquake/react-material/TableBody';
import TableCell from '@6thquake/react-material/TableCell';
import TableHead from '@6thquake/react-material/TableHead';
import TableRow from '@6thquake/react-material/TableRow';
import { RadioButton } from '@6thquake/react-material/Radio';
import RadioGroup from '@6thquake/react-material/RadioGroup';
// import ScrollBar from ''
import Paper from '@6thquake/react-material/Paper';
import AwesomeTable from '@6thquake/react-material/Table/AwesomeTable';
// import { Divider } from 'rc-menu/lib';

import filter from '@6thquake/react-material/utils/filter';

const styles = theme => ({
  root: {
    width: '100%',
  },
  bar: {
    padding: theme.spacing.unit / 4,
    marginBottom: theme.spacing.unit * 2,
  },
  table: {
    // width: '100%',
    marginTop: theme.spacing.unit * 3,
    // overflowX: 'hidden'
  },
  tableBox: {
    height: 600,
    width: '100%',
  },
  radioButtons: {
    margin: theme.spacing.unit * 2,
  },
  button: {
    width: 120,
  },
  cellPadding: {
    padding: '16px 8px',
  },
});

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 350,
    fixed: 'left',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: '200',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    width: '200',
    key: 'address',
  },
  {
    title: 'Age222',
    dataIndex: 'age',
    key: 'age',
    width: '200',
  },
  ,
  {
    title: 'Age11',
    key: 'age',
    width: '200',
    dataIndex: 'age',
  },
];

const data = [
  {
    key: 1,
    name: '1 John Brown sr.',
    age: 60,
    address: 'New York No. 1 Lake Park',
    children: [
      {
        key: 11,
        name: '11 John Brown',
        age: 42,
        address: 'New York No. 2 Lake Park',
      },
      {
        key: 12,
        name: '12 John Brown jr.',
        age: 30,
        address: 'New York No. 3 Lake Park',
        children: [
          {
            key: 121,
            name: '121 Jimmy Brown',
            age: 16,
            address: 'New York No. 3 Lake Park',
          },
        ],
      },
      {
        key: 13,
        name: '13 Jim Green sr.',
        age: 72,
        address: 'London No. 1 Lake Park',
        children: [
          {
            key: 131,
            name: '131 Jim Green',
            age: 42,
            address: 'London No. 2 Lake Park',
            children: [
              {
                key: 1311,
                name: '1311 Jim Green jr.',
                age: 25,
                address: 'London No. 3 Lake Park',
              },
              {
                key: 1312,
                name: '1312 Jimmy Green sr.',
                age: 18,
                address: 'London No. 4 Lake Park',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 2,
    name: '2 Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];

const data2 = [
  {
    key: 1,
    name: '1 1111111',
    age: 60,
    address: 'New York No. 1 Lake Park',
    children: [
      {
        key: 11,
        name: '11 John Brown',
        age: 42,
        address: 'New York No. 2 Lake Park',
      },
      {
        key: 12,
        name: '12 John Brown jr.',
        age: 30,
        address: 'New York No. 3 Lake Park',
        children: [
          {
            key: 121,
            name: '121 Jimmy Brown',
            age: 16,
            address: 'New York No. 3 Lake Park',
          },
        ],
      },
      {
        key: 13,
        name: '13 Jim Green sr.',
        age: 72,
        address: 'London No. 1 Lake Park',
        children: [
          {
            key: 131,
            name: '131 Jim Green',
            age: 42,
            address: 'London No. 2 Lake Park',
            children: [
              {
                key: 1311,
                name: '1311 Jim Green jr.',
                age: 25,
                address: 'London No. 3 Lake Park',
              },
              {
                key: 1312,
                name: '1312 Jimmy Green sr.',
                age: 18,
                address: 'London No. 4 Lake Park',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 222222222,
    name: '2222222222',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: 3,
    name: '333333333 aaaa',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    children: [
      {
        key: 3 - 1,
        name: '31',
        address: '31311313131',
        age: '333333',
      },
      {
        key: 3 - 2,
        name: '31',
        address: '31311313131',
        age: '333333',
      },
    ],
  },
];

class AwesomeTableEXample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: columns,
      data: data,
      value: 'scroll',
      TablePaginationProps: {
        rowsPerPage: 5,
        page: 0,
        count: 40,
      },
    };
  }
  componentDidMount = () => {
    this.handleChangePage(0, 0);
    const { data } = this.state;

    this.timer = setTimeout(() => {
      this.setState({
        data: data2,
      });
    }, 2000);
  };
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  handleChange = e => {
    let value = e.target.value;
    this.setState({
      value,
    });
  };
  handleSearch = value => {
    console.log('search value', value);
    this.setState({
      data: filter(data, value),
    });
  };
  handleChangePage = (e, page) => {
    console.log('page', page);
    let { TablePaginationProps } = this.state;
    let { rowsPerPage } = TablePaginationProps;
    TablePaginationProps.page = page;
    let paginateData = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    console.log('paginateData', paginateData);
    this.setState({
      TablePaginationProps,
      data: paginateData,
    });
  };
  handleChangeRowsPerPage = e => {
    console.log('rowperoage', e.target.value);
    let { TablePaginationProps } = this.state;
    let { page } = TablePaginationProps;
    let rowsPerPage = e.target.value;
    TablePaginationProps.rowsPerPage = rowsPerPage;
    let paginateData = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    this.setState({
      TablePaginationProps,
      data: paginateData,
    });
  };
  handleRowClick = (e, i) => {
    console.log('row item', e, i);
  };

  handleSort = data => {
    console.log('sort===:', data);
    let item = data[0];
    const { columns } = this.state;
    const { key, order } = item;
    this.sortData(order);
  };

  sortData = order => {
    let { data } = this.state;
    data.sort((a, b) => {
      if (order == 'asc') {
        return a.age - b.age;
      } else if (order == 'desc') {
        return b.age - a.age;
      }
    });
  };
  render() {
    const { classes } = this.props;
    const { data, columns, value } = this.state;
    const PaginationProps = {
      onChangeRowsPerPage: this.handleChangeRowsPerPage,
      onChangePage: this.handleChangePage,
      ...this.state.TablePaginationProps,
    };
    const exportProps = {
      type: 'csv',
    };
    const SearchProps = {
      placeholder: 'search',
      isDark: true,
      onChange: this.handleSearch,
    };
    const TableRowProps = {
      hover: true,
      // selected: true,
    };
    const TableCellProps = {
      classes: {
        root: classes.cellPadding,
      },
    };
    const options = {
      [value]: value,
      TablePaginationProps: PaginationProps,
      OrderProps: {
        // multiple: true,
        onChangeOrder: this.handleSort,
      },
      exportProps,
      SearchProps,
      // TableRowProps,
      TableCellProps,
    };

    return (
      <div className={classes.root}>
        <Paper className={classes.bar}>
          <div className={classes.radioButtons}>
            <RadioGroup
              row
              circular
              onChange={this.handleChange}
              value={this.state.value}
              name="type2"
            >
              <RadioButton className={classes.button} value="scoll">
                scroll
              </RadioButton>
              <RadioButton className={classes.button} value="resizable">
                resizable
              </RadioButton>
              <RadioButton className={classes.button} value="dragable">
                dragable
              </RadioButton>
            </RadioGroup>
          </div>
        </Paper>
        <Paper className={classes.tableBox}>
          {/* <Divider></Divider> */}
          <AwesomeTable
            onRowClick={this.handleRowClick}
            title={'Tree Table'}
            columns={columns}
            data={data}
            searchable
            paginatable
            // disableClickToFixColumn={false}
            total={'total: 90'}
            // sync
            {...options}
          />
        </Paper>
      </div>
    );
  }
}

AwesomeTableEXample.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AwesomeTableEXample);
