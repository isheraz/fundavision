import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './custom.css';
import { 
  Card, 
  CardHeader, 
  CardActionArea, 
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    maxWidth: 222,
    marginLeft:70,
    marginTop:41,
    
   
  },
  media: {
    height: 122,
  },

  button:{
    borderRadius: 26,
    marginLeft: 31,
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
        <Button className={classes.button} size="small" variant="outlined" color="primary" >
          See Packages
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductAndService;

