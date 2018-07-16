import React from 'react';
import ReactDOM from 'react-dom'
import classNames from 'classnames'
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
import Toolbar from './TableToolbar'
import Manager from './Manager'
import {
  TableProvider
} from './Context'
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

  },
  leftShadow: {
    'box-shadow': '6px 0 6px -4px rgba(0,0,0,.2)'
  },
  right:{
    position: 'absolute',
    right: 0,
    top: 0,
    background: '#fff',
  },
  rightShadow: {
    'box-shadow': '-6px 0 6px -4px rgba(0,0,0,.2)'
  }
})
let manager = Manager.instance()
class RmTable extends React.Component {
  constructor(props) {
    super(props)
    const columns = this.normalizeColumns(props.columns)
    this.state = {  
      hasLeft: false,
      hasRight: true,
      columns: columns
    }
  }

  tableRefs = {
    root: React.createRef('root'),
    left: React.createRef('left'),
    main: React.createRef('main'),
    right: React.createRef('right'),
    head: React.createRef('head'),
    body: React.createRef('body'),
  }
  dragIndex = {
    targetIndex: '',
    sourceIndex: '',
  }

  componentDidMount(){
    this.setTableShadow()
    this.syncTableRowHeight()
  }
  
  static getDerivedStateFromProps(props){
    const { data, columns } = props
    if(manager.changed(columns,data)){

    }
  }

  normalizeColumns = (columns) => {
    const leftColumns = columns.filter(item => item.fixed === 'left')
    const rightColumns = columns.filter(item => item.fixed === 'right')
    const unfixed = columns.filter(item => !item.fixed)
    return [...leftColumns, ...unfixed, ...rightColumns]
  }

  syncTableRowHeight = () => {
    let headHeight = this.tableRefs.head.current.getBoundingClientRect().height
    let body = this.tableRefs.body.current
    let bodyDom = ReactDOM.findDOMNode(body)
    let bodyHeight = bodyDom.getBoundingClientRect().height
    this.setState({
      bodyRowHeight: bodyHeight / this.props.data.length,
      headRowHeight: headHeight 
    })
  }

  handleColDrag = (config) => {
    let {
      targetIndex,
      sourceIndex
    } = config
    let {
      columns,
    } = this.state
    let sourceColumn = columns[sourceIndex]
    let targetColumn = columns[targetIndex]
    let fixed = targetColumn.fixed
    sourceColumn.fixed = fixed
    this.setState(
      update(this.state, {
        columns: {
          $splice: [
            [sourceIndex, 1],
            [targetIndex, 0, sourceColumn]
          ],
        },
      }),
    );
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

  onSearch = (text) => {
    console.log('search ', text)
  }
  dragSatrt = (index) => {
    this.dragIndex.sourceIndex = index
  }

  dragEnd = (index) => {
    // todo ： 每次拖拽执行了两次， 多执行了一次。而且返回值不对
    // 这里先用类型过滤掉多余的一次
    if(typeof(index) === 'object'){
      return 
    }
    const {
      onColDrag
    } = this.props
    this.dragIndex.targetIndex = index
    onColDrag && onColDrag(this.dragIndex)
    this.handleColDrag(this.dragIndex)
  }
  renderMainTable=()=> {
    let { columns } = this.state
    let result = this.renderTable(columns ,'main')
    return result
  }
  renderLeftTable =()=> {
    let columns = this.state.columns.filter((column)=>{
      return column.fixed === 'left'
    })
    return this.renderTable(columns, 'left')
  }
  renderRightTable = () => {
    let columns = this.state.columns.filter((column) => {
      return column.fixed === 'right'
    })
    let baseLength = this.state.columns.length - columns.length
    return this.renderTable(columns, 'right', baseLength)
  }
  renderTable = (columns, type, baseLength = 0) => {
     const {
      classes,
      data,
      onColDrag,
      resizable,
      dragable,
    } = this.props
    const {
      bodyRowHeight,
      headRowHeight,
      hasLeft,
      hasRight
    } = this.state
    let width = type === 'main'? '': columns.reduce((pre, cur) => {
      return pre + cur.width
    }, 0)
    let style = {
      width,
    }

    const head = (
      <Head
        baseLength={baseLength}
        headRef={type === 'main'? this.tableRefs.head : ''}
        data={data}
        columns={columns}
        onResize={this.handleResize}
        resizable={resizable}
        dragable={dragable}
        onDragStart = {
          this.dragSatrt
        }
        onDragEnd = {
          this.dragEnd
        }
        headRowHeight = {headRowHeight}
      />
    )
    const body = (
      <Body
        bodyRef ={type === 'main'?this.tableRefs.body: ''}
        data={data}
        columns={columns}
        type={type}
        scroll = {
          this.handlScrollY
        }
        tableRef={this.tableRefs[type]}
        bodyRowHeight={bodyRowHeight}
      />
    )
    const table = [head, body]
    const className = classNames(classes[type], {[classes.leftShadow]: type==='left' && hasLeft}, {[classes.rightShadow]: type==='right' && hasRight})
    // if(type === left )
    const result = (
      <div style={style} ref={type === 'main'?this.tableRefs.root: null} className={className}>
        {table}
      </div>
    )
    return result
  }

  handlScrollY = (e, t) => {
    let scrollTop = e.target.scrollTop
    t!== 'left' && (this.tableRefs.left.current.scrollTop = scrollTop)
    t!== 'right' && (this.tableRefs.right.current.scrollTop = scrollTop)
    t!== 'main' && (this.tableRefs.main.current.scrollTop = scrollTop)
  }
  handleScrollX = (e) => {
    let scrollLeft = e.target.scrollLeft
    if (e.target !== this.tableRefs.root.current){
      return
    }
    this.setTableShadow(scrollLeft)
    // this.syncTableRowHeight()
  }
  setTableShadow = (left) => {
    let {
      scrollLeft,
      clientWidth
    } = this.tableRefs.root.current
    scrollLeft = left || scrollLeft
    let hasLeft = scrollLeft > 0 
    let hasRight = this.tableRefs.main.current.clientWidth - clientWidth - scrollLeft > 0
    this.setState({
      hasLeft,
      hasRight
    })
  }
  render() {
    const {
      classes,
      width,
    } = this.props
    return (
      <React.Fragment>
        <Toolbar onSearch={this.onSearch} width={width}></Toolbar>
        <div 
          style = {{width}}
          className={classes.root}
          onScroll = {this.handleScrollX}
        >
          
          {[
            this.renderMainTable(),
            this.renderLeftTable(),
            this.renderRightTable(),
          ]}
        </div>
      </React.Fragment>
      
    );
  }
}

export default withStyles(styles)(RmTable);