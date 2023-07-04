import { forwardRef } from 'react';

import style from './Button.module.scss';

type Props = {
  onClick: () => void;
  disabled?: boolean;
  name: string;
};

const Button = forwardRef<HTMLButtonElement, Props>(({ name, ...props }, ref) => {
  return (
    <button {...props} className={style.button} ref={ref}>
      {name}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
