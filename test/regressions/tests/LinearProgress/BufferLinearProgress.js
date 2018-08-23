import React from 'react';
import LinearProgress from '@6thquake/react-material/LinearProgress';

export default function DeterminateLinearProgress() {
  return (
    <LinearProgress
      variant="buffer"
      value={60}
      valueBuffer={80}
      style={{
        width: 150,
      }}
    />
  );
}
