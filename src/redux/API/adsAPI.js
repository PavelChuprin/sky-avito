import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../utils/constants";

export const adsApi = createApi({
  reducerPath: "adsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().token.access_token;
      if (token) headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (build) => ({
    getAds: build.query({
      query: (userId) => (userId ? `/ads?user_id=${userId}` : "/ads"),
    }),

    getAdById: build.query({
      query: (id) => `ads/${id}`,
    }),

    getComments: build.query({
      query: (id) => `ads/${id}/comments`,
    }),

    createAd: build.mutation({
      query: ({ body, token }) => ({
        url: "adstext",
        method: "POST",
        body,
        headers: {
          Authorization: `${token.token_type} ${token.access_token}`,
          "content-type": "application/json",
        },
      }),
    }),

    updateAdImage: build.mutation({
      query: ({ id, body, token }) => ({
        url: `ads/${id}/image`,
        method: "POST",
        body,
        headers: {
          Authorization: `${token.token_type} ${token.access_token}`,
        },
      }),
    }),

    deleteAd: build.mutation({
      query: ({ id, token }) => ({
        url: `ads/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `${token.token_type} ${token.access_token}`,
          "content-type": "application/json",
        },
      }),
    }),

    deleteAdImage: build.mutation({
      query: ({ id, imgUrl, token }) => ({
        url: `ads/${id}/image?file_url=${imgUrl}`,
        method: "DELETE",
        headers: {
          Authorization: `${token.token_type} ${token.access_token}`,
        },
      }),
    }),

    changeAdDetails: build.mutation({
      query: ({ id, body, token }) => ({
        url: `ads/${id}`,
        method: "PATCH",
        headers: {
          Authorization: `${token.token_type} ${token.access_token}`,
          "content-type": "application/json",
        },
        body,
      }),
    }),

    createComment: build.mutation({
      query: ({ adId, body, token }) => ({
        url: `ads/${adId}/comments`,
        method: "POST",
        headers: {
          Authorization: `${token.token_type} ${token.access_token}`,
          "content-type": "application/json",
        },
        body,
      }),
    }),
  }),
});

export const {
  useGetAdsQuery,
  useGetAdByIdQuery,
  useGetCommentsQuery,
  useCreateAdMutation,
  useUpdateAdImageMutation,
  useDeleteAdMutation,
  useDeleteAdImageMutation,
  useChangeAdDetailsMutation,
  useCreateCommentMutation,
} = adsApi;
