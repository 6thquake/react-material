import React, {Component} from 'react';
import Select from 'react-material/Select'
import { InputLabel } from 'material-ui/Input';
import { withStyles } from 'material-ui/styles';
import { FormControl } from 'material-ui/Form';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});
 class SelectTest extends Component {
  state = {
    values:[],
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
    pagerConfig : {
          pageSize: 5
    }
  };
    selectCb(i){
      console.log('event.target.value',i)
    }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-simple">single select</InputLabel>
          <Select
            multiple={false}
            value={this.state.values}
            options={this.state.options}
            pageConfig={this.state.pagerConfig}
            placeholder="select one or more"
            selectCb={this.selectCb.bind(this)}
          >
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-helper">Multiple select</InputLabel>
          <Select
            multiple={true}
            value={this.state.values}
            options={this.state.options}
            pageConfig={this.state.pagerConfig}
            placeholder="select one or more"
            selectCb={this.selectCb.bind(this)}
          >
          </Select>
        </FormControl>
      </div>
    );
  }
}
export default withStyles(styles)(SelectTest);
