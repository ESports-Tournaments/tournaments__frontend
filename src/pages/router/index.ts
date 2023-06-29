import type * as React from 'react';

import { HomePage } from '~/pages/Home';
import { Login } from '~/pages/Login';
import { Profile } from '~/pages/Profile';
import { Team } from '~/pages/Team';
import { Tournaments } from '~/pages/Tournaments';

export type IRoute = {
  path: string;
  component: React.ComponentType;
  authorised: boolean;
};

export enum RouteNames {
  LOGIN = '/login',
  PROFILE = '/profile',
  TEAM = '/team',
  TOURNAMENTS = '/tournaments',
  HOME = '/',
}

export const routes: IRoute[] = [
  {
    path: RouteNames.HOME,
    component: HomePage,
    authorised: false,
  },
  {
    path: RouteNames.LOGIN,
    component: Login,
    authorised: false,
  },
  {
    path: RouteNames.PROFILE,
    component: Profile,
    authorised: false,
  },
  {
    path: RouteNames.TEAM,
    component: Team,
    authorised: false,
  },
  {
    path: RouteNames.TOURNAMENTS,
    component: Tournaments,
    authorised: false,
  },
];
