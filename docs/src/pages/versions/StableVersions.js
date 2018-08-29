/* eslint-disable react/no-did-mount-set-state */

import 'isomorphic-fetch';
import React from 'react';
import PropTypes from 'prop-types';
import orderBy from 'lodash/orderBy';
import sortedUniqBy from 'lodash/sortedUniqBy';
import { withStyles } from '@6thquake/react-material/styles';
import Table from '@6thquake/react-material/Table';
import TableBody from '@6thquake/react-material/TableBody';
import TableCell from '@6thquake/react-material/TableCell';
import TableRow from '@6thquake/react-material/TableRow';
import Paper from '@6thquake/react-material/Paper';
import Typography from '@6thquake/react-material/Typography';
import Link from 'docs/src/modules/components/Link';

const GITHUB_RELEASE_BASE_URL = 'https://github.com/6thquake/react-material/releases/tag/';

const styles = {
  root: {
    minHeight: 50,
    width: '100%',
  },
};

let cacheBranches = null;

async function getBranches() {
  try {
    if (!cacheBranches) {
      const result = await fetch('https://api.github.com/repos/mui-org/material-ui-docs/branches');
      cacheBranches = await result.json();
    }
  } catch (err) {
    // Swallow the exceptions.
  }

  cacheBranches = cacheBranches || [];
  return cacheBranches;
}

class StableVersions extends React.Component {
  state = {
    docs: [],
  };

  async componentDidMount() {
    const branches = await getBranches();
    let docs = branches.map(n => n.name);
    docs = docs.filter(version => version !== 'latest');
    docs = docs.map(version => ({
      version,
      // Replace dot with dashes for Netlify branch subdomains
      url: `https://${version.replace(/\./g, '-')}.material-ui.com`,
    }));
    // Current version.
    docs.push({
      version: `v${process.env.LIB_VERSION}`,
      url: document.location.origin,
    });
    // Legacy documentation.
    docs.push({
      version: 'v0.20.1',
      url: 'https://v0.material-ui.com',
    });
    docs = orderBy(docs, 'version', 'desc');
    docs = sortedUniqBy(docs, 'version');
    // The latest version is always using the naked domain.
    docs[0].url = 'https://react-material.com';
    this.setState({ docs });
  }

  render() {
    const { classes } = this.props;
    const { docs } = this.state;

    return (
      <Paper className={classes.root}>
        <Table>
          <TableBody>
            {docs.map(doc => {
              return (
                <TableRow key={doc.version}>
                  <TableCell padding="dense">
                    <Typography>
                      {doc.version}
                      {doc.version === `v${process.env.LIB_VERSION}` ? ' ✓' : ''}
                    </Typography>
                  </TableCell>
                  <TableCell padding="dense">
                    <Typography
                      component={props2 => <Link {...props2} variant="secondary" href={doc.url} />}
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
                          href={`${GITHUB_RELEASE_BASE_URL}${doc.version}`}
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
