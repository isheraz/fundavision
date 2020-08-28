import React from 'react';

import ProductAndService from './ProductAndService';
import { PRODUCTS_INFO } from '../MockCardData/ProductAndServiceData';
import { USER_PRODUCTS_INFO } from '../MockCardData/UserProductAndService';
import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-material-ui-carousel'
import Slider from "react-slick";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 'fit-content',
     
    },

   
  }),
);


export default function ProductAndServiceCarousel() 
{
    const classes = useStyles();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };


    return (


<Slider {...settings}>
    {

 PRODUCTS_INFO.map((item, i)=>{

    return <ProductAndService content={item}  key={i} />
 
   
})

  }

</Slider>     


    );


}