import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-material/styles';
import {Dragable} from './Dragable';
import {Home,Grade,Lock} from '@material-ui/icons';
import {Line} from 'react-material/Drawing/Line'

export default class DragAroundNaive extends Component {
	constructor(props) {
		super(props)
		this.handleHideSourceClick = this.handleHideSourceClick.bind(this)
		this.state = {
			hideSourceOnDrag: false,
			allowDraw: false,
			dragDisable:false,
			removeLine: false,
		}
	}

	handleHideSourceClick() {
		this.setState({
			hideSourceOnDrag: !this.state.hideSourceOnDrag,
		})
	}
	drawLine(){
		this.setState({
			allowDraw: true,
			dragDisable:true,
			removeLine: false,
		})
	}
	resetLine(){
		this.setState({
			removeLine: true,
		})
	}
	drawComplete(){
		this.setState({
			allowDraw: false,
			dragDisable:false,
		})		
	}
	render() {
		const { hideSourceOnDrag } = this.state
		return (
			<div>
				<button onClick={this.drawLine.bind(this)}>-----></button>
				<button onClick={this.resetLine.bind(this)}>resetLine</button>
				<Dragable hideSourceOnDrag={hideSourceOnDrag} allowDraw={this.state.allowDraw} dragDisable={this.state.dragDisable} drawComplete={this.drawComplete.bind(this)} removeLine={this.state.removeLine}/>
				<p>
					<label htmlFor="hideSourceOnDrag">
						<input
							id="hideSourceOnDrag"
							type="checkbox"
							checked={hideSourceOnDrag}
							onChange={this.handleHideSourceClick}
						/>
						<small>Hide the source item while dragging</small>
					</label>
				</p>
			</div>
		)
	}
}

