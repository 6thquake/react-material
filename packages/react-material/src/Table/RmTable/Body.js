import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import Table from '../../Table';
import TableBody from '../../TableBody';
import TableCell from '../../TableCell';
import TableHead from '../../TableHead';
import TableRow from '../../TableRow';
import Scrollbar from '../../Scrollbar'

import {
  withStyles
} from 'react-material/styles';

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const data = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread1', 356, 16.0, 49, 3.9),
  createData('Gingerbread2', 356, 16.0, 49, 3.9),
  createData('Gingerbread3', 356, 16.0, 49, 3.9),
  createData('Gingerbread4', 356, 16.0, 49, 3.9),
];

const styles = (theme)=> ({
  root: {
    overflowY: 'auto',
    overflowX: 'hidden',
    width: 'fit-content'
  },
  layoutFixed: {
    tableLayout: 'fixed',
  },
  // table: {
  //   background: '#FFF'
  // }
})
const colStyle = {
  // width: 150,
  minWidth: 100,
}
const throttling = (fn, wait, maxTimelong) => {
  wait = wait || 100
  maxTimelong = maxTimelong || 300
  var timeout = null
  var startTime = Date.now()

  return function (...arg) {
    if (timeout !== null) clearTimeout(timeout)
    var curTime = Date.now()
    if (curTime - startTime >= maxTimelong) {
      fn(...arg)
      startTime = curTime
    } else {
      timeout = setTimeout(() => {
        fn(...arg)
      }, wait)
    }
  }
}
class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  componentDidMount(){
    // tableRef.addEventListener('wheel', this.handleWheel)
    
  }
  handleWheel =()=>{
    console.log('on wheel')
  }
  // handleScroll =(type)=>(e)=>{
  //   throttling(this.props.scroll)
  // }
  render() {
    const {
      classes,
      data,
      columns,
      type,
      scroll,
      tableRef,
      bodyRef,
      bodyRowHeight
    } = this.props
    const rowStyle = {
      height: bodyRowHeight
    }
    return (
      <div 
        ref = {
          tableRef
        }
        onScroll = {
          (e) => {
            scroll(e, type)
          }
        }
        style = {
          {
            height: 300
          }
        }
        className = {
          classes.root
        }
      >
        <Table innerRef={bodyRef} classes={{root:classes.layoutFixed}}  className={classes.table}>
          <colgroup>
            {
              columns.map((item) => {
                return <col key={item.title} style={colStyle} width={item.width}></col>
              })
            }
          </colgroup>
          <TableBody>
            {data.map(entry => {
              return (
                <TableRow style={rowStyle} key={entry.key}>
                  {columns.map((column) => {
                    return (
                      <TableCell>
                        {
                          column.render ? column.render() : entry[column.dataIndex]
                        }
                      </TableCell>
                    )
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default withStyles(styles)(Body);