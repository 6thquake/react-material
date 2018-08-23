import React from 'react';
import Button from '@6thquake/react-material/Button';

export default function MultilineButton() {
  return (
    <Button variant="contained" style={{ width: 400 }}>
      {[
        'Raised buttons are rectangular-shaped buttons.',
        'They may be used inline.',
        'They lift and display ink reactions on press.',
      ].join(' ')}
    </Button>
  );
}
