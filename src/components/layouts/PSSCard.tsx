import React from 'react';
import { createStyles } from '@material-ui/core/styles';
import './custom.css';
import image from '../../assets/cards/laptop.jpg';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@material-ui/core';

const useStyles = createStyles({
  root: {
    maxWidth: 223,
    marginLeft: 60,
    marginTop: 20
  },
  media: {
    height: 215,
  },

  button: {
    borderRadius: 26,
    marginLeft: 31
  },

  price:{
    color:'black'
  },

  title: {
    fontSize: 14,
  },


});

type PSSCard = {
  classes: any;
  user: object;
  title: string;
  description: string;
  starting_price: number;
  ending_price: number;
}

const PSSCard = ({classes, user, title, description, starting_price, ending_price }: PSSCard) => {
  var user_cards:any;

  return (
     //container position relative 
    <Card variant="outlined" className={classes.root}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
        <Typography className={classes.price} align='center'>
          {'$'}
          {starting_price}
          {'-'}
          {ending_price}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button
        className={classes.button}
        size="small"
        variant="outlined"
        color="primary"
      >
        user Packages
      </Button>
    </CardActions>
    { user && (
      <>Text For user Etc</>
    )}
  </Card>
// container element with position absolute
  );
};

export default PSSCard;
