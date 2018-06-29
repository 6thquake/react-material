import React, { Component } from 'react';
import { AsyncSelect } from 'react-material/Select';
import InputLabel from 'react-material/InputLabel';
import { withStyles } from 'react-material/styles';
import FormControl from 'react-material/FormControl';
import MenuItem from 'react-material/MenuItem';

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
    singlevalue:'3',
    valuesMu:['1','2'],
    valuestem:'f',
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
    pageConfig: {
      pageSize: 5,
      currentPage:0,
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
    console.log('biubiubiubiu', i)
  }
  filterChangeCb(i) {
    console.log('text', i);
  }
  render() {
    const { classes, theme } = this.props;
    const { optionstem } = this.state;
    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="InputLabel1">single select of simple array and disabled</InputLabel>
          <AsyncSelect
            multiple={false}
            value={this.state.singlevalue}
            options={this.state.options}
            htmlFor={'InputLabel1'}
            pageConfig={this.state.pageConfig}
            placeholder="select one or more"
            selectCb={this.selectCb.bind(this)}
            pageChangeCb={this.autoCb.bind(this)}
            filterChangeCb={this.filterChangeCb.bind(this)}
            disabled={true}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="InputLabel2">Multiple select of simple array</InputLabel>
          <AsyncSelect
            multiple={true}
            value={this.state.valuesMu}
            options={this.state.options}
            htmlFor={'InputLabel2'}
            pageConfig={this.state.pageConfig}
            placeholder="select one or more"
            selectCb={this.selectCb.bind(this)}
            pageChangeCb={this.autoCb.bind(this)}
            filterChangeCb={this.filterChangeCb.bind(this)}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="InputLabel3">Multiple select of object array</InputLabel>
          <AsyncSelect
            multiple={true}
            value={this.state.values}
            options={this.state.optionstem}
            htmlFor={'InputLabel3'}
            keyValue={{
              key:'label',
              value:'value'
            }}
            pageConfig={this.state.pageConfig}
            placeholder="select one or more"
            selectCb={this.selectCb.bind(this)}
            pageChangeCb={this.autoCb.bind(this)}
            filterChangeCb={this.filterChangeCb.bind(this)}
          />
        </FormControl>
      </div>
    );
  }
}
export default withStyles(styles)(App);
