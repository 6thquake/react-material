import React, { Component } from 'react';
import CascadeSelect from 'react-material/CascadeSelect';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cdata: [
        {
          value: '1',
          text: '河北',
          subItems: [
            {
              value: '12',
              text: '石家庄',
              subItems: [
                {
                  value: '13',
                  text: '平山县',
                },
                {
                  value: '112',
                  text: '赵县',
                },
                {
                  value: '113',
                  text: 'test111',
                },
              ],
            },
            {
              value: '111',
              text: 'test22',
            },
          ],
        },
        {
          value: '2',
          text: '江苏',
          subItems: [
            {
              value: '12',
              text: 'test11a',
              subItems: [
                {
                  value: '13a',
                  text: 'test111a',
                },
                {
                  value: '112',
                  text: 'test111a',
                },
                {
                  value: '113',
                  text: 'test111a',
                },
              ],
            },
            {
              value: '111a',
              text: 'test22a',
            },
          ],
        },
        {
          value: '3',
          text: '福建',
        },

        {
          value: '4',
          text: '陕西',
          subItems: [
            {
              value: '12',
              text: 'test11',
              subItems: [
                {
                  value: '13',
                  text: 'test111',
                },
                {
                  value: '112',
                  text: 'test111',
                },
                {
                  value: '113',
                  text: 'test111',
                },
              ],
            },
            {
              value: '111',
              text: 'test22',
            },
          ],
        },
        {
          value: '云南',
          text: '云南',
          subItems: [
            {
              value: '12',
              text: 'test11a',
              subItems: [
                {
                  value: '13a',
                  text: 'test111a',
                },
                {
                  value: '112',
                  text: 'test111a',
                },
                {
                  value: '113',
                  text: 'test111a',
                },
              ],
            },
            {
              value: '111a',
              text: 'test22a',
            },
          ],
        },
        {
          value: '3c',
          text: 'test3c',
        },
      ],
    };
  }

  handleChange = e => {
    console.log('change log', e);
  };

  render() {
    return (
      <div>
        <CascadeSelect
          onChange={this.handleChange}
          label={'地域'}
          dataSource={this.state.cdata}
          renderLabel="text"
          separator="|"
          width={400}
        />
      </div>
    );
  }
}

export default App;
