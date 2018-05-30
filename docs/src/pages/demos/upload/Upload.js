import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-material/styles';
import Upload from 'react-material/Upload';
//import {Home,Grade,Lock} from '@material-ui/icons';



class App extends React.Component {

    render() {
        return (
            <div>
    

                <p>默认按钮，向下滚动页面后，见右下角灰色按钮</p>

                <Upload>
                </Upload>

               
            </div>
        );
    }
}
export default App;