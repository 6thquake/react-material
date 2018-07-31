import React from 'react';
import { Upload } from '@6thquake/react-material/Upload';
class UploadDrag extends React.Component {
  uploadFunc = data => {
    console.log(data);
  };
  deleteFunc = fileToDelete => {
    console.log(fileToDelete);
  };

  render() {
    return (
      <Upload
        type='drag'
        acceptType='*'
        uploadFunc={this.uploadFunc}
        disabled={false}
        multiple={true}
        deleteFile={this.deleteFunc}
        beforeDragMention={'Drag file here'}
        onDragMention={'Release to drop'}
      />
    );
  }
}
export default UploadDrag;
