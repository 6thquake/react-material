import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import withStyles from '../styles/withStyles';
/**
 * @ignore - internal component.
 */
const styles = theme => ({
  root: {
    width: '100%',
  },
  input: {
    padding: '10px',
    minWidth: '200px',
  },
});
class AsyncSelectFilter extends Component {
  render() {
    const { text, placeholder, onChange, classes } = this.props;
    return (
      <TextField
        autoFocus
        value={text}
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
export default withStyles(styles, { name: 'RMAsyncSelectFilter' })(AsyncSelectFilter);
