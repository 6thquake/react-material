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
  root: {},
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
    width: 800,
  },
  radioButtons: {
    margin: theme.spacing.unit * 2,
  },
  button: {
    width: 120,
  },
});

const columns = [
  { title: 'Name', width: 100, dataIndex: 'name', key: 'name' },
  { title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left' },
  {
    title: 'Column 1',
    dataIndex: 'address',
    key: '1',
    width: 150,
    resizable: true,
  },
  {
    title: 'Column 2',
    dataIndex: 'address',
    key: '2',
    width: 150,
  },
  { title: 'Column 3', dataIndex: 'address', key: '3', width: 150 },
  { title: 'Gender', dataIndex: 'gender', key: '4', width: 150 },
  { title: 'Column 5', dataIndex: 'address', key: '5', width: 150 },
  { title: 'Column 6', dataIndex: 'address', key: '6', width: 150 },
  { title: 'Column 7', dataIndex: 'address', key: '7', width: 150 },
  { title: 'Column 8', dataIndex: 'address', key: '8', width: 150 },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a href="javascript:;">action</a>,
  },
];

const data = [];
for (let i = 0; i < 40; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no.${i}`,
    gender: i % 2 === 0 ? 'male' : 'female',
  });
}

class AwesomeTableEXample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: columns,
      data: data,
      value: 'dragable',
      TablePaginationProps: {
        rowsPerPage: 5,
        page: 0,
        count: 40,
      },
    };
  }
  componentDidMount = () => {
    // this.handleChangePage(0,0)
  };
  handleChange = e => {
    let value = e.target.value;
    this.setState({
      value,
    });
  };
  handleSearch = value => {
    console.log('search value', value);
    // this.setState({
    //   data: filter(data, value)
    // })
  };
  handleChangePage = (e, page) => {
    console.log('page', page);
    let {TablePaginationProps} = this.state
    let {rowsPerPage} = TablePaginationProps
    TablePaginationProps.page = page
    let paginateData = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    console.log('paginateData', paginateData)
    this.setState({
      TablePaginationProps,
      data: paginateData,
    })
  };
  handleChangeRowsPerPage = e => {
    console.log('rowperoage', e.target.value);
    let {TablePaginationProps} = this.state
    let {page} = TablePaginationProps
    let rowsPerPage = e.target.value
    TablePaginationProps.rowsPerPage = rowsPerPage
    let paginateData = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    this.setState({
      TablePaginationProps,
      data: paginateData,
    })
  };
  handleRowClick = (e, i) => {
    console.log('row item', e, i);
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
    const options = {
      [value]: value,
      TablePaginationProps: PaginationProps,
      exportProps,
      SearchProps,
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
            title={'MyTable'}
            columns={columns}
            data={this.state.data}
            searchable
            paginatable
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
