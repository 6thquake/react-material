import React, {Component} from 'react';
import { AsynSelect } from 'react-material/Select'
import InputLabel from 'react-material/Input';
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
    minWidth:120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class App extends Component {
  state = {
    values:['Afghanistan','Aland Islands'],
    valuestem:'Afghanistan',
    name:'',
    optionstem: [
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
    pageConfig : {
      pageSize: 5,
      currentPage:1,
      total:34
    }
  };
  autoCb(i){
    console.log('item',i);
    this.setState({pageConfig:{
      ...this.state.pageConfig,
      currentPage:i
    }});
  };
  selectCb(i){
    console.log('event.target.value', i)
  }
  filterChangeCb(i){
    console.log('text', i)
  }
  render() {
    const { classes ,theme} = this.props;
    const {optionstem}= this.state;
    const {currentPage,pageSize}= this.state.pageConfig;
    const total = optionstem.length;
    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-helper">Multiple select of object array</InputLabel>
          <AsynSelect
            multiple={true}
            value={this.state.values}
            pageConfig={this.state.pageConfig}
            placeholder="select one or more"
            filterChangeCb={this.filterChangeCb.bind(this)}
            selectCb={this.selectCb.bind(this)}
            pageChangeCb={this.autoCb.bind(this)}
          >
            {this.state.optionstem.slice(total==0?total:(currentPage-1)*pageSize,
              currentPage*pageSize>total?total:currentPage*pageSize).map(item => (
              <MenuItem
                key={item.label}
                value={item.label}
              >
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </MenuItem>
            ))}
          </AsynSelect>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-helper">single select of object array</InputLabel>
          <AsynSelect
            multiple={false}
            value={this.state.valuestem}
            pageConfig={this.state.pageConfig}
            placeholder="select one or more"
            filterChangeCb={this.filterChangeCb.bind(this)}
            selectCb={this.selectCb.bind(this)}
            pageChangeCb={this.autoCb.bind(this)}
          >
            {this.state.optionstem.slice(total==0?total:(currentPage-1)*pageSize,
              currentPage*pageSize>total?total:currentPage*pageSize).map(item => (
              <MenuItem
                key={item.label}
                value={item.label}
              >
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </MenuItem>
            ))}
          </AsynSelect>
        </FormControl>
      </div>
    );
  }
}
export default withStyles(styles)(App);
