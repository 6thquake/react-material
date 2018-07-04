import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '../styles';
import CssBaseline from '../CssBaseline';
const styles = theme => ({
    input: {
        opacity: '0',
        position: 'absolute',
        display: 'block',
        width: '140px',
        height: '140px',
    },
    clickToUpload: {
        height:'140px',
        width:'140px',
        border:'1px dashed #BDBDBD',
        backgroundColor:'#F5F5F5',
        textAlign: 'center',
        borderRadius:'5px',
        position: 'relative',
    },  
    add: {
        fontSize: '30px',
        padding:'30px 0 0 0',
        color:'#616161',
    },
    upload: {
        fontSize: '15px',
        color:'#000',
        padding:'10px 0 0 0',
    },
    media: {
        height:'130px',
        width:'130px',
        position: 'absolute',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
        overflow:'hidden',
        borderRadius:'5px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
});
class UploadImg extends Component{
    constructor(props){
        super(props);
        this.state = {
            path: '',
            data: '',
            preview: null,
        }
    }

    changePath = (e)=>{
        const file = e.target.files[0];
        if(!file){
            return;
        }
        let type = file.type;
        if (/^image\/\S+$/.test(type)) {
        	let src = URL.createObjectURL(file); 
        	this.setState({ path: file.name, data: file, preview: src })
        }
    }
    componentDidUpdate(prevProps, prevState){
    	if(prevProps.path!== prevState.path){
    		this.upload();
    	}
    }
    upload = () =>{ 
        const data = this.state.data;
        const form = new FormData();
        form.append('file', data);
       //console.log(data);
        return this.props.actionFunc(form);
    }
    selectInput=(instance)=>{
    	if(this.props.disabled){
    		instance.setAttribute("disabled","disabled")
    	}
    }

    render(){
        const classes = this.props.classes;
      	const {preview} = this.state;
        console.log(preview)
        return (
            <div>
                <CssBaseline />
                <input accept="image/*" id="raisedButtonFile" ref={this.selectInput} onChange={this.changePath} type="file" className={classes.input}/>
                <label htmlFor="raisedButtonFile">
                    <div className={classes.clickToUpload}><div className={classes.add}>+</div><div className={classes.upload}>Upload</div>
                        <div className={classes.media} style={{backgroundImage:"url("+preview+")"}}></div>
                    </div>
                </label>
                
            </div>
            )
    }
}

export default withStyles(styles)(UploadImg);
		