import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import Table from '../../Table';
import TableBody from '../../TableBody';
import TableCell from '../../TableCell';
import TableHead from '../../TableHead';
import TableRow from '../../TableRow';
import Scrollbar from '../../Scrollbar'
import Head from './Head'
import Body from './Body'
import {
  withStyles
} from 'react-material/styles';

const styles = (theme)=> ({
  root: {
    position: 'relative'
  },
  main:{
    // position: 'relative',
    overflowX: 'auto',
    width: '100%'
  },
  left: {
    position: 'absolute',
    left: 0,
    top: 0,
    background: "#fff",
    'box-shadow': '6px 0 6px -4px rgba(0,0,0,.2)'
  },
  right:{
    position: 'absolute',
    right: 0,
    top: 0,
    background: '#fff',
    'box-shadow': '-6px 0 6px -4px rgba(0,0,0,.2)'
  }
})
class RmTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {  }
  }
  tableRefs = {
    left: React.createRef('left'),
    main: React.createRef('main'),
    right: React.createRef('right')
  }
  dragIndex = {
    targetIndex: '',
    sourceIndex: '',
  }
  dragSatrt = (index) => {
    console.log('start index', index)
    this.dragIndex.sourceIndex = index
  }
  dragEnd = (index) => {
    console.log('end index', index)
    const {
      onColDrag
    } = this.props
    this.dragIndex.targetIndex = index
    onColDrag && onColDrag(this.dragIndex)
  }
  renderMainTable=()=> {
    let { columns } = this.props
    let result = this.renderTable(columns ,'main')
    return result
  }
  renderLeftTable =()=> {
    let columns = this.props.columns.filter((column)=>{
      return column.fixed === 'left'
    })
    return this.renderTable(columns, 'left')
  }
  renderRightTable = () => {
    let columns = this.props.columns.filter((column) => {
      return column.fixed === 'right'
    })
    return this.renderTable(columns, 'right')
  }
  renderTable = (columns, type) => {
     const {
      classes,
      data,
      onColResize,
      onColDrag
    } = this.props

    let width = type === 'main'? '': columns.reduce((pre, cur) => {
      return pre + cur.width
    }, 0)
    let style = {
      width,
    }
    const head = (
      <Head
        data={data}
        columns={columns}
        onResize={onColResize}
        onColDrag ={onColDrag}
        onDragStart = {
          this.dragSatrt
        }
        onDragEnd = {
          this.dragEnd
        }
      />
    )
    const body = (
      <Body
        data={data}
        columns={columns}
        type={type}
        scroll = {
          this.handlScroll
        }
        tableRef={this.tableRefs[type]}
      />
    )
    const table = [head, body]
    const result = (
      <div style={style} className={classes[type]}>
        {table}
      </div>
    )
    return result
  }

  // renderCombinatorialTable = ()=> {
  //   const {classes} = this.props
  //   return [
  //     this.renderMainTable(),

  //   ]
  // }

  handlScroll = (e, t) => {
    console.log('scroll', e, t)
    console.log('left', this.tableRefs)
    let scrollTop = e.target.scrollTop
    // debugger
    console.log('scroll top', e.target)
    t!== 'left' && (this.tableRefs.left.current.scrollTop = scrollTop)
    t!== 'right' && (this.tableRefs.right.current.scrollTop = scrollTop)
    t!== 'main' && (this.tableRefs.main.current.scrollTop = scrollTop)
  }
  render() {
    const {
      classes,
      data,
      columns
    } = this.props
    return (
      <div 
        style = {
          {
            width: 800,
            // height: 300,
            // overflowX: 'scroll',
            
          }
        }
        className={classes.root}
      >
         {[
           this.renderMainTable(),
           this.renderLeftTable(),
           this.renderRightTable(),
         ]}
      </div>
    );
  }
}

export default withStyles(styles)(RmTable);