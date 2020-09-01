import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import HomeMenu from '../../components/layouts/Menuitems';
import ProductAndServiceCarousel from '../../components/layouts/PSSCardCarousel';
import PSSCardCarousel from '../../components/layouts/PSSCardCarousel';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: '2%',
      fontFamily: 'Poppins-Regular',
      '&:hover': {
        color: '#0082D8',
        backgroundColor: 'transparent',
        fontFamily: 'Poppins-Regular'
      }
    }
  })
);

type HomeProps = {
  title: string;
};

const Home = ({ title }: HomeProps) => {
  const [hover, sethover] = useState(false);
  const classes = useStyles();

  return (
    <>
      <HomeMenu />
      <Typography
        align="center"
        className={classes.root}
        onMouseEnter={() => sethover(true)}
        onMouseLeave={() => sethover(false)}
      >
        {' '}
        {hover ? 'Home & Services....' : 'Home'}
      </Typography>
      <PSSCardCarousel />
    </>
  );
};

export default Home;
