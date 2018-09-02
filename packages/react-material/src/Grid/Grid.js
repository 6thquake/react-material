/**
 * @ignore - do not document.
 */

import React from 'react';
import FlexGrid from '@material-ui/core/Grid';
import PercentageGrid from './PercentageGrid';

function Grid(props) {
  const { type, ...other } = props;
  const Component =
    type === 'float' || type === 'percentage' || type === 'compatible' ? PercentageGrid : FlexGrid;

  return <Component {...other} />;
}
export default Grid;
