import React from 'react';
import Typography from '@6thquake/react-material/Typography';
import Grid from '@6thquake/react-material/Grid';
import TextField from '@6thquake/react-material/TextField';
import FormControlLabel from '@6thquake/react-material/FormControlLabel';
import Checkbox from '@6thquake/react-material/Checkbox';

function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="title" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} md={6}>
          <TextField required id="cardName" label="Name on card" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="cardNumber" label="Card number" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="expDate" label="Expiry date" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remeber credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default PaymentForm;
