import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { AppBar } from '~/components/AppBar';
import { Header } from '~/components/Header';

import style from './RootLayout.module.scss';

export const RootLayout: FC = () => {
  return (
    <>
      <AppBar />
      <Header />

      <div className={style.content}>
        <div className={style.container}>
          <Outlet />
        </div>
      </div>
    </>
  );
};
