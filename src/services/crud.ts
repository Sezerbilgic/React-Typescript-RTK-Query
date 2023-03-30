import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { stringify } from "querystring";
import { Query } from "../types/types";

export const crudApi = createApi({
  reducerPath: "crudApi",
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6422c231001cb9fc202f0794.mockapi.io/api/v1/'
  }),
  endpoints: (builder) => ({
    get: builder.query({
      query: () => "Query"
    }),
    post: builder.mutation({
      query: (body) => ({
        url: "/Query",
        method: "post",
        body
      })
    }),
    put: builder.mutation({
      query: ({ id, body }) => ({
        url: `Query/${id}`,
        method: "put",
        body
      })
    }),
    deleteData: builder.mutation({
      query: (id) => ({
        url: `Query/${id}`,
        method: "delete",
      })
    })
  })
});

export const {
  useGetQuery,
  usePostMutation,
  usePutMutation,
  useDeleteDataMutation
} = crudApi;