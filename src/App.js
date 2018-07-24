import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from '@6thquake/react-material/styles/MuiThemeProvider';
import RMRadioButton from './form/RMRadioButton';
import RMRadioButtonGroup from './form/RMRadioButtonGroup';
import RMSlider from './form/RMSlider';
import RMTooltip from './form/RMTooltip';
import RaisedButton from '@6thquake/react-material/RaisedButton';

import TextField from '@6thquake/react-material/TextField';

const style = {
  margin: 300,
  // height:100
};

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            {/* <RMRadioButtonGroup name="company">
              <RMRadioButton value="Ctrip" label="Ctrip" disabled={false}></RMRadioButton>
              <RMRadioButton value="Qunar" label="Qunar" disabled={false}></RMRadioButton>
            </RMRadioButtonGroup>

            <RMSlider />
            <RMSlider defaultValue={0.5} />
            <RMSlider defaultValue={1} /> */}
            {/* const position = ['top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom']; */}
            {/*   <RMTooltip title = '这是提示' placement = "bottom"><RaisedButton label="Primary" primary={true} style={style}/></RMTooltip> */}

            <RMTooltip title="这是提示fdsaf" placement="right">
              <TextField hintText="Hint Text" />
            </RMTooltip>

            {/* <RMTooltip title = '这是提示' placement = "bottomLeft">
            <div>first元素
              <div></div>
              </div>

              <div>测试两个根元素</div>
            </RMTooltip> */}
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
