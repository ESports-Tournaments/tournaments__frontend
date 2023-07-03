import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from '~/router';

import { withProviders } from './providers/withProviders';

const App: FC = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default withProviders(App);
