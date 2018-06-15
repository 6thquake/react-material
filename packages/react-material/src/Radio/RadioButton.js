import React, { Component } from 'react';
import { withStyles } from '../styles';
import PropTypes from 'prop-types';
import Group from '../Button/Group';
const styles = theme => ({});

class RadioButton extends Component {
  getChildContext() {
    return {
      resetActive:()=>{
        this.setState({});
      }
    }
  }

  render() {
    return (
      <Group {...this.props}/>
    )
  }
}
RadioButton.childContextTypes = {
  resetActive: PropTypes.func
};


export default withStyles(styles)(RadioButton);
