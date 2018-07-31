import React, { Component } from 'react';

import PropTypes from 'prop-types';
import  { StatusButton } from '../Button';
import classNames from 'classnames';
import { withStyles } from '../styles';

import Chip from '../Chip';
import Paper from '../Paper';
import CancelIcon from '@material-ui/icons/Cancel';
import { DragDropContext } from 'react-dnd';
import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend';
import TargetBox from './TargetBox';

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
    margin: theme.spacing.unit/2,
  },
  wrap: {
    width: '160px',
    margin: '0 auto',
  },
  choose: {
    display: 'inline-block',
  },
  array: {
    display: 'inline-block',
  },
  inputImg: {
    opacity: '0',
    position: 'absolute',
    display: 'block',
    width: '140px',
    height: '140px',
  },
  clickToUpload: {
    height: '140px',
    width: '140px',
    border: '1px dashed #BDBDBD',
    backgroundColor: '#F5F5F5',
    textAlign: 'center',
    borderRadius: '5px',
    position: 'relative',
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
      path: [],
      data: [],
      preview: [],
      pathImg: '',
      dataImg: '',
      previewImg: null,
    };
  }

  handleDelete = (e, item) => {
    const preview = [...this.state.preview];
    const path = [...this.state.path]
    const data = [...this.state.data];

    //const indexToDelete = path.indexOf(item)
    const indexToDelete = preview.indexOf(item)===-1 ? path.indexOf(item):preview.indexOf(item);
    preview.splice(indexToDelete, 1);
    this.setState({ preview: preview });

    path.splice(indexToDelete, 1);
    this.setState({ path: path });


    if(this.props.deleteFile){
      this.props.deleteFile(data[indexToDelete]);
    }
    data.splice(indexToDelete, 1);
    this.setState({ data: data });
    /*type='drag',防止点击删除时弹出input框*/
    e.preventDefault();
  };

  // changePath = e => {
  //   for (let i = 0; i < e.target.files.length; i++) {
  //     const file = e.target.files[i];
  //     if (!file) {
  //       return;
  //     }
  //     if (this.state.path.indexOf(file.name) === -1) {
  //       this.setState(preState => ({
  //         path: [...preState.path, file.name],
  //         data: [...preState.data, file],
  //       }));
  //     }
  //     if (/^image\/\S+$/.test(file.type)) {
  //       let src = URL.createObjectURL(file);
  //       this.setState(preState => ({
  //         preview: [...preState.preview, src],
  //       }));
  //     } else {
  //       this.setState(preState => ({
  //         preview: [...preState.preview, file.name],
  //       }));
  //     }
  //   }
  // };

  /*通过点击input标签添加图片*/
  changePath = e => {
    for (let i = 0; i < e.target.files.length; i++) {
      const file = e.target.files[i];
      this.pathHandler(file)
    }
  };
  /*通过drag添加图片*/
  handleFileDrop=(item, monitor)=>{
    if (monitor) {
      for (let i = 0; i < monitor.getItem().files.length; i++) {
        const file = monitor.getItem().files[i];
        this.pathHandler(file)
      }
    }
  }
  pathHandler(file){
    if (!file) {
      return;
    }
    if (this.state.path.indexOf(file.name) === -1) {
      this.setState(preState => ({
        data: [...preState.data, file],
        path: [...preState.path, file.name],
      }));
      if (/^image\/\S+$/.test(file.type)) {
        let src = URL.createObjectURL(file);
        this.setState(preState => ({
          preview: [...preState.preview, src],
        }));
      } else {
        this.setState(preState => ({
          preview: [...preState.preview, file.name],
        }));
      }
    }
  }

  
changeImgPath = e => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    let type = file.type;
    if (/^image\/\S+$/.test(type)) {
      let src = URL.createObjectURL(file);
      this.setState({ pathImg: file.name, dataImg: file, previewImg: src });
    }
  };


  upload = () => {
    const data = this.state.data;
    return this.props.actionFunc(data);
  };
  componentDidMount() {
    if (this.props.disabled) {
      this.selectInput.setAttribute('disabled', 'disabled');
    } else if(this.props.multiple) {
    this.selectInput.setAttribute('multiple', 'multiple');
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(((this.props.type==='basic')||(this.props.type==='drag'))&&(prevState.data != this.state.data)){
        this.props.uploadFunc(this.state.data);
    }
    if ((this.props.type==='img')&&(prevState.pathImg != this.state.pathImg)) {
      this.props.uploadFunc(this.state.dataImg);
    }
  }

  render() {
    const {classes,type} = this.props;
    const { FILE } = NativeTypes;
    let manual,basic,img,drag
    if(type === 'manual'){
    manual= <div>
        <div className={classes.wrap}>
          <input
            accept={this.props.acceptType}
            ref={input => (this.selectInput = input)}
            className={classes.input}
            id="raisedButtonFile"
            onChange={this.changePath}
            type="file"
          />
          <label for="raisedButtonFile">
            {this.props.children[0]}
          </label>
        </div>
        <Paper className={classes.paper}>
          {this.state.path.map(item => {
            let avatar = null;
            return (
              <Chip
                key={item}
                avatar={avatar}
                label={item}
                onDelete={e => this.handleDelete(e, item)}
                className={classes.chip}
              />
            );
          })}
        </Paper>
        <div className={classes.wrap}>
          <StatusButton
              color="primary"
              variant="raised"
              className={classes.button}
              onHandler={this.upload}
            >
              {this.props.children[1]}
          </StatusButton>
        </div>
      </div>
      }
      if(type === 'basic'){
        basic = <div>
        <div className={classes.choose}>
          <input
            accept={this.props.acceptType}
            ref={input => (this.selectInput = input)}
            className={classes.input}
            id="raisedButtonFileBasic"
            onChange={this.changePath}
            type="file"
          />
          <label for="raisedButtonFileBasic">{this.props.children}</label>
        </div>
        <div className={classes.array}>
          {this.state.path.map(item => {
            let avatar = null;
            return (
              <Chip
                key={item}
                label={item}
                onDelete={e => this.handleDelete(e, item)}
                className={classes.chip}
              />
            );
          })}
        </div>
      </div>
      }
      if(type === 'img'){
        img = <div>
            <input
              accept="image/*"
              id="raisedButtonFileImg"
              ref={input => (this.selectInput = input)}
              onChange={this.changeImgPath}
              type="file"
              className={classes.inputImg}
            />
            <label htmlFor="raisedButtonFileImg">
              <div className={classes.clickToUpload}>
                <div className={classes.add}>+</div>
                <div className={classes.uploadText}>{this.props.uploadImgText}</div>
                <div className={classes.media} style={{ backgroundImage: 'url(' + this.state.previewImg + ')' }} />
              </div>
            </label>
          </div>
      }
      if(type === 'drag'){
        drag = <div>
        <TargetBox accepts={[FILE]} onDrop={this.handleFileDrop} beforeDragMention={this.props.beforeDragMention} onDragMention={this.props.onDragMention}>
          <input
            accept={this.props.acceptType}
            ref={input => (this.selectInput = input)}
            className={classes.input}
            id="raisedButtonFileDrag"
            onChange={this.changePath}
            type="file"
          />
          <label for="raisedButtonFileDrag">
            <div className={classes.dragToUpload}>
              <div className={classes.array}>
                {this.state.preview.map(item => {
                  {
                    /*如果是图片就预览，否则显示文件名*/
                  }
                  let preview =
                    /blob/.test(item) === true ? (
                      <div
                        className={classes.mediaDrag}
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
                      className={classes.chipDrag}
                      deleteIcon={<CancelIcon className={classes.icon} />}
                    />
                  );
                })}
              </div>
            </div>
          </label>
        </TargetBox>
      </div>
      }
    return (
     type === 'manual'? manual : type === 'basic'? basic : type === 'img'? img : type === 'drag'? drag: <div>type is not correct</div>
    );
  }
}


export default withStyles(styles, { name: 'RMUpload' })(DragDropContext(HTML5Backend)(Upload));

Upload.propTypes = {
  /**
   * 上传方式,'manual','basic','img','drag'可选
   */
  type: PropTypes.string.isRequired,
  /**
   * 接受上传的文件类型
   */
  acceptType: PropTypes.string,
  /**
   * 点击status button 触发的函数，返回一个promise实例
   */
  actionFunc: PropTypes.func,
   /**
   * 点击上传触发的函数
   */
  uploadFunc: PropTypes.func,
  /**
   * 点击删除某个文件时触发的函数
   */
  deleteFile: PropTypes.func,
  /**
   * 可选参数, 是否允许同时上传多个文件
   */
  multiple: PropTypes.bool,
  /**
   * 可选参数, 是否禁用
   */
  disabled: PropTypes.bool,
  /**
   * 可选参数, 拖拽上传前的文字提示
   */
  beforeDragMention: PropTypes.string,
  /**
   * 可选参数, 拖拽文件至可拖拽区域上方时的文字提示
   */
  onDragMention: PropTypes.string,
};

Upload.defaultProps = {
  acceptType: '*',
  multiple: true,
  disabled: false,
  beforeDragMention: '',
  onDragMention:'',
};