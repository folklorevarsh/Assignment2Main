// store.js
import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favouriteSlice.js';

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});

export default store;