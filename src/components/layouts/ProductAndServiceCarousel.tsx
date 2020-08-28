import React, { CSSProperties } from 'react';

import ProductAndService from './ProductAndService';
import { PRODUCTS_INFO } from '../MockCardData/ProductAndServiceData';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './custom.css'
import Slider from "react-slick";

import { Theme, createStyles, withStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: 'fit-content'
    }
  });

type ProductAndServiceCarouselProps = {
  classes: any;
}

const ProductAndServiceCarousel = ({classes}: ProductAndServiceCarouselProps) =>
{    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };

      console.log(classes);
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
export default withStyles(styles)(ProductAndServiceCarousel);