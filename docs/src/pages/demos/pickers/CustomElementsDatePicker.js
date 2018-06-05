/* eslint-disable no-param-reassign */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import moment from 'moment';

import DatePicker, { withDateTimePicker } from 'react-material/Picker';
import { IconButton, withStyles } from 'react-material';
import DateFnsUtils from 'react-material/Picker/utils/date-fns-utils';

import isValid from 'date-fns/isValid';
import format from 'date-fns/format';
import isSameDay from 'date-fns/isSameDay';
import startOfWeek from 'date-fns/startOfWeek';
import endOfWeek from 'date-fns/endOfWeek';
import isWithinInterval from 'date-fns/isWithinInterval';


class CustomElements extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  state = {
    selectedDate: new Date(),
  }

  handleWeekChange = (date) => {
    this.setState({ selectedDate: startOfWeek(date) });
  }

  formatWeekSelectLabel = (date, invalidLabel) => {
    if (date === null) {
      return '';
    }

    if (date instanceof moment) {
      date = date.toDate();
    }

    return date && isValid(date)
      ? `Week of ${format(startOfWeek(date), 'MMM Do')}`
      : invalidLabel;
  }

  renderWrappedWeekDay = (date, selectedDate, dayInCurrentMonth) => {
    const { classes } = this.props;

    if (date instanceof moment) {
      date = date.toDate();
    }

    const start = startOfWeek(selectedDate);
    const end = endOfWeek(selectedDate);

    const dayIsBetween = isWithinInterval(date, {start, end});
    const isFirstDay = isSameDay(date, start);
    const isLastDay = isSameDay(date, end);

    const wrapperClassName = classNames({
      [classes.highlight]: dayIsBetween,
      [classes.firstHighlight]: isFirstDay,
      [classes.endHighlight]: isLastDay,
    });

    const dayClassName = classNames(classes.day, {
      [classes.nonCurrentMonthDay]: !dayInCurrentMonth,
      [classes.highlightNonCurrentMonthDay]: !dayInCurrentMonth && dayIsBetween,
    });

    return (
      <div className={wrapperClassName}>
        <IconButton className={dayClassName}>
          <span> { format(date, 'D')} </span>
        </IconButton>
      </div>
    );
  }

  render() {
    const { selectedDate } = this.state;

    return (
      <div className="picker">
        <DatePicker
          label="Week picker"
          value={selectedDate}
          onChange={this.handleWeekChange}
          renderDay={this.renderWrappedWeekDay}
          labelFunc={this.formatWeekSelectLabel}
        />
      </div>
    );
  }
}

const styles = theme => ({
  dayWrapper: {
    position: 'relative',
  },
  day: {
    width: 36,
    height: 36,
    fontSize: theme.typography.caption.fontSize,
    margin: '0 2px',
    color: 'inherit',
  },
  customDayHighlight: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: '2px',
    right: '2px',
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: '50%',
  },
  nonCurrentMonthDay: {
    color: theme.palette.text.disabled,
  },
  highlightNonCurrentMonthDay: {
    color: '#676767',
  },
  highlight: {
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  firstHighlight: {
    extend: 'highlight',
    borderTopLeftRadius: '50%',
    borderBottomLeftRadius: '50%',
  },
  endHighlight: {
    extend: 'highlight',
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
  },
});

export default withStyles(styles)(withDateTimePicker({util:DateFnsUtils})(CustomElements));
