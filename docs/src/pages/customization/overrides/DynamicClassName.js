import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@6thquake/react-material/styles';
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
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
  },
};

class DynamicClassName extends React.Component {
  state = {
    color: 'default',
  };

  handleChange = event => {
    this.setState({ color: event.target.checked ? 'blue' : 'default' });
  };

  render() {
    const { classes } = this.props;
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
          className={classNames(classes.button, {
            [classes.buttonBlue]: this.state.color === 'blue',
          })}
        >
          {'Class name branch'}
        </Button>
      </React.Fragment>
    );
  }
}

DynamicClassName.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DynamicClassName);
