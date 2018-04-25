import React from 'react';
import {Button} from '../index';
const ButtonGroup = Button.Group;
function handle() {
    return new Promise(function (resolve,reject) {
        setTimeout(function () {
            // resolve('ok');
            reject('err');
        },1000);

        // reject('err')
    }).then(function (r) {
        console.log(r);
        return true;
    })
}
let radio = true;
function C() {
    return (<div style={{padding:30}}>
        <Button className="pp">1</Button>
        <hr/>
        <ButtonGroup>
            <Button  variant="raised" color="primary" radio={radio}>1</Button>
            <Button  variant="raised" color="primary">2</Button>
            <Button  variant="raised" color="primary">3</Button>
        </ButtonGroup>
        <hr/>
        <ButtonGroup>
            <Button  variant="raised" color="success">1</Button>
            <Button  variant="raised" color="success" radio={radio}>2</Button>
            <Button  variant="raised" color="success">3</Button>
        </ButtonGroup>
        <hr/>
        <ButtonGroup position="vertical">
            <Button  variant="raised" className="test">1</Button>
            <Button  variant="raised" >2</Button>
            <Button  variant="raised" >3</Button>
        </ButtonGroup>
        <hr/>

        <Button color="primary" variant="raised" onHandler={handle}>3</Button>
        <Button color="primary" variant="raised" onHandler={()=>handle()} statusButton={false}>3</Button>
        <Button color="error" variant="raised">error</Button>
        <Button color="progress" variant="flat">progress</Button>
        <Button color="success" variant="fab">success</Button>

    </div>);
}
export default C;