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
      <CardMedia
        className={classes.media}
        image="https://picsum.photos/200/300"
        title="Contemplative Reptile"
      />
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
