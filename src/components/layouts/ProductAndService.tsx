import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import {Card, CardHeader,CardActionArea,CardActions,CardContent,CardMedia,Button,Typography} from '@material-ui/core';
import { TitleRounded } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

 const ProductAndService=(props:any)=>{
  const {title,description,starting_price,ending_price } = props.content;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardHeader  title={title} />
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title={title}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
          <Typography  color="textSecondary" >
           {'$'}{starting_price}{'-'}{ending_price}
          </Typography>
           

        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          See Packages
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductAndService;

