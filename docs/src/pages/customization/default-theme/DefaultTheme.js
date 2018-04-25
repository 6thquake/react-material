import React from 'react';
import url from 'url';
import PropTypes from 'prop-types';
import Inspector from 'react-inspector';
import { withStyles, withTheme, createMuiTheme } from 'material-ui/styles';
import { FormControlLabel } from 'material-ui/Form';
import Switch from 'material-ui/Switch';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2,
    paddingTop: 0,
    // Match <Inspector /> default theme.
    backgroundColor: theme.palette.type === 'light' ? theme.palette.common.white : '#242424',
    minHeight: theme.spacing.unit * 40,
    width: '100%',
  },
  switch: {
    paddingBottom: theme.spacing.unit,
  },
});

class ThemeDefault extends React.Component {
  state = {
    checked: false,
    expandPaths: null,
  };

  componentDidMount() {
    const URL = url.parse(document.location.href, true);
    const expandPath = URL.query['expend-path'];

    if (!expandPath) {
      return;
    }

    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      expandPaths: expandPath.split('.').reduce((acc, path) => {
        const last = acc.length > 0 ? `${acc[acc.length - 1]}.` : '';
        acc.push(last + path);
        return acc;
      }, []),
    });
  }

  render() {
    const { classes, theme: docsTheme } = this.props;
    const { checked, expandPaths } = this.state;

    const theme = createMuiTheme({
      palette: {
        type: docsTheme.palette.type,
      },
      direction: docsTheme.direction,
    });

    return (
      <div className={classes.root}>
        <FormControlLabel
          className={classes.switch}
          control={
            <Switch
              checked={checked}
              onChange={(event, value) => this.setState({ checked: value })}
            />
          }
          label="Expand all"
        />
        <Inspector
          theme={theme.palette.type === 'light' ? 'chromeLight' : 'chromeDark'}
          data={theme}
          expandPaths={expandPaths}
          expandLevel={checked ? 100 : 1}
          key={`${checked}-${theme.palette.type}`} // Remount
        />
      </div>
    );
  }
}

ThemeDefault.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles)(withTheme()(ThemeDefault));
