import React, {Component, Fragment} from 'react';
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
    maxWidth:'200px'
  }
});
 class RMselect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: [],
            currentPage: 1,
            options:this.props.options
        };
        this.pageCallbackFn = this.pageCallbackFn.bind(this);
        this.textchange = this.textchange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
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
        this.setState({currentPage: currentPage1});
    }
    textchange(e) {
        const filteString = e.target.value;
        const filterData=this.props.options.filter(
            item => {
                return !filteString || item.toLowerCase().indexOf(filteString.toLowerCase()) !== -1;
            }
        );
        this.setState({
            currentPage:1,
            options: filterData
        });
    }
    menuItems(values) {
        const style = {
            padding: '0px 24px 0px 10px'
        };
        const {pageConfig} = this.props;
        const {options} = this.state;

        let start = (this.state.currentPage - 1) * pageConfig.pageSize;
        let end = this.state.currentPage * pageConfig.pageSize > options.length ? undefined : this.state.currentPage * pageConfig.pageSize;
        return options.slice(start, end).map((name) => (
            <MenuItem
                key={name}
                checked={values && values.indexOf(name) > -1}
                value={name}
            >          {name}
             </MenuItem>
        ));
    };

    render() {
        /**
         * pageConfig,分页config
         * placeholder, placeholder
         * multiple :是否多选，默认值为false
         * value：默认选择的值
         * selectCb:返回选择的值给父组件
         */
        const {pageConfig, placeholder, multiple = false, value,selectCb} = this.props;
        const pageConfigPa ={
                currentPage: this.state.currentPage,
                pageSize: pageConfig.pageSize,
                total:this.state.options.length,
                totalPage: Math.ceil(this.state.options.length/pageConfig.pageSize)
        };

        return (
            <Select
                multiple={multiple}
                value={this.state.values}
                onChange={this.handleChange}
                inputProps={{
                    placeholder: placeholder,
                }}
                renderValue={selected => (
                    multiple? <div >{selected.map(value => <Chip key={value}  onDelete={this.handleDelete(value)} label={value} />)}</div>:selected
                )}
            >
                <RMTextField
                    fullWidth={true}
                    autoFocus={true}
                    placeholder={placeholder}
                    onChange={this.textchange}
                />
                {this.menuItems(this.state.values)}
                <Divider/>
                <Pagination
                    {...pageConfigPa}
                    pageCallbackFn={this.pageCallbackFn}
                >
                </Pagination>
            </Select>
        );
    }
}
export default withStyles(styles)(RMselect);
