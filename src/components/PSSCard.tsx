import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  makeStyles,
  Theme,
  createStyles
} from '@material-ui/core';
import { Grade } from '@material-ui/icons';

import { PSS, User } from '../library/types/index';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontFamily: 'Poppins-Regular',
      maxWidth: 230,
      borderRadius: '10px',
      position: 'relative',
      marginBottom: 10
    },
    title: {
      color: '#eaeaea',
      position: 'absolute',
      top: 10,
      fontSize: 15
    },
    media: {
      height: 250
    },
    cardContent: { paddingBottom: 0 },
    description: {
      fontSize: 12,
      textAlign: 'center',
      marginBottom: 10
    },
    price: {
      textAlign: 'center'
    },
    packagesButton: {
      margin: '0 auto 10px',
      border: `1px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
      borderRadius: 30,
      fontSize: 14,
      padding: '10px',
      textTransform: 'capitalize'
    },
    userImage: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      position: 'absolute',
      top: 15,
      right: 15,
      backgroundSize: 120
    },
    rating: {
      color: '#fbb725',
      position: 'absolute',
      top: -10,
      right: -10,
      fontWeight: 'bold'
    },
    ratingStar: {
      fontSize: 16,
      verticalAlign: 'text-top',
      marginRight: -5
    }
  })
);

type PSSCard = {
  pss: PSS;
};

type RatingProps = {
  user: User;
};

const Rating: React.FC<RatingProps> = ({ user }) => {
  const classes = useStyles();
  return (
    <CardMedia
      className={classes.userImage}
      image={user.image}
      title={user.name}
    >
      <Typography className={classes.rating}>
        <Grade className={classes.ratingStar} /> {user.rating}
      </Typography>
    </CardMedia>
  );
};

const PSSCard: React.FC<PSSCard> = ({ pss }) => {
  const classes = useStyles();
  const user = pss.user && pss.user;
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={pss.image}
        title={pss.title}
      />
      {user && <Rating user={user} />}
      <CardContent className={classes.cardContent}>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className={classes.title}
        >
          {pss.title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.description}
        >
          {pss.description.substr(0, 90)}...
        </Typography>
        <Typography
          variant="h6"
          className={classes.price}
        >{`$${pss.startingPrice} - ${pss.endingPrice}`}</Typography>
      </CardContent>
      <CardActions>
        <Button
          size="medium"
          color="default"
          variant="outlined"
          className={classes.packagesButton}
        >
          Packages
        </Button>
      </CardActions>
    </Card>
  );
};

export default PSSCard;
