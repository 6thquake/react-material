import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from 'react-material/styles';
import UploadImg from 'react-material/UploadImg';

class App extends React.Component {
    uploadFunc=(data)=>{
        let _promise = new Promise(function(resolve, reject){
            fetch('//jsonplaceholder.typicode.com/posts/',{
            method: 'POST',  
            body: data  
            }).then(function(res){
                resolve('success');
            },function(err){
                reject('error');
            })
        });
        return _promise;
    };
    render() {
        return (
                <UploadImg actionFunc={this.uploadFunc} disabled={false}>
                </UploadImg>
        );
    }
}
export default App;