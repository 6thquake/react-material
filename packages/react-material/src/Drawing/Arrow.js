import React, { Component } from 'react';
export default class Arrow extends Component {
	constructor(props) {
		super(props)
	}
	render(){
		//const topadjust = this.props.top-10
		const composeArrow = <div style={{border:'6px solid', width:'0', height:'0', transform:'rotate(45deg)', position:'fixed', top: (this.props.top-3)+'px', left:(this.props.left-3)+'px'}}></div>
		const aggregateArrow = <div style={{border:'1px solid', zIndex:'2',width:'12px',background:'#fff', height:'12px', transform:'rotate(45deg)', position:'fixed', top:(this.props.top-3)+'px', left:(this.props.left-3)+'px'}}></div>
		const realizeArrow = <div style={{border:'1px solid', width:'5px', height:'5px', transform:'rotate(45deg)', position:'fixed', top: (this.props.top-3)+'px', left:(this.props.left-3)+'px'}}></div>
		const generalizeArrow = <div style={{border:'5px solid transparent', borderLeft:'12px solid #000', width:'0', height:'0', transform:'rotate('+this.props.angle+')', position:'fixed', top: (this.props.top-6)+'px', left:(this.props.left-10)+'px'}}></div>
		const importArrow = <div style={{width:'20px', height:'20px', transform:'rotate('+this.props.angle+')', fontSize:'20px', position:'fixed', top: (this.props.top-13)+'px', left:(this.props.left-1)+'px'}}>></div>
		return(
			<div>
				{this.props.arrowStyle==='compose'?composeArrow:null}
				{this.props.arrowStyle==='aggregate'?aggregateArrow:null}
				{this.props.arrowStyle==='realize'?realizeArrow:null}
				{this.props.arrowStyle==='default'?null:null}
				{this.props.arrowStyle==='generalize'?generalizeArrow:null}
				{this.props.arrowStyle==='import'?importArrow:null}
			</div>
		)
	}
}