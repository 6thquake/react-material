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
    const tags=[
    "1.0",
    "2.0",
    "3.0",
    '4.0'
    ];
class MultiMentionTest extends Component{
    constructor(){
        super();
        this.state={
            pageConfig : {
                currentPage: 1,
                pageSize: 4,
                total:12,
            },
            selectedItem:[],
            dataSource:[],
            inputValue:'',
         }
    }
    
    inputChangeCb(filterOption,triggerOption){
        const data=triggerOption==='@'?people:tags;
        // debugger;
        let filteredData=data.filter((item)=>{return !filterOption||item.toLowerCase().indexOf(filterOption.toLowerCase()) !== -1});
        this.setState({
            dataSource: filteredData,
            pageConfig:{
                ...this.state.pageConfig,
                total:filteredData.length
            }
        })
        console.log(this.state.dataSource)
        // debugger;
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
            placeHold={'input @ to mention people,input # to mention tag'}
            value={this.state.inputValue}
            selected={this.state.selectedItem}
            pageConfig={this.state.pageConfig}
            inputChangeCb={this.inputChangeCb.bind(this)}
            onChange={this.onChange.bind(this)}
            onSelect={this.onSelect.bind(this)}
            triggerOptions={['@','#']}
            dataSource={this.state.dataSource}
            >
            </Mention>
            </div>
        )

    }
}
export default withStyles(styles)(MultiMentionTest);