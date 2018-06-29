import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import SelectStandalone from '@material-ui/core/Select';
// import SelectInput from './SelectInput';
// import Select2 from './CustomerSelect';
import MenuItem from '../MenuItem';
import Pagination from '../Pagination/Pagination';
import AsyncSelectFilter from './AsyncSelectFilter';
import Divider from '../Divider';
import Chip from '../Chip';
import { withStyles } from '../styles';

const styles = theme => ({
  selectMenu: {
    whiteSpace: 'pre-wrap',
  },
  root: {
    width: '100%',
  },
});

class AsyncSelect extends Component {
    static propTypes = {
      /**
       * callback to parent component when select option
       */
      selectCb : PropTypes.func.isRequired,
      /**
       * select value,
       */
      value : PropTypes.array,
      /**
       * pagination component config
       */
      pageConfig: PropTypes.object,
      /**
       * placeholder
       */
      placeholder: PropTypes.string,
      /**
       * decided multiple select
       */
      multiple: PropTypes.bool,
      /**
       * callback to parent component when current page change
       */
      pageChangeCb : PropTypes.func,
      /**
       * callback to parent component when  filter change
       */
      filterChangeCb : PropTypes.func,
      /**
       * decided select is disabled
       */
      disabled : PropTypes.bool,
      /**
       * Whether to display the search box
       */
      showSearch : PropTypes.bool,
      /**
       * Whether to display the pagination
       */
      showPagination : PropTypes.bool,
      /**
       * filter function
       */
      onFilter : PropTypes.fun,

    };
    static defaultProps = {
      selectCb:function () {
        console.log("need cb function")
      },
      pageChangeCb:function () {
        console.log("need cb function")
      },
      filterChangeCb:function () {
        console.log("need cb function")
      },
      pageConfig:{
        currentPage: 0,
        pageSize: 5,
        total:0
      },
      placeHold:'please input something',
      multiple:false,
      value:'',
      disabled:false,
      showSearch:true,
      showPagination:true,
    };
    constructor(props) {
        super(props);
        this.state = {
            values: [],
            display:null,
        };
    }
    handleChange(event) {
        if(event.target)
        if(event.target.value){
            this.props.selectCb(event.target.value);
            this.setState({values:event.target.value});
        }
    };
    handleDelete= data => () => {
        const chipData = [...this.state.values];
        const chipToDelete = chipData.indexOf(data);
        chipData.splice(chipToDelete, 1);
        this.props.selectCb(chipData);
        this.setState({ values:chipData });
    };

  handleChange(event) {
    if (event.target)
      if (event.target.value) {
        this.props.selectCb(event.target.value);
        this.setState({ values: event.target.value });
      }
  }
  handleDelete = data => () => {
    const chipData = [...this.state.values];
    const chipToDelete = chipData.indexOf(data);
    chipData.splice(chipToDelete, 1);
    this.props.selectCb(chipData);
    this.setState({ values: chipData });
  };
    pageCallbackFn(currentPage1) {
      this.props.pageChangeCb(currentPage1);
    }
    textchange(e) {
      // const {onFilter} =this.props;
      // if(!onFilter){
      //   const filteString = e.target.value;
      //   const filterData=this.props.options.filter(
      //       item => {
      //           return !filteString || JSON.stringify(item).toLowerCase().indexOf(filteString.toLowerCase()) !== -1;
      //       }
      //   );
      //   this.setState({
      //       currentPage:0,
      //       options: filterData
      //   });
      // }else{
        this.props.filterChangeCb(e.target.value);
      // }
    }
    menuItems(values) {
        const {pageConfig,options,children,keyValue} = this.props;
        if(children){
          return children
        }else {
          if (Array.isArray(options)) {
            let start = pageConfig.currentPage * pageConfig.pageSize;
            let end = (pageConfig.currentPage + 1) * pageConfig.pageSize > options.length ? undefined : (pageConfig.currentPage + 1) * pageConfig.pageSize;
            return options.slice(start, end).map((name) => {
              switch (typeof name) {
                case 'string':
                  return <MenuItem key={name} value={name}>{name}</MenuItem>;
                case 'object':
                  return <MenuItem key={name[keyValue['key']]}
                                   value={name[keyValue['value']]}>{name[keyValue['key']]}</MenuItem>;
                default:
                  throw new Error('select[dataSource] only supports type `string[] | Object[]`.');
              }
            });
          } else {
            throw new Error(
              'React-Material: the `options` property must be an array '
            );
          }
        }}
  componentDidMount() {
    if (!this.props.multiple) {
      this.setState({
        values: this.props.value,
      });
    } else {
      this.setState({
        values: [...this.props.value],
      });
    }}

    render() {
        const {pageConfig, placeholder, multiple,classes,disabled,htmlFor,showSearch,showPagination,...other} = this.props;
        const {values,display} =this.state;
        return (
            <SelectStandalone
                {...other}
                multiple={multiple}
                value={this.state.values}
                onChange={this.handleChange.bind(this)}
                classes={{
                  ...classes,
                  root: classes.root,
                  selectMenu: classes.selectMenu,
                }}
                inputProps={{
                    placeholder: placeholder,
                    id:htmlFor
                }}
                disabled={disabled}
                renderValue={selected => {
                  let display=[];
                  this.menuItems().map(item=>{
                      if (!React.isValidElement(item)) {
                        return null;
                      }
                      if(typeof values ==='string'){
                        if(selected===item.props.value){
                          display=item.key;
                        }
                      }
                      if(typeof values ==='object'){
                        selected.map(n=>{
                          if(n===item.props.value){
                            display.push(item.key);
                          }
                        })
                      }
                    });
                 return (multiple? <div className={classes.chips}>{
                   display.map(value => <Chip key={value}  onDelete={this.handleDelete(value).bind(this)} label={value} />)}
                  </div>:display)
                 }
              }
            >
              {showSearch?<AsyncSelectFilter
                    fullWidth={true}
                    autoFocus={true}
                    placeholder={placeholder}
                    onChange={this.textchange.bind(this)}
                />:null}
                {this.menuItems(this.state.values)}
                <Divider/>
              {showPagination?<Pagination
                    {...pageConfig}
                    pageCallbackFn={this.pageCallbackFn.bind(this)}
                >
                </Pagination>:null}
            </SelectStandalone>
        );}
}
export default withStyles(styles, { name: 'RMAsyncSelect' })(AsyncSelect);
