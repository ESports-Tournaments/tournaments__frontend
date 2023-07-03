import { FC } from 'react';

import Router from '~/Router';

import { withProviders } from './providers/withProviders';

const App: FC = () => {
  return (
    <>
      <Router />
    </>
  );
};

export default withProviders(App);
