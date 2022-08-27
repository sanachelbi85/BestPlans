import { configureStore } from '@reduxjs/toolkit';
import contactSlice from './slice/contactSlice';
import destinationSlice from './slice/destinationSlice';
import favorisSlice from './slice/favorisSlice';
import UserSlice from './slice/UserSlice';

export const store = configureStore({
  reducer: {
    user: UserSlice,
    destination :destinationSlice,
    favoris:favorisSlice,
    contact:contactSlice,
  },
})