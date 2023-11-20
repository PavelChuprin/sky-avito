import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../utils/constants";

export const adsApi = createApi({
  reducerPath: "adsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
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
