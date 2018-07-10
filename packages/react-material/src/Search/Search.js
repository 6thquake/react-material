import React, {Component} from 'react';
import { withStyles } from '../styles';
                       
import SearchIcon from '@material-ui/icons/Search';
import Button from '../Button'

const styles = theme => ({
    root: {
        position:'relative',
        fontSize:'13px',
        overflow:'hidden'
    },
    right:{
        textAlign:'right'
    },
    input:{
        padding:'0.3em 1.5em',
        border:'none',
        background:'rgba(0,0,0,0.1)',
        borderRadius:'1.3em',
        lineHeight:'2em',
        color:'rgba(255,255,255,0.8)',
        outline:'none',
        width:'50%',
        transition:'all 0.5s',
        minWidth:'20em',
        '&::-webkit-input-placeholder': {
            color:'rgba(255,255,255,0.3)',
        },
        '&:-moz-placeholder' :{ 
           color:'rgba(255,255,255,0.3)',
        },
        '&::-moz-placeholder': { 
           color:'rgba(255,255,255,0.3)',
        },
        '&:-ms-input-placeholder': { 
           color:'rgba(255,255,255,0.3)',
        },
        '&:focus':{
            width:'100%'
        }
    },
    hasValue:{
        width:'100%'
    },
    darkFont:{
        color:'rgba(0,0,0,0.8)',
        '&::-webkit-input-placeholder': {
            color:'rgba(0,0,0,0.3)',
        },
        '&:-moz-placeholder' :{ 
           color:'rgba(0,0,0,0.3)',
        },
        '&::-moz-placeholder': { 
           color:'rgba(0,0,0,0.3)',
        },
        '&:-ms-input-placeholder': { 
           color:'rgba(0,0,0,0.3)',
        }
    },

    burron:{},
    iconWrap:{
        width:'0px',
        position:'relative',
        display: 'inline'
    },
    icon:{
        color:'rgba(255,255,255,0.3)',
        position: 'absolute',
        right: '0.5em',
        top: '0em',
        fontSize: '1.5em'
    },
    darkIcon:{
        color:'rgba(0,0,0,0.3)',
    }
});

class Search extends Component {
    state = {
        search:'',
        options: [],
        pageConfig : {
            currentPage: 1,
            pageSize: 5,
            total:34,
        },
    };

    handleChangeSingle(event,child) {
        let self =this;
        this.setState({search:event.target.value},()=>{
            self.ok();
        });
    };
    autoCb(i){
        console.log('item',i);
        this.setState({   pageConfig:{
            ...this.state.pageConfig,
            currentPage:i
        }});
    };
    inputChangeCb(event){
        console.log('item',event);
        this.setState({inputText:event.target.value});
    }
    ok(){
        const {onChange} =this.props;
        const {search} =this.state;
        onChange&&typeof onChange === 'function'&&onChange(search);
    }
    render() {
        const { classes,type,direction,placeholder } = this.props;
        const {search} = this.state;
        const { currentPage, pageSize, total}=this.state.pageConfig;
        return (
            <div className={classes.root +' '+(direction=='right'?classes.right:'')}>        
                <input
                    className={classes.input+' '+(type=='dark'?classes.darkFont:'')+' '+(!!search?classes.hasValue:'')}
                    value={this.state.search}
                    onChange={this.handleChangeSingle.bind(this)}
                    placeholder={placeholder}
                />
                <div className={classes.iconWrap}>
                    <SearchIcon className={classes.icon+' '+(type=='dark'?classes.darkIcon:'')} />
                </div>
            </div>
        );
    }
}
export default withStyles(styles, { name: 'RMSearch' })(Search);
