import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import { Upload } from '@6thquake/react-material/Upload';

class App extends React.Component {
  uploadFunc = data => {
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
    return (
      <Upload
        acceptType={'image/*'}
        actionFunc={this.uploadFunc}
        multiple={true}
        disabled={false}
      />
    );
  }
}
export default App;
