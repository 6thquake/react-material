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

const GITHUB_RELEASE_BASE_URL = 'https://github.com/6thquake/react-material/tags/';

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
//         '/static/versions.json',
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
        url: '/',
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
