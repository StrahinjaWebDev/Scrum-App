import { getBaseUrl } from "@/lib/getBaseUrl";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = getBaseUrl();

export const boardsApi = createApi({
  reducerPath: "boardsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getBoards: builder.query({
      query: (workspaceId: string) =>
        `${baseUrl}/api/getBoards?id=${workspaceId}`,
    }),
  }),
});

export const { useGetBoardsQuery } = boardsApi;
