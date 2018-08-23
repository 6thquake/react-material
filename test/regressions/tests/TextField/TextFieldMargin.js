import React from 'react';
import TextField from '@6thquake/react-material/TextField';

export default function TextFieldMargin() {
  return (
    <div style={{ display: 'flex' }}>
      <TextField label="Dense" defaultValue="Default Value" margin="dense" />
      <TextField style={{ position: 'absolute ' }} label="Dense" margin="dense" />
    </div>
  );
}
