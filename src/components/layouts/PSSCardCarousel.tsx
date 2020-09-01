import React from 'react';
import { Theme, createStyles, withStyles } from '@material-ui/core/styles';
import Slider from 'react-slick';
import { PSSCUser } from '../PSSCard/PSSCUser';
import PSSCard from './PSSCardCarousel';
import { PRODUCTS_INFO } from '../PSSCard/ProductAndServiceData';
import 'slick-carousel/slick/slick.css';
 import 'slick-carousel/slick/slick-theme.css';
import './custom.css';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: 'fit-content'
    }
  });

type PSSCardCarousel = {
  classes: any;
};

const PSSCardCarousel = ({
  classes
}: PSSCardCarousel) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll:3
  };

  return (
    <Slider {...settings}>
      {
      PRODUCTS_INFO.map((item, i) => {
        return <PSSCard {...item} {...PSSCUser} key={i} />;
      })
      }
    </Slider>
  );
};
export default withStyles(styles)(PSSCardCarousel);
