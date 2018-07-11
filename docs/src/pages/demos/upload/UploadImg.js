import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-material/styles';
import { UploadImg } from 'react-material/Upload';
class App extends React.Component {
  uploadFunc = data => {
    console.log(data);
  };
  render() {
    return <UploadImg actionFunc={this.uploadFunc} disabled={false} />;
  }
}
export default App;
