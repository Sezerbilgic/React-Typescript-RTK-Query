import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";


export const rootApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://6422c231001cb9fc202f0794.mockapi.io/api/v1/'}),
  endpoints: () => ({})
});