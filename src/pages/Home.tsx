import { FC } from 'react';

import Button from '~/ui-kit/Button';

const HomePage: FC = () => {
  return (
    <div>
      <div>HomePage</div>
      <Button name="Регистрация" onClick={() => console.log(1)} />
    </div>
  );
};

export default HomePage;
