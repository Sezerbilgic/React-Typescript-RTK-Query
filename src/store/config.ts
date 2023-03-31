import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { noteApi } from "../services/crud";


const store = configureStore({
  reducer: {
    [noteApi.reducerPath]: noteApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      noteApi.middleware
    ]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export default store;