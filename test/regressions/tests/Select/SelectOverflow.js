import React from 'react';
import MenuItem from '@6thquake/react-material/MenuItem';
import Select from '@6thquake/react-material/Select';

function SelectOverflow() {
  return (
    <Select value={10} style={{ maxWidth: 100 }}>
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value={10}>Tennnnnnn</MenuItem>
    </Select>
  );
}

export default SelectOverflow;
