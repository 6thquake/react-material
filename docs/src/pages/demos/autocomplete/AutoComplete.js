import React, { Component } from 'react';
import {AsyncAutoComplete} from '@6thquake/react-material/AutoComplete';
import { withStyles } from '@6thquake/react-material/styles';
import Typography from '@6thquake/react-material/Typography';
import StarBorder from '@material-ui/icons/StarBorder';
import ListItemText from '@6thquake/react-material/ListItemText';
import ListItemIcon from '@6thquake/react-material/ListItemIcon';
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});
const color = ['green', 'red', 'white', 'orgin'];

class AutoCompleteTest extends Component {
  state = {
    selectedsingledstr: 'red',
    selectedsingled: 'Afghanistan',
    selectedmulit: ['Afghanistan'],
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
  handleChangeSingle(event) {
    this.setState({ selectedsingled: event.target.value });
  }
  handleChangeSinglestr(event) {
    this.setState({ selectedsingledstr: event.target.value });
  }
  handleChangemulit(event) {
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
        <Typography>datasource object array and multiple select</Typography>
        <AsyncAutoComplete
          select
          debounceAble
          placeholder={'new autoComplete'}
          options={this.state.options.slice(
            count === 0 ? count : page * rowsPerPage,
            (page + 1) * rowsPerPage > count ? count : (page + 1) * rowsPerPage,
          )}
          multiple
          mapper={{
            label: 'label',
            value: 'label',
          }}
          debounceProps={{
            wait: 2000,
            maxTime: 3000,
          }}
          value={this.state.selectedmulit}
          PaginationProps={this.state.PaginationProps}
          onChangePage={this.autoCb.bind(this)}
          onChangeInput={this.inputChangeCb.bind(this)}
          onChange={this.handleChangemulit.bind(this)}
        />
        <br />
        <Typography>datasource object array and single select</Typography>
        <AsyncAutoComplete
          select
          placeholder={'new autoComplete'}
          options={this.state.options.slice(
            count === 0 ? count : page * rowsPerPage,
            (page + 1) * rowsPerPage > count ? count : (page + 1) * rowsPerPage,
          )}
          mapper={{
            label: 'label',
            value: 'label',
          }}
          value={this.state.selectedsingled}
          PaginationProps={this.state.PaginationProps}
          onChangePage={this.autoCb.bind(this)}
          onChangeInput={this.inputChangeCb.bind(this)}
          onChange={this.handleChangeSingle.bind(this)}
        />
        <br />
        <Typography>datasource simple array and single select</Typography>
        <AsyncAutoComplete
          select
          placeholder={'new autoComplete'}
          options={color}
          multiple={false}
          value={this.state.selectedsingledstr}
          PaginationProps={this.state.PaginationProps}
          onChangePage={this.autoCb.bind(this)}
          onChangeInput={this.inputChangeCb.bind(this)}
          onChange={this.handleChangeSinglestr.bind(this)}
        />
        <br />
        <Typography>customer option via mapper</Typography>
        <AsyncAutoComplete
          placeholder={'new autoComplete'}
          options={this.state.options.slice(
            count === 0 ? count : page * rowsPerPage,
            (page + 1) * rowsPerPage > count ? count : (page + 1) * rowsPerPage,
          )}
          multiple={false}
          mapper={{
            label: (item, index) => (
              <React.Fragment>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </React.Fragment>
            ),
            value: 'label',
          }}
          value={this.state.selectedsingled}
          PaginationProps={this.state.PaginationProps}
          onChangePage={this.autoCb.bind(this)}
          onChangeInput={this.inputChangeCb.bind(this)}
          onChange={this.handleChangeSingle.bind(this)}
        />
      </div>
    );
  }
}
export default withStyles(styles)(AutoCompleteTest);
