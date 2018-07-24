import React, { Component } from 'react';
import CascadeSelect from '@6thquake/react-material/CascadeSelect';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cdata: [
        {
          value: '1',
          label: '河北',
          subItems: [
            {
              value: '12',
              label: '石家庄',
              subItems: [
                {
                  value: '13',
                  label: '平山县',
                },
                {
                  value: '112',
                  label: '赵县',
                },
                {
                  value: '113',
                  label: 'test111',
                },
              ],
            },
            {
              value: '111',
              label: 'test22',
            },
          ],
        },
        {
          value: '2',
          label: '江苏',
          subItems: [
            {
              value: '12',
              label: 'test11a',
              subItems: [
                {
                  value: '13a',
                  label: 'test111a',
                },
                {
                  value: '112',
                  label: 'test111a',
                },
                {
                  value: '113',
                  label: 'test111a',
                },
              ],
            },
            {
              value: '111a',
              label: 'test22a',
            },
          ],
        },
        {
          value: '3',
          label: '福建',
        },

        {
          value: '4',
          label: '陕西',
          subItems: [
            {
              value: '12',
              label: 'test11',
              subItems: [
                {
                  value: '13',
                  label: 'test111',
                },
                {
                  value: '112',
                  label: 'test111',
                },
                {
                  value: '113',
                  label: 'test111',
                },
              ],
            },
            {
              value: '111',
              label: 'test22',
            },
          ],
        },
        {
          value: '云南',
          label: '云南',
          subItems: [
            {
              value: '12',
              label: 'test11a',
              subItems: [
                {
                  value: '13a',
                  label: 'test111a',
                },
                {
                  value: '112',
                  label: 'test111a',
                },
                {
                  value: '113',
                  label: 'test111a',
                },
              ],
            },
            {
              value: '111a',
              label: 'test22a',
            },
          ],
        },
        {
          value: '3c',
          label: 'test3c',
        },
      ],
    };
  }

  handleChange = e => {
    console.log('change log', e);
  };

  render() {
    let mapper = {
      label: item => '@ ' + item.label,
    };
    return (
      <div>
        <CascadeSelect
          onChange={this.handleChange}
          label={'地域'}
          options={this.state.cdata}
          separator=">"
          width={400}
          mapper={mapper}
        />
      </div>
    );
  }
}

export default App;
