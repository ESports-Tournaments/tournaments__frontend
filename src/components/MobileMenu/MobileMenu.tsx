import type { FC } from 'react';

import style from './MobileMenu.module.scss';

type Props = {
  onClose: () => void;
};

export const MobileMenu: FC<Props> = ({ onClose }) => {
  return (
    <div className={style.root}>
      {/* Зачем role="presentation"  */}
      {/* https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/interactive-supports-focus.md#case-this-element-is-not-a-button-link-menuitem-etc-it-is-catching-bubbled-events-from-elements-that-it-contains  */}
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
