import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/Counter/counterSlice.js';

export const store = configureStore({
  reducer:{
    counter:counterReducer
  }
});

export default store