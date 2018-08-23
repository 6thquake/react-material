import React from 'react';
import LinearProgress from '@6thquake/react-material/LinearProgress';

export default function DeterminateLinearProgress() {
  return (
    <LinearProgress
      variant="determinate"
      value={60}
      style={{
        width: 150,
      }}
    />
  );
}
