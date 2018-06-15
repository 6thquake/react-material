import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import update from 'immutability-helper'
import update from 'react-addons-update'; 
import { DropTarget, DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import ItemTypes from './ItemTypes'
import Box from './Box'
import LineTo from 'react-material/Drawing/Line'
import {Line} from 'react-material/Drawing/Line'
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
				a: { top: 20, left: 80, title: 'Drag me around'},
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
			text: 'www',
			point: {x0: '', y0: '', x1: '', y1: ''},
			flag: false,
			inproperArea : false,
		}
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
	mousedown(event){
		if(!this.props.allowDraw){
			return
		}
		let doc = document.documentElement
		let body = document.body;
		let x00 = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
		let y00 = event.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);    
		this.setState(preState=>({
			point: {...preState.point,x0:x00,y0:y00},
			flag:true
		}))
	}
	mousemove(event){
		if(!this.props.allowDraw){
			return
		}
		if (!this.state.flag) return;
		let doc = document.documentElement
		let body = document.body;
		const x11 = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
		const y11 = event.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
		this.setState(preState=>({
			point: {...preState.point,x1:x11,y1:y11}
		}))

		
	}
	mouseup(event){
		this.setState({flag:false})
		//console.log(this.state.point)
		let newBoxA = document.getElementById('a')
		let newBoxB = document.getElementById('b')

		if((this.state.point.x0>newBoxA.getBoundingClientRect().left)&&(this.state.point.x0<newBoxA.getBoundingClientRect().right)&&(this.state.point.y0>newBoxA.getBoundingClientRect().top)&&(this.state.point.y0<newBoxA.getBoundingClientRect().bottom)){
			//console.log("x0 am in boxA-dragmearound");
			if((this.state.point.x1>newBoxB.getBoundingClientRect().left)&&(this.state.point.x1<newBoxB.getBoundingClientRect().right)&&(this.state.point.y1>newBoxB.getBoundingClientRect().top)&&(this.state.point.y1<newBoxB.getBoundingClientRect().bottom)){
			console.log("around to too");
			this.setState({
				inproperArea : true
			})
			this.props.drawComplete();
			}
		}
		if((this.state.point.x1>newBoxA.getBoundingClientRect().left)&&(this.state.point.x1<newBoxA.getBoundingClientRect().right)&&(this.state.point.y1>newBoxA.getBoundingClientRect().top)&&(this.state.point.y1<newBoxA.getBoundingClientRect().bottom)){
			//console.log("x1 am in boxA-dragmearound");
			if((this.state.point.x0>newBoxB.getBoundingClientRect().left)&&(this.state.point.x0<newBoxB.getBoundingClientRect().right)&&(this.state.point.y0>newBoxB.getBoundingClientRect().top)&&(this.state.point.y0<newBoxB.getBoundingClientRect().bottom)){
			console.log("too to around");
			this.setState({
				inproperArea : true
			})
			this.props.drawComplete();
			}
		}
	}
	componentDidMount(){
		this.setState({
			text: 'hello'
		})
	}
	componentDidUpdate(){
		/*if((this.state.point.x0>(ths.state.boxes.a.left+newDiv.getBoundingClientRect()))&&
			(this.state.point.x1<(ths.state.boxes.a.left+newDiv.getBoundingClientRect()+80))&&
			(this.state.point.y0>(ths.state.boxes.a.top+newDiv.getBoundingClientRect()))&&
			(this.state.point.y1<(ths.state.boxes.a.left+newDiv.getBoundingClientRect()+80))){
			console.log("i am in box");
		}*/
		//console.log(this.state.boxes.a)
		//console.log(this.state.boxes.b)

		
	}
	static getDerivedStateFromProps(props, state){
		if(props.removeLine){
			return {
				inproperArea : false,
				point: {x0: '', y0: '', x1: '', y1: ''}
			}
		}		
	}
	render() {
		const { hideSourceOnDrag, connectDropTarget } = this.props
		const { boxes , from , to, inproperArea} = this.state
		return connectDropTarget(
			<div style={styles} id="test" onMouseDown={this.mousedown.bind(this)} onMouseUp={this.mouseup.bind(this)} onMouseMove={this.mousemove.bind(this)}>
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
							dragDisable={this.props.dragDisable}
						>
							{title}
						</Box>
					)
				})}
				{this.props.removeLine?null:inproperArea?<LineTo from={this.a} to={this.b}/>:<Line {...this.state.point}/>}
				
			</div>
		)
	}
}
let C = DropTarget(ItemTypes.BOX, boxTarget, connect => {

	return {
	connectDropTarget: connect.dropTarget(),
}})(Container);
export default DragDropContext(HTML5Backend)(C);


