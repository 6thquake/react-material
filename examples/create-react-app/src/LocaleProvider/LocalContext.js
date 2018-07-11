import defaultLocal from './default';
import React from 'react';
const locale = {
  changeLocale: () => {},
  locale: defaultLocal,
};

const LocaleContext = React.createContext(locale);
export default LocaleContext;
