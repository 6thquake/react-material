import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import Paper from '@6thquake/react-material/Paper';
import TreeTable from '@6thquake/react-material/Table/TreeTable';

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
  // {
  //   title: 'Address',
  //   dataIndex: 'address',
  //   width: '100',
  //   key: 'address',
  // },
  {
    title: 'Age222',
    dataIndex: 'age',
    key: 'age2',
    width: '200',
    // fixed: 'right'
  },
  ,
  {
    title: 'Age11',
    key: 'age3',
    width: '250',
    dataIndex: 'age',
    fixed: 'right',
  },
];

const data = [
  {
    key: 1,
    name: '1 John Brown sr.',
    age: 60,
    address: '12121 New York No. 1 Lake Park New York No. 1 Lake Park',
    children: [
      {
        key: 11,
        name: '11 John Brown',
        age: 42,
        address: 'New York No. 2 Lake Park New York No. 2 Lake Park',
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
    address: '12121 New York No. 1 Lake Park New York No. 1 Lake Park',
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

class TreeTableExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: columns,
      data: data,
    };
  }
  componentDidMount = () => {
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

  render() {
    const { classes } = this.props;
    const { data, columns } = this.state;
    const TableCellProps = {
      classes: {
        root: classes.cellPadding,
      },
    };
    return (
      <div className={classes.root}>
        <Paper className={classes.tableBox}>
          <TreeTable
            onRowClick={this.handleRowClick}
            title={'Tree Table'}
            columns={columns}
            data={data}
            // TableCellProps={TableCellProps}
          />
        </Paper>
      </div>
    );
  }
}

TreeTableExample.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TreeTableExample);
