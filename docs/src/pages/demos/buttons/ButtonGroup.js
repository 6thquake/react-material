import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-material/styles';
import Button from 'react-material/Button';
import ButtonGroup from 'react-material/ButtonGroup';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

function GroupButtons(props) {
  const { classes } = props;
  return (
    <div>
      <ButtonGroup className={classes.button} size={'large'}>
        <Button variant="raised" color="primary">
          左
        </Button>
        <Button variant="raised" color="primary">
          中
        </Button>
        <Button variant="raised" color="primary">
          右
        </Button>
      </ButtonGroup>
      <ButtonGroup className={classes.button} circular={true} size={'small'}>
        <Button variant="raised" color="primary">
          左
        </Button>
        <Button variant="raised" color="primary">
          中
        </Button>
        <Button variant="raised" color="primary">
          右
        </Button>
      </ButtonGroup>
      <ButtonGroup className={classes.button} circular={true}>
        <Button variant="raised" color="primary">
          左
        </Button>
        <Button variant="raised" color="primary">
          中
        </Button>
        <Button variant="raised" color="primary">
          右
        </Button>
      </ButtonGroup>
      <ButtonGroup position="vertical" className={classes.button} circular={true}>
        <Button variant="raised" className="test">
          上
        </Button>
        <Button variant="raised">中</Button>
        <Button variant="raised">下</Button>
      </ButtonGroup>
      <ButtonGroup position="vertical" className={classes.button} size={'large'}>
        <Button variant="raised" className="test">
          上
        </Button>
        <Button variant="raised">中</Button>
        <Button variant="raised">下</Button>
      </ButtonGroup>
      <ButtonGroup position="vertical" className={classes.button} size={'small'} circular={true}>
        <Button variant="raised" className="test">
          上
        </Button>
        <Button variant="raised">中</Button>
        <Button variant="raised">下</Button>
      </ButtonGroup>
    </div>
  );
}

GroupButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(GroupButtons);
