import React, { useEffect } from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import PSSCarousel from '../../components/layouts/PSSCarousel';
import { PSS } from '../../library/types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontFamily: 'Poppins-Regular'
    }
  })
);

type HomeProps = {
  landingActions: any;
  pssObjects: Array<PSS>;
};

const Home: React.FC<HomeProps> = ({ landingActions, pssObjects }) => {
  const classes = useStyles();

  useEffect(() => {
    landingActions.init();
  });

  return (
    <Box>
      <Typography align="center" className={classes.root}>
        Products &amp; Services
      </Typography>
      <PSSCarousel pssObjects={pssObjects as Array<PSS>} />
    </Box>
  );
};

export default Home;
