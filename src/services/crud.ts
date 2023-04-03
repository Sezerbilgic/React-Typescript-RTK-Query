import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Note } from "../types/types";

export const noteApi = createApi({
  reducerPath: "noteApi",
  refetchOnReconnect: true,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6422c231001cb9fc202f0794.mockapi.io/api/v1/'
  }),
  tagTypes: ["Note"],
  endpoints: builder => ({
    getNotes: builder.query<Note[], void>({
      query: () => "Note",
      providesTags: (result) => {

        return result ? [
          ...result.map(({ id }) => ({ type: "Note", id } as const)),
          { type: "Note", id: "List" }
        ]
          : [{ type: "Note", id: "List" }]
      }
    }),
    getNotesById: builder.mutation<Note, string>({
      query: (id) => ({
        url: `Note/${id}`,
        method: "get"
      }),
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
      invalidatesTags: [{ type: "Note", id: "List" }]
    }),
    putNote: builder.mutation({
      query: ({ id, body }) => ({
        url: `Note/${id}`,
        method: "put",
        body
      }),
      invalidatesTags: [{ type: "Note", id: "List" }]
    }),
    deleteNote: builder.mutation({
      query: (id: string) => ({
        url: `Note/${id}`,
        method: "delete",
      }),
      invalidatesTags: [{ type: "Note", id: "List" }]
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