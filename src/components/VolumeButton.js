import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  icon: {
    height: 38,
    width: 38,
  },
});

const VolumeButton = ({
  volumeButtonRef,
  muted,
  setMuted,
  rtcClient,
  isLocal,
}) => {
  const Icon = muted ? VolumeOffIcon : VolumeUpIcon;

  const classes = useStyles();
  return (
    <IconButton
      ref={volumeButtonRef}
      aria-label="switch mute"
      onClick={() => {
        setMuted((prev) => !prev);
        // 以下はlocal側だけで実行可能
        if (isLocal) rtcClient.toggleAudio();
      }}
    >
      <Icon className={classes.icon} />
    </IconButton>
  );
};

export default VolumeButton;
