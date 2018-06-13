import React, { PureComponent } from 'react';
import { TimePicker } from 'react-material/Picker';
import LocaleProvider from 'react-material/LocaleProvider';


class BasicUsage extends PureComponent {
  state = {
    selectedDate: new Date(),
  }

  handleDateChange = (date) => {
    this.setState({ selectedDate: date });
  }

  render() {
    const { selectedDate } = this.state;

    return (
      <LocaleProvider>
        <div className="picker">
          <TimePicker
            keyboard
            label="Masked timepicker"
            mask={[/\d/, /\d/, ':', /\d/, /\d/, ' ', /a|p/i, 'M']}
            placeholder="08:00 AM"
            value={selectedDate}
            onChange={this.handleDateChange}
            disableOpenOnEnter
          />
        </div>
      </LocaleProvider>
    );
  }
}

export default BasicUsage
