import deepmerge from 'deepmerge';
import React from 'react';
import {LocaleContext} from './LocaleContext'


export default function withLocale(Component ,name) {
  name = name || Component.name
  return function LocaleComponent(props) {
    return (
      <LocaleContext.Consumer>
        {(locale) => {
          const { changeLocale } = locale
          let mergeProps = deepmerge(props, locale[name])
          return <Component {...mergeProps} changeLocale={changeLocale} />
        }}
      </LocaleContext.Consumer>
    );
  };
}