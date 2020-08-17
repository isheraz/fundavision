import React from 'react';
import { Typography } from '@material-ui/core';


type HomeProps = {
  title: string;
};

const Home = ({title}: HomeProps) => {
  const DEBUG = "src/pages/home.tsx";
  console.log(DEBUG, 'HOME PAGE', title);
  return (<><Typography>Home Page</Typography></>);
};

export default Home;