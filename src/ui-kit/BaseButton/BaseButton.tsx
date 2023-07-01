import { forwardRef } from 'react';

import styles from './BaseButton.module.scss';

type Props = {
  onClick: () => void;
  disabled?: boolean;
  name: string;
};
export type Ref = HTMLButtonElement;

const BaseButton = forwardRef<Ref, Props>((props, ref) => {
  return <button {...props} className={styles.baseButton} ref={ref} />;
});

export default BaseButton;
