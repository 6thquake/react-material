import React from 'react';
import Avatar from '@6thquake/react-material/Avatar';
import Icon from '@6thquake/react-material/Icon';
import List from '@6thquake/react-material/List';
import ListItem from '@6thquake/react-material/ListItem';
import ListItemText from '@6thquake/react-material/ListItemText';

export default function AvatarListItem() {
  return (
    <div style={{ backgroundColor: '#fff', width: 300 }}>
      <ListItem>
        <Avatar>
          <Icon>folder</Icon>
        </Avatar>
        <ListItemText primary="Avatar" />
      </ListItem>
      <ListItem>
        <Avatar>
          <Icon>folder</Icon>
        </Avatar>
        <ListItemText primary="Avatar" secondary="Secondary" />
      </ListItem>
      <List dense>
        <ListItem>
          <Avatar>
            <Icon>folder</Icon>
          </Avatar>
          <ListItemText primary="Avatar" />
        </ListItem>
        <ListItem>
          <Avatar>
            <Icon>folder</Icon>
          </Avatar>
          <ListItemText primary="Avatar" secondary="Secondary" />
        </ListItem>
      </List>
    </div>
  );
}
