import React, { Component } from 'react';
import { AsyncSelect } from '@6thquake/react-material/Select';
import InputLabel from '@6thquake/react-material/InputLabel';
import { withStyles } from '@6thquake/react-material/styles';
import FormControl from '@6thquake/react-material/FormControl';
import StarBorder from '@material-ui/icons/StarBorder';
import MenuItem from '@6thquake/react-material/MenuItem';
import ListItemText from '@6thquake/react-material/ListItemText';
import ListItemIcon from '@6thquake/react-material/ListItemIcon';
import Typography from '@6thquake/react-material/Typography';
import Chip from '@6thquake/react-material/Chip';
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
    value: [
      {
        label: 'Afghanistan',
        value: { name: 1, age: 1 },
      },
      {
        label: 'Aland Islands',
        value: { name: 1, age: 2 },
      },
    ],
    value1: {
      label: 'Afghanistan',
      value: { name: 1, age: 1 },
    },
    value2: 2,
    value3: [1, 2, 3, 4],
    value4: [{ label: 'Afghanistan', value: 'a' }, { label: 'Aland Islands', value: 'b' }],
    value5: 'a',
    value6: ['a', 'b'],
    array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    optionsimpleobject: [
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
    option: [
      {
        label: 'Afghanistan',
        value: { name: 1, age: 1 },
        equals: function(data) {
          return this.value.age === data.value.age;
        },
      },
      {
        label: 'Aland Islands',
        value: { name: 1, age: 2 },
        equals: function(data) {
          return this.value.age === data.value.age;
        },
      },
      {
        label: 'Albania',
        value: { name: 1, age: 3 },
        equals: function(data) {
          return this.value.age === data.value.age;
        },
      },
      {
        label: 'Algeria',
        value: { name: 1, age: 4 },
        equals: function(data) {
          return this.value.age === data.value.age;
        },
      },
      {
        label: 'American Samoa',
        value: { name: 1, age: 5 },
        equals: function(data) {
          return this.value.age === data.value.age;
        },
      },
      {
        label: 'Andorra',
        value: { name: 1, age: 6 },
        equals: function(data) {
          return this.value.age === data.value.age;
        },
      },
      {
        label: 'Angola',
        value: { name: 1, age: 7 },
        equals: function(data) {
          return this.value.age === data.value.age;
        },
      },
      {
        label: 'Anguilla',
        value: { name: 1, age: 8 },
        equals: function(data) {
          return this.value.age === data.value.age;
        },
      },
      {
        label: 'Antarctica',
        value: { name: 1, age: 9 },
        equals: function(data) {
          return this.value.age === data.value.age;
        },
      },
      {
        label: 'Antigua and Barbuda',
        value: { name: 1, age: 10 },
        equals: function(data) {
          return this.value.age === data.value.age;
        },
      },
      {
        label: 'Argentina',
        value: { name: 1, age: 11 },
        equals: function(data) {
          return this.value.age === data.value.age;
        },
      },
      {
        label: 'Armenia',
        value: { name: 1, age: 12 },
        equals: function(data) {
          return this.value.age === data.value.age;
        },
      },
      {
        label: 'Aruba',
        value: { name: 1, age: 13 },
        equals: function(data) {
          return this.value.age === data.value.age;
        },
      },
      {
        label: 'Australia',
        value: { name: 1, age: 14 },
        equals: function(data) {
          return this.value.age === data.value.age;
        },
      },
      {
        label: 'Austria',
        value: { name: 1, age: 15 },
        equals: function(data) {
          return this.value.age === data.value.age;
        },
      },
      {
        label: 'Azerbaijan',
        value: { name: 1, age: 16 },
        equals: function(data) {
          return this.value.age === data.value.age;
        },
      },
      {
        label: 'Bahamas',
        value: { name: 1, age: 17 },
        equals: function(data) {
          return this.value.age === data.value.age;
        },
      },
      {
        label: 'Bahrain',
        value: { name: 1, age: 18 },
        equals: function(data) {
          return this.value.age === data.value.age;
        },
      },
      {
        label: 'Bangladesh',
        value: { name: 1, age: 19 },
        equals: function(data) {
          return this.value.age === data.value.age;
        },
      },
      {
        label: 'Barbados',
        value: { name: 1, age: 20 },
        equals: function(data) {
          return this.value.age === data.value.age;
        },
      },
      {
        label: 'Belarus',
        value: { name: 1, age: 21 },
        equals: function(data) {
          return this.value.age === data.value.age;
        },
      },
      {
        label: 'Belgium',
        value: { name: 1, age: 22 },
        equals: function(data) {
          return this.value.age === data.value.age;
        },
      },
      {
        label: 'Belize',
        value: { name: 1, age: 23 },
        equals: function(data) {
          return this.value.age === data.value.age;
        },
      },
      {
        label: 'Benin',
        value: { name: 1, age: 24 },
        equals: function(data) {
          return this.value.age === data.value.age;
        },
      },
      {
        label: 'Bermuda',
        value: { name: 1, age: 25 },
        equals: function(data) {
          return this.value.age === data.value.age;
        },
      },
      {
        label: 'Bhutan',
        value: { name: 1, age: 26 },
        equals: function(data) {
          return this.value.age === data.value.age;
        },
      },
      {
        label: 'Bolivia, Plurinational State of',
        value: { name: 1, age: 27 },
        equals: function(data) {
          return this.value.age === data.value.age;
        },
      },
      {
        label: 'Bonaire, Sint Eustatius and Saba',
        value: { name: 1, age: 28 },
        equals: function(data) {
          return this.value.age === data.value.age;
        },
      },
      {
        label: 'Bosnia and Herzegovina',
        value: { name: 1, age: 29 },
        equals: function(data) {
          return this.value.age === data.value.age;
        },
      },
      {
        label: 'Botswana',
        value: { name: 1, age: 30 },
        equals: function(data) {
          return this.value.age === data.value.age;
        },
      },
      {
        label: 'Bouvet Island',
        value: { name: 1, age: 31 },
        equals: function(data) {
          return this.value.age === data.value.age;
        },
      },
      {
        label: 'Brazil',
        value: { name: 1, age: 32 },
        equals: function(data) {
          return this.value.age === data.value.age;
        },
      },
      {
        label: 'British Indian Ocean Territory',
        value: { name: 1, age: 33 },
        equals: function(data) {
          return this.value.age === data.value.age;
        },
      },
      {
        label: 'Brunei Darussalam',
        value: { name: 1, age: 34 },
        equals: function(data) {
          return this.value.age === data.value.age;
        },
      },
    ],
    paginationProps: {
      rowsPerPage: 5,
      page: 0,
      count: 34,
    },
  };
  autoCb(i) {
    this.setState({
      paginationProps: {
        ...this.state.paginationProps,
        page: i,
      },
    });
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  filterChangeCb(i) {
    console.log('text', i);
  }
  onClose() {
    console.log('paper closed');
  }
  onOpen() {
    console.log('select open');
  }
  handleDelete(data) {
    console.log('data', data);
    let chipToDelete = null;
    let chipData = [...this.state.value4];
    for (let i = 0; i < chipData.length; i++) {
      if (chipData[i]['value'] === data) {
        chipToDelete = i;
        break;
      }
    }
    chipData.splice(chipToDelete, 1);
    this.setState({ value4: chipData }, () => console.log('chipToDelete', chipToDelete, chipData));
  }
  render() {
    const { classes } = this.props;
    const {
      option,
      optionsimpleobject,
      value,
      value1,
      value2,
      array,
      value3,
      value4,
      value5,
      value6,
    } = this.state;
    const { page, rowsPerPage } = this.state.paginationProps;
    const count = option.length;
    return (
      <div className={classes.root}>
        <Typography variant="subheading" gutterBottom>
          Pass options via the children
        </Typography>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="">multiple select of object array</InputLabel>
          <AsyncSelect
            multiple
            value={value}
            onOpen={this.onOpen.bind(this)}
            paginationProps={this.state.paginationProps}
            placeholder="select one or more"
            mapper={{
              label: 'label',
              value: 'value',
            }}
            onChangeFilter={this.filterChangeCb.bind(this)}
            onChange={this.handleChange('value')}
            onChangePage={this.autoCb.bind(this)}
            comparison={(select, option) => {
              return select.value.age === option.value.age;
            }}
            renderValue={selected => (
              <div>
                {selected.map((item, index) => (
                  <Chip
                    key={index}
                    onDelete={this.handleDelete.bind(this, item.value)}
                    label={item.label}
                  />
                ))}
              </div>
            )}
          >
            {option
              .slice(
                count === 0 ? count : page * rowsPerPage,
                (page + 1) * rowsPerPage > count ? count : (page + 1) * rowsPerPage,
              )
              .map((item, index) => (
                <MenuItem key={index} value={item}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary={item.label} />
                </MenuItem>
              ))}
          </AsyncSelect>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="">multiple select of simple array</InputLabel>
          <AsyncSelect
            multiple
            value={value3}
            onOpen={this.onOpen.bind(this)}
            paginationProps={this.state.paginationProps}
            placeholder="select one or more"
            onChangeFilter={this.filterChangeCb.bind(this)}
            onChange={this.handleChange('value3')}
            onChangePage={this.autoCb.bind(this)}
            renderValue={selected => (
              <div>
                {selected.map((item, index) => (
                  <Chip key={index} onDelete={this.handleDelete.bind(this, item)} label={item} />
                ))}
              </div>
            )}
          >
            {array
              .slice(
                count === 0 ? count : page * rowsPerPage,
                (page + 1) * rowsPerPage > count ? count : (page + 1) * rowsPerPage,
              )
              .map((item, index) => (
                <MenuItem key={index} value={item}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </MenuItem>
              ))}
          </AsyncSelect>
        </FormControl>
        <br />
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="">single select of object array</InputLabel>
          <AsyncSelect
            value={value1}
            onOpen={this.onOpen.bind(this)}
            comparison={(select, option) => {
              return select.value.age === option.value.age;
            }}
            paginationProps={this.state.paginationProps}
            placeholder="select one or more"
            onChangeFilter={this.filterChangeCb.bind(this)}
            onChange={this.handleChange('value1')}
            onChangePage={this.autoCb.bind(this)}
            renderValue={selected => selected.label}
          >
            {option
              .slice(
                count === 0 ? count : page * rowsPerPage,
                (page + 1) * rowsPerPage > count ? count : (page + 1) * rowsPerPage,
              )
              .map((item, index) => (
                <MenuItem key={index} value={item}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary={item.label} />
                </MenuItem>
              ))}
          </AsyncSelect>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="">single select of simple array</InputLabel>
          <AsyncSelect
            value={value2}
            onOpen={this.onOpen.bind(this)}
            paginationProps={this.state.paginationProps}
            placeholder="select one or more"
            onChangeFilter={this.filterChangeCb.bind(this)}
            onChange={this.handleChange('value2')}
            onChangePage={this.autoCb.bind(this)}
            renderValue={selected => selected}
          >
            {array
              .slice(
                count === 0 ? count : page * rowsPerPage,
                (page + 1) * rowsPerPage > count ? count : (page + 1) * rowsPerPage,
              )
              .map((item, index) => (
                <MenuItem key={index} value={item}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </MenuItem>
              ))}
          </AsyncSelect>
        </FormControl>
        <br /> <br /> <br />
        <Typography variant="subheading" gutterBottom>
          Pass options via the property of options
        </Typography>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="InputLabel3">multiple select of object array</InputLabel>
          <AsyncSelect
            multiple
            comparison={(select, option) => {
              return select.value.age === option.value.age;
            }}
            value={value}
            options={option.slice(
              count === 0 ? count : page * rowsPerPage,
              (page + 1) * rowsPerPage > count ? count : (page + 1) * rowsPerPage,
            )}
            htmlFor={'InputLabel3'}
            mapper={{
              label: 'label',
              value: 'value',
            }}
            onOpen={this.onOpen.bind(this)}
            paginationProps={this.state.paginationProps}
            placeholder="select one or more"
            onChange={this.handleChange('value')}
            onChangePage={this.autoCb.bind(this)}
            onChangeFilter={this.filterChangeCb.bind(this)}
            renderValue={selected => (
              <div>
                {selected.map((item, index) => (
                  <Chip
                    key={index}
                    onDelete={this.handleDelete.bind(this, item.value)}
                    label={item.label}
                  />
                ))}
              </div>
            )}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="InputLabel3">multiple select of simple object array</InputLabel>
          <AsyncSelect
            multiple
            value={value4}
            comparison={(select, option) => {
              return select.value === option.value;
            }}
            options={optionsimpleobject.slice(
              count === 0 ? count : page * rowsPerPage,
              (page + 1) * rowsPerPage > count ? count : (page + 1) * rowsPerPage,
            )}
            htmlFor={'InputLabel3'}
            mapper={{
              label: (option, index) => (
                <div>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary={option.label} />
                </div>
              ),
              value: 'value',
            }}
            renderValue={selected => (
              <div>
                {selected.map((item, index) => (
                  <Chip
                    key={index}
                    onDelete={this.handleDelete.bind(this, item.value)}
                    label={item.label}
                  />
                ))}
              </div>
            )}
            onOpen={this.onOpen.bind(this)}
            paginationProps={this.state.paginationProps}
            placeholder="select one or more"
            onChange={this.handleChange('value4')}
            onChangePage={this.autoCb.bind(this)}
            onChangeFilter={this.filterChangeCb.bind(this)}
          />
        </FormControl>
        <br /> <br /> <br />
        <Typography variant="subheading" gutterBottom>
          Don't keep selects,when can't find them in options
        </Typography>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="InputLabel3">multiple select of simple object array</InputLabel>
          <AsyncSelect
            multiple
            value={value6}
            htmlFor={'InputLabel3'}
            onOpen={this.onOpen.bind(this)}
            paginationProps={this.state.paginationProps}
            placeholder="请输入过滤值"
            onChange={this.handleChange('value6')}
            onChangePage={this.autoCb.bind(this)}
            onChangeFilter={this.filterChangeCb.bind(this)}
            renderValue={selected => {
              let arr = [];
              optionsimpleobject
                .slice(
                  count === 0 ? count : page * rowsPerPage,
                  (page + 1) * rowsPerPage > count ? count : (page + 1) * rowsPerPage,
                )
                .map((item, index) => {
                  selected.map(n => {
                    if (item.value === n) {
                      arr.push(item.label);
                    }
                  });
                });
              return (
                <div>
                  {arr.map((n, index) => (
                    <Chip key={index} onDelete={this.handleDelete.bind(this, n)} label={n} />
                  ))}
                </div>
              );
            }}
          >
            {optionsimpleobject
              .slice(
                count === 0 ? count : page * rowsPerPage,
                (page + 1) * rowsPerPage > count ? count : (page + 1) * rowsPerPage,
              )
              .map(item => (
                <MenuItem key={item.value} value={item.value}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary={item.label} />
                </MenuItem>
              ))}
          </AsyncSelect>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="InputLabel3">single select of simple object array</InputLabel>
          <AsyncSelect
            value={value5}
            htmlFor={'InputLabel3'}
            mapper={{
              label: 'label',
              value: 'value',
            }}
            onOpen={this.onOpen.bind(this)}
            paginationProps={this.state.paginationProps}
            placeholder="select one or more"
            onChange={this.handleChange('value5')}
            onChangePage={this.autoCb.bind(this)}
            onChangeFilter={this.filterChangeCb.bind(this)}
            renderValue={selected => {
              return optionsimpleobject
                .slice(
                  count === 0 ? count : page * rowsPerPage,
                  (page + 1) * rowsPerPage > count ? count : (page + 1) * rowsPerPage,
                )
                .map(item => {
                  if (item.value === selected) {
                    return item.label;
                  }
                });
            }}
          >
            {optionsimpleobject
              .slice(
                count === 0 ? count : page * rowsPerPage,
                (page + 1) * rowsPerPage > count ? count : (page + 1) * rowsPerPage,
              )
              .map(item => (
                <MenuItem key={item.value} value={item.value}>
                  <ListItemText primary={item.label} />
                </MenuItem>
              ))}
          </AsyncSelect>
        </FormControl>
      </div>
    );
  }
}
export default withStyles(styles)(App);
