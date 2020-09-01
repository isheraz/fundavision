import React, { ReactElement } from 'react';
import { Grid, Typography, Modal, Theme } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

const styles = (theme: Theme) =>
  createStyles({
    modalContent: {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      position: 'absolute',
      maxWidth: 900,
      minWidth: 200,
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(3, 8, 3),
      outline: 'none'
    },
    cancelButton: {
      justifyContent: 'center',
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      '&:hover': {
        backgroundColor: `${theme.palette.primary.dark} !important;`
      },
      maxWidth: '50%',
      paddingLeft: 0,
      paddingRight: 0
    },
    headingText: {
      color: theme.palette.grey[700],
      textTransform: 'uppercase'
    },
    partition: {
      padding: theme.spacing(1)
    },
    bodyPartition: {
      padding: theme.spacing(1),
      display: 'flex'
    },
    progress: {
      color: 'white'
    },
    heading: {
      fontWeight: 600,
      fontFamily: `'Poppins', sans-serif`,
      textAlign: 'center'
    },
    body: {
      width: '75%',
      textAlign: 'center',
      fontWeight: 400,
      fontFamily: `'Poppins', sans-serif`
    },
    closeIcon: {
      position: 'absolute',
      top: theme.spacing(1),
      left: theme.spacing(1),
      color: theme.palette.grey[600]
    },
    children: {
      alignItems: 'center'
    }
  });

const FreeformEModal = ({
  classes,
  setOpen,
  header,
  body,
  children,
  id
}: {
  classes: CSSProperties;
  setOpen?: Function;
  header: string;
  body?: any;
  children: ReactElement;
  id?: string;
}) => {
  return (
    <Modal
      id={id}
      onBackdropClick={() => (setOpen ? setOpen(false) : null)}
      open
    >
      <Grid className={classes.modalContent as string}>
        <Grid className={classes.partition as string}>
          <Typography variant="h5" className={classes.heading as string}>
            {header}
          </Typography>
        </Grid>
        {body && (
          <Grid
            className={classes.bodyPartition as string}
            alignItems="center"
            justify="center"
            container
          >
            <Typography className={classes.body as string} variant="body1">
              {body}
            </Typography>
          </Grid>
        )}
        <Grid className={classes.children as string} container>
          <Grid item xs />
          {children}
          <Grid item xs />
        </Grid>
      </Grid>
    </Modal>
  );
};

export default withStyles(styles)(FreeformEModal);
