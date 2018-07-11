import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../styles';
import TextField from '../TextField';
import Paper from '../Paper';
import Pagination from '../Pagination/Pagination';
import Divider from '../Divider';
import MenuItem from '../MenuItem';
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
});
const throttling = (fn, wait, maxTimeLong) => {
  wait = wait || 100;
  maxTimeLong = maxTimeLong || 300;
  let timeout = null;
  let start = new Date();
  return function(e) {
    if (timeout) {
      clearTimeout(timeout);
    }
    let now = new Date();
    if (now - start >= maxTimeLong) {
      fn(e);
      start = now;
    } else {
      timeout = setTimeout(e => fn(e), wait);
    }
  };
};
class Mention extends Component {
  static propTypes = {
    /**
     * 输入变化时用来从父组件获取显示的选项
     */
    inputChangeCb: PropTypes.func.isRequired,
    /**
     * 输入变化时用来传递给父组件当前输入值
     */
    onChange: PropTypes.func.isRequired,

    /**
     * 分页的参数
     */
    pageConfig: PropTypes.object,
    /**
     * 提示值
     */
    placeHold: PropTypes.string,
    /**
     * 当选中某个选项时传递给父组件
     */
    onSelect: PropTypes.func.isRequired,
    /**
     * 默认值
     */
    value: PropTypes.string,
    /**
     * 是否禁用
     */
    disabled: PropTypes.bool,
    /**
     * 用于设置触发符号
     */
    triggerOptions: PropTypes.oneOfType(PropTypes.string, PropTypes.array),
    /**
     * 用于设置可选项目
     */
    dataSource: PropTypes.oneOfType(PropTypes.object, PropTypes.array),
    /**
     * 外部传入数据是否出错
     */
    showError: PropTypes.bool,
    /**
     * 初始的选中值
     */
    selected: PropTypes.array,
  };
  static defaultProps = {
    inputChangeCb: function() {
      console.log('need cb function');
    },
    onChange: function() {
      console.log('need cb function');
    },
    onSelect: function() {
      console.log('need cb function');
    },
    disabled: false,
    triggerOptions: ['@'], //默认的触发符号
    pageConfig: {
      currentPage: 1,
      pageSize: 5,
      total: 0,
    },
    placeHold: 'please input something',
    readOnly: false,
    value: '',
    selected: [], //初始化传入的item
  };
  constructor(props) {
    super();
    this.state = {
      open: false,
      inputValue: props.value,
      selectedItem: props.selected,
      triggerOption: '',
      pageConfig: props.pageConfig,
    };
  }
  handleChange = e => {
    let trigger = null;
    if (this.state.open == false) {
      //可选框未打开时打开可选框
      if (
        e.target.value.indexOf(' ') === -1 &&
        this.props.triggerOptions.indexOf(e.target.value.charAt(0)) > -1
      ) {
        //标志符在开头
        trigger = e.target.value[0];
        this.setState({
          open: true,
          triggerOption: trigger,
        });
        this.props.inputChangeCb(e.target.value.slice(1, e.target.value.length), trigger); //让外部传入可选的项目
      } else if (e.target.value.indexOf(' ') > -1) {
        //标志符在中间但是前面有空格
        let stringForComplete = e.target.value.split(' ').pop();
        if (this.props.triggerOptions.indexOf(stringForComplete[0]) > -1) {
          trigger = stringForComplete[0];
        }
        if (trigger) {
          this.setState({
            open: true,
            triggerOption: trigger,
          });
          this.props.inputChangeCb(stringForComplete.slice(1, stringForComplete.length), trigger); //让外部传入可选的项目
        }
      }
    } else {
      //可选框打开时是过滤字符串的功能
      let targetOptionIndex = e.target.value.lastIndexOf(this.state.triggerOption);
      let searchLength = e.target.value.length;
      let filterOption = e.target.value.slice(targetOptionIndex + 1, searchLength);
      this.props.inputChangeCb(filterOption, this.state.triggerOption);
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
  pageChangeCb(i) {
    //切换页面的函数
    console.log('item', i);
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
    const { classes, placeHold, children, dataSource, disabled, showError } = this.props;
    const { total, currentPage, pageSize } = this.state.pageConfig;
    const { open, inputValue, selectedItem } = this.state;
    let items;
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
    } else {
      //通过child传参的情况
      items = React.Children.map(children, child => {
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
      });
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
            placeholder={placeHold}
            error={showError}
          />
          {open ? (
            <Paper className={classes.paper} square>
              {items.slice(
                total == 0 ? total : (currentPage - 1) * pageSize,
                currentPage * pageSize > total ? total : currentPage * pageSize,
              )}
              <Divider />
              <Pagination
                {...this.state.pageConfig}
                pageCallbackFn={this.pageChangeCb.bind(this)}
              />
            </Paper>
          ) : null}
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(Mention);
