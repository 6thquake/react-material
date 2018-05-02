import React, {Component} from 'react';
import AutoComplete from 'react-material/AutoComplete';
import AutoCompleteTem from 'react-material/AutoCompleteTem'
import { withStyles } from 'react-material/styles';
import { MenuItem } from 'material-ui/Menu';
import { ListItemText,ListItemIcon  } from 'material-ui/List';
import StarBorder from '@material-ui/icons/StarBorder';

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
       selected:[],
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

  handleChange(event,child) {
    this.setState({ selected:event.target.value.label});
    console.log('event.target.value',child,event.target,event.target.value);
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
    }
    render() {
      const { classes } = this.props;
      const { currentPage, pageSize, total}=this.state.pageConfig;
        return (
            <div className={classes.root}>
              <AutoCompleteTem
                placeHold={'new autoComplete'}
                multiple ={false}
                value={this.state.selected}
                pageConfig={this.state.pageConfig}
                pageChangeCb={this.autoCb.bind(this)}
                inputChangeCb={this.inputChangeCb.bind(this)}
                onChange={this.handleChange.bind(this)}
              >
                {this.state.options.slice(total==0?total:(currentPage-1)*pageSize+1,
                  currentPage*pageSize>total?total:currentPage*pageSize).map(item => (
                  <MenuItem key={item.label} value={item}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary={item.label} />
                  </MenuItem>
                ))}
              </AutoCompleteTem>
                <AutoComplete
                    placeHold={'autoComplete single,please input a'}
                    dataSource={this.state.options}
                    multipleble={false}
                    paginationOpen={true}
                    pageConfig={this.state.pageConfig}
                    autoCb={this.autoCb.bind(this)}
                />
                <AutoComplete
                    placeHold={'autoComplete multipleble,please input a'}
                    dataSource={this.state.options}
                    multipleble={true}
                    paginationOpen={true}
                    pageConfig={this.state.pageConfig}
                    autoCb={this.autoCb.bind(this)}
                />
            </div>
        );
    }
}
export default withStyles(styles)(AutoCompleteTest);
