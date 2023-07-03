import { createBrowserRouter } from 'react-router-dom';

import { HomePage } from '~/pages/Home';
import { Login } from '~/pages/Login';
import { NotFoundPage } from '~/pages/NotFoundPage';
import { Profile } from '~/pages/Profile';
import { Team } from '~/pages/Team';
import { Tournaments } from '~/pages/Tournaments';

export enum RouteNames {
  LOGIN = '/login',
  PROFILE = '/profile',
  TEAM = '/team',
  TOURNAMENTS = '/tournaments',
  HOME = '/',
  NOTFOUNDPAGE = '*',
}

export const router = createBrowserRouter([
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
    element: <HomePage />,
  },
  {
    path: RouteNames.NOTFOUNDPAGE,
    element: <NotFoundPage />,
  },
]);
