import React, { Component } from 'react';
import Toolbar from '../../Toolbar';
import Search from '../../Search';
import IconButton from '../../IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import GetApp from '@material-ui/icons/GetApp';
import { withStyles } from '../../styles';
import Menu from '../../Menu';
import MenuItem from '../../MenuItem';
import { darken, fade, lighten } from '../../styles/colorManipulator';

const styles = theme => ({
  root: {
    borderTop: `1px solid
    ${
      theme.palette.type === 'light'
        ? lighten(fade(theme.palette.divider, 1), 0.88)
        : darken(fade(theme.palette.divider, 1), 0.8)
    }`,
    borderBottom: `1px solid
    ${
      theme.palette.type === 'light'
        ? lighten(fade(theme.palette.divider, 1), 0.88)
        : darken(fade(theme.palette.divider, 1), 0.8)
    }`,
  },
  title: {
    flex: '0 0 auto',
    ...theme.typography.title,
  },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    display: 'flex',
  },
  // title: {
  //   flex: '0 0 auto',
  // },
  search: {},
  searchInput: {
    minWidth: '10em',
  },
  download: {
    marginLeft: theme.spacing.unit * 2,
  },
});

/**
 * @ignore - internal component.
 */

class TableToolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      searchText: '',
    };
  }
  componentDidMount() {}
  excelRef = React.createRef('excel');
  onChange = e => {
    let { onSearch, SearchProps } = this.props;
    let text = e.target.value;
    this.setState({
      searchText: text,
    });
    onSearch && onSearch(text);
    SearchProps.onChange && SearchProps.onChange(text);
  };
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleItemClick = e => {
    const { download } = this.props
    download && download()
  };

  render() {
    const { width, classes, searchable, exportProps, SearchProps, title } = this.props;
    const { anchorEl, searchText } = this.state;
    if (SearchProps.floatRight === undefined) {
      SearchProps.floatRight = true;
    }
    if (!searchable && !exportProps) {
      return null;
    }
    return (
      <div className={classes.root} style={{ width }}>
        <Toolbar>
          <div className={classes.title}>{title}</div>
          <div className={classes.spacer} />
          <div style={{ width: '80%', float: 'right' }}>
            {searchable && (
              <Search
                classes={{ input: classes.searchInput }}
                {...SearchProps}
                value={searchText}
                onChange={this.onChange}
              />
            )}
          </div>
          {exportProps && (
            <div className={classes.download}>
              <IconButton
                aria-label="More"
                aria-owns={anchorEl ? 'long-menu' : null}
                aria-haspopup="true"
                onClick={this.handleClick}
              >
                <GetApp />
              </IconButton>
              <Menu
                id="long-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
              >
                {exportProps.type === 'csv' && (
                  <MenuItem onClick={this.handleItemClick}>
                    <a ref={this.excelRef}>CSV</a>
                  </MenuItem>
                )}
              </Menu>
            </div>
          )}
        </Toolbar>
      </div>
    );
  }
}

export default withStyles(styles)(TableToolbar);
