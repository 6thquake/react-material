import React from 'react';
import FormLabel from '@6thquake/react-material/FormLabel';
import FormControl from '@6thquake/react-material/FormControl';
import FormControlLabel from '@6thquake/react-material/FormControlLabel';
import RadioGroup from '@6thquake/react-material/RadioGroup';
import Radio from '@6thquake/react-material/Radio';

export default function RadioGroupWithLabel() {
  return (
    <FormControl style={{ width: 100 }}>
      <FormLabel>Location</FormLabel>
      <RadioGroup value="home">
        <FormControlLabel value="home" control={<Radio />} label="Home" />
        <FormControlLabel value="work" control={<Radio />} label="Work" />
      </RadioGroup>
    </FormControl>
  );
}
