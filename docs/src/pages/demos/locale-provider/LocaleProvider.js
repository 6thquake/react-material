import react, { Component } from 'react'
import Popconfirm from 'react-material/Popconfirm'
import { withStyles } from 'react-material/styles';
import Button from 'react-material/Button'
import LocaleProvider, { LocaleConsumer } from 'react-material/LocaleProvider'


const radio = true
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
      content: 'are you sure to close it?'
    };
  }

  value={
    en: {
      Popconfirm: {
        okText: 'I am OK'
      }
    },
    zh: {
      Popconfirm: {
        okText: '点我确认'
      }
    }
  }

  render() {
    const { classes } = this.props;
    
    const { 
      content
    } = this.state;
    
    return (
      <div className={classes.box}>
        {/* with provider */}
        <LocaleProvider locale={'en-us'} value={this.value}> 
          <Popconfirm content={content}>
            <Button>
              open
            </Button>
          </Popconfirm>
          <div className={classes.label}>Change locale of components:</div>
          <LocaleConsumer>
            {(value) => {
              const { locale, changeLocale } = value;
              return (
                <Button.Group>
                  <Button onClick={changeLocale('zh-cn')} variant="raised" color="primary">中文</Button>
                  <Button onClick={changeLocale('en-us')} radio={radio} variant="raised" color="primary">EN</Button>
                  <Button onClick={changeLocale('zh-tw')} variant="raised" color="primary">繁体中文</Button>
                </Button.Group>
              )
            }}
          </LocaleConsumer>
        </LocaleProvider>

        {/* without provider */}
        <Popconfirm content={content}>
            <Button>
              default locale
            </Button>
        </Popconfirm>
      </div>
    );
  }
}

export default withStyles(styles)(MyComponent);