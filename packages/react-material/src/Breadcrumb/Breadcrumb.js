import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../styles';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from '../List';
import Checkbox from '../Checkbox';
import Button from '../Button';
import IconButton from '../IconButton';
import { ChevronRight, ChevronLeft, LastPage, FirstPage } from '@material-ui/icons';

const styles = {
  root: {
    color: 'rgba(0,0,0,.45)',
    '@global a': {
      textDecoration: 'none',
      color: 'rgba(0,0,0,.45)',
      '&:hover': {
        color: 'rgba(0,0,0,.65)',
      },
    },
  },
  item: {
    display: 'inline-block',
    '@global svg': {
      verticalAlign: 'middle',
      width: '0.6em',
    },
  },
  icon: {
    padding: '0 3px',
  },
  separator: {
    padding: '0 0.5em',
    fontStyle: 'normal',
  },
};

class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const { url, msg, noLink, classes } = this.props;
    let _jsx = '';
    if (!noLink) {
      _jsx = (
        <span>
          <a href={url}>
            {' '}
            {!!msg.icon ? <i className={classes.icon}>{msg.icon}</i> : null}
            <font>{msg.name}</font>
          </a>
        </span>
      );
    } else {
      _jsx = (
        <span>
          <i className={classes.icon}>{msg.icon}</i>
          <font>{msg.name}</font>
        </span>
      );
    }
    return _jsx;
  }
}

class Breadcrumb extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { nameMap, currUrl, showIcon, separator, classes } = this.props;

    const _separator = separator || '/';
    let _currUrl=currUrl;
    if(!_currUrl){
      _currUrl = !!window && !!window.location?window.location.pathname:'';
    }
    let pathSnippets = _currUrl.split('/').filter(i => i);
    pathSnippets.unshift('');

    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
      const url = `${pathSnippets.slice(0, index + 1).join('/') || '/'}`;
      if (!nameMap[url]) {
        return null;
      }
      return (
        <div className={classes.item} key={url+index}>
          <Item
            key={url}
            url={url}
            msg={nameMap[url]}
            noLink={pathSnippets.length == index + 1}
            classes={classes}
          />
          <i className={classes.separator}>{pathSnippets.length != index + 1 ? _separator : ''}</i>
        </div>
      );
    });

    return <div className={classes.root}>{extraBreadcrumbItems}</div>;
  }
}
Breadcrumb.propTypes = {
  /**
  *The map of all websites, eg. {
      '/': {name:'home',icon:(<Home/>)},
      '/apps': {name:'Application List',icon:(<Home/>)},
      '/apps/1': {name:'Application1',icon:(<Grade/>)},
      '/apps/2': {name:'Application2',icon:(<Lock/>)},
      '/apps/1/detail': {name:'Detail',icon:''},
      '/apps/2/detail': {name:'Detail',icon:''},
    }
  */
  nameMap: PropTypes.object.isRequired,
  /**
   *the Url of current Page,one of the keys of nameMap;
   *Not required. when leaveout it will get window.location.url
   */
  currUrl: PropTypes.string,
  /**
   *the separator of breadcrumb
   */
  separator: PropTypes.string,
};
Breadcrumb.defaultProps = {
  separator: '/'
};

export default withStyles(styles, { name: 'RMBreadcrumb' })(Breadcrumb);
