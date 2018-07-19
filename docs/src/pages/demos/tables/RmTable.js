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
  },
  paginatableButton: {
    width: 120
  }
});


const columns = [
  { title: 'Name', width: 100, dataIndex: 'name', key: 'name' },
  { title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left' },
  {
    title: 'Column 1',
    dataIndex: 'address',
    key: '1',
    width: 150,
    resizable: true
  },
  {
    title: 'Column 2',
    dataIndex: 'address',
    key: '2',
    width: 150
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
    gender: i % 2 === 0 ? 'male' : "female"
  });
}

class RmTableEXample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      columns: columns,
      data: data,
      value: 'dragable'
    };
  }
  handleChange = (e) => {
    let value = e.target.value
    this.setState({
      value
    })
  }
  render() {
    const { classes } = this.props
    const { data, columns, value } = this.state
    const paginationProps = {
      rowsPerPage: 5,
      page: 0
    }
    const exportProps = {
      type: 'csv'
    }
    const searchProps = {
      placeholder: 'search',
      isDark: true,
    }
    const options = {
      [value] : value,
      paginationProps,
      exportProps,
      searchProps
    }
    return (
      <Paper className={classes.root}>
        <div className={classes.radioButtons}>
           <RadioGroup
            row
            circular
            onChange={this.handleChange}
            value={this.state.value}
            name="type2"
          >
            <RadioButton value="scoll">scroll</RadioButton>
            <RadioButton value="resizable">resizable</RadioButton>
            <RadioButton value="dragable">
              dragable
            </RadioButton>
           
          </RadioGroup>
        </div>
        {/* <Divider></Divider> */}
        <RmTable {...options} width={800} height={300} columns={columns} data={data} searchable paginatable/>
      </Paper>
    );
  }
}

RmTableEXample.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RmTableEXample);
