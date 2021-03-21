import React, { useRef, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import useDimensions from './hooks/useDimensions';
import VolumeButton from './VolumeButton';
import AudioAnalyser from './AudioAnalyser';

const Video = ({ isLocal, name, rtcClient, videoRef }) => {
  const [muted, setMuted] = useState(rtcClient.initialAudioMuted);
  const refCard = useRef(null);
  const dimensionsCard = useDimensions(refCard);

  const volumeButtonRef = useRef(null);
  const dimensionsVolumeButton = useDimensions(volumeButtonRef);

  // if (videoRef.current !== null)
  //   console.log({ isLocal, srcObject: videoRef.current.srcObject });

  return (
    <Card ref={refCard}>
      <CardActionArea>
        <video
          width={dimensionsCard.width}
          autoPlay
          muted={isLocal || muted}
          ref={videoRef}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <VolumeButton
          muted={muted}
          setMuted={setMuted}
          rtcClient={rtcClient}
          isLocal={isLocal}
          volumeButtonRef={volumeButtonRef}
        />
        {!muted && videoRef.current && videoRef.current.srcObject && (
          <AudioAnalyser
            audio={videoRef.current.srcObject}
            width={dimensionsCard.width - dimensionsVolumeButton.width}
          />
        )}
      </CardActions>
    </Card>
  );
};

export default Video;
