import React from 'react';
import FormLabel from '@6thquake/react-material/FormLabel';
import FormControl from '@6thquake/react-material/FormControl';
import FormGroup from '@6thquake/react-material/FormGroup';
import FormControlLabel from '@6thquake/react-material/FormControlLabel';
import FormHelperText from '@6thquake/react-material/FormHelperText';
import Switch from '@6thquake/react-material/Switch';

class SwitchesGroup extends React.Component {
  state = {
    gilad: true,
    jason: false,
    antoine: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.gilad}
                onChange={this.handleChange('gilad')}
                value="gilad"
              />
            }
            label="Gilad Gray"
          />
          <FormControlLabel
            control={
              <Switch
                checked={this.state.jason}
                onChange={this.handleChange('jason')}
                value="jason"
              />
            }
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Switch
                checked={this.state.antoine}
                onChange={this.handleChange('antoine')}
                value="antoine"
              />
            }
            label="Antoine Llorca"
          />
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
    );
  }
}

export default SwitchesGroup;
