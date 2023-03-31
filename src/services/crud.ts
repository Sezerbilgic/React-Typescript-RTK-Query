import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Note } from "../types/types";

export const noteApi = createApi({
  reducerPath: "noteApi",
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6422c231001cb9fc202f0794.mockapi.io/api/v1/'
  }),
  tagTypes: ["Note"],
  endpoints: builder => ({
    getNotes: builder.query<Note[], void>({
      query: () => "Note",
      providesTags: ["Note"]
    }),
    getNotesById: builder.mutation<Note, string>({
      query: (id) => ({
        url: `Note/${id}`,
        method: "get"
      })
    }),
    postNote: builder.mutation({
      query: (payload) => ({
        url: "/Note",
        method: "post",
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ["Note"]
    }),
    putNote: builder.mutation({
      query: ({ id, body }) => ({
        url: `Note/${id}`,
        method: "put",
        body
      }),
      invalidatesTags: ["Note"]
    }),
    deleteNote: builder.mutation({
      query: (id: string) => ({
        url: `Note/${id}`,
        method: "delete",
      }),
      invalidatesTags: ["Note"]
    })
  })
});

export const {
  useGetNotesQuery,
  useGetNotesByIdMutation,
  usePostNoteMutation,
  usePutNoteMutation,
  useDeleteNoteMutation
} = noteApi;