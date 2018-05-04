import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-material/styles';
import { FormControl, FormLabel, FormControlLabel } from 'react-material/Form';
import Radio, { RadioGroup } from 'react-material/Radio';
import Grid from 'react-material/Grid';
import {Button} from 'react-material/Button';
import Popover from 'react-material/Popover';
import Popconfirm from 'react-material/Popconfirm';

const styles = theme => ({
  box: {
    marginBottom: theme.spacing.unit * 6,
  },
});

class AnchorPlayground extends React.Component {
  state = {
    anchorOriginVertical: 'top',
    anchorOriginHorizontal: 'center',
    transformOriginVertical: 'bottom',
    transformOriginHorizontal: 'center'
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  cancel = () => {
    console.log('cancel');
  };
  confirm = () => {
    console.log('ok');
  };
  render() {
    const { classes } = this.props;
    const {
      anchorOriginVertical,
      anchorOriginHorizontal,
      transformOriginVertical,
      transformOriginHorizontal,
    } = this.state;

    return (
      <div className={classes.box}>
        <Popconfirm
          onCancel={this.cancel}    //cancel callback
          onConfirm={this.confirm}  // confirm callback
          cancelText={'cancel'}
          okText={'yes'}
          content={'Are you sure delete this task?'}
          anchorOrigin={{
            vertical: anchorOriginVertical,
            horizontal: anchorOriginHorizontal,
          }}
          transformOrigin={{
            vertical: transformOriginVertical,
            horizontal: transformOriginHorizontal,
          }}
        >
          <Button
            variant="raised"
            color="secondary"
          >
            Open Popconfirm
          </Button>
        </Popconfirm>
        <Grid container spacing={16}>          
         
          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">anchorOrigin.vertical</FormLabel>
              <RadioGroup
                aria-label="anchorOriginVertical"
                name="anchorOriginVertical"
                value={this.state.anchorOriginVertical}
                onChange={this.handleChange('anchorOriginVertical')}
              >
                <FormControlLabel value="top" control={<Radio />} label="Top" />
                <FormControlLabel value="center" control={<Radio />} label="Center" />
                <FormControlLabel value="bottom" control={<Radio />} label="Bottom" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">transformOrigin.vertical</FormLabel>
              <RadioGroup
                aria-label="transformOriginVertical"
                name="transformOriginVertical"
                value={this.state.transformOriginVertical}
                onChange={this.handleChange('transformOriginVertical')}
              >
                <FormControlLabel value="top" control={<Radio />} label="Top" />
                <FormControlLabel value="center" control={<Radio />} label="Center" />
                <FormControlLabel value="bottom" control={<Radio />} label="Bottom" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">anchorOrigin.horizontal</FormLabel>
              <RadioGroup
                row
                aria-label="anchorOriginHorizontal"
                name="anchorOriginHorizontal"
                value={this.state.anchorOriginHorizontal}
                onChange={this.handleChange('anchorOriginHorizontal')}
              >
                <FormControlLabel value="left" control={<Radio />} label="Left" />
                <FormControlLabel value="center" control={<Radio />} label="Center" />
                <FormControlLabel value="right" control={<Radio />} label="Right" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">transformOrigin.horizontal</FormLabel>
              <RadioGroup
                row
                aria-label="transformOriginHorizontal"
                name="transformOriginHorizontal"
                value={this.state.transformOriginHorizontal}
                onChange={this.handleChange('transformOriginHorizontal')}
              >
                <FormControlLabel value="left" control={<Radio />} label="Left" />
                <FormControlLabel value="center" control={<Radio />} label="Center" />
                <FormControlLabel value="right" control={<Radio />} label="Right" />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </div>
    );
  }
}

AnchorPlayground.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AnchorPlayground);
