import { FC } from 'react';

import BaseButton from '~/ui-kit/BaseButton';

const HomePage: FC = () => {
  return (
    <div>
      <div>HomePage</div>
      <BaseButton name="Регистрация" onClick={() => console.log(1)} />
    </div>
  );
};

export default HomePage;
