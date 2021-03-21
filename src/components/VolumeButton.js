import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';

const VolumeButton = ({ muted, setMuted }) => {
  const Icon = muted ? <VolumeOffIcon /> : <VolumeUpIcon />;
  return (
    <IconButton
      aria-label="switch mute"
      onClick={() => setMuted((prev) => !prev)}
    >
      {Icon}
    </IconButton>
  );
};

export default VolumeButton;
