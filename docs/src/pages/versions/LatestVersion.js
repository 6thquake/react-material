import 'isomorphic-fetch';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-material/styles';
import Table, { TableBody, TableCell, TableRow } from 'react-material/Table';
import Paper from 'react-material/Paper';
import Typography from 'react-material/Typography';
import Link from 'docs/src/modules/components/Link';

const styles = {
  root: {
    width: '100%',
  },
};

function LatestVersion(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography>0.0.4 beta branch</Typography>
            </TableCell>
            <TableCell>
              <Typography
                component={props2 => (
                  <Link
                    {...props2}
                    variant="secondary"
                    href="http://git.dev.sh.ctripcorp.com/sixthquake/react-material"
                  />
                )}
              >
                Documentation
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                component={props2 => (
                  <Link
                    {...props2}
                    variant="secondary"
                    href="http://git.dev.sh.ctripcorp.com/sixthquake/react-material"
                  />
                )}
              >
                Source code
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
}

LatestVersion.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LatestVersion);
