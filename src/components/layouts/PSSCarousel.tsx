import React from 'react';
import {
  Container,
  Typography,
  makeStyles,
  Theme,
  createStyles
} from '@material-ui/core';
import Slider from 'react-slick';

import PSSCard from '../PSSCard';
import { PSS } from '../../library/types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontFamily: 'Poppins-Regular',
      paddingTop: 20
    },
    notFound: {
      textAlign: 'center',
      paddingTop: 10
    }
  })
);

type PSSCarouselProps = {
  pssObjects: Array<PSS>;
};

const PSSCarousel: React.FC<PSSCarouselProps> = ({ pssObjects }) => {
  const classes = useStyles();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };

  return (
    <Container component="section" className={classes.root}>
      {pssObjects.length === 0 && (
        <Typography className={classes.notFound} variant="h5">
          No Products or Services Found
        </Typography>
      )}
      {pssObjects.length > 0 && (
        <Slider {...settings}>
          {pssObjects.map((pss: PSS, index: number) => (
            <PSSCard pss={pss} key={`pss-${index}`} />
          ))}
        </Slider>
      )}
    </Container>
  );
};

export default PSSCarousel;
