import React, { Fragment, Component, PureComponent } from 'react';
import DatePicker from '@6thquake/react-material/Picker';
import Icon from '@6thquake/react-material/Icon';
import IconButton from '@6thquake/react-material/IconButton';
import Menu from '@6thquake/react-material/Menu';
import MenuItem from '@6thquake/react-material/MenuItem';
import Button from '@6thquake/react-material/Button';
import ButtonGroup from '@6thquake/react-material/ButtonGroup';
import Grid from '@6thquake/react-material/Grid';
import LocaleProvider, { withLocale, LocaleConsumer } from '@6thquake/react-material/LocaleProvider';

const radio = true;

class BasicDatePicker extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: new Date(),
    };
  }

  handleDateChange = data => {
    this.setState({ selectedDate: date });
  };

  render() {
    const { selectedDate } = this.state.selectedDate;

    return (
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
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LocaleProvider>
        <Grid
          container
          spacing={16}
          alignItems={'center'}
          direction={'column'}
          justify={'space-around'}
        >
          <Grid item>
            <BasicDatePicker />
          </Grid>
          <Grid item>
            <LocaleConsumer>
              {value => {
                const { locale, changeLocale } = value;
                return (
                  <ButtonGroup>
                    <Button onClick={changeLocale('zh-cn')} variant="raised" color="primary">
                      中文
                    </Button>
                    <Button
                      onClick={changeLocale('en-us')}
                      radio={radio}
                      variant="raised"
                      color="primary"
                    >
                      EN
                    </Button>
                    <Button onClick={changeLocale('zh-tw')} variant="raised" color="primary">
                      繁体中文
                    </Button>
                  </ButtonGroup>
                );
              }}
            </LocaleConsumer>
          </Grid>
        </Grid>
      </LocaleProvider>
    );
  }
}

export default App;
