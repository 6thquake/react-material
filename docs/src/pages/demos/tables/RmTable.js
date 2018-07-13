import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-material/styles';
import Divider from 'react-material/Divider';
import TableBody from 'react-material/TableBody';
import TableCell from 'react-material/TableCell';
import TableHead from 'react-material/TableHead';
import TableRow from 'react-material/TableRow';
import {
  RadioButton
} from 'react-material/Radio';
import RadioGroup from 'react-material/RadioGroup';
// import ScrollBar from ''
import Paper from 'react-material/Paper';
import RmTable from 'react-material/Table/RmTable'
// import { Divider } from 'rc-menu/lib';
const styles = theme => ({
  root: {
    // width: '100%',
    marginTop: theme.spacing.unit * 3,
    // overflowX: 'hidden'
  },
  radioButtons: {
    margin: theme.spacing.unit * 2
  }
});

const findInObject = (object, value) => {
  let keys = Object.keys(object)
  let result = keys.some((key)=>{
    return String(object[key]).indexOf(value) !== -1
  })
  return result
}

const find = (content, value) => {
  const type = typeof content
  if (type === 'object') {
    return findInObject(content, value)
  } else {
    return String(content).indexOf(String(value)) !== -1
  }
}

const compare = (item, value) => {
  let result = find(item, value)
  return result
}

const filter = (data, value) => {
  const type = typeof value
  let callback = type === 'function' ? value : compare
  let result = data.filter((item)=>{
    return callback(item, value)
  })
  return result
}

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
for (let i = 0; i < 10; i++) {

  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London${i}`,
    gender: i % 2 === 0 ? 'male' : "female"
  });
}

// console.log('calll filter', filter(data,(item, index)=>{
//   return item.indexOf('0')
// }))
class RmTableEXample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      columns: columns,
      data: data,
      value: 'scoll'
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
  handleChange = (e) => {
    let value = e.target.value
    this.setState({
      value,
    })
    console.log('filter data===========', filter(data, 'London0'))
    console.log('filter data===========222', filter(data, (item, index)=>{
      return find(item, 'London0')
    }))
  }
  render() {
    const { classes } = this.props
    const { data, columns, value } = this.state
    const options = {
      value
    }
    return (
      <Paper className={classes.root}>
        <div className={classes.radioButtons}>
           <RadioGroup
            row
            circular
            onChange={this.handleChange}
            value={this.state.value}
            name="gender1"
          >
            <RadioButton value="scoll">scoll</RadioButton>
            <RadioButton value="fixed">fixed</RadioButton>
            <RadioButton value="resizable">resizable</RadioButton>
            <RadioButton value="dragable">
              dragable
            </RadioButton>
          </RadioGroup>
        </div>
        <Divider></Divider>
        <RmTable {...options} onColDrag={this.handleColDrag} onColResize={this.handleResize} columns={columns} data={data}/>
      </Paper>
    );
  }
}

RmTableEXample.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RmTableEXample);
