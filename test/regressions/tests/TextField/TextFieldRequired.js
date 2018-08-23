import React from 'react';
import TextField from '@6thquake/react-material/TextField';

export default function TextFieldRequired() {
  return (
    <div>
      <TextField required label="Foo" />
      <TextField required label="Foo" value="Hello world" />
    </div>
  );
}
