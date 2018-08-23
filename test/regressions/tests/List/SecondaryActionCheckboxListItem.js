import React from 'react';
import List from '@6thquake/react-material/List';
import ListItem from '@6thquake/react-material/ListItem';
import ListItemText from '@6thquake/react-material/ListItemText';
import ListItemSecondaryAction from '@6thquake/react-material/ListItemSecondaryAction';
import Checkbox from '@6thquake/react-material/Checkbox';

export default function SecondaryActionCheckboxListItem() {
  return (
    <div style={{ backgroundColor: '#fff', width: 300 }}>
      <List>
        <ListItem button>
          <ListItemText primary="Primary" />
          <ListItemSecondaryAction>
            <Checkbox />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem button dense>
          <ListItemText primary="Primary" />
          <ListItemSecondaryAction>
            <Checkbox />
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </div>
  );
}
