import type { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { NotFound } from '~/components/NotFound';
import { RootLayout } from '~/layout/RootLayout';

import { HomePage } from './HomePage';

const Routing: FC = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Routing;
