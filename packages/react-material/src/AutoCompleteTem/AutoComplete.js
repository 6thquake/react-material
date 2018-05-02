import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip';
import Pagination from '../Pagination/Pagination';
import Divider from 'material-ui/Divider';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    flexGrow: 1,
    position: 'relative'
  },
  paper: {
    position: 'absolute',
    zIndex: 1000000,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
    padding:'10px'
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`
  },
  inputRoot: {
    flexWrap: 'wrap'
  }
});

function getSuggestions(suggestions,inputValue) {
  return suggestions.filter(suggestion => {
    return !inputValue || suggestion.label.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1;
  });
}

class AutoComplete extends Component {
  static propTypes = {
    /**
     * input change ,callback to parent component
     */
    inputChangeCb : PropTypes.func.isRequired,
    /**
     * pagination change ,callback to parent component
     */
    pageChangeCb : PropTypes.func.isRequired,
    /**
     * pagination component config
     */
    pageConfig: PropTypes.object,
    /**
     * placeHold
     */
    placeHold: PropTypes.string,
    /**
     * decided multiple select
     */
    multiple: PropTypes.bool,
    /**
     * when select one item,callback
     */
    onChange : PropTypes.func.isRequired,
    /**
     * 用于回显
     */
    value : PropTypes.string
  };
  static defaultProps = {
    inputChangeCb:function () {
      console.log("need cb function")
    },
    pageChangeCb:function () {
      console.log("need cb function")
    },
    pageConfig:{
      currentPage: 1,
      pageSize: 5,
      total:0
    },
    placeHold:'please input something',
    multiple:false,
    onChange:function () {
      console.log("need cb function")
    },
  };
  constructor(){
    super();
    this.state = {
      open:false,
      inputValue: '',
      selectedItem: [],
      currentPage:1
    }
  }
  handleChange (event) {
    console.log(event);
    this.setState({
      open: true
    });
    this.props.onChange(event);
  };
  handleDelete = item => () => {
    const selectedItem = [...this.state.selectedItem];
    selectedItem.splice(selectedItem.indexOf(item), 1);

    this.setState({ selectedItem });
    this.props.autoCb(selectedItem);
  };
  ignoreNextBlur = false;
  handleItemClick = child => event => {
    if (!this.props.multiple) {
      this.setState({ open :false})
    }
    const { onChange, name } = this.props;
    if (onChange) {
      let value;
      let target;
      if (event.target) {
        target = event.target;
      }
      if (this.props.multiple) {
        value = Array.isArray(this.props.value) ? [...this.props.value] : [];
        const itemIndex = value.indexOf(child.props.value);
        if (itemIndex === -1) {
          value.push(child.props.value);
        } else {
          value.splice(itemIndex, 1);
        }
      } else {
        value = child.props.value;
      }
      event.persist();
      event.target = { ...target, value, name };
      onChange(event, child);
    }
  };
  i=false;
  handleDivClick = event => {
    event.stopPropagation();
    console.log('click');
    if(this.i){
      this.ignoreNextBlur = true;
    }
    this.i =true;
  };
  handleTextBlur= event =>{
    // event.stopPropagation();
    this.ignoreNextBlur = false;
  };
  handleBlur = event => {
    console.log('blur',  this.ignoreNextBlur);
    if (this.ignoreNextBlur === true) {
      console.log('blur-false');
      event.stopPropagation();
      this.ignoreNextBlur = false;
      return;
    }

    if (this.props.onBlur) {
      this.props.onBlur(event);
    }else{
      console.log('blur-true');
      this.setState({ open :false});
    }
  };
  pageCallbackFn(i){
    this.setState({currentPage:i});
  }
  render() {
    const {pageConfig,pageChangeCb,classes,placeHold ,onChange,children,multiple,value } = this.props;
    const {selectedItem,open} = this.state;
    let display;
    let displaySingle = '';
    const displayMultiple = [];
    const items = React.Children.map(children, child => {
      if (!React.isValidElement(child)) {
        return null;
      }
      let selected;

      if (multiple) {
        if (!Array.isArray(value)) {
          throw new Error(
            'React-Material: the `value` property must be an array ' +
            'when using the `AutoComplete` component with `multiple`.',
          );
        }
        //JSON.stringify()改成字符串判断
        selected = value.indexOf(child.props.value) !== -1;
        if (selected) {
          displayMultiple.push(child.props.children);
        }
      } else {
        selected = value === child.props.value;
        if (selected ) {
          displaySingle = child.props.children;
        }
      }

      return React.cloneElement(child, {
        onClick: this.handleItemClick(child),
        role: 'option',
        selected,
        value: undefined, // The value is most likely not a valid HTML attribute.
        'data-value': child.props.value, // Instead, we provide it as a data attribute.
      });
    });
    return (
      <div onClick={this.handleDivClick}
           className={classes.container}
           onBlur={this.handleBlur.bind(this)}>
        <TextField
          className={classes.margin}
          onChange={this.handleChange.bind(this)}
          onClick={this.handleTextBlur}
          value={value}
          InputProps={{
            startAdornment: selectedItem.map(item => (
              <Chip
                key={item}
                label={item}
                className={classes.chip}
                onDelete={this.handleDelete(item)}
              />
            )),
            placeholder: placeHold
          }}
        />
        {open? (
          <Paper className={classes.paper}
                 square>
            {items}
            <Divider/>
            <Pagination
              {...pageConfig}
              pageCallbackFn ={pageChangeCb}
            />
          </Paper>
        ) : null}
      </div>
    );
  }
}
export default withStyles(styles)(AutoComplete);
