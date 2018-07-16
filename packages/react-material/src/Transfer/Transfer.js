import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../styles';
import List from '../List';
import ListItem from '../ListItem';
import ListItemSecondaryAction from '../ListItemSecondaryAction';
import ListItemText from '../ListItemText';
import Checkbox from '../Checkbox';
import Button from '../Button';
import IconButton from '../IconButton';
import SelectFilter from './SelectFilter';
import { ChevronRight, ChevronLeft, LastPage, FirstPage } from '@material-ui/icons';
import { Select } from '@material-ui/core';
import Pagination from '../Pagination/Pagination';
import Divider from '../Divider';
import throttling from '../utils/throttling.js';
const styles = {
  root: {
    minWidth: '700px',
    height: '100%',
    minHeight: '300px',
    width: '100%',
    position: 'relative',
  },
  lists: {
    height: '100%',
    maxHeight: '400px',
    overflow: 'scroll',
    display: 'inline-block',
    border: '1px solid rgba(0,0,0,0.1)',
    width: '45%',
    minWidth: '300px',
    maxWidth: '300px',
    position: 'absolute',
  },
  dataSourceLists: {},
  selectedKeysLists: {
    right: '0',
    top: '0',
  },
  btngrp: {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  devideDataSource: {
    position: 'absolute',
    top: '250px',
    left: '0',
    width: '100%',
  },
  devideSelectedKeys: {
    position: 'absolute',
    top: '250px',
    right: '0',
    width: '100%',
  },
  paginationDataSource: {
    position: 'absolute',
    top: '240px ',
    left: '0',
    width: '100%',
  },
  paginationSelectedKeys: {
    position: 'absolute',
    top: '240px',
    right: '0',
    width: '100%',
  },
};

class Transfer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSourceChecked: [], //左边选中的item
      selectedKeysChecked: [],
      temp: {
        dataSource: props.dataSource, //左边渲染的数据
        selectedKeys: props.selectedKeys,
      },
      pageConfigDataSource: {
        currentPage: props.pageConfig.currentPage || 0,
        pageSize: props.pageConfig.pageSize || 5,
        total: props.pageConfig.total || 5,
      }, //左边的分页参数
      pageConfigSelectedKeys: {
        currentPage: props.pageConfig.currentPage || 0,
        pageSize: props.pageConfig.pageSize || 5,
        total: props.pageConfig.total || 5,
      },
    };
  }
  static defaultProps = {
    searchPlaceholder: 'please input something',
    onChange: function() {
      console.log('need cb function');
    },
    showSearch: false,
    paginationOption: false,
  };
  static propTypes = {
    /**
     * choose to generate filter box
     */
    showSearch: PropTypes.bool,
    /**
     * placeholder in filter box
     */
    searchPlaceholder: PropTypes.string,
    /**
     * the data in the source box
     */
    dataSource: PropTypes.array.isRequired,
    /**
     * the data in the target box
     */
    targetKeys: PropTypes.array.isRequired,
    /**
     * pageConfig should contain total,pageSize,currentPage
     */
    pageConfig: PropTypes.shape({
      currentPage: PropTypes.number,
      pageSize: PropTypes.number,
      total: PropTypes.number,
    }),
    /**
     * call-back function when data change,parameters are (targetKeys,direction,moveKeys)
     */
    onChange: PropTypes.func,
  };
  //数组去重
  subSet = (arr1, arr2) => {
    var set1 = new Set(arr1);
    var set2 = new Set(arr2);

    var subset = [];

    for (let item of set1) {
      if (!set2.has(item)) {
        subset.push(item);
      }
    }

    return subset;
  };

  transferToggle = position => () => {
    //左右移动选中部分
    const { dataSourceChecked, selectedKeysChecked } = this.state;
    let _checked =
      position == 'left' ? dataSourceChecked : position == 'right' ? selectedKeysChecked : '';
    let _otherPos = position == 'left' ? 'right' : 'left';
    let chooseBox = position === 'left' ? 'dataSource' : 'selectedKeys';
    let otherBox = position === 'left' ? 'selectedKeys' : 'dataSource';
    let aaa = this.subSet(this.props[chooseBox], _checked);
    let newData = {};
    newData[chooseBox] = aaa;
    newData[otherBox] = [].concat(this.props[otherBox], _checked);
    this.setState({
      dataSourceChecked: [],
      selectedKeysChecked: [],
      temp: {
        dataSource: [...newData['dataSource']],
        selectedKeys: [...newData['selectedKeys']],
      },
      pageConfigDataSource: {
        ...this.props.pageConfig,
        total: newData.dataSource.length,
      },
      pageConfigSelectedKeys: {
        ...this.props.pageConfig,
        total: newData.selectedKeys.length,
      },
    });
    this.props.onChange(newData.selectedKeys, _otherPos, _checked);
  };

  transferAllToggle = position => () => {
    //左右移动所有
    const { dataSource, selectedKeys } = this.props;
    let _checked =
      position == 'left' ? dataSourceChecked : position == 'right' ? selectedKeysChecked : '';
    let _otherPos = position == 'left' ? 'right' : 'left';
    let chooseBox = position === 'left' ? 'dataSource' : 'selectedKeys';
    let otherBox = position === 'left' ? 'selectedKeys' : 'dataSource';
    let aaa = this.subSet(this.props[chooseBox], _checked);
    let newData = {};
    newData[chooseBox] = aaa;
    newData[otherBox] = [].concat(this.props[otherBox], _checked);
    this.setState({
      dataSourceChecked: [],
      selectedKeysChecked: [],
      temp: {
        dataSource: [...newData['dataSource']],
        selectedKeys: [...newData['selectedKeys']],
      },
      pageConfigdataSource: {
        ...this.props.pageConfig,
        total: newData.dataSource.length,
      },
      pageConfigSelectedKeys: {
        ...this.props.pageConfig,
        total: newData.selectedKeys.length,
      },
    });
    this.props.onChange(newData.selectedKeys, _otherPos, _checked);
  };

  handleToggle = (value, position) => () => {
    const { dataSourceChecked, selectedKeysChecked } = this.state;
    let _checked =
      position == 'left' ? dataSourceChecked : position == 'right' ? selectedKeysChecked : '';

    const currentIndex = _checked.indexOf(value);
    const newChecked = [..._checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    if (position == 'left') {
      this.setState({
        dataSourceChecked: newChecked,
      });
    }
    if (position == 'right') {
      this.setState({
        selectedKeysChecked: newChecked,
      });
    }
  };

  //过滤文本改変的函数
  textchange = position => e => {
    let chooseBox = position == 'left' ? 'dataSource' : 'selectedKeys';
    let otherBox = position == 'left' ? 'selectedKeys' : 'dataSource';
    const filterString = e.target.value;
    const filterData = this.props[chooseBox].filter(item => {
      return !filterString || item.name.toLowerCase().indexOf(filterString.toLowerCase()) !== -1;
    });
    let newData = {};
    newData[chooseBox] = filterData;
    newData[otherBox] = this.state.temp[otherBox];
    if (chooseBox == 'dataSource') {
      this.setState({
        temp: newData,
        pageConfigDataSource: {
          ...this.props.pageConfig,
          currentPage: 0,
          total: newData.dataSource.length,
        },
      });
    } else if (chooseBox == 'selectedKeys') {
      this.setState({
        temp: newData,
        pageConfigSelectedKeys: {
          ...this.props.pageConfig,
          currentPage: 0,
          total: newData.selectedKeys.length,
        },
      });
    }
  };
  pageCallbackFndataSource(currentPage1) {
    //左边的分页参数改变回调
    this.setState({
      pageConfigDataSource: {
        ...this.state.pageConfigDataSource,
        currentPage: currentPage1,
      },
    });
  }
  pageCallbackFnselectedKeys(currentPage1) {
    this.setState({
      pageConfigSelectedKeys: {
        ...this.state.pageConfigSelectedKeys,
        currentPage: currentPage1,
      },
    });
  }
  listItem(options, pageConfig) {
    //只渲染属于该页面的item
    if (Array.isArray(options)) {
      let start = pageConfig.currentPage * pageConfig.pageSize;
      let end =
        (pageConfig.currentPage + 1) * pageConfig.pageSize > options.length
          ? undefined
          : (pageConfig.currentPage + 1) * pageConfig.pageSize;
      return options.slice(start, end);
    } else {
      throw new Error('React-Material: the `options` property must be an array ');
    }
  }

  render() {
    const { classes, showSearch, searchPlaceholder, pageConfig } = this.props;
    let showPagination = false;
    if (pageConfig) {
      showPagination = true;
    }
    return (
      <div className={classes.root}>
        <div className={classes.btngrp}>
          <Button color="primary" onClick={this.transferAllToggle('left')}>
            <LastPage />
          </Button>
          <br />
          <Button color="primary" onClick={this.transferToggle('left')}>
            <ChevronRight />
          </Button>
          <br />
          <Button color="primary" onClick={this.transferToggle('right')}>
            <ChevronLeft />
          </Button>
          <br />
          <Button color="primary" onClick={this.transferAllToggle('right')}>
            <FirstPage />
          </Button>
        </div>

        <div className={classes.lists + ' ' + classes.dataSourceLists}>
          <List>
            {showSearch && (
              <SelectFilter
                fullWidth={true}
                autoFocus={true}
                placeholder={searchPlaceholder}
                onChange={throttling(this.textchange('left')).bind(this)}
              />
            )}
            {this.listItem(this.state.temp.dataSource, this.state.pageConfigDataSource).map(
              value => (
                <ListItem
                  key={value.id}
                  role={undefined}
                  dense
                  button
                  onClick={this.handleToggle(value, 'left')}
                >
                  <Checkbox
                    checked={this.state.dataSourceChecked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                  />
                  <ListItemText primary={`${value.name}`} />
                </ListItem>
              ),
            )}
            <Divider className={classes.devideDataSource} />
            {showPagination && (
              <div className={classes.paginationDataSource}>
                <Pagination
                  {...this.state.pageConfigDataSource}
                  pageCallbackFn={this.pageCallbackFndataSource.bind(this)}
                />
              </div>
            )}
          </List>
        </div>

        <div className={classes.lists + ' ' + classes.selectedKeysLists}>
          <List>
            {showSearch && (
              <SelectFilter
                fullWidth={true}
                autoFocus={true}
                placeholder={searchPlaceholder}
                onChange={throttling(this.textchange('right')).bind(this)}
              />
            )}
            {this.listItem(this.state.temp.selectedKeys, this.state.pageConfigSelectedKeys).map(
              value => (
                <ListItem
                  key={value.id}
                  role={undefined}
                  dense
                  button
                  onClick={this.handleToggle(value, 'right')}
                >
                  <Checkbox
                    checked={this.state.selectedKeysChecked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                  />
                  <ListItemText primary={`${value.name}`} />
                </ListItem>
              ),
            )}
            <Divider className={classes.devideSelectedKeys} />
            {showPagination && (
              <div className={classes.paginationDataSource}>
                <Pagination
                  {...this.state.pageConfigSelectedKeys}
                  pageCallbackFn={this.pageCallbackFnselectedKeys.bind(this)}
                />
              </div>
            )}
          </List>
        </div>
      </div>
    );
  }
}

Transfer.propTypes = {
  /**
   *Array of Object，in the Object, props 'name' and 'id' is required
   */
  dataSource: PropTypes.array.isRequired,
  /**
   *Array of Object，in the Object, props 'name' and 'id' is required
   *
   */
  selectedKeys: PropTypes.array.isRequired,
  /**
   * onchange callback function
   */
  onChange: PropTypes.func.isRequired,
};

export default withStyles(styles, { name: 'RMTransfer' })(Transfer);
