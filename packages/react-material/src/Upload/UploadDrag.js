import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '../styles';
import Icon from '../Icon';

import Avatar from '../Avatar';
import Chip from '../Chip';
import Paper from '../Paper';
import CancelIcon from '@material-ui/icons/Cancel';
import { CompatibleGrid as Grid } from '../Grid';

import { DragDropContext, DropTargetMonitor } from 'react-dnd'
import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend'
import TargetBox from './TargetBox'

const styles = theme => ({
    input: {
        display: 'none',
    },
    array: {
        display: 'inline-block',
    },
    chip: {
        height:'110px',
        //minWidth:'80px',
        //margin: theme.spacing.unit*2,
        margin: theme.spacing.unit/2,
        padding: '0',
    },
    array: {
        display: 'inline-block',
    },
    clickToUpload: {
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
    },  
    media: {
        //position:'relative',
        //left:'10px',
        height:'100px',
        width:'100px',
        //overflow:'hidden',
        borderRadius:'10px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',

    },
    textPreview: {
        height:'30px',
        width:'30px',
        border:'1px solid red',
    },
    icon: {
        position:'relative',
        top:'-40px'
    }
});

class UploadDrag extends Component{
    constructor(props){
        super(props);
        this.acceptType = this.props.acceptType;
        this.multiple = this.props.multiple;
        this.disabled = this.props.disabled;
        this.state = {
            path: [],
            data: [],
        }
    try{
        if(!this.acceptType){
            this.acceptType = "*";
        }
        if(Boolean(this.multiple)){
            this.multiple=true;  //可多选
        }else{
            this.multiple=false;  //默认为false ,不可多选
        }
        if (Boolean(this.disabled)) {
            this.disabled = true;// 禁用
        } else {
            this.disabled = false;
        }

    }catch (err) {
            console.log(err);
        }

    }

    handleDelete = (e,item) => {
        const path = [...this.state.path];
        const pathToDelete = path.indexOf(item);
        path.splice(pathToDelete, 1);
        this.setState({ path });

        const data = [...this.state.data];
        this.props.deleteFile(data[pathToDelete])
        data.splice(pathToDelete, 1);
        this.setState({ data });
        e.preventDefault();
    }


    changePath=(e)=>{
        for(let i=0;i<e.target.files.length;i++){
            let file = e.target.files[i];
            if(!file){
                return;
            }
            if(this.state.path.indexOf(file.name) === -1){
                this.setState(preState => ({
                data: [...preState.data,file],
                }))
                if (/^image\/\S+$/.test(file.type)) {
                    let src = URL.createObjectURL(file); 
                    this.setState(preState =>({ 
                        path: [...preState.path, src] 
                    }))
                }else{
                    this.setState(preState =>({ 
                        path: [...preState.path, file.name] 
                    }))
                }
            }
        }
    }
    handleFileDrop(item, monitor) {
        if (monitor) {
            for(let i=0; i < monitor.getItem().files.length; i++){
                let file = monitor.getItem().files[i];
                if(this.state.path.indexOf(file.name) === -1){
                    this.setState(preState => ({
                    data: [...preState.data,file],
                    }))
                    if (/^image\/\S+$/.test(file.type)) {
                        let src = URL.createObjectURL(file); 
                        this.setState(preState =>({ 
                            path: [...preState.path, src] 
                        }))
                    }else{
                        this.setState(preState =>({ 
                            path: [...preState.path, file.name] 
                        }))
                    }
                }
            }
        }
    }
    componentDidMount(){
      if(this.disabled){
            this.selectInput.setAttribute("disabled","disabled")
        }else if(this.multiple){
            this.selectInput.setAttribute("multiple","multiple")
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.data!== this.state.data){
            this.props.actionFunc(this.state.data)
        }
    }
    render(){
        const classes = this.props.classes;
        const path = this.state.path;
        const { FILE } = NativeTypes
        return (
            <div>
                <TargetBox accepts={[FILE]} onDrop={this.handleFileDrop.bind(this)} >
                    <input accept={this.state.acceptType} ref={input=>this.selectInput=input} className={classes.input} id="raisedButtonFileDrag" onChange={this.changePath} type="file" />
                    <label for="raisedButtonFileDrag">
                        <div className={classes.clickToUpload}>
                            <div className={classes.array}>
                                {this.state.path.map(item => {
                                    let preview = /blob/.test(item)=== true ? <div className={classes.media} style={{backgroundImage:"url("+item+")"}}></div> : item
                                return (
                                    <Chip
                                    key={item}
                                    label={preview}  
                                    onDelete={(e) => this.handleDelete(e,item)}
                                    className={classes.chip}
                                    deleteIcon={<CancelIcon className={classes.icon}/>}
                                    />
                                );
                                })}
                            </div>
                        </div>
                    </label>  
                </TargetBox>                         
            </div>
            )
    }
}

let c = DragDropContext(HTML5Backend)(UploadDrag)
export default withStyles(styles)(c);

