import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import { UploadDrag } from '@6thquake/react-material/Upload';
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
      <UploadDrag
        acceptType={'*'}
        actionFunc={this.uploadFunc}
        disabled={false}
        multiple={true}
        deleteFile={this.deleteFunc}
      />
    );
  }
}
export default App;
