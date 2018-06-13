import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-material/styles';
import Codearea from 'react-material/Codearea';
import Grid from 'react-material/Grid';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

function SimpleCodearea(props) {
  const { classes } = props;
  return (
    <Grid container 
          alignItems={'stretch'}
          direction={'column'}
          justify={'space-between'}>
      <Grid item>
        <Codearea  
         language="js"
        >
          {`
            import React from 'react';

            class Square extends React.Component {
              render() {
                return (
                  <button className="square">
                    {this.props.value}
                  </button>
                );
              }
            }
        ` }
        </Codearea>
      </Grid>
      <Grid item>
        <Codearea
          language='css'
          >
            {`
              body {
                font: 100%/1.5 Questrial, sans-serif;
                tab-size: 4;
                hyphens: auto;
              }
              
              a {
                color: inherit;
              }
              
              section h1 {
                font-size: 250%;
              }
              
              section section h1 {
                font-size: 150%;
              }
            `}
          </Codearea>
      </Grid>
    </Grid>
  );
}

SimpleCodearea.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCodearea);
