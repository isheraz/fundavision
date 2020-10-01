import React from 'react';
import { SearchRounded } from '@material-ui/icons';
import {
  Theme,
  createStyles,
  withStyles,
  Input,
  Paper
} from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      marginTop: '2%',
      fontFamily: 'Poppins-Regular'
    },
    searchBar: {
      border: '1px solid',
      borderRadius: '25px',
      padding: `${theme.spacing(0.7)}px ${theme.spacing(1)}px`,
      fontSize: 12,
      minWidth: theme.spacing(30),
      '&:before': {
        display: 'none'
      }
    }
  });

type FReasonProps = {
  classes: any;
  image: string;
  color: string;
  title: string;
  description: string;
};

const Reason: React.FC<FReasonProps> = ({
  classes,
  image,
  color,
  title,
  description
}) => {
  return <Paper></Paper>;
};

export default withStyles(styles)(Reason);
