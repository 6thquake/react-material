import 'isomorphic-fetch';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import Table from '@6thquake/react-material/Table';
import TableBody from '@6thquake/react-material/TableBody';
import TableCell from '@6thquake/react-material/TableCell';
import TableRow from '@6thquake/react-material/TableRow';
import Paper from '@6thquake/react-material/Paper';
import Typography from '@6thquake/react-material/Typography';
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
            <TableCell padding="dense">
              <Typography>master branch</Typography>
            </TableCell>
            <TableCell padding="dense">
              <Typography
                component={props2 => (
                  <Link {...props2} variant="secondary" href="https://react-material.netlify.com//" />
                )}
              >
                Documentation
              </Typography>
            </TableCell>
            <TableCell padding="dense">
              <Typography
                component={props2 => (
                  <Link
                    {...props2}
                    variant="secondary"
                    href="https://github.com/6thquake/react-material"
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
