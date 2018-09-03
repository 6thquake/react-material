import React from 'react';
import TableCell from '../../TableCell';

import { withStyles } from '../../styles';

const styles = theme => ({
  root: {},
  tablePadding: {
    padding: '16px 8px',
  },
});

/**
 * @ignore - internal component.
 */

class Cell extends React.Component {
  render() {
    const { classes, TableCellProps, ...others } = this.props;
    return <TableCell classes={{ root: classes.tablePadding }} {...others} {...TableCellProps} />;
  }
}

export default withStyles(styles)(Cell);
