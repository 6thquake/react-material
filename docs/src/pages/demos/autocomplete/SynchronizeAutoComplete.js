import React, { Component } from 'react';
import { withStyles } from '@6thquake/react-material/styles';
import MenuItem from '@6thquake/react-material/MenuItem';
import Typography from '@6thquake/react-material/Typography';
import AutoComplete from '@6thquake/react-material/AutoComplete';

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
    select: 'Belgium',
    muliselect: ['Afghanistan', 'Albania'],
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
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography>Synchronize autocomplete of single select</Typography>
        <AutoComplete.Sync
          placeholder={'Synchronize autoComplete'}
          value={this.state.select}
          rowsPerPage={5}
          onChange={this.handleChange('select')}
        >
          {this.state.options.map(item => (
            <MenuItem key={item.label} value={item.label}>
              {item.label}
            </MenuItem>
          ))}
        </AutoComplete.Sync>
        <br />
        <Typography>Synchronize autocomplete of multiple select</Typography>
        <AutoComplete.Sync
          multiple
          placeholder={'Synchronize autoComplete'}
          value={this.state.muliselect}
          rowsPerPage={5}
          onChange={this.handleChange('muliselect')}
        >
          {this.state.options.map(item => (
            <MenuItem key={item.label} value={item.label}>
              {item.label}
            </MenuItem>
          ))}
        </AutoComplete.Sync>
      </div>
    );
  }
}
export default withStyles(styles)(AutoCompleteTest);
