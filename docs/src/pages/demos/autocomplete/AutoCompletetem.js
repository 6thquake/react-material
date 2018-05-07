import React, {Component} from 'react';
import AutoComplete from 'react-material/AutoComplete';
import { withStyles } from 'react-material/styles';
import { MenuItem } from 'material-ui/Menu';
import { ListItemText,ListItemIcon  } from 'material-ui/List';
import StarBorder from '@material-ui/icons/StarBorder';
import Typography from 'material-ui/Typography';
const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '250px'
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class AutoCompleteTest extends Component {
     state = {
       selectedmulit:['Aland Islands'],
       selectedsingled:'Afghanistan',
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

  handleChangeSingle(event,child) {
    this.setState({selectedsingled:event.target.value});
  };
  handleChangemulit(event,child) {
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

              <Typography>multiple</Typography>
              <AutoComplete
                placeHold={'new autoComplete'}
                multiple ={true}
                value={this.state.selectedmulit}
                pageConfig={this.state.pageConfig}
                pageChangeCb={this.autoCb.bind(this)}
                inputChangeCb={this.inputChangeCb.bind(this)}
                onChange={this.handleChangemulit.bind(this)}
              >
                {this.state.options.slice(total==0?total:(currentPage-1)*pageSize+1,
                  currentPage*pageSize>total?total:currentPage*pageSize).map(item => (
                  <MenuItem key={item.label} value={item.label}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary={item.label} />
                  </MenuItem>
                ))}
              </AutoComplete>
              <br/>
              <Typography>single</Typography>
              <AutoComplete
                placeHold={'new autoComplete'}
                multiple ={false}
                value={this.state.selectedsingled}
                pageConfig={this.state.pageConfig}
                pageChangeCb={this.autoCb.bind(this)}
                inputChangeCb={this.inputChangeCb.bind(this)}
                onChange={this.handleChangeSingle.bind(this)}
              >
                {this.state.options.slice(total==0?total:(currentPage-1)*pageSize+1,
                  currentPage*pageSize>total?total:currentPage*pageSize).map(item => (
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
