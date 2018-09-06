import React from 'react';
import { withStyles } from '@6thquake/react-material/styles';
import { Upload } from '@6thquake/react-material/Upload';
import RadioGroup from '@6thquake/react-material/RadioGroup';
import Radio from '@6thquake/react-material/Radio';
import FormControlLabel from '@6thquake/react-material/FormControlLabel';

const styles = theme => ({
  message: {
    marginTop: theme.spacing.unit * 3,
  },
});

class App extends React.Component {
  state = {
    multiple: '1',
    files: [],
  };

  handleConfigChange = event => {
    const { value } = event.target;
    this.setState({
      multiple: value,
    });
  };

  handleChange = files => {
    this.setState({
      files: files,
    });
  };

  render() {
    const { classes } = this.props;
    const { multiple, files } = this.state;

    return (
      <div>
        <RadioGroup row value={multiple} onChange={this.handleConfigChange}>
          <FormControlLabel value={'0'} control={<Radio />} label="只允许上传单个文件" />
          <FormControlLabel value={'1'} control={<Radio />} label="允许上传多个文件" />
        </RadioGroup>
        <div>
          <Upload
            type="img"
            onChange={this.handleChange}
            disabled={false}
            label={'upload'}
            multiple={multiple == '1'}
          />
        </div>
        <div className={classes.message}>upload files: {files.map(file => ` ${file.name} `)}</div>
      </div>
    );
  }
}
export default withStyles(styles)(App);
