import React from 'react';
import {LocaleContext} from './LocaleContext'

//  当 存在于 y 中的key，在x 中值为 undefined 时，则取 y[key] 
const merge = (x, y) => {
  let result = { ...x
  }
  let keys = Object.keys(y)
  keys.map((key) => {
    if (result[key] === undefined) {
      result[key] = y[key]
    }
  })
  return result
}


export default function withLocale(Component ,name) {
  name = name || Component.name
  return function LocaleComponent(props) {
    return (
      <LocaleContext.Consumer>
        {(locale) => {
          const { changeLocale } = locale
          let mergeProps = merge(props, locale[name])

          return <Component {...mergeProps} changeLocale={changeLocale} />
        }}
      </LocaleContext.Consumer>
    );
  };
}