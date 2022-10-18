import { apiSlice } from "../../app/api/apiSlice";

export const conversationsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getConversations: builder.query({
      query: () => "/conversation/userConversations",
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetConversationsQuery } = conversationsApiSlice;
