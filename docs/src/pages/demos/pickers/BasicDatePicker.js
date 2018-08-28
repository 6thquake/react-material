import React, { Fragment, PureComponent } from 'react';
import DatePicker from '@6thquake/react-material/Picker';
import LocaleProvider from '@6thquake/react-material/LocaleProvider';

class BasicDatePicker extends PureComponent {
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
        <div style={{ background: '#2196F3', display: 'flex', padding: 20 }}>
          <div className="picker">
            <DatePicker
              label="Basic example"
              value={selectedDate}
              onChange={this.handleDateChange}
              animateYearScrolling={false}
              isDark
            />
          </div>

          <div className="picker">
            <DatePicker
              label="Clearable"
              clearable
              disableFuture
              maxDateMessage="Date must be less than today"
              value={selectedDate}
              onChange={this.handleDateChange}
              animateYearScrolling={false}
            />
          </div>

          <div className="picker">
            <DatePicker
              label="With today button"
              showTodayButton
              maxDateMessage="Date must be less than today"
              value={selectedDate}
              onChange={this.handleDateChange}
              animateYearScrolling={false}
            />
          </div>
        </div>
      </LocaleProvider>
    );
  }
}

export default BasicDatePicker;
