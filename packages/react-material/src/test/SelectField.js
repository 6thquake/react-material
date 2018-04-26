import React, {Component} from 'react';
import RMselect from '../select/RMselect'

export default class SelectFieldExampleSelectionRenderer extends Component {
  state = {
    values:[],
      options: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
    ],
    pagerConfig : {
          pageSize: 5
    }
  };
    selectCb(i){
      console.log('event.target.value',i)
    }
  render() {
    return (
      <RMselect
        multiple={true}
        value={this.state.values}
        options={this.state.options}
        pageConfig={this.state.pagerConfig}
        placeholder="select one or more"
        selectCb={this.selectCb.bind(this)}
      >
      </RMselect>
    );
  }
}
