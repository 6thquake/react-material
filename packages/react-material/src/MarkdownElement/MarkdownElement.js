import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import marked from 'marked';
import { withStyles } from '../styles';
import prism from 'prismjs';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
const styles = theme => ({
  root: {
    fontFamily: theme.typography.fontFamily,
    fontSize: 16,
    color: theme.palette.text.primary,
  },
});

class MarkdownElement extends React.Component{
  static propTypes = {
    children: PropTypes.node.isRequired,
    language: PropTypes.string
  }

  render () {
    let lang='language-';
    switch(this.props.language){
      case 'css':
      lang=lang+'css';
      break;
      case 'js':
      case 'jsx':
      lang=lang+'jsx';
      break;
      default:
      lang=lang+'jsx';
      break;
    }
    const className = classNames({
      'classes.root':true,
      'react-prism': true,
      // [`language-${this.props.language}`]: !!this.props.language
      [`${lang}`]:true
    })

    return (
      <pre ref={ref => (this.el = ref)} className={className}>
        <code>
          {this.props.children}
        </code>
      </pre>
    )
  }

  componentDidMount () {
    this.highlightCode()
  }

  componentDidUpdate () {
    this.highlightCode()
  }

  highlightCode () {
    prism.highlightElement(this.el)
  }
}


MarkdownElement.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  texttype:PropTypes.string
};

export default withStyles(styles, { flip: false })(MarkdownElement);
