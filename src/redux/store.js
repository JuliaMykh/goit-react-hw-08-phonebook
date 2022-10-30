import { configureStore } from "@reduxjs/toolkit";

import { filterSlice } from './contacts/filterSlice';
import { contactApi } from './contacts/contactsSliceApi';

export const store = configureStore({
    reducer: {
        filter: filterSlice.reducer,
      [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(contactApi.middleware),
    [...getDefaultMiddleware(), contactApi.middleware,],
});









