import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import MarkdownElement from '@material-ui/docs/MarkdownElement';
import Grid from '@6thquake/react-material/Grid';
import FormControl from '@6thquake/react-material/FormControl';
import FormLabel from '@6thquake/react-material/FormLabel';
import FormControlLabel from '@6thquake/react-material/FormControlLabel';
import RadioGroup from '@6thquake/react-material/RadioGroup';
import Radio from '@6thquake/react-material/Radio';
import Paper from '@6thquake/react-material/Paper';
import Avatar from '@6thquake/react-material/Avatar';
import Chip from '@6thquake/react-material/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  chipWrapper: {
    marginBottom: theme.spacing.unit * 5,
  },
});

class ChipsPlayground extends React.Component {
  state = {
    color: 'default',
    onDelete: 'none',
    avatar: 'none',
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  handleDeleteExample = () => {
    alert('You clicked the delete icon.'); // eslint-disable-line no-alert
  };

  render() {
    const { classes } = this.props;
    const { color, onDelete, avatar } = this.state;

    const colorToCode = color !== 'default' ? `color="${color}" ` : '';

    let onDeleteToCode;
    switch (onDelete) {
      case 'none':
        onDeleteToCode = '';
        break;
      case 'custom':
        onDeleteToCode = 'deleteIcon={<DoneIcon />} onDelete={handleDelete} ';
        break;
      default:
        onDeleteToCode = 'onDelete={handleDelete} ';
        break;
    }

    let avatarToCode;
    let avatarToPlayground;
    switch (avatar) {
      case 'none':
        avatarToCode = '';
        break;
      case 'img':
        avatarToCode = 'avatar={<Avatar src="/static/images/uxceo-128.jpg" />} ';
        avatarToPlayground = <Avatar src="/static/images/uxceo-128.jpg" />;
        break;
      case 'letter':
        avatarToCode = 'avatar={<Avatar>FH</Avatar>} ';
        avatarToPlayground = <Avatar>FH</Avatar>;
        break;
      default:
        avatarToCode = 'avatar={<Avatar><FaceIcon /></Avatar>} ';
        avatarToPlayground = (
          <Avatar>
            <FaceIcon />
          </Avatar>
        );
        break;
    }

    const code = `
\`\`\`jsx
<Chip ${colorToCode}${onDeleteToCode}${avatarToCode}/>
\`\`\`
`;

    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container justify="center" alignItems="center" spacing={40}>
            <Grid item className={classes.chipWrapper}>
              <Chip
                label="Awesome Chip Component"
                color={color}
                deleteIcon={onDelete === 'custom' && <DoneIcon />}
                onDelete={onDelete !== 'none' && this.handleDeleteExample}
                avatar={avatarToPlayground}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.control}>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormLabel>color</FormLabel>
                  <RadioGroup
                    row
                    name="color"
                    aria-label="color"
                    value={color}
                    onChange={this.handleChange('color')}
                  >
                    <FormControlLabel value="default" control={<Radio />} label="default" />
                    <FormControlLabel value="primary" control={<Radio />} label="primary" />
                    <FormControlLabel value="secondary" control={<Radio />} label="secondary" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormLabel>onDelete</FormLabel>
                  <RadioGroup
                    row
                    name="onDelete"
                    aria-label="onDelete"
                    value={onDelete}
                    onChange={this.handleChange('onDelete')}
                  >
                    <FormControlLabel value="none" control={<Radio />} label="none" />
                    <FormControlLabel value="default" control={<Radio />} label="default" />
                    <FormControlLabel value="custom" control={<Radio />} label="custom" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormLabel>avatar</FormLabel>
                  <RadioGroup
                    row
                    name="avatar"
                    aria-label="avatar"
                    value={avatar}
                    onChange={this.handleChange('avatar')}
                  >
                    <FormControlLabel value="none" control={<Radio />} label="none" />
                    <FormControlLabel value="letter" control={<Radio />} label="letter" />
                    <FormControlLabel value="img" control={<Radio />} label="img" />
                    <FormControlLabel value="icon" control={<Radio />} label="icon" />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <MarkdownElement text={code} />
        </Grid>
      </Grid>
    );
  }
}

ChipsPlayground.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChipsPlayground);
