import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const postAPI = createApi({
    reducerPath: "postAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001/api/citys/get"
    }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: ({ limit = 7, start = 0 }) => ({
              url: "/posts",
              params: {
                _limit: limit,
                _start: start,
              },
            }),
          }),
          getPostById: builder.query({
            query: (id) => (`/posts/${id}`),
          }),
    })
})