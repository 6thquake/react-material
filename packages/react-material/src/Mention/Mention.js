import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../styles';
import TextField from '../TextField';
import Paper from '../Paper';
import Pagination from '../Pagination/Pagination';
import Divider from '../Divider';
import MenuItem from '../MenuItem';
import throttling from '../utils/throttling.js';
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    flexGrow: 1,
    position: 'relative',
  },
  textarea: {
    width: '100%',
  },
  modal: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflow: 'hidden',
    outline: 0,
    backgroundColor: 'rgb(0, 0, 0)',
    opacity: 0,
    zIndex: 1,
  },
  paper: {
    position: 'absolute',
    zIndex: 200,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
    padding: '10px',
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
  },
  inputRoot: {
    flexGrow: 1,
    flexWrap: 'wrap',
  },
  inputHold: {
    padding: '10px 0 7px',
  },
  notFound: {
    padding: '10px',
    color: 'rgba(0,0,0,0.5)',
  },
});
class Mention extends Component {
  static propTypes = {
    /**
     * Callback when input @ content changes,parameters are (value,trigger)
     */
    // inputChangeCb: PropTypes.func.isRequired,
    onSearchChange: PropTypes.func.isRequired,
    /**
     * Callback when input content changes
     */
    onChange: PropTypes.func.isRequired,

    /**
     * pagination config
     */
    pageConfig: PropTypes.shape({
      currentPage: PropTypes.number,
      pageSize: PropTypes.number,
      total: PropTypes.number,
    }),
    /**
     * text palcehold
     */
    placeholder: PropTypes.string,
    /**
     * callback when select value change
     */
    onSelect: PropTypes.func.isRequired,
    /**
     * default value
     */
    defaultValue: PropTypes.string,
    /**
     * should component disabled
     */
    disabled: PropTypes.bool,
    /**
     * set char of trigger
     */
    //triggerOptions: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    prefix: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    /**
     * set the option to  be selected
     */
    dataSource: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    /**
     * show error
     */
    showError: PropTypes.bool,
    /**
     * initial selected value
     */
    selected: PropTypes.array,
    /**
     * set if the text can only be read
     */
    readOnly: PropTypes.bool,
  };
  static defaultProps = {
    onSearchChange: function() {
      console.log('need cb function');
    },
    onChange: function() {
      console.log('need cb function');
    },
    onSelect: function() {
      console.log('need cb function');
    },
    disabled: false,
    prefix: ['@'], //默认的触发符号
    placeholder: 'please input something',
    readOnly: false,
    defaultValue: '',
    selected: [], //初始化传入的item
  };
  constructor(props) {
    super();
    this.state = {
      open: false,
      inputValue: props.defaultValue,
      selectedItem: props.selected,
      triggerOption: '',
      pageConfig: {
        currentPage: props.pageConfig.currentPage || 0,
        pageSize: props.pageConfig.pageSize || 5,
        total: props.pageConfig.total || 5,
      },
    };
  }
  handleChange = e => {
    let trigger = null;
    if (this.state.open == false) {
      //可选框未打开时打开可选框
      if (
        e.target.value.indexOf(' ') === -1 &&
        this.props.prefix.indexOf(e.target.value.charAt(0)) > -1
      ) {
        //标志符在开头
        trigger = e.target.value[0];
        this.setState({
          open: true,
          triggerOption: trigger,
        });
        this.props.onSearchChange(e.target.value.slice(1, e.target.value.length), trigger); //让外部传入可选的项目
      } else if (e.target.value.indexOf(' ') > -1) {
        //标志符在中间但是前面有空格
        let stringForComplete = e.target.value.split(' ').pop();
        if (this.props.prefix.indexOf(stringForComplete[0]) > -1) {
          trigger = stringForComplete[0];
        }
        if (trigger) {
          this.setState({
            open: true,
            triggerOption: trigger,
          });
          this.props.onSearchChange(stringForComplete.slice(1, stringForComplete.length), trigger); //让外部传入可选的项目
        }
      }
    } else {
      //可选框打开时是过滤字符串的功能
      let targetOptionIndex = e.target.value.lastIndexOf(this.state.triggerOption);
      let searchLength = e.target.value.length;
      let filterOption = e.target.value.slice(targetOptionIndex + 1, searchLength);
      this.props.onSearchChange(filterOption, this.state.triggerOption);
    }
    this.setState({
      inputValue: e.target.value,
    });
    this.props.onChange(e.target.value); //用来回显
  };
  handleItemClick = item => e => {
    let position = this.state.inputValue.lastIndexOf(this.state.triggerOption); //找到触发符号的位置
    let newValue = this.state.inputValue.slice(0, position + 1) + item; //把选中的item接到后面
    let newSelectedItem = [...this.state.selectedItem, item]; //所有的选中值
    this.setState({
      open: false,
      inputValue: newValue,
      selectedItem: newSelectedItem,
    });
    this.props.onSelect(newSelectedItem); //回传选中值
    this.props.onChange(newValue); //回传输入值
  };
  handleBlur(e) {
    this.setState({
      open: false,
    });
  }
  pageCallbackFn(i) {
    //切换页面的函数
    // console.log('item', i);
    this.setState({
      pageConfig: {
        ...this.state.pageConfig,
        currentPage: i,
      },
    });
  }
  static getDerivedStateFromProps(newprops, prestate) {
    //父组件改変分页参数时state要跟着变
    if (newprops.pageConfig !== prestate.pageConfig) {
      return {
        pageConfig: { ...newprops.pageConfig },
      };
    } else {
      return null;
    }
  }
  render() {
    const {
      classes,
      placeholder,
      children,
      dataSource,
      disabled,
      showError,
      pageConfig,
    } = this.props;
    const { total, currentPage, pageSize } = this.state.pageConfig;
    const { open, inputValue, selectedItem } = this.state;
    let items;
    let showPagination = false;
    let noItemPatterned = false;
    noItemPatterned = (dataSource && dataSource.length == 0) || (!dataSource && !React.children);
    // console.log(noItemPatterned)
    if (pageConfig) {
      showPagination = true;
    }
    if (dataSource) {
      //通过dataSource传参的情况
      items = dataSource
        ? dataSource.map(item => {
            let selected = false;
            if (typeof item === 'string') {
              if (!Array.isArray(selectedItem)) {
                throw new Error(
                  'React-Material: the `value` property must be an array ' +
                    'when using the `AutoComplete` component with `multiple`.',
                );
              }
              selected = selectedItem.indexOf(item) !== -1;
              return (
                <MenuItem
                  key={item}
                  value={item}
                  selected={selected}
                  onClick={this.handleItemClick(item)}
                >
                  {item}
                </MenuItem>
              );
            } else {
              throw new Error('AutoComplete[dataSource] only supports type `string[] | Object[]`.');
            }
          })
        : [];
    } else if (React.Children) {
      //通过child传参的情况
      items = React.Children
        ? React.Children.map(children, child => {
            if (!React.isValidElement(child)) {
              return null;
            }
            let selected = false;
            if (!Array.isArray(selectedItem)) {
              throw new Error(
                'React-Material: the `value` property must be an array ' +
                  'when using the `AutoComplete` component with `multiple`.',
              );
            }
            selected = selectedItem.indexOf(child.props.value) !== -1;
            return React.cloneElement(child, {
              onClick: this.handleItemClick(child.props.value),
              role: 'option',
              selected,
              value: undefined, // The value is most likely not a valid HTML attribute.
              'data-value': child.props.value, // Instead, we provide it as a data attribute.
            });
          })
        : [];
    }
    return (
      <div className={classes.root}>
        {open ? <div onClick={this.handleBlur.bind(this)} className={classes.modal} /> : null}
        <div className={classes.container}>
          <TextField
            disabled={disabled}
            className={classes.textarea}
            onChange={throttling(this.handleChange).bind(this)}
            value={inputValue}
            placeholder={placeholder}
            error={showError}
          />
          {open &&
            !noItemPatterned && (
              <Paper className={classes.paper} square>
                {items.slice(
                  total == 0 ? total : currentPage * pageSize,
                  (currentPage + 1) * pageSize > total ? total : (currentPage + 1) * pageSize,
                )}
                <Divider />
                {showPagination && (
                  <Pagination
                    {...this.state.pageConfig}
                    pageCallbackFn={this.pageCallbackFn.bind(this)}
                  />
                )}
              </Paper>
            )}
          {open &&
            noItemPatterned && (
              <Paper className={classes.notFound}>
                {'no patterned result, press space to end'}
              </Paper>
            )}
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { name: 'RMMention' })(Mention);
