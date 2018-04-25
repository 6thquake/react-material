// @flow

import React from 'react';
import List, { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';

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
      </List>
    </div>
  );
}
