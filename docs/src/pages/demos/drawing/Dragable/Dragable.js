import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import update from 'immutability-helper'
import update from 'react-addons-update'; 
import { DropTarget, DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import ItemTypes from './ItemTypes'
import Box from './Box'
import LineTo from 'react-material/Drawing/Line'

const styles = {
	width: 600,
	height: 600,
	border: '1px solid black',
	position: 'relative',
}
const throttling = (fn, wait, maxTimelong) => {
  wait = wait || 100
  maxTimelong = maxTimelong || 300
  var timeout = null
  var startTime = Date.now()

  return function (e) {
    if (timeout !== null) clearTimeout(timeout)
    var curTime = Date.now()
    if (curTime - startTime >= maxTimelong) {
      fn(e)
      startTime = curTime
    } else {
      timeout = setTimeout((e) => {
        fn(e)
      }, wait)
    }
  }
}
var throttle = function (delay, action) {
  var last = 0
  return function () {
    var curr = +new Date()
    if (curr - last > delay) {
      action.apply(this, arguments)
      last = curr
    }
  }
}
var debounce = function (idle, action) {
  var last
  return function () {
    var ctx = this,
      args = arguments
    clearTimeout(last)
    last = setTimeout(function () {
      action.apply(ctx, args)
    }, idle)
  }
}
let log = throttle(20, (monitor, component) => {

	// console.log('hello=========world', c)
	// c.setState({
	// 	ss: 'ddd'
	// })
	const item = monitor.getItem()
	const delta = monitor.getDifferenceFromInitialOffset()
	const left = Math.round(item.left + delta.x)
	const top = Math.round(item.top + delta.y)

	component.moveBox(item.id, left, top)

})

const boxTarget = {
	drop(props, monitor, component) {
		console.log('moniter1', monitor )
		const item = monitor.getItem()
		const delta = monitor.getDifferenceFromInitialOffset()
		const left = Math.round(item.left + delta.x)
		const top = Math.round(item.top + delta.y)

		component.moveBox(item.id, left, top)
	},
	hover(props, monitor, component) {
		log(monitor, component)
	},
}

// @DropTarget(ItemTypes.BOX, boxTarget, connect => {
// 	console.log(connect)
// 	return {
// 	connectDropTarget: connect.dropTarget(),
// }})
// @DragDropContext(HTML5Backend)
class Container extends Component {
	static propTypes = {
		hideSourceOnDrag: PropTypes.bool.isRequired,
		connectDropTarget: PropTypes.func.isRequired,
	}

	constructor(props) {
		super(props)
		this.state = {
			boxes: {
				a: { top: 20, left: 80, title: 'Drag me around' },
				b: { top: 180, left: 20, title: 'Drag me too' },
			},
			from:{
				x: 80,
				y: 20,
			},
			to: {
			  x: 20,
			  y: 180,
			},
			text:'www'

		}
	}
	componentDidMount(){
		this.setState({
			text: 'hello'
		})
	}
	moveBox(id, left, top) {
		this.setState(
			update(this.state, {
				boxes: {
					[id]: {
						$merge: { left, top },
					},
				},
			}),
		)

		this.setState({
			from:{
				x: left,
				y: top
			},
		})
	}

	render() {
		const { hideSourceOnDrag, connectDropTarget } = this.props
		const { boxes , from , to} = this.state
		return connectDropTarget(
			<div style={styles}>
				{Object.keys(boxes).map(key => {
					const { left, top, title } = boxes[key]
					return (
						<Box
							key={key}
							id={key}
							ref={(x)=>this[key]=x}
							left={left}
							top={top}
							hideSourceOnDrag={hideSourceOnDrag}
							name={'hahe'}
						>
							{title}
						</Box>
					)
				})}
				<LineTo from={this.a} to={this.b}/>
			</div>,
		)
	}
}
let C = DropTarget(ItemTypes.BOX, boxTarget, connect => {

	return {
	connectDropTarget: connect.dropTarget(),
}})(Container);
export default DragDropContext(HTML5Backend)(C);