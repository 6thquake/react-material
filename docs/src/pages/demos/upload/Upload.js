import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-material/styles';
import Upload from 'react-material/Upload';

class App extends React.Component {

    render() {
        return (
                <Upload acceptType={"image/*"} action={"//jsonplaceholder.typicode.com/posts/"} multiple={true} disabled={false}>
                </Upload>
        );
    }
}
export default App;