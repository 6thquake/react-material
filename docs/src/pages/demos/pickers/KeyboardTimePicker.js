import React, { PureComponent } from 'react';
import { TimePicker, withDateTimePicker } from 'react-material/Picker';

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
    );
  }
}

export default withDateTimePicker()(BasicUsage)
