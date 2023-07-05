import type { FC } from 'react';

import style from './MobileMenu.module.scss';

type Props = {
  onClose: () => void;
};

export const MobileMenu: FC<Props> = ({ onClose }) => {
  return (
    <div className={style.root}>
      <div className={style.overlay} onClick={onClose} role="presentation" />

      <div className={style.container}>
        <div className={style.content}>
          <p>fqefqefqefqefqe</p>
          <p>fqefqefqefqefqe</p>
          <p>fqefqefqefqefqe</p>
          <p>fqefqefqefqefqe</p>
          <p>fqefqefqefqefqe</p>
          <p>fqefqefqefqefqe</p>
          <p>fqefqefqefqefqe</p>
          <p>fqefqefqefqefqe</p>
          <p>fqefqefqefqefqe</p>
          <p>fqefqefqefqefqe</p>
          <p>fqefqefqefqefqe</p>
          <p>fqefqefqefqefqe</p>
          <p>fqefqefqefqefqe</p>
          <p>fqefqefqefqefqe</p>
          <p>fqefqefqefqefqe</p>
          <p>fqefqefqefqefqe</p>
        </div>
      </div>
    </div>
  );
};
