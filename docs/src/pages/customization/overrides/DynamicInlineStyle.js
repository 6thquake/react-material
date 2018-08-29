import React from 'react';
import Button from '@6thquake/react-material/Button';
import FormControlLabel from '@6thquake/react-material/FormControlLabel';
import Switch from '@6thquake/react-material/Switch';

const styles = {
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  buttonBlue: {
    background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .30)',
  },
};

class DynamicInlineStyle extends React.Component {
  state = {
    color: 'default',
  };

  handleChange = event => {
    this.setState({ color: event.target.checked ? 'blue' : 'default' });
  };

  render() {
    return (
      <React.Fragment>
        <FormControlLabel
          control={
            <Switch
              checked={this.state.color === 'blue'}
              onChange={this.handleChange}
              color="primary"
              value="dynamic-class-name"
            />
          }
          label="Blue"
        />
        <Button
          style={{
            ...styles.button,
            ...(this.state.color === 'blue' ? styles.buttonBlue : {}),
          }}
        >
          {'dynamic inline-style'}
        </Button>
      </React.Fragment>
    );
  }
}

export default DynamicInlineStyle;
