import React from 'react';
import { Typography, Grid } from '@material-ui/core';

import { connect } from 'react-redux';

type BoundaryProps = {
  error: string;
};

type BoundaryState = {
  hasError: boolean;
};

class SuspenseErrorBoundary extends React.Component<
  BoundaryProps,
  BoundaryState
> {
  constructor(props: BoundaryProps) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true
    };
  }

  render() {
    if (this.props.error || this.state.hasError) {
      return (
        <Grid
          container
          style={{
            width: '100vw',
            height: '100vh',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Grid>
            <Typography variant="h5">
              Whoops! We've encountered an error
            </Typography>
            <Typography>
              Please refresh the page. If that doesn't help, email
              support@fundavison.com and we will assist you!
            </Typography>
          </Grid>
        </Grid>
      );
    }

    return this.props.children;
  }
}

const mapStateToProps = (state: any) => ({
  error: state.errors.error
});

export default connect(mapStateToProps)(SuspenseErrorBoundary);
