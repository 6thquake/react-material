import React, { Component } from 'react';
import Toolbar from '../../Toolbar';
import ReactDOM from 'react-dom';
import { Search } from '../../Search';
import IconButton from '../../IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
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
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    display: 'flex',
  },
  title: {
    flex: '0 0 auto',
  },
  search: {},
  searchInput: {
    minWidth: '10em',
  },
});
class TableToolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
  }
  componentDidMount() {}
  excelRef = React.createRef('excel');
  onChange = e => {
    let { onSearch } = this.props;
    onSearch && onSearch(e);
  };
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleItemClick = e => {
    const { createCsv } = this.props;
    this.handleClose();
    let csv = createCsv();
    this.generateCsvFile(csv);
  };

  generateCsvFile(CSV, fileName = 'table') {
    var link = document.createElement('a');
    var csvData = new Blob(['\uFEFF' + CSV], {
      type: 'text/csv',
    });
    var csvUrl = URL.createObjectURL(csvData);
    link.href = csvUrl;
    link.style = 'visibility:hidden';
    link.download = fileName + '.csv';

    //this part will append the anchor tag and remove it after automatic click
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  render() {
    const { width, classes, searchable, exportProps, searchProps } = this.props;
    const { anchorEl } = this.state;
    if (!searchable && !exportProps) {
      return null;
    }
    return (
      <div className={classes.root} style={{ width }}>
        <Toolbar>
          <div style={{ width: '80%' }}>
            {searchable && (
              <Search
                classes={{ input: classes.searchInput }}
                {...searchProps}
                onChange={this.onChange}
              />
            )}
          </div>
          <div className={classes.spacer} />
          {exportProps && (
            <div>
              <IconButton
                aria-label="More"
                aria-owns={anchorEl ? 'long-menu' : null}
                aria-haspopup="true"
                onClick={this.handleClick}
              >
                <MoreVertIcon />
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
