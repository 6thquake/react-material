import 'isomorphic-fetch';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Link from 'docs/src/modules/components/Link';

const GITHUB_RELEASE_BASE_URL = 'https://github.com/mui-org/material-ui/releases/tag/';

const styles = {
  root: {
    width: '100%',
  },
};

// function pause(timeout) {
//   return new Promise(accept => {
//     setTimeout(accept, timeout);
//   });
// }

// let cacheVersions = null;

// async function getVersions() {
//   try {
//     if (!cacheVersions) {
//       await pause(1e3); // Soften the pressure on the main thread.
//       const result = await fetch(
//         'https://raw.githubusercontent.com/mui-org/material-ui/v1-beta/docs/versions.json',
//       );
//       cacheVersions = await result.json();
//     }
//   } catch (err) {
//     // Swallow the exceptions.
//   }

//   cacheVersions = cacheVersions || [];
//   return cacheVersions;
// }

class StableVersions extends React.Component {
  state = {
    // versions: [],
  };

  componentDidMount = async () => {
    // const versions = await getVersions();
    // this.setState({ versions });
  };

  render() {
    const { classes } = this.props;

    const VERSIONS = [
      {
        url: 'https://material-ui-next.com',
        semver: process.env.LIB_VERSION,
      },
    ];

    return (
      <Paper className={classes.root}>
        <Table>
          <TableBody>
            {VERSIONS.map(version => {
              return (
                <TableRow key={version.semver}>
                  <TableCell>
                    <Typography>{version.semver}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      component={props2 => (
                        <Link {...props2} variant="secondary" href={version.url} />
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
                          href={`${GITHUB_RELEASE_BASE_URL}v${version.semver}`}
                        />
                      )}
                    >
                      Release notes
                    </Typography>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

StableVersions.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StableVersions);
