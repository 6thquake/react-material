import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '../styles';
import Icon from '../Icon';

import Avatar from '../Avatar';
import Chip from '../Chip';
import Paper from '../Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import { CompatibleGrid as Grid } from 'react-material/Grid';
const styles = theme => ({
    choose:{
        display: 'inline-block',
    },
    input: {
        display: 'none',
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    array: {
        display: 'inline-block',
    },
    chip: {
        margin: theme.spacing.unit / 2,
    },
});

class UploadBasic extends Component{
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

    handleDelete = item => () => {
        const path = [...this.state.path];
        const pathToDelete = path.indexOf(item);
        path.splice(pathToDelete, 1);
        this.setState({ path });

        const data = [...this.state.data];
        this.props.deleteFile(data[pathToDelete])
        data.splice(pathToDelete, 1);
        this.setState({ data });
    };

    changePath=(e)=>{
        for(let i=0;i<e.target.files.length+1;i++){
            let file = e.target.files[i];
            if(!file){
                return;
            }
            // console.log('this.state.path')
            // console.log(this.state.path)
            if(this.state.path.indexOf(file.name) === -1){
                let src,type = file.type;
                src = URL.createObjectURL(file); 
                this.setState(preState => ({
                path: [...preState.path,file.name],
                data: [...preState.data,file]
                }))
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
        if(prevProps.path!== prevState.path){
            this.props.actionFunc(this.state.data)
        }
    }
    render(){
        const classes = this.props.classes;
        return (
            <div>
                <div className={classes.choose}>
                    <input accept={this.state.acceptType} ref={input=>this.selectInput=input} className={classes.input} id="raisedButtonFileBasic" onChange={this.changePath} type="file" />
                    <label for="raisedButtonFileBasic">
                        {this.props.children}
                    </label>                    
                </div>
                <div className={classes.array}>
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
                </div>
            </div>
            )
    }
}


export default withStyles(styles)(UploadBasic);

