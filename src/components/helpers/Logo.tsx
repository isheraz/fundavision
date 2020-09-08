import React from 'react';
import { Box } from '@material-ui/core';

import FundavisionLogo from '../../assets/logos/logo.png';

type LogoProps = {
  margins?: number | string;
  width?: number;
  height?: number;
};

const Logo: React.FC<LogoProps> = ({ margins, width, height }) => {
  const props = {
    width,
    height
  };

  return (
    <Box m={margins || 0}>
      <img src={FundavisionLogo} {...props} alt="logo" />
    </Box>
  );
};
export default Logo;
