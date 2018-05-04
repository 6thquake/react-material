import React from 'react';
import LocaleContext from './LocalContext'

export default function withLocale(Component ,name) {
  name = name || Component.name
  return function LocaleComponent(props) {
    return (
      <LocaleContext.Consumer>
        {({locale, changeLocale}) => {
          console.log('locale in with', locale, '--', changeLocale)
          return (< Component {...props} locale={locale[name]} changeLocale={changeLocale}/>)
        }}
      </LocaleContext.Consumer>
    );
  };
}