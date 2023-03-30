import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Query } from "../types/types";

export const queryApi = createApi({
  reducerPath: 'queryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6422c231001cb9fc202f0794.mockapi.io/api/v1/'
  }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getData: builder.query<Query[], string>({
      query: (name) => `${name}`,
      transformResponse: (response: Query[]) => response
    }),
  }),
});


export const { useGetDataQuery } = queryApi;