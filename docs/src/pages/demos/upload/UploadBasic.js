import React from 'react';
import { withStyles } from '@6thquake/react-material/styles';
import { Upload } from '@6thquake/react-material/Upload';
import Button from '@6thquake/react-material/Button';
import FileUpload from '@material-ui/icons/CloudUpload';
import classNames from 'classnames';
const styles = theme => ({
  rightIcon: {
    marginLeft: theme.spacing.unit,
  }
})
class UploadBasic extends React.Component {
  uploadFunc = data => {
    console.log(data);
  };
  deleteFunc = fileToDelete => {
    console.log(fileToDelete);
  };
  render() {
    const classes = this.props.classes;
    return (
      <Upload
        type='basic'
        acceptType='image/*'
        uploadFunc={this.uploadFunc}
        disabled={false}
        multiple={true}
        deleteFile={this.deleteFunc}
      >
        <Button variant="raised" component="span" color="default">
          上传文件
          <FileUpload className={classes.rightIcon} />
        </Button>
      </Upload>
    );
  }
}
export default withStyles(styles)(UploadBasic);