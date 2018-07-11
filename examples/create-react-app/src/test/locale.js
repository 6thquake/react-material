import React, { Component } from 'react';
import Button from 'react-material/Button';
import withLocale from '../LocaleProvider/withLocale';
import tw from '../LocaleProvider/zh_TW';
class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log('props', props);
  }
  handleClick = () => {
    this.props.changeLocale(tw);
  };
  render() {
    const { changeLocale, locale } = this.props.locale;
    console.log('locale==== 88', this.props.locale);
    return (
      <div>
        hello
        {this.props.locale.okText}
        <Button onClick={this.handleClick}>Button</Button>
      </div>
    );
  }
}

export default withLocale(Modal);
