/**
 * @ignore - do not document.
 */

import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import withStyles from '../styles/withStyles';

const styles = theme => ({
  root: {
    width: '100%',
  },
  input: {
    paddingLeft: '10px',
  },
});
class SelectFilter extends Component {
  componentDidMount() {
    // let _x = document.getElementById('menu-').getElementsByTagName('input')[0];
    // _x.addEventListener("click", function(e){
    //     e.stopPropagation();
    // });
  }

  render() {
    const { placeholder, onChange, classes } = this.props;
    return (
      <TextField
        autoFocus
        placeholder={placeholder}
        onChange={onChange}
        className={classes.root}
        inputProps={{
          className: classes.input,
        }}
      />
    );
  }
}
export default withStyles(styles, { name: 'RMSelectFilter' })(SelectFilter);
