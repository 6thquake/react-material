import React, {Component} from 'react';
import { AsynSelect } from 'react-material/Select'
import { InputLabel } from 'react-material/Input';
import { withStyles } from 'react-material/styles';
import { FormControl } from 'react-material/Form';
import { MenuItem } from 'react-material/Menu';


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
    singlevalue:'3',
    valuesMu:['1','2'],
    valuestem:'Afghanistan',
    name:'',
    options: [
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
    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-simple">single select of simple array and disabled</InputLabel>
          <AsynSelect
            multiple={false}
            value={this.state.singlevalue}
            options={this.state.options}
            pageConfig={this.state.pageConfig}
            placeholder="select one or more"
            selectCb={this.selectCb.bind(this)}
            pageChangeCb={this.autoCb.bind(this)}
            filterChangeCb={this.filterChangeCb.bind(this)}
            disabled={true}
          >
          </AsynSelect>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-helper">Multiple select of simple array</InputLabel>
          <AsynSelect
            multiple={true}
            value={this.state.valuesMu}
            options={this.state.options}
            pageConfig={this.state.pageConfig}
            placeholder="select one or more"
            selectCb={this.selectCb.bind(this)}
            pageChangeCb={this.autoCb.bind(this)}
            filterChangeCb={this.filterChangeCb.bind(this)}
          >
          </AsynSelect>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-helper">Multiple select of object array</InputLabel>
          <AsynSelect
            multiple={true}
            value={this.state.values}
            options={this.state.optionstem}
            keyValue={['label','label']}
            pageConfig={this.state.pageConfig}
            placeholder="select one or more"
            selectCb={this.selectCb.bind(this)}
            pageChangeCb={this.autoCb.bind(this)}
            filterChangeCb={this.filterChangeCb.bind(this)}
          >
          </AsynSelect>
        </FormControl>
      </div>
    );
  }
}
export default withStyles(styles)(App);
