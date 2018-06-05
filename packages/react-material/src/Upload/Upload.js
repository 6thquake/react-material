import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';
import Button,{StatusButton} from 'react-material/Button';
import classNames from 'classnames';
import { withStyles } from 'react-material/styles';
import FileUpload from '@material-ui/icons/FileUpload';
import Icon from 'react-material/Icon';

import Avatar from 'react-material/Avatar';
import Chip from 'react-material/Chip';
import Paper from 'react-material/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';

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
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    chip: {
        margin: theme.spacing.unit,
    },
});


class Upload extends Component{
    constructor(props){
        super(props);
        this.state = {
            acceptType: props.acceptType,
            multiple: props.multiple,
            disabled: props.disabled,
            onHandler: props.onHandler,
            path: [],
            data: [],
        }
        this.status = false;
    try{
        if(!this.state.acceptType){
            this.state.acceptType = "*";
        }
        if(Boolean(this.state.multiple)){
            this.state.multiple=true;  //可多选
        }else{
            this.state.multiple=false;  //默认为false ,不可多选
        }
        if (Boolean(this.state.disabled)) {
            this.state.disabled = true;// 禁用
        } else {
            this.state.disabled = false;
        }

    }catch (err) {
            console.log(err);
        }

    }

    handleDelete = item => () => {
        const path = [...this.state.path];
        const pathToDelete = path.indexOf(item);
        path.splice(pathToDelete, 1);
        this.setState({ path });

        const data = [...this.state.data];
        data.splice(pathToDelete, 1);
        this.setState({ data });
    };

    changePath=(e)=>{
        for(let i=0;i<e.target.files.length;i++){
            const file = e.target.files[i];
            if(!file){
                return;
            }
            if(this.state.path.indexOf(file.name)!== -1){
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
        const form = new FormData();
        form.append('file', data);
        //console.log(data);
        return this.props.actionFunc(form);
        /*let _promise = new Promise(function(resolve, reject){
            fetch(url,{
            method: 'POST',  
            body: form  
            }).then(function(res){
                resolve('success');
            },function(err){
                reject('error');
            })
        });
        return _promise;*/
    }
    componentDidMount(){
      if(this.state.disabled){
            this.selectInput.setAttribute("disabled","disabled")
        }else if(this.state.multiple){
            this.selectInput.setAttribute("multiple","multiple")
        }
    }


    render(){
        const classes = this.props.classes;
        return (
            <div>
                <div className='row'>
                    <div className='row-input'>
                        <input accept={this.state.acceptType} ref={input=>this.selectInput=input} className={classes.input} id="raisedButtonFile" onChange={this.changePath} type="file" />
                        
                        <label htmlFor="raisedButtonFile">
                            <Button variant="raised" component="span" color="default" className={classes.button}>
                            选择文件
                            <FileUpload className={classes.rightIcon} />
                            </Button>
                        </label>
                    </div>
                    <Paper className={classes.root}>
                        {this.state.path.map(item => {
                          let avatar = null;
                        return (
                        <Chip
                        key={item}
                        avatar={avatar}
                        label={item}
                        onDelete={this.handleDelete(item)}
                        className={classes.chip}
                        />
                        );
                        })}
                    </Paper>
                </div>
                <StatusButton color="primary" variant="raised" className={classes.button} onHandler={this.upload} >开始上传</StatusButton>
            </div>
            )
    }
}


export default withStyles(styles)(Upload);

