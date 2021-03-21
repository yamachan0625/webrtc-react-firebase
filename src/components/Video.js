import React, { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import useDimensions from './hooks/useDimensions';
import VolumeButton from './VolumeButton';

const useStyles = makeStyles({});

const Video = ({ isLocal, name, videoRef }) => {
  const [muted, setMuted] = useState(true);
  // const classes = useStyles();
  const refCard = useRef(null);
  const dimensionsCard = useDimensions(refCard);

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
        <VolumeButton muted={muted} setMuted={setMuted} />
      </CardActions>
    </Card>
  );
};

export default Video;
