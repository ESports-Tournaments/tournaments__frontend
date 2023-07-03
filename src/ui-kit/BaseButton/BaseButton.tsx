import { forwardRef } from 'react';

import style from './BaseButton.module.scss';

type Props = {
  onClick: () => void;
  disabled?: boolean;
  name: string;
};

const BaseButton = forwardRef<HTMLButtonElement, Props>(({ name, ...props }, ref) => {
  return (
    <button {...props} className={style.baseButton} ref={ref}>
      {name}
    </button>
  );
});

export default BaseButton;
