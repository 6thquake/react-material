
import React, {Component} from 'react';
import Toolbar from 'react-material/Toolbar'
import ReactDOM from 'react-dom'
import {
  Search
} from 'react-material/Search';
import IconButton from 'react-material/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {
  withStyles
} from 'react-material/styles';
import Menu from 'react-material/Menu';
import MenuItem from '../../MenuItem';

const styles = theme => ({
  root: {
    
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
  search: {
    
  },
  searchInput: {
    minWidth: '10em'
  },
  
})
class TableToolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      anchorEl: null
    };
  }
  componentDidMount(){
    
  }
  excelRef = React.createRef('excel')
  onChange = (e) =>{
    console.log('se', e)
    let { onSearch } = this.props
    onSearch && onSearch(e)
  }
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  }

  handleItemClick = (value) => (e) => {
    console.log('vale', value)
    const {
      createCsv
    } = this.props
    this.handleClose()
    let csv = createCsv()
    this.generateCsvFile(csv)
  }

  generateCsvFile(CSV, fileName ='table') {
    var link = document.createElement("a");
    var csvData = new Blob(["\uFEFF" + CSV], {
      type: 'text/csv'
    });
    var csvUrl = URL.createObjectURL(csvData);
    link.href = csvUrl;
    link.style = "visibility:hidden";
    link.download = fileName + ".csv";

    //this part will append the anchor tag and remove it after automatic click
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
  render() {
    const {width, classes} = this.props
    const {
      anchorEl
    } = this.state
    return (
      <div className={classes.root} style={{width}}>
        <Toolbar>
          <div style={{ width: '80%' }}>
            <Search classes={{input:classes.searchInput}} type={'dark'} direction={'left'} placeholder={'搜索'} onChange={this.onChange} />
          </div>
          <div className={classes.spacer}></div>
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
              <MenuItem onClick={this.handleItemClick('excel')}>
                <a ref={this.excelRef}>Excel</a>
              </MenuItem>
            </Menu>
          </div>

        </Toolbar>
      </div>
    );
  }
}

export default withStyles(styles)(TableToolbar);