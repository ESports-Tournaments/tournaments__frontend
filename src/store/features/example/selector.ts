import type { RootState } from '~/store';

const selectModule = (state: RootState) => state.example;

export const selectCounter = (state: RootState) => selectModule(state).count;
