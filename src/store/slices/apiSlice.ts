import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CharacterItem } from 'data/types';

interface ISlice {
  docs: CharacterItem[];
  limit: number;
  offset: number;
  page: number;
  pages: number;
  total: number;
}
const uniqueToken = 'u828DLVp0wqOia5kQTP8';

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://the-one-api.dev/v2/character?limit=30',
    headers: {
      Authorization: `Bearer ${uniqueToken}`,
      Accept: 'application/json',
    },
  }),
  endpoints: (builder) => ({
    getCard: builder.query<ISlice, string>({
      query: (search) => `&name=${search}`,
    }),
  }),
});

export const { useGetCardQuery } = apiSlice;
