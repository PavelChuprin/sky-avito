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
      query: (userId) => (userId ? `ads?user_id=${userId}` : "ads"),
    }),

    getAdById: build.query({
      query: (id) => `ads/${id}`,
    }),

    getComments: build.query({
      query: (id) => `ads/${id}/comments`,
    }),
  }),
});

export const { useGetAdsQuery, useGetAdByIdQuery, useGetCommentsQuery } =
  adsApi;
