import { configureStore } from '@reduxjs/toolkit';

import fetchReducer from './fetchSlice';
import filterReducer from './filterSlice';

const store = configureStore({
  reducer: {
    fetch: fetchReducer,
    filter: filterReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
