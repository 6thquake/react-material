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

function handle() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      Math.random() > .5 ? reject('err') : resolve('ok');
    }, 1000);
  }).then(function (r) {
    return true;
  });
}

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
            path:[],
            data:[],
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

        console.log(data)
        const url = " ";//服务器上传地址  
        const form = new FormData();
        form.append('file', data);  
        fetch(url,{
            method: 'POST',  
            body: form  
        }).then(res=>{
        console.log(res)
        })
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
            <li>{item}</li>
        );
        return (
            <div>
                <input accept="*" className={classes.input} id="raised-button-file" multiple type="file"/>
                <label htmlFor="raised-button-file">
                    <Button variant="raised" component="span" className={classes.button}>
                    选择文件
                    </Button>
                </label>
                <StatusButton color="primary" variant="raised" onHandler={handle} className={classes.button}>开始上传</StatusButton>
                <Button variant="raised" color="error" className={classes.button}>取消上传</Button>

                
                <div className='row'>
                    <div className='row-input'>

                        <input type="file" accept="*"  multiple onChange={this.changePath}/>


                        

                    
                        <input accept="*" className={classes.input} id="raised-button-file" onChange={this.changePath} multiple type="file"/>
                       
                        <label htmlFor="raised-button-file">
                            <Button variant="raised" component="span"   className={classes.button}>
                            选择文件
                            </Button>
                        </label>

                    </div>
                    <div>
                    {eachPath}
                    </div>
                </div>
                <button className='primary upload' onClick={this.upload}>开始上传</button>
                <button className='primary cancel' onClick={this.cancel}>取消</button>
            </div>
            )
    }
}


export default withStyles(styles)(Upload);

