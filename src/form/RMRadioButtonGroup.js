import React, { Component } from 'react';
import MuiThemeProvider from 'react-material/styles/MuiThemeProvider';
import { RadioButtonGroup } from 'react-material/RadioButton';

/* class RMRadioButtonGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            children: props.children,
            className: props.className,
            defaultSelected: props.defaultSelected,
            labelPosition: props.labelPosition,
            onChange: props.onChange,
            style: props.style,
            valueSelected: props.valueSelected
        }
    }
    render() {
        return (
            <div>
                <RadioButtonGroup
                    name={this.state.name}
                    children={this.state.children}
                    className={this.state.className}
                    defaultSelected={this.state.defaultSelected}
                    labelPosition={this.state.labelPosition}
                    onChange={this.state.onChange}
                    style={this.state.style}
                    valueSelected={this.state.valueSelected}></RadioButtonGroup>
            </div>
        )
    }
}
export default RMRadioButtonGroup; */

export default RadioButtonGroup;