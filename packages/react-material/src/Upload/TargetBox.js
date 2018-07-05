import React, { Component } from 'react';
import {
	DropTarget,
	DropTargetConnector,
	ConnectDropTarget,
	DropTargetMonitor,
} from 'react-dnd'

const boxStyle = {
	minHeight:'300px',
    minWidth:'400px',
    border:'1px dashed #BDBDBD',
    backgroundColor:'#F5F5F5',
    textAlign: 'center',
    borderRadius:'5px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems:'center',
    position:'relative',
}
const activeStyle = {
	height:'30px',
    minWidth:'80px',
    position:'absolute',
    top: '15px',
    left: '50%',
    transform: 'translate(-50%, 0%)',
}

const boxTarget = {
	drop(props, monitor) {
		if (props.onDrop) {
			props.onDrop(props, monitor)
		}
	},
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}


class TargetBox extends Component {
	render() {
		const { canDrop, isOver, connectDropTarget } = this.props
		const isActive = canDrop && isOver

		return connectDropTarget(
			<div>
				<div style={activeStyle}>{isActive ? 'Release to drop' : 'Drag file here'}</div>
				<div style={boxStyle}>
					{this.props.children}
				</div>
			</div>	
		)
	}
}
export default DropTarget((props) => props.accepts, boxTarget, collect)(TargetBox);
