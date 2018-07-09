import React,{Component} from 'react';
import Mention from 'react-material/Mention';
import { withStyles } from 'react-material/styles';
const styles = theme => ({
    root: {
      flexGrow: 1,
    },
  });
const people=[
    "Aaron",
    "Ada",
    "Barbara",
    "Belinda",
    "Carey",
    "Cara",
    "Davina",
    "Daphne",
    "Fannie",
    "Madge",
    "Olivia",
    "Taylor"
    ];
   
class DisabledMentionTest extends Component{
    constructor(){
        super();
        this.state={
            pageConfig : {
                currentPage: 1,
                pageSize: 4,
                total:12,
            },
            selectedItem:['@Taylor'],
            dataSource:[],
            inputValue:'@Taylor',
         }
    }
    
    inputChangeCb(filterOption,triggerOption){
        let filteredData=data.filter((item)=>{return !filterOption||item.toLowerCase().indexOf(filterOption.toLowerCase()) !== -1});
        this.setState({
            dataSource: filteredData,
            pageConfig:{
                ...this.state.pageConfig,
                total:filteredData.length
            }
        })
    }
    onChange(value){
        this.setState({
            inputValue:value
        })

    }
    onSelect(items){
        this.setState({
            selectedItem:items
        })
    }
    render(){
        const { classes } = this.props;
        return(
            <div className={classes.root}>
            <Mention
            placeHold={'input @ to mention'}
            value={this.state.inputValue}
            selected={this.state.selectedItem}
            pageConfig={this.state.pageConfig}
            inputChangeCb={this.inputChangeCb.bind(this)}
            onChange={this.onChange.bind(this)}
            onSelect={this.onSelect.bind(this)}
            dataSource={this.state.dataSource}
            disabled={true}
            >
            </Mention>
            </div>
        )

    }
}
export default withStyles(styles)(DisabledMentionTest);