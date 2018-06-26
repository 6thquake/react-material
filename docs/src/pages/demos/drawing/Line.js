import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-material/styles';
import {Dragable} from './Dragable';
import {Home,Grade,Lock} from '@material-ui/icons';

import Button from 'react-material/Button';
import Icon from 'react-material/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
const  aggregate = "/static/images/drawing/aggregate.gif"
const compose = "/static/images/drawing/compose.gif"
const associate = "/static/images/drawing/associate.gif"
const generalize = "/static/images/drawing/generalize.gif"
const realize = "/static/images/drawing/realize.gif"
const link = "/static/images/drawing/link.gif"
const import1 = "/static/images/drawing/import.gif"

const Style={
	buttonWrap:{
		margin:'1em 0.5em'
	}
}
export default class DragAroundNaive extends Component {
	constructor(props) {
		super(props)
		this.handleHideSourceClick = this.handleHideSourceClick.bind(this)
		this.state = {
			hideSourceOnDrag: false,
			allowDraw: false,
			dragDisable:false,
			removeLine: false,
			borderStyle: 'dashed',
			arrowStyle:'default',
		}
	}

	handleHideSourceClick() {
		this.setState({
			hideSourceOnDrag: !this.state.hideSourceOnDrag,
		})
	}
	drawLineCompose(){
		this.setState({
			allowDraw: true,
			dragDisable:true,
			removeLine: false,
			borderStyle: 'solid',
			arrowStyle : 'compose',

		})
	}
	drawLineAggregate(){
		this.setState({
			allowDraw: true,
			dragDisable:true,
			removeLine: false,
			borderStyle: 'solid',
			arrowStyle : 'aggregate',

		})
	}
	drawLineRealize(){
		this.setState({
			allowDraw: true,
			dragDisable:true,
			removeLine: false,
			borderStyle: 'dashed',
			arrowStyle : 'realize',

		})
	}
	drawLineAssociate(){
		this.setState({
			allowDraw: true,
			dragDisable:true,
			removeLine: false,
			borderStyle: 'solid',
			arrowStyle: 'default',
		})
	}
	drawLineGeneralize(){
		this.setState({
			allowDraw: true,
			dragDisable:true,
			removeLine: false,
			borderStyle: 'solid',
			arrowStyle: 'generalize',
		})
	}
	drawLineImport(){
		this.setState({
			allowDraw: true,
			dragDisable:true,
			removeLine: false,
			borderStyle: 'dashed',
			arrowStyle: 'import',
		})
	}
	drawLineLink(){
		this.setState({
			allowDraw: true,
			dragDisable:true,
			removeLine: false,
			borderStyle: 'dashed',
			arrowStyle: 'default',
		})
	}
	resetLine(){
		this.setState({
			removeLine: true,
			dragDisable:false,
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
				<div style={Style.buttonWrap}>
				    <Button variant="fab"  color="default" aria-label="edit" onClick={this.drawLineCompose.bind(this)} mini>
				      <img src={compose} alt=""/>
				    </Button> 
				    &nbsp;&nbsp;&nbsp;&nbsp;
				    <Button variant="fab"  color="default" aria-label="edit" onClick={this.drawLineAggregate.bind(this)} mini>
				      <img src={aggregate} alt=""/>
				    </Button>
				    &nbsp;&nbsp;&nbsp;&nbsp;
				    <Button variant="fab"  color="default" aria-label="edit" onClick={this.drawLineRealize.bind(this)} mini>
				      <img src={realize} alt=""/>
				    </Button> 
				    &nbsp;&nbsp;&nbsp;&nbsp;
				    <Button variant="fab"  color="default" aria-label="edit" onClick={this.drawLineAssociate.bind(this)} mini>
				      <img src={associate} alt=""/>
				    </Button>
				    &nbsp;&nbsp;&nbsp;&nbsp;
				    <Button variant="fab"  color="default" aria-label="edit" onClick={this.drawLineGeneralize.bind(this)} mini>
				      <img src={generalize} alt=""/>
				    </Button> 
				    &nbsp;&nbsp;&nbsp;&nbsp;
				    <Button variant="fab"  color="default" aria-label="edit" onClick={this.drawLineImport.bind(this)} mini>
				      <img src={import1} alt=""/>
				    </Button>  
				    &nbsp;&nbsp;&nbsp;&nbsp;
				    <Button variant="fab"  color="default" aria-label="edit" onClick={this.drawLineLink.bind(this)} mini>
				      <img src={link} alt=""/>
				    </Button> 
				    &nbsp;&nbsp;&nbsp;&nbsp; 
				    <Button variant="fab" aria-label="delete" onClick={this.resetLine.bind(this)} mini>
				      <DeleteIcon />
				    </Button> 
				</div>
				<Dragable hideSourceOnDrag={hideSourceOnDrag} allowDraw={this.state.allowDraw} dragDisable={this.state.dragDisable} drawComplete={this.drawComplete.bind(this)} removeLine={this.state.removeLine} borderStyle={this.state.borderStyle} arrowStyle={this.state.arrowStyle}/>
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

