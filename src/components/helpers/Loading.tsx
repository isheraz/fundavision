import React, { useEffect } from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { Grid, CircularProgress, Typography, Theme } from '@material-ui/core';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import * as Sentry from '@sentry/browser';
// for checking
import ErrorActions from '../../redux/errors';
// import { ENV, PROD, DEMO } from '../constants';

const mapDispatchToProps = (dispatch: any) => ({
  errorActions: bindActionCreators(ErrorActions, dispatch)
});

const styles = (theme: Theme) =>
  createStyles({
    loadingContainer: {
      width: '100%',
      height: '80vh'
    },
    message: {
      marginTop: theme.spacing(3)
    }
  });

type LoadingStateProps = {
  classes: Record<string, string>;
  message?: string;
  timeout?: number;
  errorActions: any;
};

const LoadingState: React.FC<LoadingStateProps> = ({
  classes,
  message,
  timeout = 30,
  errorActions
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const ERROR_TEXT = 'Operation timed out';

      errorActions.setError(ERROR_TEXT);

      console.error(ERROR_TEXT);
    }, timeout * 1000);

    return () => clearTimeout(timer);
  });

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="column"
      xs={12}
      className={classes.loadingContainer}
      item
    >
      <CircularProgress />
      {message && (
        <Typography className={classes.message}>{message}</Typography>
      )}
    </Grid>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(LoadingState));
