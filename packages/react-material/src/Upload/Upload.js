import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { withStyles } from '../styles';
import Chip from '../Chip';
import Paper from '../Paper';
import CancelIcon from '@material-ui/icons/Cancel';
import { DragDropContext } from 'react-dnd';
import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend';
import TargetBox from './TargetBox';
import isString from 'lodash/isString';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  paper: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    borderRadius: '5px',
  },
  chip: {
    margin: theme.spacing.unit / 2,
  },
  wrap: {
    width: '160px',
    margin: '0 auto',
  },
  choose: {
    display: 'inline-block',
  },
  array: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputImg: {
    opacity: '0',
    position: 'absolute',
    display: 'block',
    width: '140px',
    height: '140px',
  },
  clickToUpload: {
    width: '144px',
    height: '110px',
    margin: '4px',
    border: '1px dashed #BDBDBD',
    backgroundColor: '#e0e0e0',
    textAlign: 'center',
    borderRadius: '16px',
    position: 'relative',
    display: 'inline-block',
  },
  add: {
    fontSize: '30px',
    padding: '30px 0 0 0',
    color: '#616161',
  },
  uploadText: {
    fontSize: '15px',
    color: '#000',
    padding: '10px 0 0 0',
  },
  media: {
    height: '130px',
    width: '130px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    overflow: 'hidden',
    borderRadius: '5px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  chipDrag: {
    height: '110px',
    margin: theme.spacing.unit / 2,
    padding: '0',
  },
  dragToUpload: {
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
  mediaDrag: {
    height: '100px',
    width: '100px',
    borderRadius: '10px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  icon: {
    position: 'relative',
    top: '-40px',
  },
});

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      files: [],
    };
  }

  handleDelete = (e, item) => {
    const { data, files } = this.state;

    let indexToDelete = files.indexOf(item);
    if (indexToDelete !== -1) {
      files.splice(indexToDelete, 1);
    }

    indexToDelete = data.indexOf(item);
    if (indexToDelete !== -1) {
      data.splice(indexToDelete, 1);
    }

    this.setState({
      files: files.slice(),
      data: data.slice(),
    });

    if (this.props.onDelete) {
      this.props.onDelete(item);
      // delete item.preview;
    }

    /* type='drag',防止点击删除时弹出input框 */
    e && e.preventDefault();
  };

  /* 通过点击input标签添加图片 */
  changePath = e => {
    for (let i = 0; i < e.target.files.length; i++) {
      const file = e.target.files[i];
      this.pathHandler(file);
    }
  };

  /* 通过drag添加图片 */
  handleFileDrop = (item, monitor) => {
    if (monitor) {
      for (let i = 0; i < monitor.getItem().files.length; i++) {
        const file = monitor.getItem().files[i];
        this.pathHandler(file);
      }
    }
  };

  pathHandler(file) {
    if (!file) {
      return;
    }

    if (isString(file)) {
      file = {
        name: file,
        url: file,
      };
    }

    const { multiple } = this.props;

    if (this.state.files.indexOf(file) > -1) {
      return;
    }

    if (!multiple) {
      const { files } = this.state;
      if (files.length > 0) {
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          this.handleDelete(null, file);
        }
      }
    }

    if (file instanceof File) {
      this.setState(preState => ({
        data: multiple ? [...preState.data, file] : [file],
      }));
    }

    if (/^image\/\S+$/.test(file.type)) {
      file.preview = React.createElement('img', {
        src: URL.createObjectURL(file),
        height: '100%',
        width: '100%',
        onLoad: e => {
          URL.revokeObjectURL(e.target.src);
        },
      });

      this.setState(preState => ({
        files: multiple ? [...preState.files, file] : [file],
      }));
    } else {
      if (!(file instanceof File)) {
        const url = file.url || file.name;
        if (/blob|http(s)?:\/\//.test(url)) {
          file.preview = React.createElement('img', {
            src: url,
            height: '100%',
            width: '100%',
          });
        }
      }

      this.setState(preState => ({
        files: multiple ? [...preState.files, file] : [file],
      }));
    }
  }

  upload = () => {
    const { data } = this.state;
    return this.props.upload(data);
  };

  componentDidMount() {
    const { files } = this.props;

    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        this.pathHandler(file);
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { onChange } = this.props;
    if (prevState.data != this.state.data) {
      onChange(this.state.data);
    }
  }

  render() {
    const { classes, type, multiple, disabled, label } = this.props;
    const { FILE } = NativeTypes;
    const { files } = this.state;

    let manual;
    let basic;
    let img;
    let drag;
    const id = `RM-UPLOAD-${new Date().getTime()}`;

    if (type === 'manual') {
      manual = (
        <div>
          <div className={classes.wrap}>
            <input
              accept={this.props.acceptType}
              ref={input => (this.selectInput = input)}
              className={classes.input}
              id={id}
              onChange={this.changePath}
              type="file"
              multiple={multiple}
              disabled={disabled}
            />
            <label htmlFor={id}>{this.props.children}</label>
          </div>
          <Paper className={classes.paper}>
            {files.map(item => {
              return (
                <Chip
                  key={item}
                  label={item.name}
                  onDelete={e => this.handleDelete(e, item)}
                  className={classes.chip}
                  disabled={disabled}
                />
              );
            })}
          </Paper>
          <div className={classes.wrap}>
            <Button
              color="primary"
              variant="raised"
              className={classes.button}
              onClick={this.upload}
              disabled={disabled}
            >
              {label}
            </Button>
          </div>
        </div>
      );
    }

    if (type === 'basic') {
      basic = (
        <div>
          <div className={classes.choose}>
            <input
              accept={this.props.acceptType}
              ref={input => (this.selectInput = input)}
              className={classes.input}
              id={id}
              onChange={this.changePath}
              type="file"
              multiple={multiple}
              disabled={disabled}
            />
            <label htmlFor={id}>{this.props.children}</label>
          </div>
          <div className={classes.array}>
            {files.map(item => {
              return (
                <Chip
                  key={item}
                  label={item.name}
                  onDelete={e => this.handleDelete(e, item)}
                  className={classes.chip}
                  disabled={disabled}
                />
              );
            })}
          </div>
        </div>
      );
    }

    if (type === 'img') {
      img = (
        <div>
          <input
            accept="image/*"
            id={id}
            ref={input => (this.selectInput = input)}
            onChange={this.changePath}
            type="file"
            className={classes.inputImg}
            multiple={multiple}
            disabled={disabled}
          />
          <label htmlFor={id}>
            <div className={classes.array}>
              {files.map(item => {
                const preview = (
                  <div
                    className={classes.mediaDrag}
                    // style={{ backgroundImage: 'url(' + content + ')' }}
                  >
                    {item.preview || item.name}
                  </div>
                );
                return (
                  <div className={classes.array}>
                    <Chip
                      key={item}
                      label={preview}
                      onDelete={e => this.handleDelete(e, item)}
                      className={classes.chipDrag}
                      deleteIcon={<CancelIcon className={classes.icon} />}
                      disabled={disabled}
                    />
                  </div>
                );
              })}
              {(multiple || this.state.files.length <= 0) && (
                <div className={classes.clickToUpload}>
                  <div className={classes.add}>+</div>
                  <div className={classes.uploadText}>{label}</div>
                  <div
                    className={classes.media}
                    // style={{ backgroundImage: 'url(' + this.state.previewImg + ')' }}
                  />
                </div>
              )}
            </div>
          </label>
        </div>
      );
    }

    if (type === 'drag') {
      drag = (
        <div>
          <TargetBox
            accepts={[FILE]}
            onDrop={this.handleFileDrop}
            beforeDragMention={this.props.beforeDragMention}
            onDragMention={this.props.onDragMention}
          >
            <input
              accept={this.props.acceptType}
              ref={input => (this.selectInput = input)}
              className={classes.input}
              id={id}
              onChange={this.changePath}
              type="file"
              multiple={multiple}
              disabled={disabled}
            />
            <label htmlFor={id}>
              <div className={classes.dragToUpload}>
                <div className={classes.array}>
                  {files.map(item => {
                    {
                      /* 如果是图片就预览，否则显示文件名 */
                    }
                    const preview = (
                      <div
                        className={classes.mediaDrag}
                        // style={{ backgroundImage: 'url(' + content + ')' }}
                      >
                        {item.preview || item.name}
                      </div>
                    );
                    return (
                      <Chip
                        key={item}
                        label={preview}
                        onDelete={e => this.handleDelete(e, item)}
                        className={classes.chipDrag}
                        deleteIcon={<CancelIcon className={classes.icon} />}
                        disabled={disabled}
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

    return type === 'manual' ? (
      manual
    ) : type === 'basic' ? (
      basic
    ) : type === 'img' ? (
      img
    ) : type === 'drag' ? (
      drag
    ) : (
      <div>type is not correct</div>
    );
  }
}

Upload.propTypes = {
  /**
   * 上传方式,'manual','basic','img','drag'可选
   */
  acceptType: PropTypes.string,
  /**
   * 接受上传的文件类型
   */
  beforeDragMention: PropTypes.string,
  /**
   * 点击status button 触发的函数，返回一个promise实例
   */
  disabled: PropTypes.bool,
  /**
   * 点击上传触发的函数
   */
  files: PropTypes.array,
  /**
   * 点击删除某个文件时触发的函数
   */
  label: PropTypes.string,
  /**
   * 可选参数, 是否允许同时上传多个文件
   */
  multiple: PropTypes.bool,
  /**
   * 可选参数, 是否禁用
   */
  onChange: PropTypes.func,
  /**
   * 可选参数, 拖拽上传前的文字提示
   */
  onDelete: PropTypes.func,
  /**
   * 可选参数, 拖拽文件至可拖拽区域上方时的文字提示
   */
  onDragMention: PropTypes.string,
  /**
   * 可选参数, 组件包含的所有文件
   */
  type: PropTypes.oneOf(['manual', 'basic', 'img', 'drag']).isRequired,
  /**
   * 按钮描述文字
   */
  upload: PropTypes.func,
};

Upload.defaultProps = {
  acceptType: '*/*',
  multiple: true,
  disabled: false,
  beforeDragMention: '',
  onDragMention: '',
  files: [],
  onChange: files => {},
  onDelete: file => {},
  upload: files => {},
  label: 'upload',
};

export default withStyles(styles, { name: 'RMUpload' })(DragDropContext(HTML5Backend)(Upload));
