import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        '1f5fea8957msh274410c82a29522p148ab1jsn2b7b0be921e1'
      );
      return headers;
    },
  }),
  // endpoints: (builder) => ({
  //   getTopCharts: builder.query({
  //     query: () => "/charts/track",
  //   }),
  // }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => 'charts/track' }),
   
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
