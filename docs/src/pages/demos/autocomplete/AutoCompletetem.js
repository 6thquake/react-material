import React, { Component } from 'react';
import AutoComplete from '@6thquake/react-material/AutoComplete';
import { withStyles } from '@6thquake/react-material/styles';
import MenuItem from '@6thquake/react-material/MenuItem';
import ListItemText from '@6thquake/react-material/ListItemText';
import ListItemIcon from '@6thquake/react-material/ListItemIcon';
import StarBorder from '@material-ui/icons/StarBorder';
import Typography from '@6thquake/react-material/Typography';
import SyncAutoComplete from '@6thquake/react-material/AutoComplete';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class AutoCompleteTest extends Component {
  state = {
    selectedmulit: ['Aland Islands'],
    selectedsingled: 'Afghanistan',
    options: [
      { label: 'Afghanistan' },
      { label: 'Aland Islands' },
      { label: 'Albania' },
      { label: 'Algeria' },
      { label: 'American Samoa' },
      { label: 'Andorra' },
      { label: 'Angola' },
      { label: 'Anguilla' },
      { label: 'Antarctica' },
      { label: 'Antigua and Barbuda' },
      { label: 'Argentina' },
      { label: 'Armenia' },
      { label: 'Aruba' },
      { label: 'Australia' },
      { label: 'Austria' },
      { label: 'Azerbaijan' },
      { label: 'Bahamas' },
      { label: 'Bahrain' },
      { label: 'Bangladesh' },
      { label: 'Barbados' },
      { label: 'Belarus' },
      { label: 'Belgium' },
      { label: 'Belize' },
      { label: 'Benin' },
      { label: 'Bermuda' },
      { label: 'Bhutan' },
      { label: 'Bolivia, Plurinational State of' },
      { label: 'Bonaire, Sint Eustatius and Saba' },
      { label: 'Bosnia and Herzegovina' },
      { label: 'Botswana' },
      { label: 'Bouvet Island' },
      { label: 'Brazil' },
      { label: 'British Indian Ocean Territory' },
      { label: 'Brunei Darussalam' },
    ],
    PaginationProps: {
      page: 0,
      rowsPerPage: 5,
      count: 34,
    },
  };

  handleChangeSingle(event, child) {
    this.setState({ selectedsingled: event.target.value });
  }
  handleChangemulit(event, child) {
    this.setState({ selectedmulit: [...event.target.value] });
  }

  autoCb(i) {
    console.log('item', i);
    this.setState({
      PaginationProps: {
        ...this.state.PaginationProps,
        page: i,
      },
    });
  }
  inputChangeCb(event) {
    console.log('item', event.target.value);
    this.setState({ inputText: event.target.value });
  }
  render() {
    const { classes } = this.props;
    const { page, rowsPerPage, count } = this.state.PaginationProps;
    return (
      <div className={classes.root}>
        <Typography>multiple</Typography>
        <AutoComplete
          placeholder={'new autoComplete'}
          multiple
          select
          value={this.state.selectedmulit}
          PaginationProps={this.state.PaginationProps}
          onChangePage={this.autoCb.bind(this)}
          onChangeInput={this.inputChangeCb.bind(this)}
          onChange={this.handleChangemulit.bind(this)}
        >
          {this.state.options
            .slice(
              count === 0 ? count : page * rowsPerPage,
              (page + 1) * rowsPerPage > count ? count : (page + 1) * rowsPerPage,
            )
            .map(item => (
              <MenuItem key={item.label} value={item.label}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </MenuItem>
            ))}
        </AutoComplete>
        <br />
        <Typography>single</Typography>
        <AutoComplete
          placeholder={'new autoComplete'}
          value={this.state.selectedsingled}
          PaginationProps={this.state.PaginationProps}
          onChangePage={this.autoCb.bind(this)}
          onChangeInput={this.inputChangeCb.bind(this)}
          onChange={this.handleChangeSingle.bind(this)}
        >
          {this.state.options
            .slice(
              count === 0 ? count : page * rowsPerPage,
              (page + 1) * rowsPerPage > count ? count : (page + 1) * rowsPerPage,
            )
            .map(item => (
              <MenuItem key={item.label} value={item.label}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </MenuItem>
            ))}
        </AutoComplete>
      </div>
    );
  }
}
export default withStyles(styles)(AutoCompleteTest);
