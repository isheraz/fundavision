import React from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  makeStyles,
  Theme,
  createStyles
} from '@material-ui/core';

import { PSS, User } from '../library/types/index';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontFamily: 'Poppins-Regular',
      maxWidth: 230,
      borderRadius: '10px'
    },
    media: {
      height: 250
    }
  })
);

type PSSCard = {
  pss: PSS;
  user?: User;
};

const PSSCard: React.FC<PSSCard> = ({ pss, user }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://picsum.photos/200/300"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default PSSCard;
