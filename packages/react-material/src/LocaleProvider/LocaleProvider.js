import React from 'react';
import PropTypes from 'prop-types';
import en, { en_us, zh_cn, zh_tw } from './languages';
import DateTimePickersProvider from '../Picker/DateTimePickersProvider';
import MomentUtils from '../Picker/utils/moment-utils';
import moment from 'moment';
import 'moment/locale/en-ca';
import 'moment/locale/zh-cn';

import deepmerge from 'deepmerge';

const languages = {
  'zh-tw': zh_tw,
  'zh-cn': zh_cn,
  zh: zh_cn,
  'en-ca': en_us,
  'en-us': en_us,
  en: en,
};

const getLanguage = (lang, value) => {
  let _languages = value || languages;

  if (lang) {
    lang = lang.toLowerCase();

    if (_languages[lang]) {
      return lang;
    }

    lang = lang.split('-')[0];

    if (_languages[lang]) {
      return lang;
    }
  }

  return 'en';
};

const getLocaleResource = (lang, value) => {
  let lang1 = getLanguage(lang);

  if (!value) {
    return languages[lang1];
  }

  let lang2 = getLanguage(lang, value);

  return {
    ...deepmerge(languages[lang1], value[lang2]),
  };
};

const getDefaultLocaleResource = () => {
  const wg = global || window;
  let lang = wg && wg.navigator && wg.navigator.language;

  return getLocaleResource(lang);
};

const defaultLocale = getDefaultLocaleResource();
const LocaleContext = React.createContext(defaultLocale);
const LocaleConsumer = LocaleContext.Consumer;

class LocaleProvider extends React.Component {
  static locale = 'en';

  constructor(props) {
    super(props);
    this.state = {
      locale: props.locale || defaultLocale.locale,
    };
  }

  changeLocale = locale => () => {
    this.setState({
      locale: locale,
    });
  };

  getLocale = () => this.state.locale;

  render() {
    const { children } = this.props;

    const { locale } = this.state;

    if (locale) {
      moment.locale(locale);
      LocaleProvider.locale = this.state.locale;
    }

    const value = {
      ...{ changeLocale: this.changeLocale.bind(this) },
      ...getLocaleResource(locale, this.props.value),
    };

    return (
      <LocaleContext.Provider locale={locale} value={value}>
        <DateTimePickersProvider utils={MomentUtils} locale={locale} moment={moment}>
          {children}
        </DateTimePickersProvider>
      </LocaleContext.Provider>
    );
  }
}

LocaleProvider.propTypes = {
  /**
   * The International resources
   */
  value: PropTypes.object,
  /**
   * Type of locale, such as en, zh, en_us...
   */
  locale: PropTypes.string,
  /**
   * You can wrap a node.
   */
  children: PropTypes.node,
};
export {
  LocaleContext,
  LocaleProvider,
  LocaleConsumer,
  getLanguage,
  getLocaleResource,
  getDefaultLocaleResource,
  getLanguage as getLocale,
};
