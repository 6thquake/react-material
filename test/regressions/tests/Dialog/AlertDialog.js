import React from 'react';
import DialogActions from '@6thquake/react-material/DialogActions';
import DialogContent from '@6thquake/react-material/DialogContent';
import DialogContentText from '@6thquake/react-material/DialogContentText';
import DialogTitle from '@6thquake/react-material/DialogTitle';
import Paper from '@6thquake/react-material/Paper';
import Button from '@6thquake/react-material/Button';

export default function AlertDialog() {
  return (
    <Paper
      elevation={8}
      style={{
        width: 300,
      }}
    >
      <DialogTitle>{"Use Google's location service?"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Let Google help apps determine location. This means sending anonymous location data to
          Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary">Disagree</Button>
        <Button color="primary">Agree</Button>
      </DialogActions>
    </Paper>
  );
}
