import React, { PureComponent, Fragment } from 'react';
import { DateTimePicker } from '@6thquake/react-material/Picker';
import { IconButton, Icon, InputAdornment } from '@6thquake/react-material';
import LocaleProvider from '@6thquake/react-material/LocaleProvider';

class CustomDateTimePicker extends PureComponent {
  state = {
    selectedDate: new Date('2018-01-01T18:54'),
    clearedDate: null,
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  handleClearedDateChange = date => {
    this.setState({ clearedDate: date });
  };

  render() {
    const { selectedDate, clearedDate } = this.state;

    return (
      <LocaleProvider>
        <Fragment>
          <div className="picker">
            <DateTimePicker
              autoOk
              ampm={false}
              showTabs={false}
              autoSubmit={false}
              disableFuture
              fadeTimeout={0}
              value={selectedDate}
              onChange={this.handleDateChange}
              helperText="Hardcoded helper text"
              leftArrowIcon={<Icon> add_alarm </Icon>}
              rightArrowIcon={<Icon> snooze </Icon>}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <Icon>add_alarm</Icon>
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div className="picker">
            <DateTimePicker
              keyboard
              label="Keyboard with error handler"
              onError={console.log}
              minDate={new Date('2018-01-01T00:00')}
              value={selectedDate}
              onChange={this.handleDateChange}
              format="YYYY/MM/DD hh:mm A"
              disableOpenOnEnter
              mask={[
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                '/',
                /\d/,
                /\d/,
                '/',
                /\d/,
                /\d/,
                ' ',
                /\d/,
                /\d/,
                ':',
                /\d/,
                /\d/,
                ' ',
                /a|p/i,
                'M',
              ]}
            />
          </div>

          <div className="picker">
            <DateTimePicker
              value={clearedDate}
              onChange={this.handleClearedDateChange}
              helperText="Clear Initial State"
              clearable
            />
          </div>
        </Fragment>
      </LocaleProvider>
    );
  }
}

export default CustomDateTimePicker;
