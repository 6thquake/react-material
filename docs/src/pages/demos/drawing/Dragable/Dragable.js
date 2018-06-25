import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import update from 'immutability-helper'
import ReactDOM from 'react-dom'
import update from 'react-addons-update'; 
import { DropTarget, DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import ItemTypes from './ItemTypes'
import Box from './Box'
import LineTo from 'react-material/Drawing/Line'
import {Line} from 'react-material/Drawing/Line'
import PubSub from 'pubsub-js'
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

	const item = monitor.getItem()

	const delta = monitor.getDifferenceFromInitialOffset()
	const left = Math.round(item.left + delta.x)
	const top = Math.round(item.top + delta.y)

	component.moveBox(item.id, left, top)

})

const boxTarget = {
	drop(props, monitor, component) {
		//console.log('moniter1', monitor )
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
			point: {},
			startDrawflag: false,
			AtoBinproperArea : false,
			BtoAinproperArea : false,
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
		if(this.state.AtoBinproperArea){
			this.changeBoxPosition(document.getElementById('a'),document.getElementById('b'))
		}else{
			this.changeBoxPosition(document.getElementById('b'),document.getElementById('a'))
		}
	}
	changeBoxPosition(newBoxA,newBoxB){
		if(newBoxA.getBoundingClientRect().left > newBoxB.getBoundingClientRect().right){
			if(newBoxA.getBoundingClientRect().bottom < newBoxB.getBoundingClientRect().top){
				PubSub.publish('boxMove',["left bottom","right top"])
			}
			if((newBoxA.getBoundingClientRect().bottom < (newBoxB.getBoundingClientRect().top + newBoxB.getBoundingClientRect().height/2))&&(newBoxA.getBoundingClientRect().bottom > newBoxB.getBoundingClientRect().top)){
				PubSub.publish('boxMove',["left middle-bottom","right top-middle"])
			}
			if((newBoxA.getBoundingClientRect().bottom < newBoxB.getBoundingClientRect().bottom)&&(newBoxA.getBoundingClientRect().bottom > (newBoxB.getBoundingClientRect().top + newBoxB.getBoundingClientRect().height/2))){
				PubSub.publish('boxMove',["left middle","right middle"])
			}
			if((newBoxA.getBoundingClientRect().top > (newBoxB.getBoundingClientRect().top+ newBoxB.getBoundingClientRect().height/2))&&(newBoxA.getBoundingClientRect().top < newBoxB.getBoundingClientRect().bottom)){
				PubSub.publish('boxMove',["left top-middle","right middle-bottom"])
			}
			if(newBoxA.getBoundingClientRect().top > newBoxB.getBoundingClientRect().bottom){
				PubSub.publish('boxMove',["left top","right bottom"])
			}
		}
		if(newBoxA.getBoundingClientRect().right < newBoxB.getBoundingClientRect().left){
			if(newBoxA.getBoundingClientRect().bottom < newBoxB.getBoundingClientRect().top){
				PubSub.publish('boxMove',["right bottom","left top"])
			}
			if((newBoxA.getBoundingClientRect().bottom < (newBoxB.getBoundingClientRect().top + newBoxB.getBoundingClientRect().height/2))&&(newBoxA.getBoundingClientRect().bottom > newBoxB.getBoundingClientRect().top)){
				PubSub.publish('boxMove',["right middle-bottom","left top-middle"])
			}
			if((newBoxA.getBoundingClientRect().bottom < newBoxB.getBoundingClientRect().bottom)&&(newBoxA.getBoundingClientRect().bottom > (newBoxB.getBoundingClientRect().top + newBoxB.getBoundingClientRect().height/2))){
				PubSub.publish('boxMove',["right middle","left middle"])
			}
			if((newBoxA.getBoundingClientRect().top > (newBoxB.getBoundingClientRect().top+ newBoxB.getBoundingClientRect().height/2))&&(newBoxA.getBoundingClientRect().top < newBoxB.getBoundingClientRect().bottom)){
				PubSub.publish('boxMove',["right top-middle","left middle-bottom"])
			}
			if(newBoxA.getBoundingClientRect().top > newBoxB.getBoundingClientRect().bottom){
				PubSub.publish('boxMove',["right top","left bottom"])
			}

		}
		if((newBoxA.getBoundingClientRect().right < (newBoxB.getBoundingClientRect().left+newBoxB.getBoundingClientRect().width/2))&&(newBoxA.getBoundingClientRect().right > newBoxB.getBoundingClientRect().left)){
			if(newBoxA.getBoundingClientRect().bottom < newBoxB.getBoundingClientRect().top){
				PubSub.publish('boxMove',["center-right bottom","left-center top"])
			}
			if(newBoxA.getBoundingClientRect().top > newBoxB.getBoundingClientRect().bottom){
				PubSub.publish('boxMove',["center-right top","left-center bottom"])
			}
		}

		if((newBoxA.getBoundingClientRect().right < newBoxB.getBoundingClientRect().right)&&(newBoxA.getBoundingClientRect().right > (newBoxB.getBoundingClientRect().left+newBoxB.getBoundingClientRect().width/2))){
			if(newBoxA.getBoundingClientRect().bottom < newBoxB.getBoundingClientRect().top){
				PubSub.publish('boxMove',["center bottom","center top"])
			}
			if(newBoxA.getBoundingClientRect().top > newBoxB.getBoundingClientRect().bottom){
				PubSub.publish('boxMove',["center top","center bottom"])
			}
		}
		if((newBoxA.getBoundingClientRect().left < newBoxB.getBoundingClientRect().right)&&(newBoxA.getBoundingClientRect().left > (newBoxB.getBoundingClientRect().left+newBoxB.getBoundingClientRect().width/2))){
			if(newBoxA.getBoundingClientRect().bottom < newBoxB.getBoundingClientRect().top){
				PubSub.publish('boxMove',["left-center bottom","center-right top"])
			}
			if(newBoxA.getBoundingClientRect().top > newBoxB.getBoundingClientRect().bottom){
				PubSub.publish('boxMove',["left-center top","center-right bottom"])
			}
		}
	}
	mousedown(event){
		if(!this.props.allowDraw){
			return
		}
		const doc = document.documentElement
		const body = document.body;
		const x00 = event.clientX + (doc.scrollLeft || body.scrollLeft || 0) - ( doc.clientLeft ||  body.clientLeft || 0);
		const y00 = event.clientY + (doc.scrollTop || body.scrollTop || 0) - ( doc.clientTop ||  body.clientTop || 0);    
		this.setState(preState=>({
			point: {...preState.point,x0:x00,y0:y00},
			startDrawflag:true
		}))
		//console.log('points')
		//console.log(this.state.point)
	}
	mousemove(event){
		if(!this.props.allowDraw||!this.state.startDrawflag){
			return
		}
		const doc = document.documentElement
		const body = document.body;
		const x11 = event.clientX + (doc.scrollLeft || body.scrollLeft || 0) - (doc.clientLeft || body.clientLeft || 0);
		const y11 = event.clientY + (doc.scrollTop || body.scrollTop || 0) - (doc.clientTop ||  body.clientTop || 0);
		this.setState(preState=>({
			point: {...preState.point,x1:x11,y1:y11}
		}))
	}
	mouseup(event){
		if(!this.props.allowDraw){
			return
		}
		this.setState({startDrawflag:false})
		const newBoxA = document.getElementById('a')
		const newBoxB = document.getElementById('b')
		const doc = document.documentElement
		const body = document.body;
		const offsetX = (doc.scrollLeft || body.scrollLeft || 0) - ( doc.clientLeft ||  body.clientLeft || 0);
		const offsetY = (doc.scrollTop || body.scrollTop || 0) - (doc.clientTop ||  body.clientTop || 0);

		if((this.state.point.x0>(newBoxA.getBoundingClientRect().left + offsetX))&&(this.state.point.x0<(newBoxA.getBoundingClientRect().right+offsetX))&&(this.state.point.y0>(newBoxA.getBoundingClientRect().top+offsetY))&&(this.state.point.y0<(newBoxA.getBoundingClientRect().bottom+offsetY))){
			if((this.state.point.x1>(newBoxB.getBoundingClientRect().left+offsetX))&&(this.state.point.x1<(newBoxB.getBoundingClientRect().right+offsetX))&&(this.state.point.y1>(newBoxB.getBoundingClientRect().top+offsetY))&&(this.state.point.y1<(newBoxB.getBoundingClientRect().bottom+offsetY))){
			console.log('around to too')
			this.setState({
				AtoBinproperArea : true
			})
			this.props.drawComplete();
			}
		}
		if((this.state.point.x1>(newBoxA.getBoundingClientRect().left+offsetX))&&(this.state.point.x1<(newBoxA.getBoundingClientRect().right+offsetX))&&(this.state.point.y1>(newBoxA.getBoundingClientRect().top)+offsetY)&&(this.state.point.y1<(newBoxA.getBoundingClientRect().bottom+offsetY))){
			if((this.state.point.x0>(newBoxB.getBoundingClientRect().left+offsetX))&&(this.state.point.x0<(newBoxB.getBoundingClientRect().right+offsetX))&&(this.state.point.y0>(newBoxB.getBoundingClientRect().top)+offsetY)&&(this.state.point.y0<(newBoxB.getBoundingClientRect().bottom+offsetY))){
			console.log('too to around')
			this.setState({
				BtoAinproperArea : true
			})
			this.props.drawComplete();
			}
		}


	}
	componentDidMount(){
		
	}
	static getDerivedStateFromProps(props, state){
		if(props.removeLine){
			return {
				AtoBinproperArea : false,
				BtoAinproperArea : false,
				point: {}
			}
		}		
	}
	render() {
		const { hideSourceOnDrag, connectDropTarget } = this.props
		const { boxes ,from , to, AtoBinproperArea,BtoAinproperArea} = this.state
		//console.log('this.props.borderStyle')
		//console.log(this.props.borderStyle)
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
				{this.props.removeLine?null:AtoBinproperArea?<LineTo from={ReactDOM.findDOMNode(this.a)} to={ReactDOM.findDOMNode(this.b)} borderStyle={this.props.borderStyle} arrowStyle={this.props.arrowStyle} />:BtoAinproperArea?<LineTo from={ReactDOM.findDOMNode(this.b)} to={ReactDOM.findDOMNode(this.a)} borderStyle={this.props.borderStyle} arrowStyle={this.props.arrowStyle}/>:<Line {...this.state.point} borderStyle={'dashed'}/>}

			</div>
		)
	}
}
let C = DropTarget(ItemTypes.BOX, boxTarget, connect => {

	return {
	connectDropTarget: connect.dropTarget(),
}})(Container);
export default DragDropContext(HTML5Backend)(C);


