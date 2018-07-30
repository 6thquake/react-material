import React, { Component } from 'react';
import Select from '@6thquake/react-material/Select';
import InputLabel from '@6thquake/react-material/InputLabel';
import { withStyles } from '@6thquake/react-material/styles';
import FormControl from '@6thquake/react-material/FormControl';
import MenuItem from '@6thquake/react-material/MenuItem';

const styles = theme => ({
  root: {
    flexGrow: 1,
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    maxWidth: 300,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class App extends Component {
  state = {
    value2: ['a', 'b'],
    value1: '3',
    simpleArray: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
    ],
    objectArray: [
      { label: 'Afghanistan', value: 'a' },
      { label: 'Aland Islands', value: 'b' },
      { label: 'Albania', value: 'c' },
      { label: 'Algeria', value: 'd' },
      { label: 'American Samoa', value: 'e' },
      { label: 'Andorra', value: 'f' },
      { label: 'Angola', value: 'g' },
      { label: 'Anguilla', value: 'h' },
      { label: 'Antarctica', value: 'i' },
      { label: 'Antigua and Barbuda', value: 'j' },
      { label: 'Argentina', value: 'k' },
      { label: 'Armenia', value: 'l' },
      { label: 'Aruba', value: 'm' },
      { label: 'Australia', value: 'n' },
      { label: 'Austria', value: 'o' },
      { label: 'Azerbaijan', value: 'p' },
      { label: 'Bahamas', value: 'q' },
      { label: 'Bahrain', value: 'r' },
      { label: 'Bangladesh', value: 's' },
      { label: 'Barbados', value: 't' },
      { label: 'Belarus', value: 'u' },
      { label: 'Belgium', value: 'v' },
      { label: 'Belize', value: 'w' },
      { label: 'Benin', value: 'x' },
      { label: 'Bermuda', value: 'y' },
      { label: 'Bhutan', value: 'z' },
      { label: 'Bolivia, Plurinational State of', value: 'ab' },
      { label: 'Bonaire, Sint Eustatius and Saba', value: 'ac' },
      { label: 'Bosnia and Herzegovina', value: 'ad' },
      { label: 'Botswana', value: 'ae' },
      { label: 'Bouvet Island', value: 'af' },
      { label: 'Brazil', value: 'ag' },
      { label: 'British Indian Ocean Territory', value: 'ah' },
      { label: 'Brunei Darussalam', value: 'ai' },
    ],
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  onClose = event => {
    console.log('paper closed');
  };
  render() {
    const { classes } = this.props;
    const { value1, value2, simpleArray, objectArray } = this.state;
    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="InputLabel111">multiple select of object array</InputLabel>
          <Select
            showFilter
            showPination
            value={value1}
            rowsPerPage={5}
            htmlFor={'InputLabel111'}
            placeholder="select one or more"
            onClose={this.onClose}
            onChange={this.handleChange('value1')}
          >
            {simpleArray.map((item, index) => (
              <MenuItem key={item.label} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="InputLabel1211">multiple select of object array</InputLabel>
          <Select
            multiple
            showFilter
            showPination
            value={value2}
            rowsPerPage={5}
            htmlFor={'InputLabel1211'}
            placeholder="select one or more"
            onClose={this.onClose}
            onChange={this.handleChange('value2')}
          >
            {objectArray.map((item, index) => (
              <MenuItem key={item.label} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  }
}
export default withStyles(styles)(App);
