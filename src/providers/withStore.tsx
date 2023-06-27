import { Provider } from 'react-redux';

import { store } from '~/store';

export const withStore = (Component: React.ComponentType) => {
  const displayName = Component.displayName || Component.name || 'Component';

  function ComponentsWithRouter() {
    return (
      <Provider store={store}>
        <Component />
      </Provider>
    );
  }

  ComponentsWithRouter.displayName = `withStore(${displayName})`;
  return ComponentsWithRouter;
};
