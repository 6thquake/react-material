import moment from 'moment';
import 'moment/locale/en-ca';
import 'moment/locale/zh-cn'; // this is the important bit, you have to import the locale your'e trying to use.
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import React, { Fragment, Component, PureComponent } from 'react';
import DatePicker, { withDateTimePicker } from 'react-material/Picker';
import { Icon, IconButton, Menu, MenuItem } from '@material-ui/core';
import Button from 'react-material/Button'
import LocaleProvider from 'react-material/LocaleProvider'


class BasicDatePicker extends PureComponent {
  constructor(props){
    super(props)
    this.state={
      selectedDate: new Date(),
    }
  }
  handleDateChange = (data) =>{
    this.setState({selectedDate: date});
  }

  render(){
    const { selectedDate } = this.state.selectedDate
    const locale = localeMap[this.props.currentLocale];
    moment.locale(locale);
    
    return (
      <Fragment>
        <div className="picker">
          <DatePicker
            okLabel={(locale==='zh-cn')?"确定":"OK"}
            cancelLabel={(locale==='zh-cn')?"取消":"CANCEL"}
            label="Basic example"
            value={selectedDate}
            onChange={this.handleDateChange}
            animateYearScrolling={false}
          />
        </div>

        <div className="picker">
          <DatePicker
            okLabel={(locale==='zh-cn')?"确定":"OK"}
            cancelLabel={(locale==='zh-cn')?"取消":"CANCEL"}
            clearLabel={(locale==='zh-cn')?"清除":"CLEAR"}
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
            okLabel={(locale==='zh-cn')?"确定":"OK"}
            cancelLabel={(locale==='zh-cn')?"取消":"CANCEL"}
            todayLabel={(locale==='zh-cn')?"今天":"TODAY"}
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

const ButtonGroup = Button.Group;
const radio = true
const localeMap = {
  zhCn:'zh-cn',
  enCa:'en-ca',
};

class Localization extends Component{
  constructor(props){
    super(props);
    this.state = { 
      locale: 'zhCn',
    };
  }  

  handleButtonClick =(type)=> (e)=>{
    let locale=type
    this.setState({
      locale: locale,
    })
  }

  render(){
    let locale = localeMap[this.state.locale]
    return(
      <LocaleProvider locale={locale}> 
        <MuiPickersUtilsProvider utils={MomentUtils} moment={moment} locale={locale}>
          <BasicDatePicker currentLocale={this.state.locale} />
          <ButtonGroup>
            <Button onClick={this.handleButtonClick('zhCn')} variant="raised" color="primary">中文</Button>
            <Button onClick={this.handleButtonClick('enCa')} radio={radio} variant="raised" color="primary">EN</Button>
          </ButtonGroup>
        </MuiPickersUtilsProvider>
      </LocaleProvider>
    )
  }
}

export default withDateTimePicker()(Localization)











