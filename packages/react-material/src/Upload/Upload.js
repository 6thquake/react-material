import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import UploadFile from './UploadFile.js'
import './Upload.css'

import PropTypes from 'prop-types';
import Button,{StatusButton} from 'react-material/Button';
import classNames from 'classnames';
import { withStyles } from 'react-material/styles';
import FileUpload from '@material-ui/icons/FileUpload';
import Icon from 'react-material/Icon';


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    button: {
        margin: theme.spacing.unit,
    },
});



class Upload extends Component{
    constructor(props){
        super(props);
        this.state = {
            acceptType: props.acceptType,
            action: props.action,
            multiple: props.multiple,
            disabled: props.disabled,
            path: [],
            data: [],
        }
        this.status = false;
    try{
        if(!this.state.acceptType){
            this.state.acceptType = "*";
        }
        if(!this.state.action){
            throw new Error('please input the url for uploading');
        }
        if(Boolean(this.state.multiple)){
            this.state.multiple=true;  //可多选
        }else{
            this.state.multiple=false;  //默认为false ,不可多选
        }
        if (Boolean(this.state.disabled)) {
            this.state.disabled = true;// 只读，无法进行交互
        } else {
            this.state.disabled = false;// 默认为false 可以进行交互事件
        }

    }catch (err) {
            console.log(err);
        }

    }
    changePath=(e)=>{
        for(let i=0;i<e.target.files.length;i++){
            const file = e.target.files[i];
            if(!file){
                return;
            }
            let src,type = file.type;
            src = URL.createObjectURL(file); 
            this.setState(preState => ({
            path: [...preState.path,file.name],
            data: [...preState.data,file]
            }))
        }
    }
    upload = () =>{ 

        const data = this.state.data;
        const url = this.state.action;//服务器上传地址  
        const form = new FormData();
        form.append('file', data);

        let _promise = new Promise(function(resolve, reject){
            fetch(url,{
            method: 'POST',  
            body: form  
            }).then(function(res){
                resolve('success');
            },function(err){
                reject('error');
            })
        });

        return _promise;
    }

    cancel=()=>{
        this.setState({
        path:[],
        data:[],
        })
    }
    render(){
        const classes = this.props.classes;
        const eachPath = this.state.path.map((item)=>
            <li key={item}>{item}</li>
        );
      
        return (
            <div>
                <div className='row'>
                    <div className='row-input'>
                        {this.state.disabled?<input accept={this.state.acceptType} className={classes.input} id="raisedButtonFile" onChange={this.changePath} type="file" disabled/>:this.state.multiple?
                        <input accept={this.state.acceptType} className={classes.input} id="raisedButtonFile" onChange={this.changePath} type="file" multiple />:<input accept={this.state.acceptType} className={classes.input} id="raisedButtonFile" onChange={this.changePath} type="file"/>}
                
                        <label htmlFor="raisedButtonFile">
                            <Button variant="raised" component="span" color="default" className={classes.button}>
                            选择文件
                            <FileUpload className={classes.rightIcon} />
                            </Button>
                        </label>

                    </div>
                    <div>
                    {eachPath}
                    </div>
                </div>
                <StatusButton color="primary" variant="raised" className={classes.button} onHandler={this.upload} >开始上传</StatusButton>
                <Button variant="raised" color="default" className={classes.button} onClick={this.cancel}>取消</Button>
               
            </div>
            )
    }
}


export default withStyles(styles)(Upload);

