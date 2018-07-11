import React from 'react';
import { LocaleContext } from './LocaleProvider';

// 当 存在于 y 中的key，在x 中值为 undefined 时，则取 y[key]
const merge = (x, y) => {
  let result = {
    ...x,
  };

  Object.keys(y).map(key => {
    if (result[key] === undefined) {
      result[key] = y[key];
    }
  });
  return result;
};

const withLocale = (options = {}) => Component => {
  let name = options.name || Component.name;
  return function LocaleComponent(props) {
    return (
      <LocaleContext.Consumer>
        {value => {
          const { locale, changeLocale } = value;

          let mergeProps = merge(props, value[name] || {});

          return <Component {...mergeProps} locale={locale} changeLocale={changeLocale} />;
        }}
      </LocaleContext.Consumer>
    );
  };
};

export default withLocale;
