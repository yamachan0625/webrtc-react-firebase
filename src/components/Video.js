import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import useDimensions from './hooks/useDimensions';

const useStyles = makeStyles({});

const Video = ({ isLocal, name, videoRef }) => {
  const classes = useStyles();
  const refCard = useRef(null);
  const dimensionsCard = useDimensions(refCard);

  return (
    <Card ref={refCard}>
      <CardActionArea>
        <video
          width={dimensionsCard.width}
          autoPlay
          muted={isLocal}
          ref={videoRef}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
    </Card>
  );
};

export default Video;
