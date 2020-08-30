import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import HomeMenu from '../../components/layouts/Menuitems';
import ProductAndServiceCarousel from '../../components/layouts/ProductAndServiceCarousel';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: '2%',
      fontFamily: 'Poppins-Regular'
    }
  })
);
const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Typography align="center" className={classes.root}>
        Products &amp; Services
      </Typography>
      <ProductAndServiceCarousel />
    </>
  );
};

export default Home;
