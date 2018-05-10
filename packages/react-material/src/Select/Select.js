import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import Select from 'material-ui/Select';
import Menu, { MenuItem } from 'material-ui/Menu';
import Pagination from '../Pagination/Pagination'
import RMTextField from './TextField'
import Divider from 'material-ui/Divider';
import Chip from 'material-ui/Chip';
import { withStyles } from 'material-ui/styles';
const styles = theme => ({
  selectMenu:{
    whiteSpace: 'pre-wrap',
  },
  root:{
    width:'100%'
  },
});
class AsynSelect extends Component {
    static propTypes = {
      /**
       * callback to parent component when select option
       */
      selectCb : PropTypes.func.isRequired,
      /**
       * default select value,用于回显
       */
      value : PropTypes.array,
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
       * callback to parent component when currentpage change
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
        currentPage: 1,
        pageSize: 5,
        total:0
      },
      placeHold:'please input something',
      multiple:false,
      value:'',
      disabled:false
    };
    constructor(props) {
        super(props);
        this.state = {
            values: [],
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

    pageCallbackFn(currentPage1) {
      this.props.pageChangeCb(currentPage1);
    }
    textchange(e) {
        // const filteString = e.target.value;
        // const filterData=this.props.options.filter(
        //     item => {
        //         return !filteString || item.toLowerCase().indexOf(filteString.toLowerCase()) !== -1;
        //     }
        // );
        // this.setState({
        //     currentPage:1,
        //     options: filterData
        // });
      this.props.filterChangeCb(e.target.value);
    }
    menuItems(values) {
        const {pageConfig,options,children,keyValue} = this.props;
        if(children){
          return children
        }else{
          if(Array.isArray(options)){
            let start = (pageConfig.currentPage - 1) * pageConfig.pageSize;
            let end = pageConfig.currentPage * pageConfig.pageSize > options.length ? undefined :pageConfig.currentPage * pageConfig.pageSize;
            return options.slice(start, end).map((name) => {
              switch (typeof name) {
                case 'string':
                  return <MenuItem key={name} value={name}>{name}</MenuItem>;
                case 'object':
                  return <MenuItem key={name[keyValue[0]]} value={name[keyValue[1]]}>{name[keyValue[0]]}</MenuItem>;
                default:
                  throw new Error('select[dataSource] only supports type `string[] | Object[]`.');
              }
            });
          } else {
            throw new Error(
              'React-Material: the `options` property must be an array '
            );
          }
        }
    };
    componentDidMount () {
      if(!this.props.multiple){
        this.setState({
          values:this.props.value
        });
      }else{
        this.setState({
          values:[...this.props.value]
        });
      }
    }
    render() {
        const {pageConfig, placeholder, multiple,classes,disabled,...other} = this.props;
        return (
            <Select
                {...other}
                multiple={multiple}
                value={this.state.values}
                onChange={this.handleChange.bind(this)}
                classes={{
                  root: classes.root,
                  selectMenu: classes.selectMenu,
                }}
                inputProps={{
                    placeholder: placeholder,

                }}
                disabled={disabled}
                renderValue={selected => (
                    multiple? <div className={classes.chips}>{
                      selected.map(value => <Chip key={value}  onDelete={this.handleDelete(value).bind(this)} label={value} />)}
                      </div>:selected
                )}
            >
                <RMTextField
                    fullWidth={true}
                    autoFocus={true}
                    placeholder={placeholder}
                    onChange={this.textchange.bind(this)}
                />
                {this.menuItems(this.state.values)}
                <Divider/>
                <Pagination
                    {...pageConfig}
                    pageCallbackFn={this.pageCallbackFn.bind(this)}
                >
                </Pagination>
            </Select>
        );
    }
}
export default withStyles(styles)(AsynSelect);
