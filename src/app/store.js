import { configureStore } from '@reduxjs/toolkit';
import tempReducer from '../features/temp/TempSlice';

export const store = configureStore({
  reducer: {
    temp: tempReducer,
  },
});
