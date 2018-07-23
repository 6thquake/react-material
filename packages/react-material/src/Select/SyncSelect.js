import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import SelectStandalone from '@material-ui/core/Select';
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
     * callback to parent component when select options
     */
    onChange: PropTypes.func,
    /**
     * page size
     */
    pageSize: PropTypes.num,
    /**
     * select value,
     */
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.number]),
      ),
    ]),
    /**
     * placeholder
     */
    placeholder: PropTypes.string,
    /**
     * decided multiple select
     */
    multiple: PropTypes.bool,
    /**
     * decided select is disabled
     */
    disabled: PropTypes.bool,
  };
  static defaultProps = {
    placeholder: 'please input something',
  };
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      pageConfig: {
        currentPage: 0,
        pageSize: 5,
        total: 0,
      },
      text: '',
      optionsArray: [],
    };
  }
  handleChange(event) {
    if (event.target)
      if (event.target.value) {
        this.props.onChange(event.target.value);
        this.setState({ value: event.target.value });
      }
  }
  handleDelete = data => () => {
    const chipData = [...this.state.value];
    const chipToDelete = chipData.indexOf(data);
    chipData.splice(chipToDelete, 1);
    this.props.onChange(chipData);
    this.setState({ value: chipData });
  };

  onChangePage(i) {
    this.setState(
      {
        pageConfig: {
          ...this.state.pageConfig,
          currentPage: i,
        },
      },
      () => {
        let op = this.menuItems(this.state.text);
        let start = this.state.pageConfig.currentPage * this.state.pageConfig.pageSize;
        let end =
          (this.state.pageConfig.currentPage + 1) * this.state.pageConfig.pageSize > op.length
            ? undefined
            : (this.state.pageConfig.currentPage + 1) * this.state.pageConfig.pageSize;
        this.setState({
          optionsArray: op.slice(start, end),
        });
      },
    );
  }
  onfilter(e) {
    const op = this.menuItems(e.target.value);
    this.setState(
      {
        text: e.target.value,
        pageConfig: {
          ...this.state.pageConfig,
          currentPage: 0,
          total: op.length,
        },
      },
      () => {
        let op = this.menuItems(this.state.text);
        let start = this.state.pageConfig.currentPage * this.state.pageConfig.pageSize;
        let end =
          (this.state.pageConfig.currentPage + 1) * this.state.pageConfig.pageSize > op.length
            ? undefined
            : (this.state.pageConfig.currentPage + 1) * this.state.pageConfig.pageSize;
        this.setState({
          optionsArray: op.slice(start, end),
        });
      },
    );
  }
  menuItems(text) {
    const { options, children, keyvalue } = this.props;
    let filterData = [];
    if (children) {
      filterData = React.Children.toArray(children).filter(child => {
        return (
          !text ||
          child.key.toLowerCase().indexOf(text.toLowerCase()) !== -1 ||
          child.props.value.toLowerCase().indexOf(text.toLowerCase()) !== -1
        );
      });
      return filterData;
    } else {
      if (Array.isArray(options)) {
        filterData = options.filter(item => {
          if (typeof item !== 'object') {
            return !text || item.toLowerCase().indexOf(text.toLowerCase()) !== -1;
          } else {
            return (
              !text ||
              item[keyvalue['key']].toLowerCase().indexOf(text.toLowerCase()) !== -1 ||
              item[keyvalue['value']].toLowerCase().indexOf(text.toLowerCase()) !== -1
            );
          }
        });
        return filterData.map(name => {
          switch (typeof name) {
            case 'string':
              return (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              );
            case 'object':
              return (
                <MenuItem key={name[keyvalue['key']]} value={name[keyvalue['value']]}>
                  {name[keyvalue['key']]}
                </MenuItem>
              );
            default:
              throw new Error(
                'React-Material:select[dataSource] only supports type `string[] | Object[]`.',
              );
          }
        });
      } else {
        throw new Error('React-Material: the `options` property must be an array ');
      }
    }
  }
  componentDidMount() {
    const { value, children, options, pageSize } = this.props;
    this.setState({
      value,
      pageConfig: {
        ...this.state.pageConfig,
        pageSize: pageSize || 5,
        total: children ? children.length : options.length,
      },
    });
  }
  render() {
    const {
      placeholder,
      multiple,
      classes,
      children,
      options,
      keyvalue,
      disabled,
      htmlFor,
      ...other
    } = this.props;
    const { text, value, pageConfig, optionsArray } = this.state;
    return (
      <SelectStandalone
        {...other}
        multiple={multiple}
        value={value}
        onChange={this.handleChange.bind(this)}
        classes={{
          ...classes,
          root: classes.root,
          selectMenu: classes.selectMenu,
        }}
        inputProps={{
          placeholder: placeholder,
          id: htmlFor,
        }}
        disabled={disabled}
        renderValue={selected => {
          let display = [];
          if (Object.prototype.toString.call(selected) === '[object Array]') {
            if (children) {
              selected.map(n => {
                children.map(item => {
                  if (n === item.props.value) {
                    display.push(item.key);
                  }
                });
              });
            } else {
              if (Array.isArray(options)) {
                selected.map(n => {
                  options.map(item => {
                    if (typeof item !== 'object') {
                      if (n === item) {
                        display.push(item);
                      }
                    } else {
                      if (n === item[keyvalue['value']]) {
                        display.push(item[keyvalue['key']]);
                      }
                    }
                  });
                });
              } else {
                throw new Error('React-Material: the `options` property must be an array ');
              }
            }
          } else {
            if (children) {
              children.map(item => {
                if (selected === item.props.value) {
                  display.push(item.key);
                }
              });
            } else {
              if (Array.isArray(options)) {
                options.map(item => {
                  if (typeof item !== 'object') {
                    if (selected === item) {
                      display.push(item);
                    }
                  } else {
                    if (selected === item[keyvalue['value']]) {
                      display.push(item[keyvalue['key']]);
                    }
                  }
                });
              } else {
                throw new Error('React-Material: the `options` property must be an array ');
              }
            }
          }
          return multiple ? (
            <div className={classes.chips}>
              {display.map(value => (
                <Chip key={value} onDelete={this.handleDelete(value).bind(this)} label={value} />
              ))}
            </div>
          ) : (
            display
          );
        }}
      >
        <AsyncSelectFilter
          fullWidth={true}
          autoFocus={true}
          text={text}
          placeholder={placeholder}
          onChange={this.onfilter.bind(this)}
        />
        {optionsArray}
        <Divider />
        <Pagination {...pageConfig} pageCallbackFn={this.onChangePage.bind(this)} />
      </SelectStandalone>
    );
  }
}
export default withStyles(styles)(AsyncSelect);
