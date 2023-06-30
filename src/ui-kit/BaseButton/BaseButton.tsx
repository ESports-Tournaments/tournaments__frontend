import type { FC, ReactNode } from 'react';

import styles from './BaseButton.module.scss';

type ButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  children: ReactNode;
};

export const BaseButton: FC<ButtonProps> = ({ onClick, disabled, children }) => (
  <button onClick={onClick} disabled={disabled} className={styles.baseButton}>
    {children}
  </button>
);
