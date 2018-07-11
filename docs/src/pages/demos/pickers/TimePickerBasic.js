import React, { Fragment, PureComponent } from 'react';
import { TimePicker } from 'react-material/Picker';
import LocaleProvider from 'react-material/LocaleProvider';

class BasicUsage extends PureComponent {
  state = {
    selectedDate: new Date(),
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  render() {
    const { selectedDate } = this.state;

    return (
      <LocaleProvider>
        <Fragment>
          <div className="picker">
            <TimePicker label="12 hours" value={selectedDate} onChange={this.handleDateChange} />
          </div>

          <div className="picker">
            <TimePicker
              clearable
              ampm={false}
              label="24 hours"
              value={selectedDate}
              onChange={this.handleDateChange}
            />
          </div>

          <div className="picker">
            <TimePicker
              showTodayButton
              todayLabel="now"
              label="With today button"
              value={selectedDate}
              onChange={this.handleDateChange}
            />
          </div>
        </Fragment>
      </LocaleProvider>
    );
  }
}

export default BasicUsage;
