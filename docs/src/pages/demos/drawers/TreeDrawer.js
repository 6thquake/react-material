import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import data from './data';

const styles = theme => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});


function getSideList(data) {
  if (!data) return null;
  return <List
    component="nav">
    {data.map((list, index) => (
    <ListItem button key={index}>
      <ListItemText inset primary={list.name}/>
      {list.children}&&(<Collapse in={true} timeout="auto" key={Math.random()} unmountOnExit>
      {getSideList(list.children)}
    </Collapse>)
    </ListItem>
    ))}
  </List>;

  return <List
    component="nav"
  >
    <ListItem button>
      <ListItemText inset primary="Sent mail"/>
    </ListItem>
    <ListItem button>
      <ListItemText inset primary="Drafts"/>
    </ListItem>
    <Collapse in={this.state.open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItem button className={classes.nested}>
          <ListItemIcon>
            <StarBorder/>
          </ListItemIcon>
          <ListItemText inset primary="Starred"/>
        </ListItem>
        <ListItem button className={classes.nested}>
          <ListItemIcon>
            <StarBorder/>
          </ListItemIcon>
          <ListItemText inset primary="Starred"/>
        </ListItem>
        <ListItem button className={classes.nested}>
          <ListItemIcon>
            <StarBorder/>
          </ListItemIcon>
          <ListItemText inset primary="Starred"/>
        </ListItem>
        <ListItem button className={classes.nested}>
          <ListItemIcon>
            <StarBorder/>
          </ListItemIcon>
          <ListItemText inset primary="Starred"/>
        </ListItem>
      </List>
    </Collapse>
  </List>
}

class TemporaryDrawer extends React.Component {
  handleClick = () => {
    this.setState({open: !this.state.open});
  };
  state = {
    open: false,
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const {classes} = this.props;

    const sideList = (
      <div className={classes.list}>
        <List
          component="nav"
        >
          <ListItem button>
            <ListItemIcon>
              <SendIcon/>
            </ListItemIcon>
            <ListItemText inset primary="Sent mail"/>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon/>
            </ListItemIcon>
            <ListItemText inset primary="Drafts"/>
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder/>
                </ListItemIcon>
                <ListItemText inset primary="Starred"/>
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder/>
                </ListItemIcon>
                <ListItemText inset primary="Starred"/>
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder/>
                </ListItemIcon>
                <ListItemText inset primary="Starred"/>
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder/>
                </ListItemIcon>
                <ListItemText inset primary="Starred"/>
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={this.handleClick}>
            <ListItemIcon>
              <InboxIcon/>
            </ListItemIcon>
            <ListItemText inset primary="Inbox"/>
            {this.state.open ? <ExpandLess/> : <ExpandMore/>}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder/>
                </ListItemIcon>
                <ListItemText inset primary="Starred"/>
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder/>
                </ListItemIcon>
                <ListItemText inset primary="Starred"/>
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder/>
                </ListItemIcon>
                <ListItemText inset primary="Starred"/>
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder/>
                </ListItemIcon>
                <ListItemText inset primary="Starred"/>
              </ListItem>
            </List>
          </Collapse>
        </List>
      </div>
    );

    return (
      <div>
        <Button onClick={this.toggleDrawer('left', true)}>Open Left</Button>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', true)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {getSideList(data)}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);



