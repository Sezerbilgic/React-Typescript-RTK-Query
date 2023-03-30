import { createApi } from "@reduxjs/toolkit/dist/query";
import type { BaseQueryFn } from "@reduxjs/toolkit/dist/query";
import axios from "axios";
import type { AxiosRequestConfig, AxiosError } from "axios";

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' }
  ): BaseQueryFn<
    {
      url: string
      method: AxiosRequestConfig['method']
      data?: AxiosRequestConfig['data']
      params?: AxiosRequestConfig['params']
    },
    unknown,
    unknown
  > =>
    async ({ url, method, data, params }) => {
      try {
        const result = await axios({ url: baseUrl + url, method, data, params })
        return { data: result.data }
      } catch (axiosError) {
        let err = axiosError as AxiosError
        return {
          error: {
            status: err.response?.status,
            data: err.response?.data || err.message,
          },
        }
      }
    }

export const baseQueryApi = createApi({
  reducerPath: "exampleBaseQuery",
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://6422c231001cb9fc202f0794.mockapi.io/api/v1/',
  }),
  endpoints(build) {
    return {
      query: build.query({ query: ({ url, method }: { url: string, method: string }) => ({ url, method }) }),
      mutation: build.mutation({
        query: () => ({ url: "QueryV2", method: "get" })
      })
    }
  }
});


