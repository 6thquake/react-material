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
import { CompatibleGrid as Grid } from '../Grid';
const styles = theme => ({
    choose:{
        display: 'inline-block',
    },
    input: {
        display: 'none',
    },
    array: {
        display: 'inline-block',
    },
    chip: {
        margin: theme.spacing.unit / 2,
    },
});

class UploadBasic extends Component{
    static defaultProps = {
        acceptType : "*",
        multiple : true,
        disabled : false
    }
    constructor(props){
        super(props);
        this.state = {
            path: [],
            data: [],
        }
    }

    handleDelete = item  => {
        const path = [...this.state.path];
        const pathToDelete = path.indexOf(item);
        path.splice(pathToDelete, 1);
        this.setState({ path:path });

        const data = [...this.state.data];
        this.props.deleteFile(data[pathToDelete])
        data.splice(pathToDelete, 1);
        this.setState({ data:data });
    };

    changePath=(e)=>{
        for(let i=0;i<e.target.files.length;i++){
            let file = e.target.files[i];
            if(!file){
                return;
            }
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
      if(this.props.disabled){
            this.selectInput.setAttribute("disabled","disabled")
        }else if(this.props.multiple){
            this.selectInput.setAttribute("multiple","multiple")
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.path!== this.state.path){
            this.props.actionFunc(this.state.data)
        }
    }
    render(){
        const classes = this.props.classes;
        return (
            <div>
                <div className={classes.choose}>
                    <input accept={this.props.acceptType} ref={input=>this.selectInput=input} className={classes.input} id="raisedButtonFileBasic" onChange={this.changePath.bind(this)} type="file" />
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
                        label={item}
                        onDelete={this.handleDelete.bind(this,item)}
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

