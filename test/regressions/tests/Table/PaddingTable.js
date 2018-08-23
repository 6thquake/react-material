import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@6thquake/react-material/Grid';
import Paper from '@6thquake/react-material/Paper';
import Table from '@6thquake/react-material/Table';
import TableBody from '@6thquake/react-material/TableBody';
import TableCell from '@6thquake/react-material/TableCell';
import TableHead from '@6thquake/react-material/TableHead';
import TableRow from '@6thquake/react-material/TableRow';

function MyTable(props) {
  const { padding } = props;
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding={padding}>Padding: {padding}</TableCell>
            <TableCell padding={padding} />
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell padding={padding}>Dummy Data</TableCell>
            <TableCell padding={padding}>Dummy Data</TableCell>
          </TableRow>
          <TableRow>
            <TableCell padding={padding}>Dummy Data</TableCell>
            <TableCell padding={padding}>Dummy Data</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
}

MyTable.propTypes = {
  padding: PropTypes.any,
};

function PaddingTable() {
  return (
    <div>
      <Grid container spacing={16}>
        <Grid item xs={6}>
          <MyTable padding="default" />
        </Grid>
        <Grid item xs={6}>
          <MyTable padding="dense" />
        </Grid>
        <Grid item xs={6}>
          <MyTable padding="none" />
        </Grid>
        <Grid item xs={6}>
          <MyTable padding="checkbox" />
        </Grid>
      </Grid>
    </div>
  );
}

export default PaddingTable;
