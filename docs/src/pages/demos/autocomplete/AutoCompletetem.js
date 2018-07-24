import React, { Component } from 'react';
import AutoComplete from 'react-material/AutoComplete';
import { withStyles } from 'react-material/styles';
import MenuItem from 'react-material/MenuItem';
import ListItemText from 'react-material/ListItemText';
import ListItemIcon from 'react-material/ListItemIcon';
import StarBorder from '@material-ui/icons/StarBorder';
import Typography from 'react-material/Typography';

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
    paginationProps: {
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
      paginationProps: {
        ...this.state.paginationProps,
        page: i,
      },
    });
  }
  inputChangeCb(i) {
    console.log('item', i);
    this.setState({ inputText: event.target.value });
  }
  render() {
    const { classes } = this.props;
    const { page, rowsPerPage, count } = this.state.paginationProps;
    return (
      <div className={classes.root}>
        <Typography>multiple</Typography>
        <AutoComplete
          placeholder={'new autoComplete'}
          multiple={true}
          value={this.state.selectedmulit}
          paginationProps={this.state.paginationProps}
          onChangePage={this.autoCb.bind(this)}
          onChangeInput={this.inputChangeCb.bind(this)}
          onChange={this.handleChangemulit.bind(this)}
        >
          {this.state.options
            .slice(
              count == 0 ? count : page * rowsPerPage + 1,
              (page+1) * rowsPerPage > count ? count : (page+1) * rowsPerPage,
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
          multiple={false}
          value={this.state.selectedsingled}
          paginationProps={this.state.paginationProps}
          onChangePage={this.autoCb.bind(this)}
          onChangeInput={this.inputChangeCb.bind(this)}
          onChange={this.handleChangeSingle.bind(this)}
        >
          {this.state.options
            .slice(
              count == 0 ? count :page  * rowsPerPage + 1,
              (page+1) * rowsPerPage > count ? count : (page+1) * rowsPerPage,
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
