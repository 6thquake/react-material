import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../styles';
import TextField from '../TextField';
import Paper from '../Paper';
import Chip from '../Chip';
import Pagination from '../Pagination/Pagination';
import Divider from '../Divider';
import { MenuItem } from '../Menu';
const styles = theme => ({
  root: {
   flexGrow: 1,
  },
  container: {
   flexGrow: 1,
   position: 'relative'
  },
  textarea:{
    width: '100%',
  },
  modal:{
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflow:'hidden',
    outline: 0,
    backgroundColor: 'rgb(0, 0, 0)',
    opacity: 0,
    zIndex: 1
  },
  paper: {
    position: 'absolute',
    zIndex: 200,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
    padding:'10px'
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
  },
  inputRoot: {
    flexGrow: 1,
    flexWrap: 'wrap',
  },
  inputHold:{
    padding:'10px 0 7px'
  }
});
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
    value : PropTypes.string,
    /**
     * decided autocomplete is disabled
     */
    disabled : PropTypes.bool,
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
    disabled:false
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
    this.setState({
      open: true,
      inputValue:event.target.value
    });
    this.props.inputChangeCb(event);
  };
  handleDelete = item =>event => {
    if(this.props.disabled){
      return;
    }
    const value = [...this.props.value];
    value.splice(value.indexOf(item), 1);
    let target;
    if (event.target) {
      target = event.target;
    }
    event.persist();
    event.target = { ...target, value };
    this.props.onChange(event);
  };
  handleItemClick = child => event => {
    this.setState({
      inputValue:''
    });
    if (!this.props.multiple) {
      this.setState({ open :false})
    }
    const { onChange } = this.props;
    if (onChange) {
      let value;
      let target;
      if (event.target) {
        target = event.target;
      }
      const selecttext = child?child.props.value:event.target.textContent;
      if (this.props.multiple) {
        value = Array.isArray(this.props.value) ? [...this.props.value] : [];
        const itemIndex = value.indexOf(selecttext);
        if (itemIndex === -1) {
          value.push(selecttext);
        } else {
          value.splice(itemIndex, 1);
        }
      } else {
        value = selecttext;
        this.setState({
          inputValue:value
        });
      }
      event.persist();
      event.target = { ...target, value };
      onChange(event, child);
    }
  };
  handleBlur = event => {
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }else{
        const {onChange}=this.props;
        if (onChange) {
          let value;
          let target;
          if (event.target) {
            target = event.target;
          }
          const selecttext = this.state.inputValue;
          if(this.props.multiple){
            value = Array.isArray(this.props.value) ? [...this.props.value] : [];
            const itemIndex = value.indexOf(selecttext);
            if (itemIndex === -1) {
              if(selecttext){
                value.push(selecttext);
              }
            }
            this.setState({ open :false,inputValue:''});
            }else {
              value = selecttext;
              this.setState({
                open :false,
                inputValue:value
              });
            }
          event.persist();
          event.target = { ...target, value };
          onChange(event);
        }
    }
  };
  componentDidMount () {
    if(!this.props.multiple){
      this.setState({
        inputValue:this.props.value
      });
    }
  }
  render() {
    const {pageConfig,pageChangeCb,classes,placeHold ,children,multiple,value,dataSource,keyValue,disabled} = this.props;
    const {open,inputValue} = this.state;
    let items;
    if(dataSource){
      items = dataSource ? dataSource.map((item) => {
        let selected=false;

        switch (typeof item) {
          case 'string':
            if (multiple) {
              if (!Array.isArray(value)) {
                throw new Error(
                  'React-Material: the `value` property must be an array ' +
                  'when using the `AutoComplete` component with `multiple`.',
                );
              }
              selected = value.indexOf(item) !== -1;
            } else {
              selected = (value === item);
            }
            return <MenuItem key={item} value={item} selected={selected}
                             onClick={this.handleItemClick(null)}>{item}</MenuItem>;
          case 'object':
            if (multiple) {
              if (!Array.isArray(value)) {
                throw new Error(
                  'React-Material: the `value` property must be an array ' +
                  'when using the `AutoComplete` component with `multiple`.',
                );
              }
              selected = value.indexOf(item[keyValue[1]]) !== -1;
            } else {
              selected = (value === item[keyValue[1]]);
            }
            return (
              <MenuItem  key={item[keyValue[0]]} value={item[keyValue[1]]} selected={selected}
                         onClick={this.handleItemClick(null)}>{item[keyValue[0]]}</MenuItem>
            );
          default:
            throw new Error('AutoComplete[dataSource] only supports type `string[] | Object[]`.');
        }
      }) : [];
    } else {
        items = React.Children.map(children, child => {
          if (!React.isValidElement(child)) {
            return null;
          }
          let selected=false;
          if (multiple) {
            if (!Array.isArray(value)) {
              throw new Error(
                'React-Material: the `value` property must be an array ' +
                'when using the `AutoComplete` component with `multiple`.',
              );
            }
            selected = value.indexOf(child.props.value) !== -1;
          } else {
            selected = (value === child.props.value);
          }
          return React.cloneElement(child, {
            onClick: this.handleItemClick(child),
            role: 'option',
            selected,
            value: undefined, // The value is most likely not a valid HTML attribute.
            'data-value': child.props.value, // Instead, we provide it as a data attribute.
          });
        });
    }
    return (
      <div className={classes.root}>
        {open?
          <div
            onClick={this.handleBlur}
            className={classes.modal}>
          </div>:null}
          <div className={classes.container}>
            {multiple?
              <TextField
                disabled={disabled}
                className={classes.textarea}
                onChange={this.handleChange.bind(this)}
                value={inputValue}
                multiline
                rows='1'
                InputProps={{
                  classes: {
                    root: classes.inputRoot,
                    input:classes.inputHold
                  },
                  startAdornment:value.map(item => (
                    <Chip
                      key={item}
                      label={item}
                      className={classes.chip}
                      onDelete={this.handleDelete(item)}
                    />
                  )),
                  placeholder:value.length>0?'':placeHold
                }}
            />: <TextField
                disabled={disabled}
                className={classes.textarea}
                onChange={this.handleChange.bind(this)}
                value={inputValue}
                placeholder={placeHold}
              />}
            {open? (
              <Paper className={classes.paper} square>
                {items}
                <Divider/>
                  <Pagination
                    {...pageConfig}
                    pageCallbackFn ={pageChangeCb}
                  />
              </Paper>
            ) : null}
          </div>
      </div>
    );
  }
}
export default withStyles(styles)(AutoComplete);
