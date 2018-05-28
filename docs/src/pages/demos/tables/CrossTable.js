import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'react-material/styles';

import Grid from 'react-material/Grid';

import tips from './tips';
import { AbundantCrossTable } from 'react-material/Table/CrossTable'
import { sortAs } from 'react-material/Table/CrossTable';


class App extends React.Component {
    componentWillMount() {
        this.setState({
            textarea: JSON.stringify(tips),
            mode: 'demo',
            filename: 'Sample Dataset: Tips',
            crossTableState: {
                data: tips,
                rows: ['Payer Gender'],
                cols: ['Party Size'],
                aggregatorName: 'Sum over Sum',
                vals: ['Tip', 'Total Bill'],
                rendererName: 'Grouped Column Chart',
                sorters: {
                    Meal: sortAs(['Lunch', 'Dinner']),
                    'Day of Week': sortAs([
                        'Thursday',
                        'Friday',
                        'Saturday',
                        'Sunday',
                    ]),
                    'Party Size': (a, b)=>{
                      return a - b;
                    }
                },
                tableOptions: {
                    clickCallback: function(e, value, filters, tableData) {
                        var names = [];
                        tableData.forEachMatchingRecord(filters, function(
                            record
                        ) {
                            names.push(record.Meal);
                        });
                        alert(names.join('\n'));
                    },
                },
            },
        });
    }

    onType(event) {
      this.setState({
                    mode: 'text',
                    filename: 'Data from <textarea>',
                    textarea: event.target.value,
                    crossTableState: {data: JSON.parse(event.target.value)},
                })
    }

    render() {
        return (
            <Grid container spacing={24}>
                <Grid item xs={12}>
                  <p>initial data or paste some data below:</p>
                  <textarea
                      style={{width: '100%'}}
                      rows="10"
                      value={this.state.textarea}
                      onChange={this.onType.bind(this)}
                      placeholder="Paste from a spreadsheet or CSV-like file"
                  />
                  <p>
                    <em>Note: the data never leaves your browser!</em>
                  </p>
                </Grid>
                <Grid item xs={12}>
                    <AbundantCrossTable {...this.state.crossTableState} />
                </Grid>
            </Grid>
          );
    }
}  

export default withStyles()(App);
