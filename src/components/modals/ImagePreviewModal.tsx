import React, { useState } from 'react';
import { Grid, Modal, Theme, IconButton } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { Cancel } from '@material-ui/icons';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

const styles = (theme: Theme) =>
  createStyles({
    modalContent: {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      position: 'absolute',
      maxWidth: 900,
      textAlign: 'center',
      outline: 'none',
      overflow: 'unset'
    },
    confirmButton: {
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
    heading: {
      fontWeight: 600
    },
    cancelButton: {
      color: theme.palette.grey[500],
      position: 'absolute',
      top: '-.7em',
      left: '-.7em',
      padding: 0,
      zIndex: -1
    },
    modalScrollContainer: {
      overflowY: 'scroll',
      maxHeight: '75vh'
    }
  });

const ImagePreviewModal = ({
  jpgURL,
  classes,
  setOpenModal
}: {
  jpgURL: string;
  classes: CSSProperties;
  setOpenModal: Function;
}) => {
  const [loading, setLoading] = useState(true);

  return (
    <Modal open onBackdropClick={() => setOpenModal(false)}>
      <Grid className={classes.modalContent as string}>
        {!loading && (
          <IconButton
            className={classes.cancelButton as string}
            onClick={() => setOpenModal(false)}
          >
            <Cancel />
          </IconButton>
        )}
        <div className={classes.modalScrollContainer as string}>
          {/* // eslint-disable-next-line jsx-a11y/alt-text */}
          <img
            style={{ width: '100%' }}
            src={jpgURL}
            ref={img => {
              if (!img) return;
              img.onload = () => {
                setLoading(false);
              };
            }}
          />
        </div>
      </Grid>
    </Modal>
  );
};

export default withStyles(styles)(ImagePreviewModal);
