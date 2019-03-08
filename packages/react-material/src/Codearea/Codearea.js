import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '../styles';
import Prism from './Prism';

const styles = theme => ({
  root: {
    background: 'none',
    fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: 1.5,
    tabSize: 4,
    hyphens: 'none',
    padding: '1em',
    margin: '.5em 0',
    overflow: 'auto',

    '&:selection': {
      textShadow: 'none',
      background: '#b3d4fc',
    },

    '& @media print': {
      textShadow: 'none',
    },

    '&.light': {
      color: 'black',
      background: '#f5f2f0',
      textShadow: '0 1px white',

      '&>code': {
        color: 'black',
        background: '#f5f2f0',
        textShadow: '0 1px white',
      },

      '& .token': {
        '&.punctuation': {
          color: '#999',
        },
        '&.property, &.tag, &.boolean, &.number, &.constant, &.symbol, &.deleted': {
          color: '#905',
        },
        '&.selector, &.attr-name, &.string, &.char, &.builtin, &.inserted': {
          color: '#690',
        },
        '&.operator, &.entity, &.url': {
          color: '#9a6e3a',
          background: 'hsla(0, 0%, 100%, .5)',
        },
        '&.atrule, &.attr-value, &.keyword': {
          color: '#07a',
        },
        '&.function, &.class-name': {
          color: '#DD4A68',
        },
        '&.regex, &.important, &.variable': {
          color: '#e90',
        },
      },
      '&.language-css, &.style': {
        '& .token': {
          '&.string': {
            color: '#9a6e3a',
            background: 'hsla(0, 0%, 100%, .5)',
          },
        },
      },
    },

    '&.dark': {
      color: '#f8f8f2',
      textShadow: '0 1px rgba(0, 0, 0, 0.3)',
      background: '#272822',
      borderRadius: '0.3em',

      '&>code': {
        color: '#f8f8f2',
        textShadow: '0 1px rgba(0, 0, 0, 0.3)',
        background: '#272822',
      },

      '& .token': {
        '&.punctuation': {
          color: '#f8f8f2',
        },
        '&.property, &.tag, &.constant, &.symbol, &.deleted': {
          color: '#f92672',
        },
        '&.boolean, &.number': {
          color: '#ae81ff',
        },
        '&.selector, &.attr-name, &.string, &.char, &.builtin, &.inserted': {
          color: '#a6e22e',
        },
        '&.operator, &.entity, &.url, &.variable': {
          color: '#f8f8f2',
        },
        '&.atrule, &.attr-value, &.function': {
          color: '#e6db74',
        },
        '&.keyword': {
          color: '#66d9ef',
        },

        '&.regex, &.important': {
          color: '#fd971f',
        },
      },
      '&.language-css, &.style': {
        '& .token': {
          '&.string': {
            color: '#f8f8f2',
          },
        },
      },
    },

    '& .token': {
      '&.comment, &.prolog, &.doctype, &.cdata': {
        color: 'slategray',
      },
      '&.important, &.bold': {
        fontWeight: 'bold',
      },
      '&.italic': {
        fontStyle: 'italic',
      },
      '&.entity': {
        cursor: 'help',
      },
    },

    '& .namespace': {
      opacity: 0.7,
    },

    '&.line-numbers': {
      position: 'relative',
      paddingLeft: '3.8em',
      counterReset: 'linenumber',

      '& > code': {
        position: 'relative',
        whiteSpace: 'inherit',
      },

      '& .line-numbers-rows': {
        position: 'absolute',
        pointerEvents: 'none',
        top: 0,
        fontSize: '100%',
        left: '-3.8em',
        width: '3em' /* works for line-numbers below 1000 lines */,
        letterSpacing: '-1px',
        borderRight: '1px solid #999',
        userSelect: 'none',

        '&>span': {
          pointerEvents: 'none',
          display: 'block',
          counterIncrement: 'linenumber',

          '&:before': {
            content: 'counter(linenumber)',
            color: '#999',
            display: 'block',
            paddingRight: '0.8em',
            textAlign: 'right',
          },
        },
      },
    },
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
    /**
     * theme(light or dark) of code area, using the light theme as default
     */
    theme: PropTypes.oneOf(['light', 'dark']),
  };

  static defaultProps = {
    lineNumbers: true,
    theme: 'light',
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
    let { classes, theme } = this.props;

    switch (theme) {
      case 'dark':
      case 'light':
        break;
      default:
        theme = 'light';
        break;
    }

    const className = classNames(theme, {
      'react-prism': true,
      'line-numbers': !!this.props.lineNumbers,
      // [`language-${this.props.language}`]: !!this.props.language
      [`language-${lang}`]: true,
    });

    return (
      <pre className={`${className} ${classes.root}`}>
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
