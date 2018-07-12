import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../styles';
import DropList from './DropList';
import MyDropList from './MyDropList';
import { DragListItem as ListItem, ListItemText } from './DragListItem';
import Checkbox from '../Checkbox';
import Button from '../Button';
import IconButton from '../IconButton';
import { ChevronRight, ChevronLeft, LastPage, FirstPage } from '@material-ui/icons';
import { DropTarget, DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

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
  leftLists: {},
  rightLists: {
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
};

class Transfer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      leftChecked: [],
      rightChecked: [],
    };
  }

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
  dragToggle = (value, position) => () => {
    let _checked = [];
    _checked.push(value);
    this.transferData(_checked, position);
  };
  transferToggle = position => () => {
    const { leftChecked, rightChecked } = this.state;
    let _checked = position == 'left' ? leftChecked : position == 'right' ? rightChecked : '';
    this.transferData(_checked, position);
  };

  transferAllToggle = position => () => {
    const { left, right } = this.props;
    let _checked = position == 'left' ? left : position == 'right' ? right : '';

    this.transferData(_checked, position);
  };
  transferData = (_checked, position) => {
    let _otherPos = position == 'left' ? 'right' : 'left';
    let aaa = this.subSet(this.props[position], _checked);
    let newData = {};
    newData[position] = aaa;
    newData[_otherPos] = [].concat(this.props[_otherPos], _checked);
    this.setState({
      leftChecked: [],
      rightChecked: [],
    });
    this.props.onChange(newData);
  };

  handleToggle = (value, position) => {
    const { leftChecked, rightChecked } = this.state;
    let _checked = position == 'left' ? leftChecked : position == 'right' ? rightChecked : '';

    const currentIndex = _checked.indexOf(value);
    const newChecked = [..._checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    if (position == 'left') {
      this.setState({
        leftChecked: newChecked,
      });
    }
    if (position == 'right') {
      this.setState({
        rightChecked: newChecked,
      });
    }
  };
  render() {
    const { left, right, classes } = this.props;

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

        <div className={classes.lists + ' ' + classes.leftLists}>
          <MyDropList
            data={left}
            direction="left"
            checkedItem={this.state.leftChecked}
            toggleChecked={this.handleToggle}
            dragToggle={this.dragToggle}
          />
        </div>

        <div className={classes.lists + ' ' + classes.rightLists}>
          <MyDropList
            data={right}
            direction="right"
            checkedItem={this.state.rightChecked}
            toggleChecked={this.handleToggle}
            dragToggle={this.dragToggle}
          />
        </div>
      </div>
    );
  }
}

let C = DragDropContext(HTML5Backend)(Transfer);

export default withStyles(styles, { name: 'RMTransferdrag' })(C);

/**
 * @ignore - do not document.
 */
