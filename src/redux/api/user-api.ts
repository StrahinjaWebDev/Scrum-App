import { getBaseUrl } from "@/lib/getBaseUrl";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = getBaseUrl();

export const userDataApi = createApi({
  reducerPath: "userDataApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getUserData: builder.query({
      query: (userId: string) => `${baseUrl}/api/getUser?id=${userId}`,
    }),
  }),
});

export const { useGetUserDataQuery } = userDataApi;
