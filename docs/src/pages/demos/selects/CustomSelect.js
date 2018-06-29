import React, { Component } from 'react';
import { AsyncSelect } from 'react-material/Select';
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
    values:['a','b'],
    valuestem:'c',
    name:'',
    optionstem: [
      { label: 'Afghanistan',value:'a' },
      { label: 'Aland Islands' ,value:'b'},
      { label: 'Albania' ,value:'c'},
      { label: 'Algeria' ,value:'d'},
      { label: 'American Samoa',value:'e' },
      { label: 'Andorra',value:'f' },
      { label: 'Angola' ,value:'g'},
      { label: 'Anguilla' ,value:'h'},
      { label: 'Antarctica',value:'i' },
      { label: 'Antigua and Barbuda',value:'j' },
      { label: 'Argentina' ,value:'k'},
      { label: 'Armenia',value:'l' },
      { label: 'Aruba',value:'m' },
      { label: 'Australia' ,value:'n'},
      { label: 'Austria' ,value:'o'},
      { label: 'Azerbaijan' ,value:'p'},
      { label: 'Bahamas',value:'q' },
      { label: 'Bahrain',value:'r' },
      { label: 'Bangladesh',value:'s' },
      { label: 'Barbados',value:'t' },
      { label: 'Belarus' ,value:'u'},
      { label: 'Belgium' ,value:'v'},
      { label: 'Belize' ,value:'w'},
      { label: 'Benin',value:'x' },
      { label: 'Bermuda' ,value:'y'},
      { label: 'Bhutan',value:'z' },
      { label: 'Bolivia, Plurinational State of',value:'ab' },
      { label: 'Bonaire, Sint Eustatius and Saba' ,value:'ac'},
      { label: 'Bosnia and Herzegovina' ,value:'ad'},
      { label: 'Botswana' ,value:'ae'},
      { label: 'Bouvet Island' ,value:'af'},
      { label: 'Brazil',value:'ag' },
      { label: 'British Indian Ocean Territory',value:'ah' },
      { label: 'Brunei Darussalam' ,value:'ai'},
    ],
    pageConfig : {
      pageSize: 10,
      currentPage:0,
      total:34
    }
  };
  autoCb(i) {
    console.log('item', i);
    this.setState({
      pageConfig: {
        ...this.state.pageConfig,
        currentPage: i,
      },
    });
  }
  selectCb(i) {
    console.log('event.target.value', i);
  }
  filterChangeCb(i) {
    console.log('text', i);
  }
  render() {
    const { classes, theme } = this.props;
    const { optionstem } = this.state;
    const { currentPage, pageSize } = this.state.pageConfig;
    const total = optionstem.length;
    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="">Multiple select of object array</InputLabel>
          <AsyncSelect
            multiple={true}
            value={this.state.values}
            pageConfig={this.state.pageConfig}
            placeholder="select one or more"
            keyValue={{
              key:'label',
              value:'value'
            }}
            filterChangeCb={this.filterChangeCb.bind(this)}
            selectCb={this.selectCb.bind(this)}
            pageChangeCb={this.autoCb.bind(this)}
          >
            {this.state.optionstem.slice(total===0?total:currentPage*pageSize,
              (currentPage+1)*pageSize>total?total:(currentPage+1)*pageSize).map(item => (
              <MenuItem
                key={item.label}
                value={item.value}
              >
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </MenuItem>
            ))}
          </AsyncSelect>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="">single select of object array</InputLabel>
          <AsyncSelect
            multiple={false}
            value={this.state.valuestem}
            pageConfig={this.state.pageConfig}
            placeholder="select one or more"
            filterChangeCb={this.filterChangeCb.bind(this)}
            selectCb={this.selectCb.bind(this)}
            pageChangeCb={this.autoCb.bind(this)}
          >
            {this.state.optionstem.slice(total===0?total:currentPage*pageSize,
              (currentPage+1)*pageSize>total?total:(currentPage+1)*pageSize).map(item => (
              <MenuItem
                key={item.label}
                value={item.value}
              >
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
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
