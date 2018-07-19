import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '../styles';
import Prism, { lightTheme, darkTheme, setPrismTheme } from './Prism';

const styles = theme => ({
  root: {
    fontFamily: theme.typography.fontFamily,
    fontSize: 16,
    color: theme.palette.text.primary,
  },
});

class Codearea extends React.Component {
  static propTypes = {
    /**
     * content that needs formatting
     */
    children: PropTypes.node.isRequired,
    /**
     * language that needs formating
     */
    language: PropTypes.string,
    /**
     * show line numbers whether or not
     */
    lineNumbers: PropTypes.bool,
  };

  static defaultProps = {
    lineNumbers: true,
  };

  render() {
    let lang = '';
    switch ((this.props.language || '').toLowerCase()) {
      case 'css':
        lang = 'css';
        break;
      case 'diff':
        lang = 'diff';
        break;
      case 'typescript':
        lang = 'typescript';
        break;
      case 'markup':
        lang = 'markup';
        break;
      case 'js':
      case 'jsx':
      case 'javascript':
      default:
        lang = 'jsx';
        break;
    }

    const className = classNames({
      'classes.root': true,
      'react-Prism': true,
      'line-numbers': !!this.props.lineNumbers,
      // [`language-${this.props.language}`]: !!this.props.language
      [`language-${lang}`]: true,
    });

    return (
      <pre className={className}>
        <code ref={ref => (this.el = ref)}>{this.props.children}</code>
      </pre>
    );
  }

  componentDidMount() {
    this.highlightCode();
  }

  componentDidUpdate() {
    this.highlightCode();
  }

  highlightCode() {
    Prism.highlightElement(this.el);
  }
}

export default withStyles(styles, { flip: false, name: 'RMCodearea' })(Codearea);
export { lightTheme, darkTheme, setPrismTheme };
