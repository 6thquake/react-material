import React from 'react';
import { Upload } from '@6thquake/react-material/Upload';
class App extends React.Component {
  uploadFunc = data => {
    console.log(data);
  };
  render() {
    return (
      <Upload
        type="img"
        uploadFunc={this.uploadFunc}
        disabled={false}
        uploadImgText={'upload'}
        multiple={false}
      />
    );
  }
}
export default App;

//<Upload type={'img'} uploadFunc={this.uploadFunc} disabled={false} uploadImgText={'upload'}/>
