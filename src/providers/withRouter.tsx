import { BrowserRouter } from 'react-router-dom';

export const withRouter = (Component: React.ComponentType) => {
  const displayName = Component.displayName || Component.name || 'Component';

  function ComponentsWithRouter() {
    return (
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    );
  }

  ComponentsWithRouter.displayName = `withRouter(${displayName})`;
  return ComponentsWithRouter;
};
