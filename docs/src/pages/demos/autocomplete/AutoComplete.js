import React, {Component} from 'react';
import AutoComplete from 'react-material/AutoComplete'
import { withStyles } from 'react-material/styles';
const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '250px'
  },
});
class AutoCompleteTest extends Component {
     state = {
        values:[],
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
            pageSize: 4,
        }
    };
    autoCb(i){
        console.log('item',i);
    }
    render() {
      const { classes } = this.props;
        return (
            <div className={classes.root}>
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
