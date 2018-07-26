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
  targetKeysLists: {
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
  devidetargetKeys: {
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
  paginationtargetKeys: {
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
      targetKeysChecked: [],
      temp: {
        dataSource: props.dataSource, //左边渲染的数据
        targetKeys: props.targetKeys,
      },
      pageConfigDataSource: {
        page: props.pageConfig.page || 0,
        rowsPerPage: props.pageConfig.rowsPerPage || 5,
        count: props.pageConfig.count || 5,
      }, //左边的分页参数
      pageConfigtargetKeys: {
        page: props.pageConfig.page || 0,
        rowsPerPage: props.pageConfig.rowsPerPage || 5,
        count: props.pageConfig.count || 5,
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
     * the data in the source box, Array of Object，in the Object, props 'name' and 'id' is required
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
      page: PropTypes.number,
      rowsPerPage: PropTypes.number,
      count: PropTypes.number,
    }),
    /**
     * call-back function when data change,parameters are (targetKeys,direction,moveKeys)
     */
    onChange: PropTypes.func,

    /**
     *Array of Object default selected，in the Object, props 'name' and 'id' is required
     */
    selectedKeys: PropTypes.array.isRequired,

    /**
     *
     */
    paginationOption: PropTypes.bool,
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
    const { dataSourceChecked, targetKeysChecked } = this.state;
    let _checked =
      position == 'left' ? dataSourceChecked : position == 'right' ? targetKeysChecked : '';
    let _otherPos = position == 'left' ? 'right' : 'left';
    let chooseBox = position === 'left' ? 'dataSource' : 'targetKeys';
    let otherBox = position === 'left' ? 'targetKeys' : 'dataSource';
    let sub = this.subSet(this.props[chooseBox], _checked);
    let newData = {};
    newData[chooseBox] = sub;
    newData[otherBox] = [].concat(this.props[otherBox], _checked);
    this.props.onChange(newData.dataSource, newData.targetKeys);
    this.setState({
      dataSourceChecked: [],
      targetKeysChecked: [],
      temp: {
        dataSource: [...newData['dataSource']],
        targetKeys: [...newData['targetKeys']],
      },
      pageConfigDataSource: {
        ...this.props.pageConfig,
        count: newData.dataSource.length,
      },
      pageConfigtargetKeys: {
        ...this.props.pageConfig,
        count: newData.targetKeys.length,
      },
    });
  };

  transferAllToggle = position => () => {
    //左右移动所有
    const { dataSource, targetKeys } = this.props;
    let _checked = position == 'left' ? dataSource : position == 'right' ? targetKeys : '';
    let _otherPos = position == 'left' ? 'right' : 'left';
    let chooseBox = position === 'left' ? 'dataSource' : 'targetKeys';
    let otherBox = position === 'left' ? 'targetKeys' : 'dataSource';
    let sub = this.subSet(this.props[chooseBox], _checked);
    let newData = {};
    newData[chooseBox] = sub;
    newData[otherBox] = [].concat(this.props[otherBox], _checked);
    this.props.onChange(newData.dataSource, newData.targetKeys);
    this.setState({
      dataSourceChecked: [],
      targetKeysChecked: [],
      temp: {
        dataSource: [...newData['dataSource']],
        targetKeys: [...newData['targetKeys']],
      },
      pageConfigDataSource: {
        ...this.props.pageConfig,
        count: newData['dataSource'].length,
      },
      pageConfigtargetKeys: {
        ...this.props.pageConfig,
        count: newData['targetKeys'].length,
      },
    });
    // console.log(this.state.temp.dataSource,this.state.temp.targetKeys);
  };

  handleToggle = (value, position) => () => {
    const { dataSourceChecked, targetKeysChecked } = this.state;
    let _checked =
      position == 'left' ? dataSourceChecked : position == 'right' ? targetKeysChecked : '';

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
        targetKeysChecked: newChecked,
      });
    }
  };

  //过滤文本改変的函数
  textchange = position => e => {
    let chooseBox = position == 'left' ? 'dataSource' : 'targetKeys';
    let otherBox = position == 'left' ? 'targetKeys' : 'dataSource';
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
          page: 0,
          count: newData.dataSource.length,
        },
      });
    } else if (chooseBox == 'targetKeys') {
      this.setState({
        temp: newData,
        pageConfigtargetKeys: {
          ...this.props.pageConfig,
          page: 0,
          count: newData.targetKeys.length,
        },
      });
    }
  };
  pageCallbackFndataSource(currentPage1) {
    //左边的分页参数改变回调
    this.setState({
      pageConfigDataSource: {
        ...this.state.pageConfigDataSource,
        page: currentPage1,
      },
    });
  }
  pageCallbackFntargetKeys(currentPage1) {
    this.setState({
      pageConfigtargetKeys: {
        ...this.state.pageConfigtargetKeys,
        page: currentPage1,
      },
    });
  }
  listItem(options, pageConfig) {
    //只渲染属于该页面的item
    if (Array.isArray(options)) {
      let start = pageConfig.page * pageConfig.rowsPerPage;
      let end =
        (pageConfig.page + 1) * pageConfig.rowsPerPage > options.length
          ? options.length
          : (pageConfig.page + 1) * pageConfig.rowsPerPage;
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
                  onChangePage={this.pageCallbackFndataSource.bind(this)}
                />
              </div>
            )}
          </List>
        </div>

        <div className={classes.lists + ' ' + classes.targetKeysLists}>
          <List>
            {showSearch && (
              <SelectFilter
                fullWidth={true}
                autoFocus={true}
                placeholder={searchPlaceholder}
                onChange={throttling(this.textchange('right')).bind(this)}
              />
            )}
            {this.listItem(this.state.temp.targetKeys, this.state.pageConfigtargetKeys).map(
              value => (
                <ListItem
                  key={value.id}
                  role={undefined}
                  dense
                  button
                  onClick={this.handleToggle(value, 'right')}
                >
                  <Checkbox
                    checked={this.state.targetKeysChecked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                  />
                  <ListItemText primary={`${value.name}`} />
                </ListItem>
              ),
            )}
            <Divider className={classes.devidetargetKeys} />
            {showPagination && (
              <div className={classes.paginationDataSource}>
                <Pagination
                  {...this.state.pageConfigtargetKeys}
                  onChangePage={this.pageCallbackFntargetKeys.bind(this)}
                />
              </div>
            )}
          </List>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { name: 'RMTransfer' })(Transfer);
