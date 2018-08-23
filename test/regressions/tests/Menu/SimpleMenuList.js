import React from 'react';
import Paper from '@6thquake/react-material/Paper';
import MenuList from '@6thquake/react-material/MenuList';
import MenuItem from '@6thquake/react-material/MenuItem';

export default function SimpleMenuList() {
  return (
    <Paper elevation={8}>
      <MenuList>
        <MenuItem>Profile</MenuItem>
        <MenuItem selected>My Account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </MenuList>
    </Paper>
  );
}
