import React from 'react';
import LocaleContext from './LocaleContext'


// merge y into x
const merge =(x ,y)=>{
  let result = {...x}
  let keys = Object.keys(y)
  keys.map((key)=>{
    if(result[key]=== undefined){
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
        {(localeConfig) => {
          const { locale, changeLocale} = localeConfig
          let mergeProps = merge(props, locale[name])
          return < Component {...mergeProps} changeLocale={changeLocale} />
        }}
      </LocaleContext.Consumer>
    );
  };
}