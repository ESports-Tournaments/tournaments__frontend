import * as React from 'react';

import styles from './BaseButton.module.scss';

type Props = {
  onClick: () => void;
  disabled?: boolean;
  name: string;
};

const BaseButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ name, ...props }, ref) => {
    return (
      <button {...props} className={styles.baseButton} ref={ref}>
        {name}
      </button>
    );
  },
);

export default BaseButton;
