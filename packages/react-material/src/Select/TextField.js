import React, {Component} from 'react';
import TextField from 'material-ui/TextField';


export default class NATextField extends Component {
    componentDidMount() {
        let _x = document.getElementById('menu-').getElementsByTagName('input')[0];
        _x.addEventListener("click", function(e){
            e.stopPropagation();
        });
    }
    render(){
       const {placeholder,onChange}=this.props;
       return (<TextField
            autoFocus={true}
            placeholder={placeholder}
            onChange={onChange}
        />)
    }
}