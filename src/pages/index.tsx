import { Route, Routes } from 'react-router-dom';

import HomePage from './Home';

export default function Routing() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
    </Routes>
  );
}
