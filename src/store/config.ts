import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { queryApi } from "../services/apiQuery";
import { crudApi } from "../services/crud";
import { baseQueryApi } from "../services/exampleBaseQuery";

const store = configureStore({
  reducer: {
    [queryApi.reducerPath]: queryApi.reducer,
    [baseQueryApi.reducerPath]: baseQueryApi.reducer,
    [crudApi.reducerPath]: crudApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      queryApi.middleware,
      baseQueryApi.middleware,
      crudApi.middleware
    ]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export default store;