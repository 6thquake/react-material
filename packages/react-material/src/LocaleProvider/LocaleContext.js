import React from 'react'

import en, { en_us, zh_cn, zh_tw } from './languages';

import DateTimePickersProvider from '../Picker/DateTimePickersProvider';
import MomentUtils from '../Picker/utils/moment-utils';
import moment from 'moment';
import 'moment/locale/en-ca';
import 'moment/locale/zh-cn'; 

import deepmerge from 'deepmerge'


const languages = {
  'zh-tw': zh_tw,
  'zh-cn': zh_cn,
  'zh': zh_cn,
  'en-ca': en_us,
  'en-us': en_us,
  'en': en,
}

const getLanguage = (lang, value) => {
  let _languages = value || languages;

  if (lang) {
    lang = lang.toLowerCase();
    
    if(_languages[lang]) {
      return lang;
    }

    lang = lang.split('-')[0];

    if(_languages[lang]){
      return lang;
    }
  }

  return 'en';
}

const getLocale = (lang, value) => {
  let lang1 = getLanguage(lang);

  if(!value) {
    return languages[lang1];
  }

  let lang2 = getLanguage(lang, value);
  
  return {
      ...deepmerge(languages[lang1],value[lang2])
    }
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

    if(locale) {
      moment.locale(locale);
    }

    const value = {
      ...{ changeLocale: this.changeLocale.bind(this) },
      ...getLocale(locale, this.props.value),
    };

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
  getLanguage,
  getLocale,
  getDefaultLocale
}


