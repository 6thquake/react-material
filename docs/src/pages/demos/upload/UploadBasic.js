import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import { Upload } from '@6thquake/react-material/Upload';
import { UploadBasic } from '@6thquake/react-material/Upload';
import Button from '@6thquake/react-material/Button';
class App extends React.Component {
  uploadFunc = data => {
    console.log(data);
  };
  deleteFunc = fileToDelete => {
    console.log(fileToDelete);
  };
  render() {
    return (
      <UploadBasic
        acceptType={'image/*'}
        actionFunc={this.uploadFunc}
        disabled={false}
        multiple={true}
        deleteFile={this.deleteFunc}
      >
        <Button variant="raised" component="span" color="default">
          上传文件
        </Button>
      </UploadBasic>
    );
  }
}
export default App;
