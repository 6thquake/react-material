import React, { Fragment, PureComponent } from 'react';
import DatePicker from 'react-material/Picker';
import LocaleProvider from 'react-material/LocaleProvider';

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
        <Fragment>
          <div className="picker">
            <DatePicker
              label="Basic example"
              value={selectedDate}
              onChange={this.handleDateChange}
              animateYearScrolling={false}
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
        </Fragment>
      </LocaleProvider>
    );
  }
}

export default BasicDatePicker;
