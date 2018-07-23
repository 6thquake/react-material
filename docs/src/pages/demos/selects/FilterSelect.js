import React, { Component } from 'react';
import { SyncSelect } from 'react-material/Select';
import InputLabel from 'react-material/InputLabel';
import { withStyles } from 'react-material/styles';
import FormControl from 'react-material/FormControl';
import MenuItem from 'react-material/MenuItem';
import ListItemText from 'react-material/ListItemText';
import ListItemIcon from 'react-material/ListItemIcon';
import StarBorder from '@material-ui/icons/StarBorder';
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
    value1: ['a', 'b'],
    value2: 'f',
    value3: ['1', '2'],
    value4: '3',
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

  selectCb(i) {
    console.log('biubiubiubiu', i);
  }
  filter(i) {
    console.log('text', i);
  }
  onClose() {
    console.log('paper closed');
  }
  render() {
    const { classes } = this.props;
    const { value1, value2, value3, value4, simpleArray, objectArray } = this.state;
    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="InputLabel1">single select of simple array</InputLabel>
          <SyncSelect
            value={value4}
            options={simpleArray}
            htmlFor={'InputLabel1'}
            pageSize={5}
            placeholder="select one or more"
            onClose={this.onClose.bind(this)}
            onChange={this.selectCb.bind(this)}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="InputLabel111">multiple select of object array</InputLabel>
          <SyncSelect
            value={value4}
            pageSize={5}
            htmlFor={'InputLabel111'}
            placeholder="select one or more"
            onClose={this.onClose.bind(this)}
            onChange={this.selectCb.bind(this)}
          >
            {simpleArray.map(item => (
              <MenuItem key={item} value={item}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary={item} />
              </MenuItem>
            ))}
          </SyncSelect>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="InputLabel2">multiple select of simple array</InputLabel>
          <SyncSelect
            multiple
            value={value3}
            options={simpleArray}
            pageSize={5}
            htmlFor={'InputLabel2'}
            onClose={this.onClose.bind(this)}
            placeholder="select one or more"
            onChange={this.selectCb.bind(this)}
          />
        </FormControl>
        <br />
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="InputLabel3">multiple select of object array</InputLabel>
          <SyncSelect
            multiple
            value={value1}
            options={objectArray}
            pageSize={5}
            htmlFor={'InputLabel3'}
            keyvalue={{
              key: 'label',
              value: 'value',
            }}
            placeholder="select one or more"
            onChange={this.selectCb.bind(this)}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="InputLabel1211">multiple select of object array</InputLabel>
          <SyncSelect
            multiple
            value={value1}
            pageSize={5}
            htmlFor={'InputLabel1211'}
            placeholder="select one or more"
            keyvalue={{
              key: 'label',
              value: 'value',
            }}
            onClose={this.onClose.bind(this)}
            onChange={this.selectCb.bind(this)}
          >
            {objectArray.map(item => (
              <MenuItem key={item.label} value={item.value}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </MenuItem>
            ))}
          </SyncSelect>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="InputLabel3">single select of object array</InputLabel>
          <SyncSelect
            value={value2}
            options={objectArray}
            pageSize={5}
            htmlFor={'InputLabel3'}
            keyvalue={{
              key: 'label',
              value: 'value',
            }}
            placeholder="select one or more"
            onChange={this.selectCb.bind(this)}
          />
        </FormControl>
      </div>
    );
  }
}
export default withStyles(styles)(App);
