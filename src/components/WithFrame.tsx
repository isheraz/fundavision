import React from 'react';
import { Route } from 'react-router';
import Frame from '../components/layouts/Frame';

const WithFrame = (props: any) => {
  const { exact, path, component, hideFrame, noFramePadding } = props;

  const WithFrame = (Component: any) => (props: any) => {
    return (
      <Frame noFramePadding={noFramePadding} {...props}>
        <Component {...props} />
      </Frame>
    );
  };

  const ExtendedComponent = hideFrame ? component : WithFrame(component);

  return (
    <Route exact={exact} path={path} render={() => <ExtendedComponent />} />
  );
};

export default WithFrame;
