import React from 'react';
import List from '@6thquake/react-material/List';
import ListItem from '@6thquake/react-material/ListItem';
import ListItemText from '@6thquake/react-material/ListItemText';
import ListItemSecondaryAction from '@6thquake/react-material/ListItemSecondaryAction';
import Checkbox from '@6thquake/react-material/Checkbox';
import IconButton from '@6thquake/react-material/IconButton';
import Icon from '@6thquake/react-material/Icon';

export default function PrimaryActionCheckboxListItem() {
  return (
    <div style={{ backgroundColor: '#fff', width: 300 }}>
      <List>
        <ListItem button>
          <Checkbox tabIndex={-1} disableRipple />
          <ListItemText primary="Primary" />
          <ListItemSecondaryAction>
            <IconButton>
              <Icon>comment</Icon>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem button dense>
          <Checkbox tabIndex={-1} disableRipple />
          <ListItemText primary="Primary" />
          <ListItemSecondaryAction>
            <IconButton>
              <Icon>comment</Icon>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem button selected>
          <Checkbox tabIndex={-1} disableRipple />
          <ListItemText primary="Primary" />
          <ListItemSecondaryAction>
            <IconButton>
              <Icon>comment</Icon>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </div>
  );
}
