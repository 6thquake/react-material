import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-material/styles';
import NoSSR from '@material-ui/docs/NoSSR';
import MarkdownElement from '@material-ui/docs/MarkdownElement';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    minHeight: 600,
  },
  markdownElement: {
    maxWidth: theme.spacing.unit * 110,
    margin: 'auto',
    padding: theme.spacing.unit * 2,
  },
});

function HomeBackers(props) {
  const classes = props.classes;

  return (
    <div className={classes.root}>
      <NoSSR>
        <MarkdownElement
          className={classes.markdownElement}
          text={`
<h2>Supporting React-Material</h2>

React-Material is an MIT-licensed open source project.
It's an independent project with ongoing development made possible entirely
thanks to the support of these awesome [backers](/discover-more/backers).

<h3>Maintainers</h3>

#### via [Sixthquake](http://git.dev.sh.ctripcorp.com/sixthquake/react-material)

<table>
  <tbody>
    <tr>

      ${['liujc', 'jxzhuang', 'wgshao', 'honggc', 'wmhuang', 'liyn']
        .map(
          user =>
            `<td align="center" valign="middle">
              <a href="http://git.dev.sh.ctripcorp.com/u/${user}" rel="noopener" target="_blank">
                <img
                  width="80"
                  src="https://www.ctripteam.com/avatar/${user}?_dc=0"
                  alt="${user}"
                  title="${user}"
                >
              </a>
            </td>`  
          )
        .join('')}
    </tr>
  </tbody>
</table>

`}
        />
      </NoSSR>
    </div>
  );
}

HomeBackers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeBackers);
