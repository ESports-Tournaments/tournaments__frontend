import { configureStore } from '@reduxjs/toolkit';

import { exampleReducer } from './features/example';

export const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
  devTools: __IS_DEV__,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
