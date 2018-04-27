import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import {ChevronRight,ChevronLeft,LastPage,FirstPage} from '@material-ui/icons';
//<RMTransfer></RMTransfer>
const styles = {};

class item extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }
  render() {
    return ();
  }
}
class Breadcrumb extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      leftChecked:[],
      rightChecked:[]
    };
  }
  render() {
    const {nameMap,currUrl,showIcon} =this.props;
    const pathSnippets = currUrl.split('/').filter(i => i);

    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>
          {breadcrumbNameMap[url]}
        </Link>
      </Breadcrumb.Item>
    );
  });

    return (
      <div>1234555555</div>
    );
  }
}


export default withStyles(styles)(Breadcrumb);