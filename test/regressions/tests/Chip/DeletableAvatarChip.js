import React from 'react';
import Avatar from '@6thquake/react-material/Avatar';
import Chip from '@6thquake/react-material/Chip';

export default function DeletableAvatarChip() {
  return <Chip avatar={<Avatar>MB</Avatar>} label="SvgIcon Chip" onDelete={() => {}} />;
}
