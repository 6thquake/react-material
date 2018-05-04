import react, {Component} from 'react'
import Popconfirm from 'react-material/Popconfirm'
import { withStyles } from 'react-material/styles';

import {Button} from 'react-material/Button'
import { LocaleContext } from 'react-material/LocaleProvider'
import zhCN from 'react-material/LocaleProvider/zh_CN'
import zhTW from 'react-material/LocaleProvider/zh_TW'
import enUS from 'react-material/LocaleProvider/en_US'

const ButtonGroup = Button.Group;
const radio = true
const locales = {
  zhCN, zhTW, enUS
}
const styles = theme => ({
  box: {
    marginBottom: theme.spacing.unit * 6,
  },
  label: {
    marginBottom: theme.spacing.unit * 2
  }
});
class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      content: 'are you sure to close it?',
      locale: enUS
    };
  }
  handleButtonClick =(type)=> (e)=>{
    let locale = locales[type]
    this.setState({
      locale: locale
    })
  }
  changeLocale=(locale)=>{
    console.log('hi', locale)
  }
  render() {
    const { classes } = this.props;

    let value = {
      locale: this.state.locale,
      changeLocale: this.changeLocale
    }
    return (
      <div className={classes.box}>
        {/* with provider */}
        <LocaleContext.Provider value={value}> 
          <Popconfirm content={this.state.content}>
            <Button>
              open
            </Button>
          </Popconfirm>
          <div className={classes.label}>Change locale of components:</div>
          <ButtonGroup>
            <Button onClick={this.handleButtonClick('zhCN')} variant="raised" color="primary">中文</Button>
            <Button onClick={this.handleButtonClick('enUS')} radio={radio} variant="raised" color="primary">EN</Button>
            <Button onClick={this.handleButtonClick('zhTW')} variant="raised" color="primary">繁体中文</Button>
          </ButtonGroup>
        </LocaleContext.Provider>

        {/* without provider */}
        <Popconfirm content={this.state.content}>
            <Button>
              default locale
            </Button>
        </Popconfirm>
      </div>
    );
  }
}

export default withStyles(styles)(MyComponent);