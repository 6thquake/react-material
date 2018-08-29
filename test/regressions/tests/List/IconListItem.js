import React from 'react';
import Icon from '@6thquake/react-material/Icon';
import ListItem from '@6thquake/react-material/ListItem';
import ListItemText from '@6thquake/react-material/ListItemText';
import ListItemIcon from '@6thquake/react-material/ListItemIcon';

export default function IconListItem() {
  return (
    <div style={{ backgroundColor: '#fff', width: 300 }}>
      <ListItem>
        <ListItemIcon>
          <Icon>phone</Icon>
        </ListItemIcon>
        <ListItemText primary="Icon" />
      </ListItem>
      <ListItem>
        <ListItemText inset primary="Inset" secondary="Secondary" />
      </ListItem>
      <ListItem dense>
        <ListItemIcon>
          <Icon>phone</Icon>
        </ListItemIcon>
        <ListItemText primary="Icon" />
      </ListItem>
      <ListItem dense>
        <ListItemText inset primary="Inset" secondary="Secondary" />
      </ListItem>
      <ListItem selected>
        <ListItemIcon>
          <Icon>phone</Icon>
        </ListItemIcon>
        <ListItemText primary="Icon" />
      </ListItem>
    </div>
  );
}
