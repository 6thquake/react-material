import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';
import Button,{StatusButton} from '../Button';
import classNames from 'classnames';
import { withStyles } from '../styles';
import FileUpload from '@material-ui/icons/FileUpload';
import Icon from '../Icon';

import Avatar from '../Avatar';
import Chip from '../Chip';
import Paper from '../Paper';
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
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        borderRadius: '5px',
    },
    chip: {
        margin: theme.spacing.unit,
    },
    wrap: {
        width: '140px',
        margin: '0 auto',
    },
    wrap2: {
        width: '140px',
        margin: '0 auto',
    },
});


class Upload extends Component{
    static propTypes = {
        acceptType : PropTypes.string,
        multiple : PropTypes.bool,
        disabled : PropTypes.bool,
    };

    static defaultProps = {
        acceptType : "*",
        multiple : true,
        disabled : false,
    };

    constructor(props){
        super(props);
        this.state = {
            path: [],
            data: [],
        }
    };

    handleDelete = item => () => {
        const path = [...this.state.path];
        const pathToDelete = path.indexOf(item);
        path.splice(pathToDelete, 1);
        this.setState({ path:path });

        const data = [...this.state.data];
        data.splice(pathToDelete, 1);
        this.setState({ data:data });
    };

    changePath=(e)=>{
        for(let i=0;i<e.target.files.length;i++){
            const file = e.target.files[i];
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
    upload = () =>{ 
        const data = this.state.data;
        const form = new FormData();
        form.append('file', data);
        return this.props.actionFunc(form);
    }
    componentDidMount(){
      if(this.props.disabled){
            this.selectInput.setAttribute("disabled","disabled")
        }else if(this.props.multiple){
            this.selectInput.setAttribute("multiple","multiple")
        }
    }


    render(){
        const classes = this.props.classes;
        return (
            <div>
                <div className={classes.wrap}>
                    <input accept={this.props.acceptType} ref={input=>this.selectInput=input} className={classes.input} id="raisedButtonFile" onChange={this.changePath} type="file" />
                    <label for="raisedButtonFile">
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
                <div className={classes.wrap2}>
                    <StatusButton color="primary" variant="raised" className={classes.button} onHandler={this.upload} >开始上传</StatusButton>
                </div>
            </div>
            )
    }
}


export default withStyles(styles, { name: 'RMUpload' })(Upload);

