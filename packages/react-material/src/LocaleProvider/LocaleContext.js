import React from 'react'

import en, { en_us, zh_cn, zh_tw } from './languages';

import DateTimePickersProvider from '../Picker/DateTimePickersProvider';
import MomentUtils from '../Picker/utils/moment-utils';
import moment from 'moment';
import 'moment/locale/en-ca';
import 'moment/locale/zh-cn'; 

const languages = {
  'zh-tw': zh_tw,
  'zh-cn': zh_cn,
  'zh': zh_cn,
  'en-ca': en_us,
  'en-us': en_us,
  'en': en,
}

const getLocale = (lang) => {
  if (lang) {
    lang = lang.toLowerCase();

    let locale = languages[lang];
    
    if(locale) {
      return locale;
    }

    lang = lang.split('-')[0];

    locale = languages[lang];

    if(locale){
      return locale;
    }
  }

  return languages['en'];
}

const getDefaultLocale = () => {
  const wg = global || window;
  let lang = wg && wg.navigator && wg.navigator.language;

  return getLocale(lang);
}

const defaultLocale = getDefaultLocale();
const LocaleContext = React.createContext(defaultLocale)
const LocaleConsumer = LocaleContext.Consumer;

class LocaleProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      locale: props.locale || defaultLocale.locale
    }
  }

  changeLocale = (locale) =>  () => {
    this.setState({
      locale: locale
    });
  }

  render() {
    const { children } = this.props;

    const { locale } = this.state;

    const value = {
      ...getLocale(locale),
      ...this.props.value,
    }

    value.changeLocale = this.changeLocale.bind(this);

    if(locale) {
      moment.locale(locale);
    }

    return (
      <LocaleContext.Provider locale={ locale } value={ value }>
        <DateTimePickersProvider utils={ MomentUtils } locale={ locale } moment={ moment }>
          {
            children
          }
        </DateTimePickersProvider>
      </LocaleContext.Provider>
    );
  }
}

export {
  LocaleContext,
  LocaleProvider,
  LocaleConsumer,
  getLocale,
  getDefaultLocale
}


