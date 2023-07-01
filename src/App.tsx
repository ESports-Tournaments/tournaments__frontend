import type { FC } from 'react';

import Routing from './pages';
import { withProviders } from './providers/withProviders';

const App: FC = () => {
  return (
    <>
      <Routing />
    </>
  );
};

export default withProviders(App);
