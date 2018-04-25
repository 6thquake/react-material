import React from 'react';
import keycode from 'keycode';
import compose from 'recompose/compose';
import pure from 'recompose/pure';
import EventListener from 'react-event-listener';
import PropTypes from 'prop-types';
import Router from 'next/router';
import withWidth, { isWidthUp } from 'material-ui/utils/withWidth';
import SearchIcon from '@material-ui/icons/Search';
import { fade } from 'material-ui/styles/colorManipulator';
import { withStyles } from 'material-ui/styles';

let searchTimer;
let initialized = false;

function initDocsearch() {
  if (!process.browser) {
    return;
  }

  clearInterval(searchTimer);
  searchTimer = setInterval(() => {
    const docsearchInput = document.querySelector('#docsearch-input');

    if (!window.docsearch || !docsearchInput) {
      return;
    }

    if (initialized === docsearchInput) {
      clearInterval(searchTimer);
      return;
    }

    initialized = docsearchInput;
    clearInterval(searchTimer);
    window.docsearch({
      apiKey: '1d8534f83b9b0cfea8f16498d19fbcab',
      indexName: 'material-ui',
      inputSelector: '#docsearch-input',
      handleSelected: (input, event, suggestion) => {
        const url = suggestion.url
          .replace(/^https:\/\/material-ui-next\.com/, '')
          .replace(/\/#/, '#')
          .replace(/\/$/, '');
        Router.push(url);
      },
      // Set debug to true if you want to inspect the dropdown.
      debug: true,
    });
  }, 100);
}

const styles = theme => ({
  '@global': {
    '.algolia-autocomplete': {
      fontFamily: theme.typography.fontFamily,
      '& .algolia-docsearch-suggestion--category-header-lvl0': {
        color: theme.palette.text.primary,
      },
      '& .algolia-docsearch-suggestion .algolia-docsearch-suggestion--subcategory-column': {
        opacity: 1,
        padding: '5.33px 10.66px',
        textAlign: 'right',
        width: '30%',
        '&:before': {
          display: 'block',
        },
        '&:after': {
          display: 'none',
        },
      },
      '& .algolia-docsearch-suggestion .algolia-docsearch-suggestion--content': {
        float: 'right',
        padding: '5.33px 0 5.33px 10.66px',
        width: '70%',
        '&:before': {
          display: 'block',
        },
      },
      '& .algolia-docsearch-suggestion--subcategory-column-text': {
        color: theme.palette.text.secondary,
        fontWeight: theme.typography.fontWeightRegular,
      },
      '& .algolia-docsearch-suggestion--highlight': {
        color: theme.palette.type === 'light' ? '#174d8c' : '#acccf1',
      },
      '& .algolia-docsearch-suggestion': {
        background: 'transparent',
      },
      '& .algolia-docsearch-suggestion--title': {
        ...theme.typography.title,
      },
      '& .algolia-docsearch-suggestion--text': {
        ...theme.typography.body1,
      },
      '& .ds-dropdown-menu': {
        boxShadow: theme.shadows[1],
        borderRadius: 2,
        '&::before': {
          display: 'none',
        },
        '& [class^=ds-dataset-]': {
          border: 0,
          borderRadius: 2,
          backgroundColor: theme.palette.background.paper,
        },
      },
    },
  },
  root: {
    fontFamily: theme.typography.fontFamily,
    position: 'relative',
    marginRight: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit,
    borderRadius: 2,
    background: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      background: fade(theme.palette.common.white, 0.25),
    },
    '& $input': {
      transition: theme.transitions.create('width'),
      width: 200,
      '&:focus': {
        width: 250,
      },
    },
  },
  search: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    font: 'inherit',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit}px ${theme.spacing.unit}px ${theme
      .spacing.unit * 9}px`,
    border: 0,
    display: 'block',
    verticalAlign: 'middle',
    whiteSpace: 'normal',
    background: 'none',
    margin: 0, // Reset for Safari
    color: 'inherit',
    width: '100%',
    '&:focus': {
      outline: 0,
    },
  },
});

class AppSearch extends React.Component {
  handleKeyDown = event => {
    if (
      ['/', 's'].indexOf(keycode(event)) !== -1 &&
      document.activeElement.nodeName.toLowerCase() === 'body' &&
      document.activeElement !== this.input
    ) {
      event.preventDefault();
      this.input.focus();
    }
  };

  input = null;

  render() {
    const { classes, width } = this.props;

    if (isWidthUp('sm', width)) {
      initDocsearch();
    }

    return (
      <div className={classes.root} style={{ display: isWidthUp('sm', width) ? 'block' : 'none' }}>
        <EventListener target="window" onKeyDown={this.handleKeyDown} />
        <div className={classes.search}>
          <SearchIcon />
        </div>
        <input
          id="docsearch-input"
          ref={node => {
            this.input = node;
          }}
          className={classes.input}
        />
      </div>
    );
  }
}

AppSearch.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
};

export default compose(withStyles(styles), withWidth(), pure)(AppSearch);
