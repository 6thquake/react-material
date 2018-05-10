import defaultLocal from './default'
import zh_CN from './zh_CN'
import React from 'react'

const langMap = {
  'zh-CN': zh_CN,
  'en': defaultLocal,
}

const getLocale = () =>{
  let lang = 'en'
  const wg = global || window
  lang = wg && wg.navigator && wg.navigator.language
  return langMap[lang] 
}


const locale = getLocale() || defaultLocal
const LocaleContext = React.createContext(locale)

class LocaleProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {  }
  }
  render() {
    const {locale, children} = this.props
    return (
      <LocaleContext.Provider value={locale}>
        {
          children
        }
      </LocaleContext.Provider>
    );
  }
}

export {
  LocaleContext,
  LocaleProvider
}


