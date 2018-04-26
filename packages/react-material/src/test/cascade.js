import React, { Component } from 'react';
import RMC from './../RMcascadeSelect'


class Test extends Component {
  constructor(props){
    super(props)
    this.state = {
      dataSource: [],
      cdata: [
        {
          value: '1',
          text: 'test1',
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
                }
              ]
            },
            {
              value: '111',
              text: 'test22',
            }
          ]
        },
        {
          value: '2',
          text: 'test2',
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
                }
              ]
            },
            {
              value: '111a',
              text: 'test22a',
            }
          ]
        },
        {
          value: '3c',
          text: 'test3c',
        },

        {
          value: '1',
          text: 'test1',
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
                }
              ]
            },
            {
              value: '111',
              text: 'test22',
            }
          ]
        },
        {
          value: '2',
          text: 'test2',
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
                }
              ]
            },
            {
              value: '111a',
              text: 'test22a',
            }
          ]
        },
        {
          value: '3c',
          text: 'test3c',
        }
      ]
    };

  }
  handleChange = (e) =>{
    console.log('change log', e)
  }
  render() {

    return (
       <div>
        <RMC
          onChange={this.handleChange}
          label={'Cascade Select'}
          dataSource={this.state.cdata}
        />
        </div>
  );
  }
}

export default Test;
