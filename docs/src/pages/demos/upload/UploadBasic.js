import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-material/styles';
import {UploadBasic} from 'react-material/Upload';
import Button from 'react-material/Button';
class App extends React.Component {
	uploadFunc=(data)=>{
        console.log(data)
	};
    deleteFunc=(fileToDelete)=>{
        console.log(fileToDelete)
    }
    render() {
        return (
                <UploadBasic acceptType={"*"} actionFunc={this.uploadFunc} disabled={false} multiple={true} deleteFile={this.deleteFunc}>
                    <Button variant="raised" component="span" color="default">
                    上传文件
                    </Button>
                </UploadBasic>
        );
    }
}
export default App;