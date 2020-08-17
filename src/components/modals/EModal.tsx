import React, { SyntheticEvent } from 'react';
import { Grid, Typography, Modal, Theme, IconButton } from '@material-ui/core';
import { Cancel } from '@material-ui/icons';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
// import EButton from '../EButton';

const styles = (theme: Theme) =>
  createStyles({
    modalContent: {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      position: 'absolute',
      maxWidth: 900,
      backgroundColor: theme.palette.background.paper,
      borderRadius: theme.spacing(1),
      padding: theme.spacing(3, 8, 3),
      textAlign: 'center',
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
    progress: {
      color: 'white'
    },
    heading: {
      fontWeight: 600
    },
    closeIcon: {
      position: 'absolute',
      top: theme.spacing(1),
      left: theme.spacing(1),
      color: theme.palette.grey[600]
    }
  });

const EModal = ({
  classes,
  setOpen,
  header,
  body,
  onConfirm,
  buttonText,
  id
}: {
  classes: CSSProperties;
  setOpen: Function;
  header: string;
  body: string;
  onConfirm: Function;
  buttonText: string;
  id?: string;
}) => {
  return (
    <Modal
      id={id}
      onBackdropClick={() => setOpen ? setOpen(false) : undefined }
      open
    >
      <Grid className={classes.modalContent as string}>
        <Grid className={classes.partition as string}>
          {setOpen && (
            <IconButton
              size="small"
              className={classes.closeIcon as string}
              onClick={() => setOpen(false)}
            >
              <Cancel />
            </IconButton>
          )}
          <Typography variant="subtitle2" className={classes.heading as string}>
            {header}
          </Typography>
        </Grid>
        <Grid className={classes.partition as string}>
          <Typography variant="subtitle2">{body}</Typography>
        </Grid>
        <Grid
          container
          className={classes.partition as string}
          alignItems="center"
        >
          <Grid item xs />
          {/* <EButton
            {...(id ? { id: `confirm-${id}` } : {})}
            className={classes.cancelButton as string}
            onClick={() => onConfirm()}
          >
            {buttonText}
          </EButton> */}
          <Grid item xs />
        </Grid>
      </Grid>
    </Modal>
  );
};

export default withStyles(styles)(EModal);
