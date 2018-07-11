import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-material/styles';
import Table from 'react-material/Table';
import TableBody from 'react-material/TableBody';
import TableCell from 'react-material/TableCell';
import TableHead from 'react-material/TableHead';
import TableRow from 'react-material/TableRow';
// import ScrollBar from ''
import Paper from 'react-material/Paper';
import RmTable from 'react-material/Table/RmTable'
const styles = theme => ({
  root: {
    // width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'hidden'
  },
});

const columns = [
  { title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
  { title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left' },
  { title: 'Column 1', dataIndex: 'address', key: '1', width: 150, resizable: true },
  { title: 'Column 2', dataIndex: 'address', key: '2', width: 150 },
  { title: 'Column 3', dataIndex: 'address', key: '3', width: 150 },
  { title: 'Gender', dataIndex: 'gender', key: '4', width: 150 },
  { title: 'Column 5', dataIndex: 'address', key: '5', width: 150 },
  { title: 'Column 6', dataIndex: 'address', key: '6', width: 150 },
  { title: 'Column 7', dataIndex: 'address', key: '7', width: 150 },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a href="javascript:;">action</a>,
  },
];

const data = [];
for (let i = 0; i < 100; i++) {

  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London${i}`,
    gender: i % 2 === 0 ? 'male' : "female"
  });
}
class RmTableEXample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      columns: columns,
      data: data
    };
  }
  handleResize =(index, colomn, size)=> {
    this.setState(({ columns }) => {
      const nextColumns = [...columns];
      nextColumns[index] = {
        ...nextColumns[index],
        width: size.width,
      };
      return { columns: nextColumns };
    });
  }
  handleColDrag = (config) => {
    console.log('config', config)
    let {
      targetIndex,
      sourceIndex
    } = config
    let {
      columns,
      data
    } = this.state
    let sourceColumn = columns[sourceIndex]
    let sourceData = data[sourceIndex]
    columns[sourceIndex] = columns[targetIndex]
    columns[targetIndex] = sourceColumn
    
    data[sourceIndex] = data[targetIndex]
    data[targetIndex] = sourceData

    this.setState({
      columns,
      data,
    })
  }
  render() {
    const { classes } = this.props
    const { data, columns } = this.state
    return (
      <Paper className={classes.root}>
        <RmTable onColDrag={this.handleColDrag} onColResize={this.handleResize} columns={columns} data={data}/>
      </Paper>
    );
  }
}

RmTableEXample.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RmTableEXample);
