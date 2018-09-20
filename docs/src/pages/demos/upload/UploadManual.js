import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import { Upload } from '@6thquake/react-material/Upload';
import Button, { StatusButton } from '@6thquake/react-material/Button';
import FileUpload from '@material-ui/icons/CloudUpload';
import classNames from 'classnames';
import RadioGroup from '@6thquake/react-material/RadioGroup';
import Radio from '@6thquake/react-material/Radio';
import FormControlLabel from '@6thquake/react-material/FormControlLabel';

const styles = theme => ({
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
  message: {
    marginTop: theme.spacing.unit * 3,
  },
});

class UploadManual extends React.Component {
  state = {
    multiple: '1',
    files: [],
  };

  handleConfigChange = event => {
    const { value } = event.target;
    this.setState({
      multiple: value,
    });
  };

  handleChange = files => {
    this.setState({
      files: files,
    });
  };

  upload = data => {
    let _promise = new Promise(function(resolve, reject) {
      fetch('//jsonplaceholder.typicode.com/posts/', {
        method: 'POST',
        body: data,
      }).then(
        function(res) {
          resolve('success');
        },
        function(err) {
          reject('error');
        },
      );
    });
    return _promise;
  };

  render() {
    const { classes } = this.props;
    const { multiple, files } = this.state;

    return (
      <div>
        <RadioGroup row value={multiple} onChange={this.handleConfigChange}>
          <FormControlLabel value={'0'} control={<Radio />} label="只允许上传单个文件" />
          <FormControlLabel value={'1'} control={<Radio />} label="允许上传多个文件" />
        </RadioGroup>
        <div>
          <Upload
            type="manual"
            acceptType="image/*"
            upload={this.upload}
            multiple={multiple == '1'}
            disabled={false}
            label={'开始上传'}
            onChange={this.handleChange}
          >
            <Button variant="raised" component="span" color="default" className={classes.button}>
              上传文件
              <FileUpload className={classes.rightIcon} />
            </Button>
          </Upload>
        </div>
        <div className={classes.message}>upload files: {files.map(file => ` ${file.name} `)}</div>
      </div>
    );
  }
}
export default withStyles(styles)(UploadManual);
