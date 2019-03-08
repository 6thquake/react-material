/**
 * @ignore - do not document.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { CrossTabulationData } from './CrossTabulationUtilities';
import Table from '..';
import TableBody from '../../TableBody';
import TableCell from '../../TableCell';
import TableHead from '../../TableHead';
import TableRow from '../../TableRow';
import { withStyles } from '../../styles';

const styles = theme => ({
  table: {
    fontSize: '8pt',
    textAlign: 'left',
    borderCollapse: 'collapse',
    marginTop: '3px',
    marginLeft: '3px',
    fontFamily: theme.typography.fontFamily,
  },
  th: {
    backgroundColor: '#ebf0f8',
    border: '1px solid #c8d4e3',
    fontSize: '8pt',
    padding: '5px !important',
  },
  td: {
    color: '#2a3f5f',
    padding: '5px !important',
    backgroundColor: '#fff',
    border: '1px solid #c8d4e3',
    verticalAlign: 'top',
    textAlign: 'right',
  },
  tf: {
    backgroundColor: '#ebf0f8',
    border: '1px solid #c8d4e3',
    fontSize: '8pt',
    padding: '5px !important',
  },
});

// helper function for setting row/col-span in CrossTabulationRenderer
const spanSize = function(arr, i, j) {
  let x;
  if (i !== 0) {
    let asc; let
end;
    let noDraw = true;
    for (x = 0, end = j, asc = end >= 0; asc ? x <= end : x >= end; asc ? x++ : x--) {
      if (arr[i - 1][x] !== arr[i][x]) {
        noDraw = false;
      }
    }
    if (noDraw) {
      return -1;
    }
  }
  let len = 0;
  while (i + len < arr.length) {
    let asc1; let
end1;
    let stop = false;
    for (x = 0, end1 = j, asc1 = end1 >= 0; asc1 ? x <= end1 : x >= end1; asc1 ? x++ : x--) {
      if (arr[i][x] !== arr[i + len][x]) {
        stop = true;
      }
    }
    if (stop) {
      break;
    }
    len++;
  }
  return len;
};

function redColorScaleGenerator(values) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  return x => {
    // eslint-disable-next-line no-magic-numbers
    const nonRed = 255 - Math.round((255 * (x - min)) / (max - min));
    return { backgroundColor: `rgb(255,${nonRed},${nonRed})` };
  };
}

function makeRenderer(opts = {}) {
  class TableRenderer extends React.PureComponent {
    render() {
      const { classes } = this.props;

      const crossTableData = new CrossTabulationData(this.props);
      const colAttrs = crossTableData.props.cols;
      const rowAttrs = crossTableData.props.rows;
      const rowKeys = crossTableData.getRowKeys();
      const colKeys = crossTableData.getColKeys();
      const grandTotalAggregator = crossTableData.getAggregator([], []);

      let valueCellColors = () => {};
      let rowTotalColors = () => {};
      let colTotalColors = () => {};
      if (opts.heatmapMode) {
        const colorScaleGenerator = this.props.tableColorScaleGenerator;
        const rowTotalValues = colKeys.map(x => crossTableData.getAggregator([], x).value());
        rowTotalColors = colorScaleGenerator(rowTotalValues);
        const colTotalValues = rowKeys.map(x => crossTableData.getAggregator(x, []).value());
        colTotalColors = colorScaleGenerator(colTotalValues);

        if (opts.heatmapMode === 'full') {
          const allValues = [];
          rowKeys.map(r =>
            colKeys.map(c => allValues.push(crossTableData.getAggregator(r, c).value())),
          );
          const colorScale = colorScaleGenerator(allValues);
          valueCellColors = (r, c, v) => colorScale(v);
        } else if (opts.heatmapMode === 'row') {
          const rowColorScales = {};
          rowKeys.map(r => {
            const rowValues = colKeys.map(x => crossTableData.getAggregator(r, x).value());
            rowColorScales[r] = colorScaleGenerator(rowValues);
          });
          valueCellColors = (r, c, v) => rowColorScales[r](v);
        } else if (opts.heatmapMode === 'col') {
          const colColorScales = {};
          colKeys.map(c => {
            const colValues = rowKeys.map(x => crossTableData.getAggregator(x, c).value());
            colColorScales[c] = colorScaleGenerator(colValues);
          });
          valueCellColors = (r, c, v) => colColorScales[c](v);
        }
      }

      const getClickHandler =
        this.props.tableOptions && this.props.tableOptions.clickCallback
          ? (value, rowValues, colValues) => {
              const filters = {};
              for (const i of Object.keys(colAttrs || {})) {
                const attr = colAttrs[i];
                if (colValues[i] !== null) {
                  filters[attr] = colValues[i];
                }
              }
              for (const i of Object.keys(rowAttrs || {})) {
                const attr = rowAttrs[i];
                if (rowValues[i] !== null) {
                  filters[attr] = rowValues[i];
                }
              }
              return e => this.props.tableOptions.clickCallback(e, value, filters, crossTableData);
            }
          : null;

      return (
        <Table className={classes.table}>
          <TableHead>
            {colAttrs.map((c, j) => {
              return (
                <TableRow key={`colAttr${j}`}>
                  {j === 0 && rowAttrs.length !== 0 && (
                    <TableCell
                      className={classes.th}
                      colSpan={rowAttrs.length}
                      rowSpan={colAttrs.length}
                    />
                  )}
                  <TableCell className={classes.th}>{c}</TableCell>
                  {colKeys.map((colKey, i) => {
                    const x = spanSize(colKeys, i, j);
                    if (x === -1) {
                      return null;
                    }
                    return (
                      <TableCell
                        className={classes.th}
                        key={`colKey${i}`}
                        colSpan={x}
                        rowSpan={j === colAttrs.length - 1 && rowAttrs.length !== 0 ? 2 : 1}
                      >
                        {colKey[j]}
                      </TableCell>
                    );
                  })}

                  {j === 0 && (
                    <TableCell
                      className={classes.th}
                      rowSpan={colAttrs.length + (rowAttrs.length === 0 ? 0 : 1)}
                    >
                      Totals
                    </TableCell>
                  )}
                </TableRow>
              );
            })}

            {rowAttrs.length !== 0 && (
              <TableRow>
                {rowAttrs.map((r, i) => {
                  return (
                    <TableCell className={classes.th} key={`rowAttr${i}`}>
                      {r}
                    </TableCell>
                  );
                })}
                <TableCell className={classes.th}>
                  {colAttrs.length === 0 ? 'Totals' : null}
                </TableCell>
              </TableRow>
            )}
          </TableHead>

          <TableBody>
            {rowKeys.map((rowKey, i) => {
              const totalAggregator = crossTableData.getAggregator(rowKey, []);
              return (
                <TableRow key={`rowKeyRow${i}`}>
                  {rowKey.map((txt, j) => {
                    const x = spanSize(rowKeys, i, j);
                    if (x === -1) {
                      return null;
                    }
                    return (
                      <TableCell
                        key={`rowKeyLabel${i}-${j}`}
                        className={classes.td}
                        rowSpan={x}
                        colSpan={j === rowAttrs.length - 1 && colAttrs.length !== 0 ? 2 : 1}
                      >
                        {txt}
                      </TableCell>
                    );
                  })}
                  {colKeys.map((colKey, j) => {
                    const aggregator = crossTableData.getAggregator(rowKey, colKey);
                    return (
                      <TableCell
                        className={classes.td}
                        key={`rm-ct-td-${i}-${j}`}
                        onClick={
                          getClickHandler && getClickHandler(aggregator.value(), rowKey, colKey)
                        }
                        style={valueCellColors(rowKey, colKey, aggregator.value())}
                      >
                        {aggregator.format(aggregator.value())}
                      </TableCell>
                    );
                  })}
                  <TableCell
                    className={classes.td}
                    onClick={
                      getClickHandler && getClickHandler(totalAggregator.value(), rowKey, [null])
                    }
                    style={colTotalColors(totalAggregator.value())}
                  >
                    {totalAggregator.format(totalAggregator.value())}
                  </TableCell>
                </TableRow>
              );
            })}

            <TableRow>
              <TableCell
                className={classes.tf}
                colSpan={rowAttrs.length + (colAttrs.length === 0 ? 0 : 1)}
              >
                Totals
              </TableCell>

              {colKeys.map((colKey, i) => {
                const totalAggregator = crossTableData.getAggregator([], colKey);
                return (
                  <TableCell
                    className={classes.tf}
                    key={`total${i}`}
                    onClick={
                      getClickHandler && getClickHandler(totalAggregator.value(), [null], colKey)
                    }
                    style={rowTotalColors(totalAggregator.value())}
                  >
                    {totalAggregator.format(totalAggregator.value())}
                  </TableCell>
                );
              })}

              <TableCell
                onClick={
                  getClickHandler && getClickHandler(grandTotalAggregator.value(), [null], [null])
                }
                className={classes.tf}
              >
                {grandTotalAggregator.format(grandTotalAggregator.value())}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );
    }
  }

  TableRenderer.defaultProps = Object.assign({}, CrossTabulationData.defaultProps, {
    tableColorScaleGenerator: redColorScaleGenerator,
    tableOptions: {},
  });

  TableRenderer.propTypes = Object.assign({}, CrossTabulationData.defaultProps, {
    tableColorScaleGenerator: PropTypes.func,
    tableOptions: PropTypes.object,
  });

  return withStyles(styles, { name: 'AwesomeTableRenderer' })(TableRenderer);
}

/**
 * @ignore - internal component.
 */

class TSVExportRenderer extends React.PureComponent {
  render() {
    const crossTableData = new CrossTabulationData(this.props);
    const rowKeys = crossTableData.getRowKeys();
    const colKeys = crossTableData.getColKeys();
    if (rowKeys.length === 0) {
      rowKeys.push([]);
    }
    if (colKeys.length === 0) {
      colKeys.push([]);
    }

    const headerRow = crossTableData.props.rows.map(r => r);
    if (colKeys.length === 1 && colKeys[0].length === 0) {
      headerRow.push(this.props.aggregatorName);
    } else {
      colKeys.map(c => headerRow.push(c.join('-')));
    }

    const result = rowKeys.map(r => {
      const row = r.map(x => x);
      colKeys.map(c => {
        const v = crossTableData.getAggregator(r, c).value();
        row.push(v || '');
      });
      return row;
    });

    result.unshift(headerRow);

    return (
      <textarea
        value={result.map(r => r.join('\t')).join('\n')}
        style={{ width: window.innerWidth / 2, height: window.innerHeight / 2 }}
        readOnly
      />
    );
  }
}

TSVExportRenderer.defaultProps = CrossTabulationData.defaultProps;
TSVExportRenderer.propTypes = CrossTabulationData.propTypes;

export default {
  Table: makeRenderer(),
  'Table Heatmap': makeRenderer({ heatmapMode: 'full' }),
  'Table Col Heatmap': makeRenderer({ heatmapMode: 'col' }),
  'Table Row Heatmap': makeRenderer({ heatmapMode: 'row' }),
  'Exportable TSV': TSVExportRenderer,
};
