import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '../styles';
// import './StarVote.css';
import PropTypes from 'prop-types';
import { StarBorder } from '@material-ui/icons';
import { StarHalf } from '@material-ui/icons';
import { Star } from '@material-ui/icons';

const styles = {
  rmVote: {
    margin: '0',
    padding: '0',
    listStyle: 'none',
    fontSize: '18px',
    display: 'inline-block',
    verticalAlign: 'middle',
    fontWeight: '400',
    fontStyle: 'normal',
  },

  rmVoteStar: {
    color: '#f5a623',
    margin: '0',
    padding: '0',
    cursor: 'pointer',
    display: 'inline-block',
    marginRight: '8px',
    position: 'relative',
    transition: 'all .3s ease',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },

  rmVoteDisabled: {
    '@global li': {
      '&:hover': {
        cursor: 'default',
        transform: 'scale(1)',
      },
    },
  },
  rmVoteStarFull: {},
  rmVoteStarZero: {},
  rmVoteStarHalf: {},
  rmVoteStarContent: {
    position: 'absolute',
    left: '0',
    top: '0',
    width: '50%',
    height: '100%',
    overflow: 'hidden',
  },
};

class StarVote extends React.Component {
  static propTypes = {
    /**
     *  total count of star
     */
    count: PropTypes.func,
    /**
     *   current value，controlled value
     */
    value: PropTypes.number,

    /**
     *   The default value
     */
    defaultValue: PropTypes.number,
    /**
     * onChange callback function
     */
    onChange: PropTypes.func,
    /**
     * if allowed half
     */
    allowHalf: PropTypes.bool,
    /**
     * read only,can not interact
     */
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    count: 5,
    defaultValue: 0,
    allowHalf: false,
    disabled: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      count: props.count,
      value: props.value,
      defaultValue: props.defaultValue,
      onChange: props.onChange,
      allowHalf: props.allowHalf,
      disabled: props.disabled,
      tagArr: [],
      tagArrTemp: [],
    };

    try {
      if (Boolean(this.state.allowHalf)) {
        //允许半选
        this.state.allowHalf = true;
      } else {
        this.state.allowHalf = false; //默认不允许半选
      }

      if (Boolean(this.state.disabled)) {
        this.state.disabled = true; // 只读，无法进行交互
      } else {
        this.state.disabled = false; // 默认为false 可以进行点击、取消等交互事件
      }

      if (!this.state.count) {
        this.state.count = 5; // 未提供总数 默认 为 5
      } else if (!parseInt(this.state.count)) {
        throw new Error('the attribute count must be integer type!');
      } else {
        this.state.count = this.state.count > 10 ? 10 : Math.abs(this.state.count);
      }

      if (this.state.value) {
        //存在当前数
        if (!this.state.allowHalf) {
          // 不允许半选，count 、 value等验证必须为整数 且受控值 value 必须小于 cout
          if (!parseInt(this.state.value)) {
            throw new Error('not integer type of the attribute value!');
          } else if (this.state.value > this.state.count) {
            throw new Error('attribute value must less than the attribute count');
          } else {
            this.state.value = Math.abs(this.props.value);
          }
        } else {
          // 如果允许半选，存在当前数的情况 需要验证当前数是否是数值 必须是 0.5的倍数 且小于 count
          if (Math.sign(this.state.value) != 'NaN') {
            if (!parseInt(Math.abs(this.state.value) / 0.5)) {
              throw new Error('attribute value must be an integer or multiple of 0.5!');
            } else {
              this.state.value = Math.abs(this.state.value);
            }
          }
        }
      }

      if (this.state.defaultValue) {
        //存在defaultValue
        if (!this.state.allowHalf) {
          // 不允许半选，defaultValue等验证必须为整数 且受控值 value 必须小于 cout
          if (!parseInt(this.state.defaultValue)) {
            throw new Error('not integer type of the attribute value!');
          } else if (this.state.defaultValue > this.state.count) {
            throw new Error('attribute value must less than the attribute count');
          } else {
            this.state.defaultValue = Math.abs(this.props.defaultValue);
          }
        } else {
          // 如果允许半选，存在defaultValue的情况 需要验证 defaultValue 是否是数值 必须是 0.5的倍数 且小于 count
          if (Math.sign(this.state.defaultValue) != 'NaN') {
            if (!parseInt(Math.abs(this.state.defaultValue) / 0.5)) {
              throw new Error('attribute value must be an integer or multiple of 0.5!');
            } else {
              this.state.defaultValue = Math.abs(this.state.defaultValue);
            }
          }
        }
      } else {
        this.state.defaultValue = 0;
      }
    } catch (err) {
      console.log(err);
    }
  }

  componentDidMount() {
    let tagArray = [];
    if (this.state.value) {
      // 如果存在当前数 按照当前数去渲染
      for (var i = 0; i < this.state.count; i++) {
        if (this.state.value.toString().includes('.5')) {
          //当前数为半数
          if (Math.floor(this.state.value) == i) {
            tagArray.push(0.5);
          } else if (Math.floor(this.state.value) > i) {
            tagArray.push(1);
          } else {
            tagArray.push(0);
          }
        } else {
          //当前数为整数
          if (i < this.state.value) {
            tagArray.push(1);
          } else {
            //包括大于等于
            tagArray.push(0);
          }
        }
      }
    } else if (this.state.defaultValue) {
      // 不存在当前数 按照defaultValue 处理
      for (var i = 0; i < this.state.count; i++) {
        if (this.state.value.toString().includes('.5')) {
          //当前数为半数
          if (Math.floor(this.state.defaultValue) == i) {
            tagArray.push(0.5);
          } else if (Math.floor(this.state.defaultValue) > i) {
            tagArray.push(1);
          } else {
            tagArray.push(0);
          }
        } else {
          //当前数为整数
          if (i < this.state.defaultValue) {
            tagArray.push(1);
          } else {
            //包括大于等于
            tagArray.push(0);
          }
        }
      }
    }

    this.setState({ tagArr: [...tagArray] });
  }

  onMouseOver = (key, e) => {
    // li onMouseOver event
    e.nativeEvent.stopImmediatePropagation();
    e.stopPropagation();
    e.preventDefault();
    let tagArray = [];

    if (!this.state.disabled) {
      for (var i = 0; i < this.state.count; i++) {
        if (i <= key) {
          tagArray.push(1);
        } else {
          tagArray.push(0);
        }
      }
    }

    this.setState({ tagArrTemp: [...tagArray] });
  };
  onMouseOverContent = (key, e) => {
    //onMouseOver选一半
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    e.stopPropagation();
    if (!this.state.disabled) {
      let tagArray = [];
      if (!this.state.disabled) {
        for (var i = 0; i < this.state.count; i++) {
          if (i < key) {
            tagArray.push(1);
          } else if (i == key) {
            tagArray.push(0.5);
          } else {
            tagArray.push(0);
          }
        }
      }

      this.setState({ tagArrTemp: [...tagArray] });
    }
  };
  onClick = (key, e) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    e.stopPropagation();

    let tagArray = [];

    let tagArrayCopy = [...this.state.tagArr];

    if (!this.state.disabled) {
      for (var i = 0; i < this.state.count; i++) {
        if (i < key) {
          tagArray.push(1);
        } else if (i == key) {
          if (this.state.tagArr[key] == 1) {
            tagArray.push(0);
          } else {
            tagArray.push(1);
          }
        } else {
          tagArray.push(0);
        }
      }
      this.setState({ tagArr: [...tagArray] });
      this.props.onChange(key);
    }
  };

  onMouseOut = (key, e) => {
    //onMouseOut 清除
    e.nativeEvent.stopImmediatePropagation();
    e.stopPropagation();
    if (!this.state.disabled) {
      this.setState({ tagArrTemp: [] });
    }
  };

  onMouseOutContent = (key, e) => {
    e.nativeEvent.stopImmediatePropagation();
    e.stopPropagation();
    this.setState({ tagArrTemp: [] });
  };

  onClickContent = (key, e) => {
    //
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    e.stopPropagation();
    let tagArray = [];
    if (!this.state.disabled) {
      for (var i = 0; i < this.state.count; i++) {
        if (i < key) {
          tagArray.push(1);
        } else if (i == key) {
          if (this.state.tagArr[key] == 0.5) {
            tagArray.push(0);
          } else {
            tagArray.push(0.5);
          }
        } else {
          tagArray.push(0);
        }
      }
      this.setState({ tagArr: [...tagArray] });
      this.state.onChange(key);
    }
  };

  render() {
    const classes = this.props.classes;

    let tagArray = [];
    if (this.state.tagArrTemp.length != 0) {
      tagArray = [...this.state.tagArrTemp];
    } else {
      tagArray = [...this.state.tagArr];
    }

    let listItems = tagArray.map((tag, index) => {
      if (this.state.allowHalf) {
        // 允许半选
        if (tag == 1) {
          return (
            <li
              key={index}
              onMouseOver={e => this.onMouseOver(index, e)}
              onMouseOut={e => this.onMouseOut(index, e)}
              onClick={e => this.onClick(index, e)}
              className={classes.rmVoteStar + ' ' + classes.rmVoteStarFull}
            >
              <Star />
              <div
                onMouseOver={e => this.onMouseOverContent(index, e)}
                onMouseOut={e => this.onMouseOutContent(index, e)}
                onClick={e => this.onClickContent(index, e)}
                className={classes.rmVoteStarContent}
              />
            </li>
          );
        } else if (tag == 0.5) {
          return (
            <li
              key={index}
              onMouseOver={e => this.onMouseOver(index, e)}
              onMouseOut={e => this.onMouseOut(index, e)}
              onClick={e => this.onClick(index, e)}
              className={classes.rmVoteStar + ' ' + classes.rmVoteStarHalf}
            >
              <StarHalf />
              <div
                onMouseOver={e => this.onMouseOverContent(index, e)}
                onMouseOut={e => this.onMouseOutContent(index, e)}
                onClick={e => this.onClickContent(index, e)}
                className={classes.rmVoteStarContent}
              />
            </li>
          );
        } else {
          return (
            <li
              key={index}
              onMouseOver={e => this.onMouseOver(index, e)}
              onMouseOut={e => this.onMouseOut(index, e)}
              onClick={e => this.onClick(index, e)}
              className={classes.rmVoteStar + ' ' + classes.rmVoteStarZero}
            >
              <StarBorder />
              <div
                onMouseOver={e => this.onMouseOverContent(index, e)}
                onMouseOut={e => this.onMouseOutContent(index, e)}
                onClick={e => this.onClickContent(index, e)}
                className={classes.rmVoteStarContent}
              />
            </li>
          );
        }
      } else {
        if (tag == 1) {
          return (
            <li
              key={index}
              onMouseOver={e => this.onMouseOver(index, e)}
              onMouseOut={e => this.onMouseOut(index, e)}
              onClick={e => this.onClick(index, e)}
              className={classes.rmVoteStar + ' ' + classes.rmVoteStarFull}
            >
              <Star />
              <div className={classes.rmVoteStarContent} />
            </li>
          );
        } else if (tag == 0.5) {
          return (
            <li
              key={index}
              onMouseOver={e => this.onMouseOver(index, e)}
              onMouseOut={e => this.onMouseOut(index, e)}
              onClick={e => this.onClick(index, e)}
              className={classes.rmVoteStar + ' ' + classes.rmVoteStarHalf}
            >
              <StarHalf />
              <div className={classes.rmVoteStarContent} />
            </li>
          );
        } else {
          return (
            <li
              key={index}
              onMouseOver={e => this.onMouseOver(index, e)}
              onMouseOut={e => this.onMouseOut(index, e)}
              onClick={e => this.onClick(index, e)}
              className={classes.rmVoteStar + ' ' + classes.rmVoteStarZero}
            >
              <StarBorder />
              <div className={classes.rmVoteStarContent} />
            </li>
          );
        }
      }
    });

    if (this.state.disabled) {
      return <ul className={classes.rmVoteDisabled + ' ' + classes.rmVote}>{listItems}</ul>;
    } else {
      return <ul className={classes.rmVote}>{listItems}</ul>;
    }
  }
}

export default withStyles(styles, { name: 'RMStarVote' })(StarVote);
