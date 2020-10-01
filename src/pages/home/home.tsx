import React, { useEffect } from 'react';
import { Typography, Box, Container, Grid } from '@material-ui/core';
import {
  makeStyles,
  Theme,
  createStyles,
  useTheme
} from '@material-ui/core/styles';
import PSSCarousel from '../../components/layouts/PSSCarousel';
import Reason from '../../components/Reason';
import { PSS } from '../../library/types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontFamily: 'Poppins-Regular'
    },
    title: {
      fontSize: 22,
      fontWeight: 600,
      fontFamily: 'inherit'
    },
    bgWhite: {},
    explore: {
      fontSize: 16,
      color: '#0082D8'
    },
    paper: {
      paddingTop: 10
    }
  })
);

type HomeProps = {
  landingActions: any;
  pssObjects: Array<PSS>;
};

const Home: React.FC<HomeProps> = ({ landingActions, pssObjects }) => {
  const classes = useStyles();
  const theme = useTheme();

  useEffect(() => {
    landingActions.init();
  });

  return (
    <Container className={classes.root}>
      <Box mb={10} className={classes.bgWhite}>
        <Typography align="center" variant="h3" className={classes.title}>
          Products
        </Typography>
        <PSSCarousel pssObjects={pssObjects as Array<PSS>} />
        <Typography align="right" variant="h3" className={classes.explore}>
          Explore More
        </Typography>
      </Box>
      <Box mb={10}>
        <Typography align="center" variant="h3" className={classes.title}>
          Services
        </Typography>
        <PSSCarousel pssObjects={pssObjects as Array<PSS>} />
      </Box>
      <Box mb={10}>
        <Typography align="center" variant="h3" className={classes.title}>
          Join us to
        </Typography>
        <Grid container spacing={2}>
          <Grid container justify="center" spacing={2}>
            <Grid key={'seller'} item>
              <Reason
                image={''}
                color={theme.palette.yellow.primary}
                title=""
                description=""
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
