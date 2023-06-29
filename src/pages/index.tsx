import { Route, Routes } from 'react-router-dom';

import { routes } from '~/pages/router';

export default function Routing() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} Component={route.component} />
      ))}
    </Routes>
  );
}
