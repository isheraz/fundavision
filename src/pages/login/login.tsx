import React, { useState, useEffect } from 'react';
import { CircularProgress, Container, FormControl, Input } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/core/styles';
import FreeformEModal from '../../components/modals/FreeformEModal';
import FButton from '../../components/FButton';

const styles = () =>
  createStyles({
    loginForm: {

    },
    inputField: {
      borderRadius: '10px',
      width: '100%',
      background: '#EFEFEF',
      outline: 0,
      border: 0,
      padding: '5px 7px',
      fontSize: 14
    }
  });

type LoginModalProps = {
  classes: any;
  setOpen: Function;
};

const LoginModal = ({
  classes,
  setOpen
}: LoginModalProps) => {
  const [loading, setLoading] = useState(true);
  const buttonText = 'Login';

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, []);

  return (
    <FreeformEModal
      classes={{
        heading: classes.heading,
        modalContent: classes.modalContent,
        bodyPartition: classes.bodyPartition
      }}
      setOpen={setOpen}
      header="SIGN UP"
      body={'Sign up for a new account'}
    >
      <Container maxWidth="sm">
      <form className={classes.loginForm} noValidate autoComplete="off">
          <Input id="emailAddress" placeholder="Email/Username" className={classes.inputField} />
        <FButton
          id={''}
          className={classes.contactSupportButton}
          // onClick={handleClick}
          endIcon={
            loading ? (
              <CircularProgress className={classes.progress} size={20} />
            ) : (
              ''
            )
          }
        >
          {buttonText}
        </FButton>
      </form>
      </Container>
    </FreeformEModal>
  );
};

export default withStyles(styles)(LoginModal);
