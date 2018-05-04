import React from 'react';
import ReactDOM from 'react-dom';
import Index from './pages/index';
import Test from './test/locale';
import LocalContext from './LocaleProvider/LocalContext'
import defaultLocal from './LocaleProvider/default'
import zh from './LocaleProvider/zh_CN'

console.log('defaultLocal', defaultLocal)
const locale = {
  locale: defaultLocal,
  
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      locale: defaultLocal,
    };
  }
  changeLocale= (local) => {
    console.log('change local', local)
    let l = local || zh
    this.setState({
      locale: l
    })
  }
  render() {
    let value = {
      locale: this.state.locale,
      changeLocale: this.changeLocale
    }
    return (
      <LocalContext.Provider value={value}>
        {<Test />}
      </LocalContext.Provider>
    )
  }
}

export default App;
ReactDOM.render(<App />, document.querySelector('#root'));
