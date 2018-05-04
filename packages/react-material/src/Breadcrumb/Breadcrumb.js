import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import {ChevronRight,ChevronLeft,LastPage,FirstPage} from '@material-ui/icons';
//<RMTransfer></RMTransfer>
const styles = {
  root:{
    color:'rgba(0,0,0,.45)',
    '@global a':{
      textDecoration:'none',
      color:'rgba(0,0,0,.45)',
      '&:hover':{
        color:'rgba(0,0,0,.65)'
      }
    }
  },
  item:{
    display:'inline-block',
    '@global svg':{
      verticalAlign: 'middle',
      width: '0.6em'
    }
  },
  icon:{
    padding:'0 3px'
  },
  separator:{
    padding:'0 0.5em',
    fontStyle: 'normal'
  }
};

class Item extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }
  render() {
    const {url,msg,noLink,showIcon,classes} = this.props;
    let _jsx = '';
    if(!noLink){
      _jsx=(<span ><a href={url}> {showIcon?<i className={classes.icon}>{msg.icon}</i>:null}
        <font>{msg.name}</font>
        </a></span>);
    }else{  
      _jsx=(<span><i className={classes.icon}>{msg.icon}</i><font>{msg.name}</font></span>);
    }
    return _jsx;
  }
};
class Breadcrumb extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {nameMap,currUrl,showIcon,separator,classes} =this.props;

    const _separator = separator || '\/';
    let pathSnippets = currUrl.split('/').filter(i => i);
    pathSnippets.unshift('');

    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
      const url = `${pathSnippets.slice(0, index + 1).join('/') || '/'}`;
      if(!nameMap[url]){
        return null;
      }
      return (
      <div className={classes.item}>
        <Item key={url} url={url} msg={nameMap[url]} noLink={pathSnippets.length==index+1} showIcon={showIcon} classes={classes}>
        </Item>
        <i className={classes.separator}>{pathSnippets.length!=index+1?_separator:''}</i>
      </div>

      );
  });

    return (
      <div className={classes.root}>{extraBreadcrumbItems}</div>
    );
  }
}


export default withStyles(styles)(Breadcrumb);