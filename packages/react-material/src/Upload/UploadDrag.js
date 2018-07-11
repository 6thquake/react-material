import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';
import { withStyles } from '../styles';
import Icon from '../Icon';

import Avatar from '../Avatar';
import Chip from '../Chip';
import Paper from '../Paper';
import CancelIcon from '@material-ui/icons/Cancel';
import { CompatibleGrid as Grid } from '../Grid';

import { DragDropContext, DropTargetMonitor } from 'react-dnd';
import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend';
import TargetBox from './TargetBox';

const styles = theme => ({
  input: {
    display: 'none',
  },
  array: {
    display: 'inline-block',
  },
  chip: {
    height: '110px',
    margin: theme.spacing.unit / 2,
    padding: '0',
  },
  array: {
    display: 'inline-block',
  },
  clickToUpload: {
    minHeight: '300px',
    minWidth: '400px',
    border: '1px dashed #BDBDBD',
    backgroundColor: '#F5F5F5',
    textAlign: 'center',
    borderRadius: '5px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  media: {
    height: '100px',
    width: '100px',
    borderRadius: '10px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  textPreview: {
    height: '30px',
    width: '30px',
    border: '1px solid red',
  },
  icon: {
    position: 'relative',
    top: '-40px',
  },
});

class UploadDrag extends Component {
  static propTypes = {
    /**
     * 接受上传的文件类型
     */
    acceptType: PropTypes.string,
    /**
     * 点击status button 触发的函数，返回一个promise实例
     */
    actionFunc: PropTypes.func.isRequired,
    /**
     * 点击删除某个文件时触发的函数
     */
    deleteFile: PropTypes.func.isRequired,
    /**
     * 可选参数, 是否允许同时上传多个文件
     */
    multiple: PropTypes.bool,
    /**
     * 可选参数, 是否禁用
     */
    disabled: PropTypes.bool,
  };
  static defaultProps = {
    acceptType: '*',
    multiple: true,
    disabled: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      path: [],
      data: [],
    };
  }

  handleDelete = (e, item) => {
    const path = [...this.state.path];
    const pathToDelete = path.indexOf(item);
    path.splice(pathToDelete, 1);
    this.setState({ path: path });

    const data = [...this.state.data];
    this.props.deleteFile(data[pathToDelete]);
    data.splice(pathToDelete, 1);
    this.setState({ data: data });
    /*防止点击删除时弹出input框*/
    e.preventDefault();
  };

  /*通过点击input标签添加图片*/
  changePath = e => {
    for (let i = 0; i < e.target.files.length; i++) {
      let file = e.target.files[i];
      if (!file) {
        return;
      }
      if (this.state.path.indexOf(file.name) === -1) {
        this.setState(preState => ({
          data: [...preState.data, file],
        }));
        if (/^image\/\S+$/.test(file.type)) {
          let src = URL.createObjectURL(file);
          this.setState(preState => ({
            path: [...preState.path, src],
          }));
        } else {
          this.setState(preState => ({
            path: [...preState.path, file.name],
          }));
        }
      }
    }
  };
  /*通过drag添加图片*/
  handleFileDrop(item, monitor) {
    if (monitor) {
      for (let i = 0; i < monitor.getItem().files.length; i++) {
        let file = monitor.getItem().files[i];
        if (this.state.path.indexOf(file.name) === -1) {
          this.setState(preState => ({
            data: [...preState.data, file],
          }));
          /*path数组存放非图片文件的file.name以及图片文件的src*/
          if (/^image\/\S+$/.test(file.type)) {
            let src = URL.createObjectURL(file);
            this.setState(preState => ({
              path: [...preState.path, src],
            }));
          } else {
            this.setState(preState => ({
              path: [...preState.path, file.name],
            }));
          }
        }
      }
    }
  }
  componentDidMount() {
    if (this.props.disabled) {
      this.selectInput.setAttribute('disabled', 'disabled');
    } else if (this.props.multiple) {
      this.selectInput.setAttribute('multiple', 'multiple');
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.data !== this.state.data) {
      this.props.actionFunc(this.state.data);
    }
  }
  render() {
    const classes = this.props.classes;
    const path = this.state.path;
    const { FILE } = NativeTypes;
    return (
      <div>
        <TargetBox accepts={[FILE]} onDrop={this.handleFileDrop.bind(this)}>
          <input
            accept={this.props.acceptType}
            ref={input => (this.selectInput = input)}
            className={classes.input}
            id="raisedButtonFileDrag"
            onChange={this.changePath}
            type="file"
          />
          <label for="raisedButtonFileDrag">
            <div className={classes.clickToUpload}>
              <div className={classes.array}>
                {this.state.path.map(item => {
                  {
                    /*如果是图片就预览，否则显示文件名*/
                  }
                  let preview =
                    /blob/.test(item) === true ? (
                      <div
                        className={classes.media}
                        style={{ backgroundImage: 'url(' + item + ')' }}
                      />
                    ) : (
                      item
                    );
                  return (
                    <Chip
                      key={item}
                      label={preview}
                      onDelete={e => this.handleDelete(e, item)}
                      className={classes.chip}
                      deleteIcon={<CancelIcon className={classes.icon} />}
                    />
                  );
                })}
              </div>
            </div>
          </label>
        </TargetBox>
      </div>
    );
  }
}

// let c = DragDropContext(HTML5Backend)(UploadDrag);
export default withStyles(styles, { name: 'RMUploadDrag' })(DragDropContext(HTML5Backend)(UploadDrag));