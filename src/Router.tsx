import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from '~/pages/Home';
import Login from '~/pages/Login';
import NotFoundPage from '~/pages/NotFoundPage';
import Profile from '~/pages/Profile';
import Team from '~/pages/Team';
import Tournaments from '~/pages/Tournaments';

enum RouteNames {
  LOGIN = '/login',
  PROFILE = '/profile',
  TEAM = '/team',
  TOURNAMENTS = '/tournaments',
  HOME = '/',
  NOTFOUNDPAGE = '*',
}

const router = createBrowserRouter([
  {
    path: RouteNames.LOGIN,
    element: <Login />,
  },
  {
    path: RouteNames.PROFILE,
    element: <Profile />,
  },
  {
    path: RouteNames.TEAM,
    element: <Team />,
  },
  {
    path: RouteNames.TOURNAMENTS,
    element: <Tournaments />,
  },
  {
    path: RouteNames.HOME,
    element: <Home />,
  },
  {
    path: RouteNames.NOTFOUNDPAGE,
    element: <NotFoundPage />,
  },
]);

const Router: FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;
