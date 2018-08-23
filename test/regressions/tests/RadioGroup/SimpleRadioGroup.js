import React from 'react';
import FormControlLabel from '@6thquake/react-material/FormControlLabel';
import RadioGroup from '@6thquake/react-material/RadioGroup';
import Radio from '@6thquake/react-material/Radio';

export default function SimpleRadioGroup() {
  return (
    <div style={{ width: 100 }}>
      <RadioGroup value="home">
        <FormControlLabel value="home" control={<Radio />} label="Home" />
        <FormControlLabel value="work" control={<Radio />} label="Work" />
      </RadioGroup>
    </div>
  );
}
