import React, { Component } from 'react';
import AutoComplete from 'react-material/AutoComplete';
import { withStyles } from 'react-material/styles';
import Typography from 'react-material/Typography';


const styles = theme => ({
  root: {
    flexGrow: 1,
    minHeight: '250px',
    // width:'300px'
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});
const color=['green','red','white','orgin'];

class AutoCompleteTest extends Component {
  state = {
     selectedsingledstr:'red',
     selectedsingled:'Afghanistan',
     selectedmulit:['Afghanistan'],
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
      pageConfig : {
        currentPage: 1,
        pageSize: 5,
        total:34,
      }
  };
  handleChangeSingle(event) {
    this.setState({selectedsingled:event.target.value});
  };
  handleChangeSinglestr(event) {
    this.setState({selectedsingledstr:event.target.value});
  };
  handleChangemulit(event) {
    this.setState({selectedmulit:[...event.target.value]});
  };
  autoCb(i){
    console.log('item',i);
    this.setState({   pageConfig:{
      ...this.state.pageConfig,
      currentPage:i
    }});
  };
  inputChangeCb(i){
    console.log('item',i);
    this.setState({inputText:event.target.value});
  }
  render() {
    const { classes } = this.props;
    const { currentPage, pageSize, total}=this.state.pageConfig;
      return (
          <div className={classes.root}>
            <br/>
            <Typography>datasource object array and multiple select add disabled</Typography>
            <AutoComplete
              placeHold={'new autoComplete'}
              dataSource={this.state.options.slice(total==0?total:(currentPage-1)*pageSize+1,
                currentPage*pageSize>total?total:currentPage*pageSize)}
              multiple ={true}
              disabled={true}
              keyValue={['label','label']}
              value={this.state.selectedmulit}
              pageConfig={this.state.pageConfig}
              pageChangeCb={this.autoCb.bind(this)}
              inputChangeCb={this.inputChangeCb.bind(this)}
              onChange={this.handleChangemulit.bind(this)}
            />
            <br/>
            <Typography>datasource object array and single select</Typography>
            <AutoComplete
              placeHold={'new autoComplete'}
              dataSource={this.state.options.slice(total==0?total:(currentPage-1)*pageSize+1,
                currentPage*pageSize>total?total:currentPage*pageSize)}
              multiple ={false}
              keyValue={['label','label']}
              value={this.state.selectedsingled}
              pageConfig={this.state.pageConfig}
              pageChangeCb={this.autoCb.bind(this)}
              inputChangeCb={this.inputChangeCb.bind(this)}
              onChange={this.handleChangeSingle.bind(this)}
            />
            <br/>
            <Typography>datasource simple array and single select</Typography>
            <AutoComplete
              placeHold={'new autoComplete'}
              dataSource={color}
              multiple ={false}
              value={this.state.selectedsingledstr}
              pageConfig={this.state.pageConfig}
              pageChangeCb={this.autoCb.bind(this)}
              inputChangeCb={this.inputChangeCb.bind(this)}
              onChange={this.handleChangeSinglestr.bind(this)}
            />
          </div>
      );
  }
}
export default withStyles(styles)(AutoCompleteTest);
